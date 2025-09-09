
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Microscope, 
  Heart, 
  Brain, 
  Calendar,
  TestTube,
  Activity,
  X,
  Clock,
  Shield,
  Award,
  Stethoscope
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Laboratory Tests",
      icon: TestTube,
      color: "red",
      services: [
        { name: "Complete Blood Count (CBC)", duration: "30 mins", price: "₱500" },
        { name: "Blood Chemistry Panel", duration: "45 mins", price: "₱800" },
        { name: "Lipid Profile", duration: "30 mins", price: "₱600" },
        { name: "Liver Function Tests", duration: "45 mins", price: "₱700" },
        { name: "Kidney Function Tests", duration: "45 mins", price: "₱650" },
        { name: "Thyroid Function Tests", duration: "30 mins", price: "₱1,200" },
        { name: "Diabetes Screening (HbA1c)", duration: "30 mins", price: "₱400" },
        { name: "Urinalysis", duration: "15 mins", price: "₱200" },
        { name: "Stool Analysis", duration: "30 mins", price: "₱300" },
        { name: "Pregnancy Test", duration: "15 mins", price: "₱150" }
      ]
    },
    {
      title: "Medical Imaging",
      icon: Activity,
      color: "gray",
      services: [
        { name: "Chest X-ray", duration: "15 mins", price: "₱800" },
        { name: "Abdominal X-ray", duration: "15 mins", price: "₱800" },
        { name: "Bone X-ray", duration: "15 mins", price: "₱600" },
        { name: "Abdominal Ultrasound", duration: "30 mins", price: "₱1,500" },
        { name: "Pelvic Ultrasound", duration: "30 mins", price: "₱1,500" },
        { name: "Pregnancy Ultrasound", duration: "30 mins", price: "₱1,800" },
        { name: "Electrocardiogram (ECG)", duration: "20 mins", price: "₱500" },
        { name: "2D Echocardiogram", duration: "45 mins", price: "₱2,500" },
        { name: "Stress Test", duration: "60 mins", price: "₱3,000" }
      ]
    },
    {
      title: "Special Examinations",
      icon: Heart,
      color: "dark-gray",
      services: [
        { name: "Pre-employment Medical Exam", duration: "60 mins", price: "₱1,200" },
        { name: "Executive Health Checkup", duration: "120 mins", price: "₱5,000" },
        { name: "Annual Physical Examination", duration: "90 mins", price: "₱2,500" },
        { name: "Drug Test (10-panel)", duration: "15 mins", price: "₱800" },
        { name: "Alcohol Test", duration: "10 mins", price: "₱300" },
        { name: "Fitness to Work Assessment", duration: "45 mins", price: "₱1,500" },
        { name: "Medical Certificate", duration: "30 mins", price: "₱500" },
        { name: "Vaccination Services", duration: "15 mins", price: "₱varies" },
        { name: "Health Screening Package", duration: "90 mins", price: "₱3,500" }
      ]
    }
  ];

  const hmoPartners = [
    "MEDICARD", 
    "MAXICARE", 
    "COCOLIFE", 
    "ICARE", 
    "VALUCARE", 
    "MEDOCARE", 
    "INTELLICARE", 
    "AVEGA", 
    "IMS", 
    "ETIQA", 
    "EASTWEST", 
    "GENERALI", 
    "BDO LIFE", 
    "SUNLIFE", 
    "AXALIFE", 
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: "bg-red-50",
        icon: "text-red-600",
        badge: "bg-red-100 text-red-800",
        border: "border-red-200"
      },
      gray: {
        bg: "bg-gray-100",
        icon: "text-gray-600",
        badge: "bg-gray-200 text-gray-800",
        border: "border-gray-200"
      },
      "dark-gray": {
        bg: "bg-gray-200",
        icon: "text-gray-700",
        badge: "bg-gray-300 text-gray-900",
        border: "border-gray-300"
      }
    };
    return colors[color] || colors.red;
  };

  const features = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most results available within 24-48 hours"
    },
    {
      icon: Shield,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring precision"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Accredited laboratory meeting international standards"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Diagnostic Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive diagnostic services with cutting-edge technology and expert medical professionals. 
            From routine screenings to specialized tests, we provide accurate results you can trust.
          </p>
          <Link to={createPageUrl("Appointment")}>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Test Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <div className={`w-20 h-20 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`w-10 h-10 ${colorClasses.icon}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colorClasses.border} border-2 border-opacity-20`}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center mb-3">
                            <Badge variant="outline" className={`${colorClasses.badge} border-0`}>
                              <Clock className="w-3 h-3 mr-1" />
                              {service.duration}
                            </Badge>
                            <span className="text-lg font-bold text-gray-900">
                              {service.price}
                            </span>
                          </div>
                          <Link to={createPageUrl("Appointment")}>
                            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
                              Book Now
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accredited HMOs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accredited HMOs & Insurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with major health maintenance organizations and insurance providers for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {hmoPartners.map((hmo, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:bg-red-50 border border-gray-200 hover:border-red-200">
                <span className="font-semibold text-gray-700 group-hover:text-red-600">{hmo}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            ... and more. Please contact us to verify your coverage.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Test?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our medical professionals are here to guide you. Contact us to discuss your healthcare needs 
            and find the most appropriate diagnostic services for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                Contact Us
              </Button>
            </Link>
            <Link to={createPageUrl("Appointment")}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
