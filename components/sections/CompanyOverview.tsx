import { Shield, Award, Globe, Users, Clock, Heart } from 'lucide-react';

const CompanyOverview = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring the highest quality pharmaceutical products and services.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for excellence in pharmaceutical distribution and customer service.'
    },
    {
      icon: Globe,
      title: 'Wide Network',
      description: 'Extensive distribution network covering all major cities and regions across Pakistan.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced pharmaceutical professionals dedicated to healthcare excellence.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable supply chain management ensuring on-time delivery of critical medicines.'
    },
    {
      icon: Heart,
      title: 'Healthcare Focus',
      description: 'Committed to improving healthcare outcomes through quality pharmaceutical solutions.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏢 About Fine Medicine Company
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted Healthcare Partner Since 1986
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fine Medicine Company has been at the forefront of pharmaceutical distribution in Pakistan since 1986, 
            serving healthcare professionals and institutions with unwavering commitment to quality and reliability.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">35+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Healthcare Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Cities Covered</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "To be Pakistan's most trusted pharmaceutical supplier, delivering high-quality medicines 
              and healthcare products that contribute to better health outcomes for communities across the nation."
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Quality First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-green-600" />
                <span>Patient Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-600" />
                <span>Community Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;