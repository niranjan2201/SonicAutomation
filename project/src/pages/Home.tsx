import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Sun, Zap, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Powering India's Future with
              <span className="text-blue-200 animate-pulse-slow"> Smart Energy Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Leading provider of EV charging infrastructure and renewable energy solutions. 
              Specializing in AC/DC charging stations, solar systems, and smart energy technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center btn-animate hover-lift hover-glow"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 btn-animate hover-lift"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float animate-delay-300">
          <div className="w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animate-delay-600">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sonic Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovation & Professionalism in every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "EV Charging Solutions",
                description: "Complete AC/DC EV charging station setup and maintenance"
              },
              {
                icon: <Sun className="h-8 w-8 text-blue-600" />,
                title: "Solar Panel Systems",
                description: "Professional solar panel installation and integration"
              },
              {
                icon: <Battery className="h-8 w-8 text-blue-600" />,
                title: "Battery Storage",
                description: "Advanced battery storage units for energy management"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Smart Metering",
                description: "IoT-enabled smart metering solutions"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-on-scroll hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;