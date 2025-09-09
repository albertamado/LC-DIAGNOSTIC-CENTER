
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck, FileText, Phone } from "lucide-react";

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your personal and medical information is protected by advanced security measures and strict access controls."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are clear about what information we collect, how we use it, and who has access to your data."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "All patient records are stored in encrypted, secure databases with regular security audits and updates."
    },
    {
      icon: UserCheck,
      title: "Consent Based",
      description: "We only collect and use information with your explicit consent and for legitimate medical purposes."
    }
  ];

  const dataTypes = [
    "Personal identification information (name, address, phone, email)",
    "Medical history and current health conditions",
    "Diagnostic test results and medical reports",
    "Insurance information and payment details",
    "Emergency contact information",
    "Appointment scheduling and visit history"
  ];

  const dataUse = [
    "Providing diagnostic services and medical care",
    "Processing appointments and managing your healthcare",
    "Communicating test results and medical information",
    "Billing and insurance claim processing",
    "Quality assurance and improving our services",
    "Compliance with legal and regulatory requirements"
  ];

  const patientRights = [
    "Access your medical records and test results",
    "Request corrections to inaccurate information",
    "Obtain copies of your medical records",
    "Restrict certain uses of your health information",
    "Request confidential communication methods",
    "File complaints about privacy practices"
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Notice
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At LC Diagnostic Center, protecting your privacy and maintaining the confidentiality 
            of your personal health information is our highest priority. This notice explains 
            how we collect, use, and safeguard your information.
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we handle your personal and medical information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <FileText className="w-6 h-6 text-red-600" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    We collect only the information necessary to provide you with quality 
                    healthcare services and maintain accurate medical records.
                  </p>
                  <ul className="space-y-3">
                    {dataTypes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <UserCheck className="w-6 h-6 text-red-600" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Your information is used exclusively for legitimate healthcare purposes 
                    and improving the quality of our services.
                  </p>
                  <ul className="space-y-3">
                    {dataUse.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Protect Your Information
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Safeguards
                </h3>
                <p className="text-gray-600">
                  Advanced encryption, secure networks, access controls, and regular 
                  security audits protect your digital information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Administrative Safeguards
                </h3>
                <p className="text-gray-600">
                  Strict policies, employee training, and limited access ensure only 
                  authorized personnel handle your information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Physical Safeguards
                </h3>
                <p className="text-gray-600">
                  Secure facilities, controlled access to records, and proper disposal 
                  of documents protect physical information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Rights as a Patient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have important rights regarding your personal health information. 
              We are committed to helping you exercise these rights.
            </p>
          </div>

          <Card className="border-none shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {patientRights.map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{right}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact and Complaints */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Phone className="w-6 h-6 text-red-600" />
                  Questions About Privacy?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have questions about our privacy practices or need to exercise 
                  your rights, please contact our Privacy Officer.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Privacy Officer</p>
                    <p className="text-gray-600">Dr. Maria Santos, Medical Director</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+63 123 456 7890</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">privacy@lcdiagnostic.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <FileText className="w-6 h-6 text-red-600" />
                  Filing Complaints
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You have the right to file a complaint if you believe your privacy 
                  rights have been violated. You will not be retaliated against for filing a complaint.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Internal Complaints</p>
                    <p className="text-gray-600">Contact our Privacy Officer above</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">External Complaints</p>
                    <p className="text-gray-600">Department of Health Privacy Office</p>
                    <p className="text-gray-600">doh.privacy@health.gov.ph</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Policy Updates
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            We may update this privacy notice from time to time to reflect changes in our practices 
            or applicable laws. We will post any updates on our website and notify patients of 
            significant changes. This notice was last updated on January 1, 2025.
          </p>
          <p className="text-lg opacity-80">
            <strong>Effective Date:</strong> January 1, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
