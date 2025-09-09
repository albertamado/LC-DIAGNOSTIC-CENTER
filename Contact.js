
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+63 123 456 7890",
      secondary: "+63 987 654 3210",
      description: "Call us for immediate assistance or appointments",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@lcdiagnostic.com",
      secondary: "appointments@lcdiagnostic.com",
      description: "Send us your questions or appointment requests",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "123 Health Street",
      secondary: "Medical District, City 1234",
      description: "Visit our modern diagnostic facility",
      color: "purple"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM", status: "open" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" },
    { day: "Holidays", hours: "By Appointment Only", status: "limited" }
  ];

  const departments = [
    {
      name: "Laboratory Services",
      phone: "+63 123 456 7891",
      email: "lab@lcdiagnostic.com",
      description: "Blood tests, urinalysis, and clinical chemistry"
    },
    {
      name: "Imaging Department", 
      phone: "+63 123 456 7892",
      email: "imaging@lcdiagnostic.com",
      description: "X-rays, ultrasounds, ECG, and cardiac testing"
    },
    {
      name: "Special Examinations",
      phone: "+63 123 456 7893",
      email: "special@lcdiagnostic.com", 
      description: "Pre-employment exams, executive checkups"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-red-50 text-red-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact LC Diagnostic Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get in touch with our team for appointments, inquiries, or support. 
            We're here to help with all your diagnostic healthcare needs.
          </p>
          <Link to={createPageUrl("Appointment")}>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment Online
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${getColorClasses(method.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {method.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-lg font-medium text-gray-900">
                      {method.primary}
                    </p>
                    <p className="text-gray-600">
                      {method.secondary}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Hours Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      LC Diagnostic Center
                    </h4>
                    <p className="text-gray-600">
                      123 Health Street<br />
                      Medical District, City 1234
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span className="text-gray-600">Easy parking available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-red-600" />
                      <span className="text-gray-600">Near public transportation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operating Hours</h3>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className={`font-semibold ${
                          schedule.status === 'open' ? 'text-green-600' :
                          schedule.status === 'closed' ? 'text-red-600' :
                          'text-yellow-600'
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Emergency Services:</strong> For urgent medical needs outside business hours, 
                      please contact your nearest emergency room or call emergency services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct contact information for our specialized departments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't wait - take the first step towards better health today. Our team is ready to provide 
            you with exceptional diagnostic services and personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Appointment")}>
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl"
              onClick={() => window.open('tel:+6312345678990')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
