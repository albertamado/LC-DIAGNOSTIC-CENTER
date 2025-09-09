
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Microscope, Shield, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and personalized attention"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in diagnostic medicine"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through accurate results and confidential service"
    }
  ];

  const team = [
    {
      name: "Dr. Maria Santos",
      role: "Medical Director",
      credentials: "MD, Pathologist",
      experience: "15+ years in diagnostic medicine"
    },
    {
      name: "Dr. Juan Rodriguez",
      role: "Chief Radiologist",
      credentials: "MD, Radiology Specialist",
      experience: "12+ years in medical imaging"
    },
    {
      name: "Dr. Lisa Chen",
      role: "Laboratory Director",
      credentials: "MD, Clinical Pathology",
      experience: "10+ years in laboratory medicine"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About LC Diagnostic Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we have been the trusted partner in healthcare for thousands of patients, 
            providing accurate diagnostic services with compassion and excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide exceptional diagnostic services that empower patients and healthcare providers 
                with accurate, timely results. We are committed to advancing health outcomes through 
                innovative technology, scientific excellence, and compassionate care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every test we perform, every result we deliver, and every patient interaction reflects 
                our unwavering commitment to quality healthcare and your wellbeing.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Microscope className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Test Types</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">Patients</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape every interaction with our patients and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Medical Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced physicians and specialists are dedicated to providing you with 
              the highest quality diagnostic services and personalized care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.credentials}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quality & Accreditation
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            LC Diagnostic Center is fully accredited and complies with international standards for 
            medical laboratories and diagnostic facilities. We maintain strict quality control measures 
            and participate in proficiency testing programs to ensure the highest level of accuracy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-lg font-semibold mb-2">ISO 15189 Certified</h4>
              <p className="text-sm opacity-80">International standard for medical laboratories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-lg font-semibold mb-2">CAP Accredited</h4>
              <p className="text-sm opacity-80">College of American Pathologists certification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Microscope className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-lg font-semibold mb-2">Quality Assured</h4>
              <p className="text-sm opacity-80">Rigorous quality control processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
