import React from 'react';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Especialistas em Desenvolvimento Digital</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ideias em Realidade
            </span>
            Digital
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Criamos <strong>sites modernos</strong> e <strong>aplicativos mobile</strong> que impulsionam seu negócio para o próximo nível
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">100+ Clientes</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">200+ Projetos</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Zap className="w-5 h-5 text-pink-400" />
              <span className="font-semibold">5 Anos de Experiência</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contato')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Começar Projeto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Ver Portfólio</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;