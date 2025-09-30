import React from 'react';
import { Users, Target, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Cada projeto é desenvolvido pensando nas necessidades específicas do cliente e seus objetivos de negócio.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Sempre buscamos as tecnologias mais recentes e melhores práticas para entregar soluções de ponta.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Não fazemos concessões quando se trata de qualidade. Cada linha de código é cuidadosamente crafted.'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Mensuráveis',
      description: 'Desenvolvemos soluções que geram impacto real e resultados tangíveis para o seu negócio.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projetos Entregues', icon: Award },
    { number: '50+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '5+', label: 'Anos de Experiência', icon: TrendingUp },
    { number: '99%', label: 'Taxa de Satisfação', icon: Heart }
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Sobre Nós</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Quem Somos e
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Nossa Missão
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em soluções digitais que fazem a diferença
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transformando o Digital desde 2019
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-gray-900">TG Apps</strong> nasceu da paixão por criar soluções digitais que realmente importam. 
                Começamos como uma pequena equipe de desenvolvedores e designers, e hoje somos uma empresa consolidada 
                no mercado de desenvolvimento web e mobile.
              </p>
              <p>
                Nossa jornada é marcada pela busca constante da excelência técnica e pela satisfação dos nossos clientes. 
                Acreditamos que a tecnologia deve ser uma ferramenta para simplificar a vida das pessoas e impulsionar negócios.
              </p>
              <p>
                Cada projeto é uma oportunidade de aprender, inovar e superar expectativas. Trabalhamos com metodologias 
                ágeis, sempre mantendo a comunicação transparente e o foco nos resultados.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h4>
              <p className="text-gray-700 italic">
                "Democratizar o acesso à tecnologia de qualidade, criando soluções digitais que conectam pessoas, 
                impulsionam negócios e transformam ideias em realidade."
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe TG Apps trabalhando"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Paixão pelo que fazemos</h5>
                    <p className="text-sm text-gray-600">Cada projeto é desenvolvido com dedicação e carinho</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Números que Falam por Si</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;