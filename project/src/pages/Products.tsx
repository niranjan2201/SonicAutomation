import React, { useEffect } from 'react';
import { Zap, Sun, Battery, Settings, Wrench } from 'lucide-react';

const Products: React.FC = () => {
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

  const products = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "EV Charging Station Setup",
      description: "Complete installation and configuration of electric vehicle charging stations for commercial and residential use.",
      features: [
        "Level 2 and DC Fast Charging options",
        "Smart charging capabilities",
        "Mobile app integration",
        "Load management systems",
        "24/7 monitoring and support"
      ],
      image: "https://images.pexels.com/photos/7859746/pexels-photo-7859746.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Sun className="h-12 w-12 text-blue-600" />,
      title: "Solar Power Plant Installation",
      description: "Professional design and installation of solar photovoltaic systems for maximum energy efficiency.",
      features: [
        "Custom system design",
        "High-efficiency solar panels",
        "Grid-tie and off-grid solutions",
        "Performance monitoring",
        "25-year warranty"
      ],
      image: "https://images.pexels.com/photos/9875456/pexels-photo-9875456.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Battery className="h-12 w-12 text-blue-600" />,
      title: "Hybrid Energy Services",
      description: "Integrated renewable energy solutions combining solar, wind, and storage technologies.",
      features: [
        "Multi-source energy integration",
        "Intelligent energy management",
        "Peak shaving capabilities",
        "Backup power solutions",
        "Cost optimization algorithms"
      ],
      image: "https://images.pexels.com/photos/9980456/pexels-photo-9980456.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Battery className="h-12 w-12 text-blue-600" />,
      title: "Energy Storage Systems (ESS)",
      description: "Advanced battery storage solutions for residential, commercial, and utility-scale applications.",
      features: [
        "Lithium-ion battery technology",
        "Scalable modular design",
        "Real-time monitoring",
        "Safety protection systems",
        "Long cycle life"
      ],
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Solar Inverter Installation & Maintenance",
      description: "Professional installation and ongoing maintenance of solar inverters and power electronics.",
      features: [
        "String and power optimizers",
        "Microinverter solutions",
        "Preventive maintenance programs",
        "Performance optimization",
        "Emergency repair services"
      ],
      image: "https://images.pexels.com/photos/159160/solar-panel-array-power-sun-electricity-159160.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions designed to meet your specific needs and drive sustainable growth
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center animate-on-scroll ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6 hover-scale transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 hover-glow transition-all duration-300">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-600 animate-fade-in-left"
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse-slow"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-on-scroll animate-delay-300`}>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 hover-lift transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg hover-scale transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;