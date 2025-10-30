import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Ahmed',
      position: 'Chief Medical Officer',
      hospital: 'Karachi General Hospital',
      content: 'Fine Medicine Company has been our trusted pharmaceutical partner for over 10 years. Their commitment to quality and timely delivery has never wavered.',
      rating: 5,
      initials: 'SA',
      color: 'bg-blue-500'
    },
    {
      name: 'Dr. Muhammad Hassan',
      position: 'Pharmacy Director',
      hospital: 'Lahore Medical Center',
      content: 'The quality assurance processes at Fine Medicine Company are exceptional. We have complete confidence in their pharmaceutical products.',
      rating: 5,
      initials: 'MH',
      color: 'bg-purple-500'
    },
    {
      name: 'Dr. Fatima Khan',
      position: 'Hospital Administrator',
      hospital: 'Islamabad Healthcare',
      content: 'Their supply chain management is outstanding. We never have to worry about stock-outs or delayed deliveries.',
      rating: 5,
      initials: 'FK',
      color: 'bg-green-500'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      logo: '🏆'
    },
    {
      name: 'DRAP Certified',
      description: 'Drug Regulatory Authority',
      logo: '✅'
    },
    {
      name: 'WHO-GMP',
      description: 'Good Manufacturing Practice',
      logo: '🌟'
    },
    {
      name: 'GDP Certified',
      description: 'Good Distribution Practice',
      logo: '📋'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. See what healthcare professionals across Pakistan say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg card-hover relative border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-green-600" />
              </div>
              
              {/* Rating stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author info with avatar initials */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <div className={`${testimonial.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our commitment to quality is backed by internationally recognized certifications and compliance standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-3xl mb-3">{cert.logo}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Delivery Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">Zero</div>
              <div className="text-gray-600 font-medium">Quality Complaints</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Regulatory Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;