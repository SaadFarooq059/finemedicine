import type { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Fine Medicine Company',
  description: 'Get in touch with Fine Medicine Company. Contact us for pharmaceutical supplies, quotes, and partnership opportunities. Available 24/7 for your healthcare needs.',
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'Fine Medicine Company',
        'Site 2851 Kahuta Road Humak',
        'Islamabad, Pakistan'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: [
        '+92-303-3336212'
      ]
    },
    {
      icon: Mail,
      title: 'Managing Partner',
      details: [
        'MUHAMMAD NAWAZ',
        'mnawaz@finemedicinecompany.com',
        '+92-303-3336212'
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'info@finemedicinecompany.com '
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Emergency Support: 24/7'
      ]
    }
  ];

  // Keeping only Islamabad office
  const offices = [
    {
      city: 'Islamabad',
      address: 'Site 2851 Kahuta Road Humak',
      phone: '+92-303-3336212',
      manager: 'Capt (Retd.) Muhammad Younas Malik'
    }
  ];

  const services = [
    'Pharmaceutical Distribution',
    'Medical Supply Chain',
    'Quality Assurance',
    'Regulatory Compliance',
    'Healthcare Consulting',
    'Emergency Medicine Supply',
    'Bulk Order Management',
    'Cold Chain Solutions'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 hero-pattern py-20">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              📞 Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Fine Medicine Company
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to partner with Pakistan&apos;s leading pharmaceutical supplier? We&apos;re here to help 
              with your pharmaceutical needs, answer your questions, and provide expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+923033336212" 
                className="btn-primary inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +92-303-3336212
              </a>
              <a 
                href="mailto:info@finemedicine.com" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Us Here</h3>
                    <p className="text-gray-600">Site 2851 Kahuta Road Humak</p>
                    <p className="text-gray-600">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location - Changed to single office */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office in Islamabad or contact us directly for all your pharmaceutical needs.
            </p>
          </div>

          {/* Single office card centered */}
          <div className="max-w-md mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{office.city} Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-green-600 mt-0.5" />
                    <span className="text-gray-600 text-lg">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span className="text-gray-600 text-lg">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">👨‍⚕️</span>
                    </div>
                    <span className="text-gray-600 text-lg">CEO: {office.manager}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-yellow-50">
        <div className="container-max section-padding">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Emergency Medicine Supply
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              For urgent pharmaceutical needs and emergency medicine supply, 
              our dedicated emergency hotline is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+923033336212" 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +92-303-3336212
              </a>
              <a 
                href="mailto:info@finemedicinecompany.com " 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;