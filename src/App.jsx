import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, Instagram, Shield, Home, Building, Zap, CheckCircle, Star, Clock, Users, Award, Camera, Thermometer, Lightbulb, Mic, DoorOpen, ArrowRight, Wifi, Smartphone, Monitor } from 'lucide-react'
import './App.css'
import heroImage from './assets/hero-image.jpg'
import automationBg from './assets/automation-bg.jpg'
import securityBg from './assets/security-bg.jpg'
import buildingAutomation from './assets/building-automation.png'
import iaPrimeLogo from './assets/iasemfundo.png'

function App() {
  const handleWhatsAppContact = (formData) => {
    const message = `Olá! Gostaria de solicitar um orçamento:\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nTipo de Projeto: ${formData.projectType}\nMensagem: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/5511947716000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleFloatingWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre os serviços da IA Prime - Automações Inteligentes e Segurança.`
    const whatsappUrl = `https://wa.me/5511947716000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message')
    }
    handleWhatsAppContact(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header/Navigation */}
      <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={iaPrimeLogo} alt="IA Prime Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  IA PRIME
                </h1>
                <p className="text-xs text-cyan-300">AUTOMAÇÕES INTELIGENTES E SEGURANÇA</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Início</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Serviços</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Sobre</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contato</a>
            </nav>
            <a href="tel:+5511947716000">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                <Phone className="w-4 h-4 mr-2" />
                (11) 94771-6000
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-slate-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center text-white space-y-8">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              Tecnologia de Ponta
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforme seu espaço com
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tecnologia e Segurança
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Na IA PRIME, acreditamos que a automação é mais do que tecnologia, é sobre trazer mais conforto, praticidade e segurança para o seu dia a dia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  // Detecta se é mobile (largura menor que 768px)
                  const isMobile = window.innerWidth < 768;
                  
                  if (isMobile) {
                    // No mobile, vai direto para o formulário com melhor posicionamento
                    const formElement = document.querySelector('form');
                    if (formElement) {
                      // Calcula a posição do formulário menos um offset para o header
                      const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - 230; // 230px de espaço do topo (subiu mais 100px)
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  } else {
                    // No desktop, vai para a seção de contato completa
                    document.getElementById('contact').scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }
                }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Soluções Completas em Automação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções inovadoras que conectam você ao que realmente importa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Automação Residencial */}
            <Card className="bg-gray-900/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Automação Residencial</CardTitle>
                <CardDescription className="text-gray-300">
                  Controle inteligente de iluminação, climatização, segurança e acesso. Transforme sua casa em um ambiente conectado e eficiente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Controle por smartphone
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Economia de energia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Segurança integrada
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Automação Empresarial */}
            <Card className="bg-gray-900/80 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Automação Empresarial</CardTitle>
                <CardDescription className="text-gray-300">
                  Soluções corporativas para otimizar processos, reduzir custos e aumentar a produtividade do seu negócio.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Gestão centralizada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Redução de custos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Monitoramento 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sistemas de Segurança */}
            <Card className="bg-gray-900/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Sistemas de Segurança</CardTitle>
                <CardDescription className="text-gray-300">
                  Proteção completa com câmeras de alta definição, alarmes inteligentes e monitoramento remoto.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Câmeras HD/4K
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Acesso remoto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Alertas em tempo real
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
          </div>
        </div>
      </section>

      {/* Seção de Especialidades */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossas Especialidades
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforme seu espaço com tecnologia e segurança. Soluções de alta qualidade a preços competitivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Camera, title: "Câmeras de Segurança", desc: "Sistemas de câmeras de alta definição com monitoramento remoto para sua total segurança." },
              { icon: Thermometer, title: "Controle de Climatização", desc: "Gerencie a temperatura do seu ambiente de forma inteligente, otimizando conforto e economia." },
              { icon: Lightbulb, title: "Iluminação e Cortinas", desc: "Controle sua iluminação e cortinas de forma automatizada para criar o ambiente perfeito." },
              { icon: Mic, title: "Integração com Assistentes Virtuais", desc: "Conecte seus sistemas com Alexa, Google Home e outros assistentes para controle por voz." },
              { icon: DoorOpen, title: "Portões e Fechaduras Inteligentes", desc: "Controle de acesso seguro e conveniente com portões automáticos, fechaduras e interfones inteligentes." }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-4">
              Por que escolher a IA PRIME?
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos especializados e temos equipamentos de última geração. Cuidamos de cada etapa do projeto, desde o planejamento até a instalação e suporte contínuo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Projetos Sob Medida", desc: "Criamos soluções personalizadas que atendem às suas necessidades específicas, seja para sua casa ou empresa." },
              { icon: Zap, title: "Tecnologia de Ponta", desc: "Trabalhamos com os melhores dispositivos do mercado, garantindo alta qualidade e confiabilidade." },
              { icon: Users, title: "Instalação Profissional", desc: "Nossa equipe técnica garante uma instalação segura e eficiente, com configuração completa." },
              { icon: Clock, title: "Suporte Contínuo", desc: "Após a entrega do projeto, continuamos ao seu lado para oferecer suporte técnico e atualizações." }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 group text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-4">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Vamos Conversar sobre seu Projeto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos prontos para transformar seu espaço. Entre em contato e solicite seu orçamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Telefone</div>
                      <a href="tel:+5511947716000" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        (11) 94771-6000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Instagram</div>
                      <a href="https://www.instagram.com/iaprime_automacoes/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        @iaprime_automacoes
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">E-mail</div>
                      <a href="mailto:iaprimeautomacoes@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        iaprimeautomacoes@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href="https://iaprimeautomacoes.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        iaprimeautomacoes.com.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Endereço</div>
                      <a href="https://www.google.com/maps/search/?api=1&query=Travessa+Dona+Paula,+13+-+Higienópolis,+São+Paulo+-+CEP+01239-050" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        Travessa Dona Paula, 13<br />
                        Higienópolis, São Paulo<br />
                        CEP 01239-050
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-gray-300">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 mt-4">Garantia</h4>
                <div className="text-gray-300">12 meses de garantia em instalação e equipamentos</div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <Card className="bg-gray-900/80 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Solicite seu Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tipo de Projeto
                      </label>
                      <select
                        name="projectType"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Selecione o tipo de projeto</option>
                        <option value="Automação Residencial">Automação Residencial</option>
                        <option value="Automação Empresarial">Automação Empresarial</option>
                        <option value="Segurança Integrada">Segurança Integrada</option>
                        <option value="Projeto Completo">Projeto Completo</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                        placeholder="Descreva seu projeto ou dúvidas..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={iaPrimeLogo} alt="IA Prime Logo" className="w-10 h-10" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    IA PRIME
                  </h3>
                  <p className="text-xs text-cyan-300">AUTOMAÇÕES INTELIGENTES E SEGURANÇA</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando ambientes com tecnologia inteligente e segurança de última geração.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/iaprime_automacoes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572312212123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5511947716000?text=Olá! Gostaria de saber mais sobre os serviços da IA Prime - Automações Inteligentes e Segurança." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Travessa+Dona+Paula,+13+-+Higienópolis,+São+Paulo+-+CEP+01239-050" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Automação Residencial</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Automação Empresarial</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Segurança Integrada</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Suporte Técnico</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 94771-6000</li>
                <li>iaprimeautomacoes@gmail.com</li>
                <li>@iaprime_automacoes</li>
                <li>iaprimeautomacoes.com.br</li>
                <li className="pt-2">
                  <div className="text-sm">
                    Travessa Dona Paula, 13<br />
                    Higienópolis, São Paulo<br />
                    CEP 01239-050
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 IA Prime - Automações Inteligentes e Segurança. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <div 
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
        onClick={handleFloatingWhatsApp}
      >
        <div className="relative">
          {/* Botão principal */}
          <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse">
            <svg 
              className="w-8 h-8 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
          
          {/* Animação de pulso */}
          <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>
    </div>
  )
}

export default App

