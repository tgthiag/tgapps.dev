#!/bin/bash

# Script de deploy para tgapps.dev React App
# Gera build e envia para o servidor EC2

# Variáveis
REMOTE_USER="ec2-user"
REMOTE_HOST="ec2-3-144-43-171.us-east-2.compute.amazonaws.com"
REMOTE_DIR="/var/www/tgapps"
KEY_PATH="/c/Users/Kabum/OneDrive/Documents/keypem.pem"

echo "🚀 Iniciando deploy do tgapps.dev..."

# 1. Gerar build
echo "📦 Gerando build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao gerar build!"
    exit 1
fi

# 2. Comprimir build
echo "🗜️  Comprimindo build..."
tar czf dist.tar.gz dist/

# 3. Enviar para servidor
echo "📤 Enviando para servidor..."
scp -i "$KEY_PATH" dist.tar.gz "$REMOTE_USER@$REMOTE_HOST:/tmp/"

if [ $? -ne 0 ]; then
    echo "❌ Erro ao enviar arquivos!"
    exit 1
fi

# 4. Extrair no servidor e aplicar
echo "📂 Extraindo arquivos no servidor..."
ssh -i "$KEY_PATH" "$REMOTE_USER@$REMOTE_HOST" << EOF
    # Backup do arquivo de verificação do Google
    if [ -f $REMOTE_DIR/googlef125b47fc76d05b6.html ]; then
        sudo cp $REMOTE_DIR/googlef125b47fc76d05b6.html /tmp/google-verify-backup.html
    fi

    # Reserva /apps para as rotas SPA; assets estáticos vivem fora desse path
    sudo rm -rf $REMOTE_DIR/apps
    
    sudo tar xzf /tmp/dist.tar.gz -C $REMOTE_DIR --strip-components=1
    
    # Restaurar arquivo de verificação do Google
    if [ -f /tmp/google-verify-backup.html ]; then
        sudo mv /tmp/google-verify-backup.html $REMOTE_DIR/googlef125b47fc76d05b6.html
    fi
    
    sudo chown -R apache:apache $REMOTE_DIR
    sudo rm /tmp/dist.tar.gz
    echo "✅ Deploy concluído no servidor!"
EOF

# 5. Limpar arquivo local
rm dist.tar.gz

echo ""
echo "✅ Deploy concluído com sucesso!"
echo "🌐 Acesse: https://tgapps.dev/"
echo ""
