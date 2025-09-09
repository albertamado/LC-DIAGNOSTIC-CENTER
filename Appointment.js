
import React, { useState } from "react";
import { Appointment } from "@/entities/Appointment";
import { SendEmail } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Clock, CheckCircle2, User, Mail, Phone, Stethoscope, AlertCircle } from "lucide-react";
import { format, addDays, isWeekend } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    contact_number: "",
    email: "",
    appointment_type: "Self-pay", // New field
    hmo_provider: "", // New field
    hmo_member_id: "", // New field
    service: "",
    preferred_date: "",
    preferred_time: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Laboratory Tests",
    "Blood Test",
    "Urinalysis",
    "X-ray",
    "Ultrasound",
    "ECG",
    "2D Echo",
    "Drug Test",
    "Pre-employment Exam",
    "Executive Checkup",
    "Other"
  ];

  const hmoProviders = [
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
    "Other"
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  // Generate available dates (next 30 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    let currentDate = new Date();
    let daysAdded = 0;
    
    while (daysAdded < 30) {
      currentDate = addDays(currentDate, 1);
      if (!isWeekend(currentDate)) {
        dates.push(format(currentDate, 'yyyy-MM-dd'));
        daysAdded++;
      }
    }
    return dates;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Validate required fields
      if (!formData.full_name || !formData.contact_number || !formData.email || 
          !formData.service || !formData.preferred_date || !formData.preferred_time) {
        throw new Error("Please fill in all required fields");
      }
      
      if (formData.appointment_type.startsWith("HMO") && (!formData.hmo_provider || !formData.hmo_member_id)) {
        throw new Error("Please provide your HMO Provider and Member ID.");
      }

      // Create appointment record
      const appointment = await Appointment.create(formData);

      const hmoDetails = formData.appointment_type.startsWith("HMO") 
        ? `
Appointment Type: ${formData.appointment_type}
HMO Provider: ${formData.hmo_provider}
HMO Member ID: ${formData.hmo_member_id}
` 
        : '';

      // Send confirmation email to patient
      await SendEmail({
        to: formData.email,
        subject: "Appointment Confirmation - LC Diagnostic Center",
        body: `Dear ${formData.full_name},

Thank you for booking an appointment with LC Diagnostic Center!

Appointment Details:
- Service: ${formData.service}
- Date: ${format(new Date(formData.preferred_date), 'MMMM d, yyyy')}
- Time: ${formData.preferred_time}
- Reference ID: ${appointment.id}
${hmoDetails}
Important Information:
• Please arrive 15 minutes before your appointment time
• Bring a valid ID and any relevant medical documents
• For HMO appointments, please bring your HMO card and a valid ID.
• For laboratory tests, fasting may be required (we'll contact you if needed)
• If you need to reschedule, please call us at +63 123 456 7890

Location: LC Diagnostic Center
123 Health Street, Medical District

We look forward to serving you!

Best regards,
LC Diagnostic Center Team
"Your Health is Our Concern"`
      });

      // Send notification email to admin
      await SendEmail({
        to: "admin@lcdiagnostic.com",
        subject: `New Appointment Booking (${formData.appointment_type})`,
        body: `New appointment booking received:

Patient: ${formData.full_name}
Contact: ${formData.contact_number}
Email: ${formData.email}
Service: ${formData.service}
Date: ${format(new Date(formData.preferred_date), 'MMMM d, yyyy')}
Time: ${formData.preferred_time}
Reference ID: ${appointment.id}
${hmoDetails}
Notes: ${formData.notes || 'None'}

Please confirm the appointment with the patient.`
      });

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appointment Booked Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for choosing LC Diagnostic Center. We've sent a confirmation 
                email with your appointment details.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Your Appointment Details:</h3>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Service:</span> {formData.service}</p>
                  <p><span className="font-medium">Date:</span> {format(new Date(formData.preferred_date), 'MMMM d, yyyy')}</p>
                  <p><span className="font-medium">Time:</span> {formData.preferred_time}</p>
                  {formData.appointment_type.startsWith("HMO") && (
                    <>
                      <p><span className="font-medium">Appointment Type:</span> {formData.appointment_type}</p>
                      <p><span className="font-medium">HMO Provider:</span> {formData.hmo_provider}</p>
                      <p><span className="font-medium">HMO Member ID:</span> {formData.hmo_member_id}</p>
                    </>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Please arrive 15 minutes before your appointment time. If you need to reschedule, 
                contact us at +63 123 456 7890.
              </p>
              <Button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    full_name: "",
                    contact_number: "",
                    email: "",
                    appointment_type: "Self-pay", // Reset to default
                    hmo_provider: "", // Reset
                    hmo_member_id: "", // Reset
                    service: "",
                    preferred_date: "",
                    preferred_time: "",
                    notes: ""
                  });
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl"
              >
                Book Another Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your diagnostic test with our experienced medical team. 
            We'll confirm your appointment within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="w-6 h-6 text-red-600" />
                  Appointment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) => handleInputChange('full_name', e.target.value)}
                          placeholder="Enter your full name"
                          className="mt-1"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="contact_number" className="text-sm font-medium">
                          Contact Number *
                        </Label>
                        <Input
                          id="contact_number"
                          value={formData.contact_number}
                          onChange={(e) => handleInputChange('contact_number', e.target.value)}
                          placeholder="+63 123 456 7890"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  {/* Appointment Type */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5" />
                      Appointment Type
                    </h3>
                    <div>
                      <Label htmlFor="appointment_type" className="text-sm font-medium">
                        Select Appointment Type *
                      </Label>
                      <Select value={formData.appointment_type} onValueChange={(value) => handleInputChange('appointment_type', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Self-pay">Self-pay</SelectItem>
                          <SelectItem value="HMO Consultation">HMO Consultation</SelectItem>
                          <SelectItem value="HMO Laboratory">HMO Laboratory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.appointment_type.startsWith("HMO") && (
                      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                        <h4 className="font-medium text-gray-800">HMO Information</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="hmo_provider" className="text-sm font-medium">
                              HMO Provider *
                            </Label>
                             <Select value={formData.hmo_provider} onValueChange={(value) => {
                                 // Clear member ID if provider changes and it's not "Other"
                                 if (value !== "Other") handleInputChange('hmo_member_id', '');
                                 handleInputChange('hmo_provider', value);
                             }}>
                                <SelectTrigger className="mt-1 bg-white">
                                  <SelectValue placeholder="Select your HMO" />
                                </SelectTrigger>
                                <SelectContent>
                                  {hmoProviders.map((provider) => (
                                    <SelectItem key={provider} value={provider}>
                                      {provider}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                          </div>
                          <div>
                            <Label htmlFor="hmo_member_id" className="text-sm font-medium">
                              HMO Member ID *
                            </Label>
                            <Input
                              id="hmo_member_id"
                              value={formData.hmo_member_id}
                              onChange={(e) => handleInputChange('hmo_member_id', e.target.value)}
                              placeholder="Enter your member ID"
                              className="mt-1 bg-white"
                              required
                            />
                          </div>
                        </div>
                         {formData.hmo_provider === "Other" && (
                            <div>
                                <Label htmlFor="hmo_provider_other" className="text-sm font-medium">
                                Please specify your HMO Provider
                                </Label>
                                <Input
                                id="hmo_provider_other"
                                value={formData.hmo_provider !== "Other" ? "" : formData.hmo_provider} // Ensure the field is empty if not "Other"
                                onChange={(e) => handleInputChange('hmo_provider', e.target.value)}
                                placeholder="Enter HMO provider name"
                                className="mt-1 bg-white"
                                required
                                />
                            </div>
                         )}
                      </div>
                    )}
                  </div>


                  {/* Service Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5" />
                      Service Required
                    </h3>
                    
                    <div>
                      <Label htmlFor="service" className="text-sm font-medium">
                        Select Service *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Appointment Scheduling */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Preferred Schedule
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferred_date" className="text-sm font-medium">
                          Preferred Date *
                        </Label>
                        <Select value={formData.preferred_date} onValueChange={(value) => handleInputChange('preferred_date', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            {getAvailableDates().map((date) => (
                              <SelectItem key={date} value={date}>
                                {format(new Date(date), 'EEEE, MMMM d, yyyy')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="preferred_time" className="text-sm font-medium">
                          Preferred Time *
                        </Label>
                        <Select value={formData.preferred_time} onValueChange={(value) => handleInputChange('preferred_time', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes" className="text-sm font-medium">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Any special requirements, or doctor's name for consultation..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl"
                  >
                    {isSubmitting ? "Booking Appointment..." : "Book Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-600">+63 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-gray-600">info@lcdiagnostic.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-none shadow-lg bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-900 mb-3">Important Notes</h4>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• Arrive 15 minutes early for your appointment</li>
                  <li>• Bring a valid government ID</li>
                  <li>• For HMO, bring your card and a valid ID</li>
                  <li>• Fasting may be required for some tests</li>
                  <li>• We'll call to confirm your appointment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
