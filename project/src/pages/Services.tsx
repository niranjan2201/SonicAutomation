import React from 'react';
import { Wrench, Users, Clock, Shield, CheckCircle, Phone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Installation Services",
      description: "Professional installation of all renewable energy systems with certified technicians",
      details: [
        "Site assessment and planning",
        "System design and engineering",
        "Professional installation",
        "System commissioning",
        "Performance testing"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance programs to ensure optimal system performance",
      details: [
        "Preventive maintenance",
        "Performance monitoring",
        "Emergency repairs",
        "Component replacement",
        "System upgrades"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Consultation Services",
      description: "Expert consultation to help you choose the right energy solutions",
      details: [
        "Energy audit and analysis",
        "System sizing and design",
        "ROI calculations",
        "Regulatory compliance",
        "Technology recommendations"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Project Management",
      description: "End-to-end project management ensuring timely and successful delivery",
      details: [
        "Project planning and scheduling",
        "Resource coordination",
        "Quality assurance",
        "Progress monitoring",
        "Stakeholder communication"
      ]
    }
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your energy needs and discuss your goals"
    },
    {
      step: "02",
      title: "Site Survey",
      description: "Our experts conduct a thorough site evaluation"
    },
    {
      step: "03",
      title: "Custom Design",
      description: "We create a tailored solution for your requirements"
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional installation by certified technicians"
    },
    {
      step: "05",
      title: "Commissioning",
      description: "System testing and performance optimization"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring and maintenance services"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy services from consultation to installation and ongoing support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality delivery from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="bg-blue-50 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-gray-600">We stand behind every project with comprehensive guarantees</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold mb-2">Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all major components</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and monitoring</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                100%
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
              <p className="text-gray-600">Complete satisfaction guaranteed on all services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;