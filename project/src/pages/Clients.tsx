import React, { useEffect } from 'react';
import { Star, Quote, Building, Users, TrendingUp } from 'lucide-react';

const Clients: React.FC = () => {
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

  const clients = [
    { name: "TDK", category: "Electronics" },
    { name: "GSK", subtitle: "GlaxoSmithKline", category: "Pharmaceuticals" },
    { name: "ERDA", category: "Energy Research" },
    { name: "Jaivic", category: "Agriculture" },
    { name: "Cupid", category: "Healthcare" },
    { name: "Hind Rectifiers Ltd.", category: "Power Electronics" },
    { name: "Montex", category: "Manufacturing" },
    { name: "Reliable Industries", category: "Industrial" },
    { name: "Nilkamal", category: "Consumer Goods" },
    { name: "Bajaj Sons Limited", category: "Automotive" },
    { name: "Mahindra", category: "Conglomerate" }
  ];

  const testimonials = [
    {
      company: "TDK Corporation",
      name: "Rajesh Kumar",
      position: "Facilities Manager",
      content: "Sonic Automation delivered an exceptional solar installation that exceeded our expectations. The system has reduced our energy costs by 45% and demonstrates our commitment to sustainability.",
      rating: 5
    },
    {
      company: "GSK India",
      name: "Priya Sharma",
      position: "Sustainability Director",
      content: "The EV charging infrastructure installed by Sonic Automation has been instrumental in supporting our fleet electrification goals. Their professional approach and quality of work is commendable.",
      rating: 5
    },
    {
      company: "Mahindra Group",
      name: "Amit Patel",
      position: "Energy Manager",
      content: "Working with Sonic Automation on our hybrid energy project was a great experience. They provided comprehensive solutions that perfectly aligned with our operational requirements.",
      rating: 5
    }
  ];

  const clientStats = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      number: "50+",
      label: "Enterprise Clients",
      description: "Fortune 500 and leading companies"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "500+",
      label: "Projects Delivered",
      description: "Across various industries"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      number: "98%",
      label: "Client Retention",
      description: "Long-term partnerships"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across industries for innovative renewable energy solutions
          </p>
        </div>

        {/* Client Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {clientStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-6 rounded-lg shadow-lg animate-on-scroll hover-lift hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse-slow">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">A diverse portfolio of satisfied clients across multiple sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[150px] animate-on-scroll hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                  {client.subtitle && (
                    <p className="text-sm text-gray-600 mt-1">({client.subtitle})</p>
                  )}
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full hover-scale transition-all duration-300">
                  <span className="text-xs font-medium text-blue-600">{client.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from our valued partners</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll hover-lift hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Quote className="h-8 w-8 text-blue-600 mb-4 animate-pulse-slow" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse-slow" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Distribution */}
        <div className="bg-blue-50 rounded-lg p-12 mb-20 animate-on-scroll hover-lift">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Distribution</h2>
            <p className="text-xl text-gray-600">Our clients span across diverse industry sectors</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { industry: "Manufacturing", percentage: "25%" },
              { industry: "Pharmaceuticals", percentage: "20%" },
              { industry: "Automotive", percentage: "18%" },
              { industry: "Electronics", percentage: "15%" },
              { industry: "Healthcare", percentage: "12%" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse-slow">{item.percentage}</div>
                <div className="text-gray-700 font-medium">{item.industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Companies Choose Us</h2>
            <p className="text-xl text-gray-600">The benefits that keep our clients coming back</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Proven Track Record",
                description: "Over 500 successful installations with measurable results"
              },
              {
                number: "2",
                title: "End-to-End Solutions",
                description: "Complete project management from design to maintenance"
              },
              {
                number: "3",
                title: "24/7 Support",
                description: "Round-the-clock monitoring and technical support"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 animate-on-scroll hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">{benefit.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white animate-on-scroll hover-glow">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the same quality and service that has made us the preferred choice for industry leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 btn-animate hover-lift">
              Become a Client
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 btn-animate hover-lift">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;