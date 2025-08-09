import React, { useEffect } from 'react';
import { Users, Award, Target, Heart, Zap, Shield, Clock, Settings } from 'lucide-react';

const About: React.FC = () => {
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
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Sonic Automation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovation & Professionalism in Elctronics , EV  Infrastructure and Renewable Energy Solutions
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded by Mr. Ajay Surve in Nashik, Maharashtra, Sonic Automation is a leading company in  (EV) infrastructure and renewable energy solutions. We specialize in EV charging stations (AC/DC), solar panel systems, battery storage units, and smart metering solutions.
            </p>
            <p className="text-gray-600 mb-4">
              With a skilled team, state-of-the-art technology, and customer-centric service, we empower India's shift toward sustainable mobility. Our commitment to innovation and professionalism has made us a trusted partner for businesses across various industries.
            </p>
            <p className="text-gray-600">
              From comprehensive EV charging infrastructure to advanced renewable energy systems, we continue to drive the transformation towards a sustainable future for India.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 animate-on-scroll animate-delay-300 hover-lift">
            <img
              src="https://images.pexels.com/photos/9875456/pexels-photo-9875456.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Solar panels and renewable energy"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover-scale"
            />
          </div>
        </div>

        

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-on-scroll">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Experienced Team",
                description: "Team of experienced professionals dedicated to excellence"
              },
              {
                icon: <Settings className="h-8 w-8 text-blue-600" />,
                title: "IoT-Enabled Solutions",
                description: "IoT-enabled smart energy and EV solutions for modern needs"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "End-to-End Services",
                description: "Complete services from installation to maintenance"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "24x7 Support",
                description: "Round-the-clock support and service for all our solutions"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-on-scroll">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "Innovation",
                description: "Continuously pushing the boundaries of clean energy technology"
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Professionalism",
                description: "Delivering superior quality and professional service in every project"
              },
              {
                icon: <Heart className="h-8 w-8 text-blue-600" />,
                title: "Sustainability",
                description: "Committed to creating a cleaner, greener future for India"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Customer Focus",
                description: "Building lasting relationships with customer-centric solutions"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-blue-50 rounded-lg p-12 mb-20 animate-on-scroll hover-lift">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600">Leading expertise in sustainable energy solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-12 w-12 text-blue-600" />,
                title: "EV Charging Stations",
                description: "AC/DC charging solutions"
              },
              {
                icon: <Target className="h-12 w-12 text-blue-600" />,
                title: "Solar Panel Systems",
                description: "Complete solar installations"
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Battery Storage Units",
                description: "Advanced energy storage"
              },
              {
                icon: <Settings className="h-12 w-12 text-blue-600" />,
                title: "Smart Metering",
                description: "IoT-enabled monitoring"
              }
            ].map((spec, index) => (
              <div 
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="mx-auto mb-4 hover-scale transition-all duration-300">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;