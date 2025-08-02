import type { Metadata } from 'next';
import { Package, Shield, Truck, Users, Clock, Award, Thermometer, FileCheck, Globe, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Expertise - Fine Medicine Company',
  description: 'Comprehensive pharmaceutical services including distribution, quality assurance, supply chain management, and healthcare consulting across Pakistan.',
};

const ExpertisePage = () => {
  const services = [
    {
      icon: Package,
      title: 'Pharmaceutical Distribution',
      description: 'Comprehensive distribution of prescription medicines, over-the-counter products, and medical supplies across Pakistan.',
      features: [
        'Wide range of pharmaceutical products',
        'Prescription and OTC medicines',
        'Medical devices and equipment',
        'Nutritional supplements',
        'Specialized medications'
      ],
      benefits: [
        'Nationwide coverage',
        'Competitive pricing',
        'Bulk order discounts',
        'Flexible payment terms'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring product safety, efficacy, and regulatory compliance.',
      features: [
        'ISO 9001:2015 certified processes',
        'WHO-GMP compliance',
        'Batch tracking and traceability',
        'Temperature monitoring',
        'Quality documentation'
      ],
      benefits: [
        'Guaranteed product quality',
        'Regulatory compliance',
        'Risk mitigation',
        'Customer confidence'
      ]
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'Efficient logistics and supply chain solutions ensuring timely delivery of pharmaceutical products.',
      features: [
        'Real-time inventory tracking',
        'Cold chain management',
        'Emergency delivery services',
        'Automated reordering systems',
        'Distribution optimization'
      ],
      benefits: [
        'Reduced stock-outs',
        'Cost optimization',
        'Improved efficiency',
        'Better inventory control'
      ]
    },
    {
      icon: Users,
      title: 'Healthcare Consulting',
      description: 'Expert guidance on pharmaceutical procurement, inventory management, and regulatory compliance.',
      features: [
        'Procurement strategy development',
        'Inventory optimization',
        'Cost analysis and reduction',
        'Regulatory guidance',
        'Market intelligence'
      ],
      benefits: [
        'Informed decision making',
        'Cost savings',
        'Compliance assurance',
        'Strategic advantage'
      ]
    }
  ];

  const productCategories = [
    {
      category: 'Cardiovascular',
      products: ['Antihypertensives', 'Anticoagulants', 'Cardiac medications', 'Cholesterol management'],
      icon: '❤️'
    },
    {
      category: 'Antibiotics',
      products: ['Broad-spectrum antibiotics', 'Specialty antibiotics', 'Antifungals', 'Antivirals'],
      icon: '🦠'
    },
    {
      category: 'Diabetes Care',
      products: ['Insulin products', 'Oral hypoglycemics', 'Blood glucose monitors', 'Diabetic supplies'],
      icon: '🩺'
    },
    {
      category: 'Pain Management',
      products: ['NSAIDs', 'Analgesics', 'Topical pain relief', 'Muscle relaxants'],
      icon: '💊'
    },
    {
      category: 'Respiratory',
      products: ['Bronchodilators', 'Corticosteroids', 'Cough medicines', 'Allergy medications'],
      icon: '🫁'
    },
    {
      category: 'Oncology',
      products: ['Chemotherapy agents', 'Supportive care', 'Targeted therapy', 'Immunotherapy'],
      icon: '🎗️'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems certification ensuring consistent quality in all processes.',
      icon: Award
    },
    {
      name: 'WHO-GMP',
      description: 'World Health Organization Good Manufacturing Practice compliance.',
      icon: Globe
    },
    {
      name: 'DRAP License',
      description: 'Licensed by Drug Regulatory Authority of Pakistan for pharmaceutical distribution.',
      icon: FileCheck
    },
    {
      name: 'GDP Certified',
      description: 'Good Distribution Practice certification for pharmaceutical distribution.',
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 hero-pattern py-20">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Pharmaceutical Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              With over 35 years of experience, Fine Medicine Company offers a complete range of 
              pharmaceutical services designed to meet the evolving needs of healthcare providers across Pakistan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From distribution to consulting, we provide end-to-end pharmaceutical solutions 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <service.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <div className="bg-green-400 w-6 h-6 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-white rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-gray-900">Get Started Today</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Contact our experts to learn how this service can benefit your organization.
                      </p>
                      <div className="text-green-600 font-semibold">03033336212</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply a comprehensive range of pharmaceutical products across major therapeutic categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by internationally recognized certifications 
              and compliance with the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <cert.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Expertise?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of healthcare providers who trust Fine Medicine Company 
              for their pharmaceutical needs. Let's discuss how we can support your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
              >
                Request Consultation
              </a>
              <a 
                href="tel:03033336212" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Call Now: 03033336212
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;