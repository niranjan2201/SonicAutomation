import React from 'react';
import { Shield, Award, CheckCircle, Users, FileText, Settings } from 'lucide-react';

const Quality: React.FC = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems certification ensuring consistent quality delivery"
    },
    {
      title: "IEC 61215",
      description: "International standard for crystalline silicon photovoltaic modules"
    },
    {
      title: "UL 1741",
      description: "Safety certification for inverters, converters, and charge controllers"
    },
    {
      title: "IEEE 1547",
      description: "Standard for interconnecting distributed resources with electric power systems"
    }
  ];

  const qualityPrinciples = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safety First",
      description: "All installations comply with the highest safety standards and regulations"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "Commitment to delivering superior quality in every project we undertake"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description: "Systems designed and installed for maximum uptime and performance"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Customer satisfaction is at the heart of everything we do"
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Compliance",
      description: "Full adherence to industry standards and regulatory requirements"
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Continuous Improvement",
      description: "Ongoing enhancement of processes and service delivery"
    }
  ];

  const qualityProcess = [
    {
      step: "Planning",
      description: "Detailed project planning with quality checkpoints defined",
      activities: [
        "Requirements analysis",
        "Quality planning",
        "Resource allocation",
        "Risk assessment"
      ]
    },
    {
      step: "Design",
      description: "Engineering designs reviewed and approved by certified professionals",
      activities: [
        "Technical design review",
        "Compliance verification",
        "Performance modeling",
        "Safety analysis"
      ]
    },
    {
      step: "Procurement",
      description: "Only certified components from approved vendors are used",
      activities: [
        "Vendor qualification",
        "Component testing",
        "Quality inspection",
        "Documentation review"
      ]
    },
    {
      step: "Installation",
      description: "Installation performed by certified technicians following best practices",
      activities: [
        "Installation supervision",
        "Quality inspections",
        "Safety compliance",
        "Progress monitoring"
      ]
    },
    {
      step: "Testing",
      description: "Comprehensive testing and commissioning before handover",
      activities: [
        "Performance testing",
        "Safety verification",
        "System commissioning",
        "Documentation completion"
      ]
    },
    {
      step: "Support",
      description: "Ongoing monitoring and maintenance to ensure continued quality",
      activities: [
        "Performance monitoring",
        "Preventive maintenance",
        "Quality audits",
        "Customer feedback"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quality Principles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Principles</h2>
            <p className="text-xl text-gray-600">The foundation of our quality management approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Process</h2>
            <p className="text-xl text-gray-600">Our systematic approach to ensuring quality at every stage</p>
          </div>

          <div className="space-y-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{process.step}</h3>
                      <p className="text-blue-100">{process.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Activities:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {process.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-blue-50 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Performance</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-lg font-semibold mb-1">System Uptime</div>
              <div className="text-gray-600">Average across all installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg font-semibold mb-1">Customer Satisfaction</div>
              <div className="text-gray-600">Based on project completion surveys</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Zero</div>
              <div className="text-lg font-semibold mb-1">Safety Incidents</div>
              <div className="text-gray-600">In the past 5 years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-lg font-semibold mb-1">Compliance Rate</div>
              <div className="text-gray-600">With industry standards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;