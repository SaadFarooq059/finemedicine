import Link from 'next/link';
import { ArrowRight, Shield, Users, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 hero-pattern">
      <div className="container-max section-padding py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🏥 Trusted Since 1995
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Leading <span className="text-gradient">Pharmaceutical</span> Supplier in Pakistan
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fine Medicine Company delivers high-quality pharmaceutical products and healthcare solutions to medical institutions, healthcare professionals, and pharmacies across Pakistan.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">ISO Certified Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">35+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">500+ Healthcare Partners</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/expertise" className="btn-secondary inline-flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero Image/Stats */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pharmaceutical laboratory" 
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">ISO</p>
                    <p className="text-sm text-gray-600">Certified</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Partners</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">25+</p>
                    <p className="text-sm text-gray-600">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;