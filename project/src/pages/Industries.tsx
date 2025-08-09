import React from 'react';
import { Factory, Building2, Home, Car, Plane, Ship, Truck, Store } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Manufacturing",
      description: "Energy-efficient solutions for manufacturing facilities to reduce operational costs and carbon footprint",
      applications: [
        "Solar rooftop installations",
        "Energy storage for peak shaving",
        "EV fleet charging stations",
        "Backup power systems"
      ],
      image: "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "Commercial Buildings",
      description: "Smart energy solutions for office buildings, retail spaces, and commercial complexes",
      applications: [
        "Building-integrated photovoltaics",
        "Smart energy management systems",
        "EV charging infrastructure",
        "Energy monitoring and optimization"
      ],
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Residential",
      description: "Comprehensive renewable energy solutions for homes and residential communities",
      applications: [
        "Residential solar systems",
        "Home energy storage",
        "EV home charging stations",
        "Smart home integration"
      ],
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Automotive",
      description: "Specialized energy solutions for automotive manufacturers and dealerships",
      applications: [
        "Manufacturing facility solar",
        "EV charging networks",
        "Energy storage systems",
        "Grid stabilization solutions"
      ],
      image: "https://images.pexels.com/photos/93840/pexels-photo-93840.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Store className="h-12 w-12 text-blue-600" />,
      title: "Retail",
      description: "Cost-effective energy solutions for retail chains and shopping centers",
      applications: [
        "Solar canopies and rooftops",
        "EV charging for customers",
        "Energy cost reduction programs",
        "Sustainability initiatives"
      ],
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Logistics & Transportation",
      description: "Energy infrastructure for logistics hubs and transportation companies",
      applications: [
        "Fleet charging solutions",
        "Warehouse solar installations",
        "Energy management systems",
        "Emergency backup power"
      ],
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Significantly reduce energy costs with renewable energy solutions",
      percentage: "40-60%"
    },
    {
      title: "Carbon Footprint",
      description: "Minimize environmental impact and achieve sustainability goals",
      percentage: "70-80%"
    },
    {
      title: "Energy Independence",
      description: "Reduce dependency on grid electricity with on-site generation",
      percentage: "50-90%"
    },
    {
      title: "ROI Achievement",
      description: "Typical return on investment within 5-7 years",
      percentage: "5-7 yrs"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored renewable energy solutions across diverse industries to meet specific operational requirements
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Benefits</h2>
            <p className="text-xl text-gray-600">Proven results across all industries we serve</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.percentage}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;