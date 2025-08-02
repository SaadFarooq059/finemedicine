import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Ahmed',
      position: 'Chief Medical Officer',
      hospital: 'Karachi General Hospital',
      content: 'Fine Medicine Company has been our trusted pharmaceutical partner for over 10 years. Their commitment to quality and timely delivery has never wavered.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Dr. Muhammad Hassan',
      position: 'Pharmacy Director',
      hospital: 'Lahore Medical Center',
      content: 'The quality assurance processes at Fine Medicine Company are exceptional. We have complete confidence in their pharmaceutical products.',
      rating: 5,
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Dr. Fatima Khan',
      position: 'Hospital Administrator',
      hospital: 'Islamabad Healthcare',
      content: 'Their supply chain management is outstanding. We never have to worry about stock-outs or delayed deliveries.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200'
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
            Don't just take our word for it. See what healthcare professionals across Pakistan say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl card-hover relative"
            >
              <Quote className="h-8 w-8 text-green-400 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-green-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-green-600 font-medium">{testimonial.hospital}</p>
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