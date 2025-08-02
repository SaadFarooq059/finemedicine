import Link from 'next/link';
import { Truck, Shield, Users, Settings, ArrowRight, Package, Clock, Phone } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Package,
      title: 'Pharmaceutical Distribution',
      description: 'Comprehensive distribution of prescription medicines, OTC products, and medical supplies.',
      features: ['Wide product range', 'Cold chain management', 'Inventory optimization']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring product safety and regulatory compliance.',
      features: ['ISO certification', 'Batch tracking', 'Temperature monitoring']
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'Efficient logistics and supply chain solutions for healthcare institutions.',
      features: ['Real-time tracking', 'Emergency delivery', 'Inventory management']
    },
    {
      icon: Users,
      title: 'Healthcare Consulting',
      description: 'Expert guidance on pharmaceutical procurement and inventory management.',
      features: ['Cost optimization', 'Regulatory guidance', 'Market insights']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From distribution to consulting, we provide end-to-end pharmaceutical services 
            tailored to meet the unique needs of healthcare providers across Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Fine Medicine Company?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Availability</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock support for emergency pharmaceutical needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Regulatory Compliance</h4>
                    <p className="text-gray-600 text-sm">Full compliance with DRAP and international quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dedicated Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated account managers for personalized service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6">
              <img 
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Pharmaceutical team" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who trust Fine Medicine Company for their pharmaceutical needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/expertise" className="btn-primary inline-flex items-center">
              Explore Our Expertise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;