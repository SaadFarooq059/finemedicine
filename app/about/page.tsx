import type { Metadata } from 'next';
import { Users, Award, Target, Eye, Heart, Shield, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Fine Medicine Company',
  description: 'Learn about Fine Medicine Company, Pakistan\'s trusted pharmaceutical supplier with 25+ years of experience serving healthcare professionals and institutions.',
};

const AboutPage = () => {
  const timeline = [
    {
      year: '1986',
      title: 'Company Founded',
      description: 'Fine Medicine Company established in Islamabad with a vision to serve Pakistan\'s healthcare sector.'
    },
    {
      year: '1990',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.'
    },
    {
      year: '1995',
      title: 'National Expansion',
      description: 'Extended operations to major cities across Pakistan, serving 25+ cities nationwide.'
    },
    {
      year: '2000',
      title: 'Technology Integration',
      description: 'Implemented advanced inventory management and cold chain monitoring systems.'
    },
    {
      year: '2010',
      title: 'WHO-GMP Compliance',
      description: 'Achieved WHO Good Manufacturing Practice compliance for enhanced quality assurance.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched digital platform for online ordering and real-time inventory tracking.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Recognized as one of Pakistan\'s leading pharmaceutical suppliers with 500+ partners.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Every decision we make is guided by what\'s best for patient health and safety.'
    },
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'We maintain the highest quality standards in all aspects of our operations.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, reliability, and mutual success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously innovate to improve healthcare delivery and operational efficiency.'
    }
  ];

  const team = [
    {
      name: 'Capt (Retd.) Muhammad Younas Malik',
      position: 'Chief Executive Officer',
      experience: '35+ Years',
      education: 'Military Leadership, Business Management',
      description: 'Visionary leader with extensive experience in pharmaceutical industry and healthcare management since 1986.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Fatima Ali',
      position: 'Chief Operating Officer',
      experience: '20+ Years',
      education: 'PharmD, MS Pharma Sciences',
      description: 'Expert in pharmaceutical operations, quality assurance, and regulatory compliance.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Muhammad Rehman',
      position: 'Director of Supply Chain',
      experience: '18+ Years',
      education: 'MS Supply Chain Management',
      description: 'Specialist in logistics, inventory management, and distribution optimization.',
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Excellence Award 2023',
      description: 'Pakistan Healthcare Excellence Award for Outstanding Pharmaceutical Distribution'
    },
    {
      icon: Shield,
      title: 'Quality Certification',
      description: 'ISO 9001:2015, WHO-GMP, and GDP certified for quality and compliance'
    },
    {
      icon: Users,
      title: 'Industry Recognition',
      description: 'Top 10 Pharmaceutical Suppliers in Pakistan by Healthcare Industry Magazine'
    },
    {
      icon: Clock,
      title: 'Service Excellence',
      description: '99.9% on-time delivery rate and zero quality complaints in 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 hero-pattern py-20">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏢 About Fine Medicine Company
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              35+ Years of Healthcare Excellence
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Since 1986, Fine Medicine Company has been Pakistan's trusted pharmaceutical partner, 
              dedicated to improving healthcare outcomes through quality medicines and exceptional service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">1986</div>
                <div className="text-gray-600">Established</div>
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
                <div className="text-3xl font-bold text-green-600">35+</div>
                <div className="text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be Pakistan's most trusted pharmaceutical supplier, delivering high-quality medicines 
                  and healthcare products that contribute to better health outcomes for communities across the nation. 
                  We are committed to excellence in every aspect of our operations, from procurement to delivery.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To transform healthcare accessibility in Pakistan by building the most efficient and 
                  reliable pharmaceutical supply chain network, ensuring that quality medicines reach 
                  every corner of the country when needed most.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Pharmaceutical laboratory" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl card-hover text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small pharmaceutical distributor to Pakistan's leading healthcare partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                      <div className="text-2xl font-bold text-green-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-green-400 rounded-full border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of pharmaceutical industry expertise 
              and unwavering commitment to healthcare excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span>{member.experience}</span>
                    <span>•</span>
                    <span>{member.education}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 p-3 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
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
              Partner with Pakistan's Most Trusted Name
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of healthcare providers who trust Fine Medicine Company 
              for their pharmaceutical needs. Experience the difference of working with true healthcare partners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="/expertise" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;