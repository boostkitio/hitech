import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | HiTech Aesthetics</title>
        <meta name="description" content="Privacy Policy for HiTech Aesthetics. Learn how we collect, use, and protect your personal information in accordance with UK GDPR." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-primary-600 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-white">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">

              <h2>1. Introduction</h2>
              <p>
                HiTech Aesthetics ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p>
                Our registered address is: 114 Camden Road, Tunbridge Wells, TN1 2QX, United Kingdom.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li><strong>Identity Data:</strong> Name, date of birth, gender</li>
                <li><strong>Contact Data:</strong> Address, email address, telephone number</li>
                <li><strong>Medical Data:</strong> Medical history, health conditions, allergies, medications, previous aesthetic treatments, treatment notes, photographs (before/after images), and consultation records</li>
                <li><strong>Financial Data:</strong> Payment card details, billing address</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, cookie data</li>
                <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
              </ul>

              <h3>2.2 How We Collect Information</h3>
              <p>We collect information through:</p>
              <ul>
                <li>Consultation forms and treatment booking forms</li>
                <li>Face-to-face consultations and treatments</li>
                <li>Telephone and email communications</li>
                <li>Our website and online booking systems</li>
                <li>Social media interactions</li>
                <li>CCTV footage (for security purposes)</li>
              </ul>

              <h2>3. How We Use Your Information</h2>

              <h3>3.1 Lawful Basis for Processing</h3>
              <p>We process your personal data under the following lawful bases:</p>
              <ul>
                <li><strong>Consent:</strong> For marketing communications and sharing before/after photographs</li>
                <li><strong>Contract:</strong> To provide aesthetic treatments and services you have requested</li>
                <li><strong>Legal Obligation:</strong> To comply with healthcare record-keeping requirements</li>
                <li><strong>Legitimate Interests:</strong> For clinic security, fraud prevention, and improving our services</li>
              </ul>

              <h3>3.2 Purposes</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Provide safe and effective aesthetic treatments</li>
                <li>Maintain accurate medical records</li>
                <li>Schedule and manage appointments</li>
                <li>Process payments and maintain financial records</li>
                <li>Communicate with you about your treatments</li>
                <li>Send appointment reminders and follow-up care information</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Ensure clinic security through CCTV monitoring</li>
              </ul>

              <h2>4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy:
              </p>
              <ul>
                <li><strong>Medical Records:</strong> 10 years from the date of your last treatment (in line with Care Quality Commission guidelines)</li>
                <li><strong>Financial Records:</strong> 7 years (for tax and accounting purposes)</li>
                <li><strong>Marketing Data:</strong> Until you withdraw consent or we determine it is no longer relevant</li>
                <li><strong>CCTV Footage:</strong> 30 days unless required for security investigations</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data:
              </p>
              <ul>
                <li>Encrypted, password-protected electronic records</li>
                <li>Access controls limiting staff access to necessary information only</li>
                <li>Secure, locked storage for physical records</li>
                <li>Regular staff training on data protection</li>
                <li>HTTPS encryption for our website</li>
                <li>Secure payment processing systems</li>
                <li>Regular security audits and updates</li>
              </ul>

              <h2>6. Sharing Your Information</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul>
                <li><strong>Healthcare Professionals:</strong> Your GP or specialists (with your consent)</li>
                <li><strong>Service Providers:</strong> Payment processors, appointment booking systems, email service providers (under strict data processing agreements)</li>
                <li><strong>Insurance Companies:</strong> If you make an insurance claim (with your consent)</li>
                <li><strong>Legal Authorities:</strong> If required by law or to protect our legal rights</li>
              </ul>
              <p>
                We will never sell your personal information to third parties.
              </p>

              <h2>7. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul>
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong>Right to Restriction:</strong> Limit how we process your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:info@hitechaesthetics.com">info@hitechaesthetics.com</a> or call 01892 338157.
              </p>

              <h2>8. Cookies and Website Analytics</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. For detailed information about the cookies we use and how to manage them, please see our <Link to="/cookie-policy" className="text-primary-600 hover:text-primary-800">Cookie Policy</Link>.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.
              </p>

              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>

              <h2>11. International Transfers</h2>
              <p>
                Your personal data is processed and stored within the United Kingdom. We do not transfer personal data outside the UK unless necessary for service provision and with appropriate safeguards in place.
              </p>

              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or by email. The "Last updated" date at the top of this page indicates when the policy was last revised.
              </p>

              <h2>13. Complaints</h2>
              <p>
                If you have concerns about how we handle your personal data, please contact us first at <a href="mailto:info@hitechaesthetics.com">info@hitechaesthetics.com</a>. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO):
              </p>
              <p>
                Information Commissioner's Office<br />
                Wycliffe House<br />
                Water Lane<br />
                Wilmslow<br />
                Cheshire SK9 5AF<br />
                Tel: 0303 123 1113<br />
                Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>
              </p>

              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
