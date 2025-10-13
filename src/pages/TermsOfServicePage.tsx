import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | HiTech Aesthetics</title>
        <meta name="description" content="Terms of Service for HiTech Aesthetics. Please read these terms carefully before booking or undergoing any treatments." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-primary-600 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-primary-100">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">

              <h2>1. Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of our website and the provision of aesthetic treatments and services by HiTech Aesthetics ("we," "our," or "us"). By booking a consultation or treatment, or by using our website, you agree to be bound by these Terms.
              </p>
              <p>
                Our registered address is: 114 Camden Road, Tunbridge Wells, TN1 2QX, United Kingdom.
              </p>

              <h2>2. Services</h2>

              <h3>2.1 Treatment Provision</h3>
              <p>
                We provide non-surgical medical aesthetic treatments including, but not limited to, laser hair removal, injectable treatments, skin rejuvenation procedures, and facial treatments. All treatments are performed by qualified practitioners.
              </p>

              <h3>2.2 Consultation Requirement</h3>
              <p>
                A consultation is required before most treatments to assess your suitability, discuss your medical history, explain the procedure, and manage expectations. The practitioner reserves the right to refuse treatment if deemed medically inappropriate or unsafe.
              </p>

              <h3>2.3 Age Restrictions</h3>
              <p>
                You must be 18 years of age or older to receive aesthetic treatments at our clinic. Valid photographic identification may be requested to verify your age.
              </p>

              <h2>3. Booking and Appointments</h2>

              <h3>3.1 Appointment Booking</h3>
              <p>
                Appointments can be made online through our website, by telephone, or in person. You will receive a confirmation of your appointment via email or SMS.
              </p>

              <h3>3.2 Cancellation Policy</h3>
              <p>
                We require at least <strong>48 hours' notice</strong> for cancellations or rescheduling of appointments. For treatments lasting longer than 3 hours, we require <strong>72 hours' notice</strong>.
              </p>
              <p>
                Failure to provide adequate notice may result in:
              </p>
              <ul>
                <li>Loss of any deposit paid</li>
                <li>A cancellation fee equivalent to 50% of the treatment cost</li>
                <li>Requirement to pay a deposit for future bookings</li>
              </ul>

              <h3>3.3 Late Arrivals</h3>
              <p>
                If you arrive more than 15 minutes late for your appointment, we may need to reschedule or shorten your treatment time. The full treatment fee may still apply.
              </p>

              <h3>3.4 No-Shows</h3>
              <p>
                Failure to attend a scheduled appointment without prior notice will result in the full treatment fee being charged or forfeiture of any deposit paid.
              </p>

              <h2>4. Payment Terms</h2>

              <h3>4.1 Pricing</h3>
              <p>
                All prices are displayed in British Pounds Sterling (GBP) and include VAT where applicable. Prices are subject to change without prior notice, but any changes will not affect bookings already confirmed.
              </p>

              <h3>4.2 Payment Methods</h3>
              <p>
                We accept payment by cash, debit card, credit card, and bank transfer. Payment is required in full on the day of treatment unless alternative arrangements have been agreed in writing.
              </p>

              <h3>4.3 Deposits</h3>
              <p>
                We may require a deposit at the time of booking, particularly for course packages or lengthy treatments. Deposit amounts will be communicated at the time of booking and are non-refundable except as required by law.
              </p>

              <h3>4.4 Treatment Courses and Packages</h3>
              <p>
                Treatment courses and packages must be used within the specified timeframe (typically 12 months from purchase unless otherwise stated). Extensions may be granted at our discretion. Packages are non-refundable but may be transferred to alternative treatments of equal or lesser value within 14 days of purchase.
              </p>

              <h2>5. Medical Information and Consent</h2>

              <h3>5.1 Medical History</h3>
              <p>
                You must provide complete and accurate information about your medical history, medications, allergies, and previous aesthetic treatments. Failure to disclose relevant medical information may result in adverse reactions and will void any liability on our part.
              </p>

              <h3>5.2 Informed Consent</h3>
              <p>
                Before each treatment, you will be asked to sign a consent form confirming that you understand:
              </p>
              <ul>
                <li>The nature of the treatment</li>
                <li>Expected outcomes and limitations</li>
                <li>Potential risks and side effects</li>
                <li>Pre and post-treatment care instructions</li>
                <li>Alternative treatment options</li>
              </ul>

              <h3>5.3 Medical Conditions</h3>
              <p>
                Certain medical conditions, medications, or circumstances may make treatments unsuitable or require postponement. These include (but are not limited to):
              </p>
              <ul>
                <li>Pregnancy or breastfeeding</li>
                <li>Active infections or skin conditions</li>
                <li>Blood-thinning medications</li>
                <li>Autoimmune disorders</li>
                <li>Recent cosmetic procedures</li>
              </ul>

              <h3>5.4 Photography</h3>
              <p>
                With your written consent, we may take photographs before and after treatment for your medical records and to monitor progress. We will seek separate explicit consent before using any images for marketing purposes.
              </p>

              <h2>6. Treatment Outcomes and Limitations</h2>

              <h3>6.1 Results May Vary</h3>
              <p>
                Individual results from aesthetic treatments can vary significantly based on factors including age, skin type, lifestyle, and individual response. We cannot guarantee specific outcomes, and results shown in marketing materials or case studies are illustrative examples only.
              </p>

              <h3>6.2 Realistic Expectations</h3>
              <p>
                During your consultation, we will provide honest assessments of achievable results. We recommend treatments only when we believe they will benefit you and align with your aesthetic goals.
              </p>

              <h3>6.3 Multiple Sessions</h3>
              <p>
                Many treatments require multiple sessions for optimal results. The number of sessions needed will be discussed during your consultation.
              </p>

              <h2>7. Aftercare and Follow-Up</h2>

              <h3>7.1 Post-Treatment Instructions</h3>
              <p>
                You will receive specific aftercare instructions following your treatment. Following these instructions is essential for optimal results and minimising complications. Failure to follow aftercare advice may void any treatment guarantees.
              </p>

              <h3>7.2 Side Effects and Complications</h3>
              <p>
                Most aesthetic treatments carry some risk of side effects. Common, expected side effects (such as temporary redness, swelling, or bruising) will be explained before treatment. If you experience unexpected or severe side effects, contact us immediately.
              </p>

              <h3>7.3 Follow-Up Appointments</h3>
              <p>
                Follow-up appointments may be recommended to monitor your progress and ensure optimal results. These may be included in your treatment package or charged separately.
              </p>

              <h2>8. Refunds and Complaints</h2>

              <h3>8.1 Treatment Refunds</h3>
              <p>
                Due to the nature of aesthetic treatments, refunds are generally not available once a treatment has been performed. However, we take all concerns seriously and will investigate any complaints thoroughly.
              </p>

              <h3>8.2 Complaints Procedure</h3>
              <p>
                If you are dissatisfied with any aspect of our service:
              </p>
              <ol>
                <li>Contact us at <a href="mailto:info@hitechaesthetics.com">info@hitechaesthetics.com</a> or call 01892 338157</li>
                <li>Provide details of your concern in writing</li>
                <li>We will investigate and respond within 28 days</li>
                <li>If necessary, we will arrange a follow-up consultation</li>
              </ol>

              <h3>8.3 Resolution</h3>
              <p>
                Where appropriate, we may offer complimentary additional treatment, alternative procedures, or goodwill gestures to resolve concerns. Each case is assessed individually.
              </p>

              <h2>9. Liability and Indemnity</h2>

              <h3>9.1 Our Liability</h3>
              <p>
                We maintain appropriate professional indemnity insurance and take all reasonable care in providing treatments. Our liability is limited to the cost of the treatment provided, except where prohibited by law (such as for death or personal injury caused by our negligence).
              </p>

              <h3>9.2 Your Responsibility</h3>
              <p>
                You are responsible for:
              </p>
              <ul>
                <li>Providing accurate medical information</li>
                <li>Following pre and post-treatment instructions</li>
                <li>Informing us of any adverse reactions promptly</li>
                <li>Attending scheduled follow-up appointments</li>
              </ul>

              <h3>9.3 Third-Party Products</h3>
              <p>
                We are not liable for adverse reactions to third-party skincare products purchased from us if used contrary to provided instructions or if you failed to disclose relevant allergies.
              </p>

              <h2>10. Website Use</h2>

              <h3>10.1 Intellectual Property</h3>
              <p>
                All content on our website, including text, images, logos, and design elements, is protected by copyright and other intellectual property rights. You may not reproduce, distribute, or use any content without our prior written permission.
              </p>

              <h3>10.2 Website Accuracy</h3>
              <p>
                Whilst we strive to ensure information on our website is accurate and up-to-date, we cannot guarantee its completeness or accuracy. Treatment information is provided for general guidance only and does not constitute medical advice.
              </p>

              <h3>10.3 External Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of external sites.
              </p>

              <h2>11. Data Protection</h2>
              <p>
                Your personal information will be processed in accordance with our Privacy Policy and UK GDPR. By using our services, you consent to such processing. Please see our separate <a href="/privacy-policy">Privacy Policy</a> for full details.
              </p>

              <h2>12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on our website with an updated "Last updated" date. Continued use of our services following changes constitutes acceptance of the revised Terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.
              </p>

              <h2>15. Force Majeure</h2>
              <p>
                We will not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, pandemics, government restrictions, or power failures.
              </p>

              <h2>16. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p>
                <strong>HiTech Aesthetics</strong><br />
                114 Camden Road<br />
                Tunbridge Wells<br />
                TN1 2QX<br />
                United Kingdom<br />
                <br />
                Email: <a href="mailto:info@hitechaesthetics.com">info@hitechaesthetics.com</a><br />
                Phone: 01892 338157
              </p>

              <h2>17. Acceptance of Terms</h2>
              <p>
                By booking a consultation or treatment with HiTech Aesthetics, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfServicePage;
