import type { Metadata } from 'next';
import Image from 'next/image';
import { Users, Award, Target, Eye, Heart, Shield, Globe, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Fine Medicine Company',
  description: 'Learn about Fine Medicine Company, Pakistan\'s trusted pharmaceutical supplier with 35+ years of experience serving healthcare professionals and institutions.',
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

  // Only keeping the CEO as requested - removed the image property
  const team = [
    {
      name: 'Capt (Retd.) Muhammad Younas Malik',
      position: 'Chief Executive Officer',
      experience: '35+ Years',
      education: 'Military Leadership, Business Management',
      description: 'Visionary leader with extensive experience in pharmaceutical industry and healthcare management since 1986.'
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
              Since 1986, Fine Medicine Company has been Pakistan&apos;s trusted pharmaceutical partner, 
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
                  To be Pakistan&apos;s most trusted pharmaceutical supplier, delivering high-quality medicines 
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
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pharmaceutical laboratory" 
                  width={800}
                  height={600}
                  className="object-cover"
                  style={{ width: '100%', height: '100%' }}
                  priority
                  quality={90}
                />
              </div>
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
              From a small pharmaceutical distributor to Pakistan&apos;s leading healthcare partner.
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

      {/* Leadership Team - Modified with no photo */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under the visionary leadership of our founder and CEO, Fine Medicine Company 
              has grown to become Pakistan&apos;s trusted pharmaceutical partner.
            </p>
          </div>

          {/* Redesigned CEO card without photo */}
          <div className="max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-12 rounded-xl shadow-lg border border-green-200">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Decorative element instead of photo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <div className="inline-flex items-center mb-3 bg-white px-3 py-1 rounded-full shadow-sm">
                      <span className="text-green-700 text-sm font-medium">Since 1986</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-green-700 font-semibold text-lg mb-4">
                      {member.position}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-white rounded-full text-gray-700 text-sm border border-gray-200 shadow-sm">
                        {member.experience}
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-gray-700 text-sm border border-gray-200 shadow-sm">
                        {member.education}
                      </span>
                      <span className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm font-medium shadow-sm">
                        Founder & Visionary
                      </span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="mt-8 border-t border-green-200 pt-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-700 font-medium">Trusted Leadership</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-700 font-medium">Team of 200+ Professionals</span>
                    </div>
                  </div>
                </div>
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

     
    </div>
  );
};

export default AboutPage;