import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion',
      category: 'web',
      description: 'Plataforma completa de e-commerce com sistema de pagamento integrado e painel administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'Website',
      status: 'Concluído'
    },
    {
      id: 2,
      title: 'App Delivery Food',
      category: 'mobile',
      description: 'Aplicativo de delivery com geolocalização, pagamento online e sistema de avaliações.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Maps API', 'PayPal'],
      type: 'Mobile App',
      status: 'Concluído'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'web',
      description: 'Painel de controle com visualização de dados em tempo real e relatórios personalizados.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      type: 'Web App',
      status: 'Concluído'
    },
    {
      id: 4,
      title: 'App Fitness Tracker',
      category: 'mobile',
      description: 'Aplicativo de acompanhamento fitness com integração de wearables e planos personalizados.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'HealthKit', 'Firebase', 'ML Kit'],
      type: 'Mobile App',
      status: 'Em desenvolvimento'
    },
    {
      id: 5,
      title: 'Portal Educacional',
      category: 'web',
      description: 'Plataforma de ensino online com videoaulas, exercícios interativos e sistema de certificação.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'AWS', 'WebRTC'],
      type: 'Website',
      status: 'Concluído'
    },
    {
      id: 6,
      title: 'App Banking',
      category: 'mobile',
      description: 'Aplicativo bancário com autenticação biométrica, transferências e investimentos.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Biometrics', 'Encryption', 'APIs'],
      type: 'Mobile App',
      status: 'Em desenvolvimento'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos os Projetos', count: projects.length },
    { id: 'web', label: 'Websites', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Apps Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Filter className="w-4 h-4" />
            <span>Nosso Portfólio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Projetos que
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fazem a Diferença
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é uma oportunidade de criar algo extraordinário. Veja alguns dos nossos trabalhos mais recentes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Concluído' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.category === 'mobile' ? (
                      <Smartphone className="w-3 h-3 text-purple-600" />
                    ) : (
                      <Globe className="w-3 h-3 text-blue-600" />
                    )}
                    <span className="text-xs font-medium text-gray-700">{project.type}</span>
                  </div>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Projeto</span>
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-lg hover:bg-white transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  <span>Ver detalhes</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gostou do que viu?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estes são apenas alguns exemplos do nosso trabalho. Temos muito mais para mostrar e estamos prontos para criar algo incrível para você também.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;