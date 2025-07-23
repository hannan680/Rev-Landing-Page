
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-[#00E5D6] hover:text-[#00E5D6]/80 hover:bg-[#00E5D6]/10 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#00E5D6] mb-4" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            Privacy Policy
          </h1>
          <p className="text-[#D3D4FF] text-lg" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
            Effective Date: January 19, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-[#D3D4FF]" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                1. Company Information
              </h2>
              <p className="mb-4">
                This privacy policy applies to LeadLabsPlus DBA RevSquared AI ("we," "us," or "our"). We are committed to protecting your privacy and personal information.
              </p>
              <div className="bg-[#20215A]/30 p-4 rounded-lg border border-[#00E5D6]/20">
                <h3 className="text-lg font-semibold text-[#FEDD4D] mb-2">Contact Information:</h3>
                <ul className="space-y-1">
                  <li><strong>Company:</strong> LeadLabsPlus DBA RevSquared AI</li>
                  <li><strong>Email:</strong> [Insert Email]</li>
                  <li><strong>Phone:</strong> [Insert Phone]</li>
                  <li><strong>Address:</strong> [Insert Address]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-[#FEDD4D] mb-3">Personal Information</h3>
              <p className="mb-3">We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Business information</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FEDD4D] mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide AI voice and SMS services</li>
                <li>Schedule and conduct demos</li>
                <li>Communicate about our services</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                4. Communication Consent
              </h2>
              <h3 className="text-lg font-semibold text-[#FEDD4D] mb-3">Voice Calls and SMS</h3>
              <p className="mb-3">By providing your phone number and opting in to our services, you expressly consent to:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Receive voice calls from our AI agents and representatives</li>
                <li>Receive SMS/text messages related to our services</li>
                <li>Automated/robotic calls for demonstration, support, and service purposes</li>
                <li>Marketing communications via phone and SMS</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FEDD4D] mb-3">Consent Details</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You consent to receive calls and texts at the phone number provided, even if it's on a Do Not Call list</li>
                <li>Calls may be recorded for quality assurance and training purposes</li>
                <li>Message and data rates may apply for SMS communications</li>
                <li>You can opt out at any time by replying STOP to SMS messages or contacting us directly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                5. Information Sharing
              </h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
                <li>Business successors in case of merger or acquisition</li>
              </ul>
              <p className="font-semibold text-[#FEDD4D]">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                6. Data Security
              </h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                7. Your Rights
              </h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                8. Cookies and Tracking
              </h2>
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Improve website functionality</li>
                <li>Analyze website usage</li>
                <li>Provide personalized experiences</li>
                <li>Track marketing effectiveness</li>
              </ul>
              <p>You can control cookie settings through your browser.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                9. Third-Party Services
              </h2>
              <p>Our website and services may contain links to third-party websites or integrate with third-party services. This privacy policy does not apply to those external services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                10. Children's Privacy
              </h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                11. International Transfers
              </h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                12. Retention Period
              </h2>
              <p>We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                13. California Privacy Rights (CCPA)
              </h2>
              <p className="mb-3">California residents have additional rights under the California Consumer Privacy Act, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale of personal information</li>
                <li>Right to non-discrimination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                14. Updates to This Policy
              </h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                15. Contact Us
              </h2>
              <p className="mb-3">If you have questions about this privacy policy or our privacy practices, please contact us:</p>
              <div className="bg-[#20215A]/30 p-4 rounded-lg border border-[#00E5D6]/20">
                <p className="font-semibold text-[#FEDD4D] mb-2">LeadLabsPlus DBA RevSquared AI</p>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> [Insert Email]</li>
                  <li><strong>Phone:</strong> [Insert Phone]</li>
                  <li><strong>Address:</strong> [Insert Address]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                16. Opt-Out Instructions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#FEDD4D] mb-2">To Stop SMS Messages:</h3>
                  <p>Reply STOP to any SMS message</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#FEDD4D] mb-2">To Stop Voice Calls:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Contact us at [Insert Phone] or [Insert Email]</li>
                    <li>Request removal from our calling list</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#FEDD4D] mb-2">To Unsubscribe from Marketing:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Click unsubscribe links in emails</li>
                    <li>Contact us directly with your request</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-[#20215A]/50 p-6 rounded-lg border border-[#00E5D6]/30 mt-8">
              <p className="text-center font-semibold text-[#FEDD4D]">
                By using our services or providing your contact information, you acknowledge that you have read and agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
