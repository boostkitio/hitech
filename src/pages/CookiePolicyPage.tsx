import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | HiTech Aesthetics</title>
        <meta name="description" content="Cookie Policy for HiTech Aesthetics. Learn about the cookies we use and how to manage your cookie preferences." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-primary-600 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-4">Cookie Policy</h1>
            <p className="text-xl text-primary-100">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">

              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how HiTech Aesthetics ("we," "our," or "us") uses cookies and similar technologies on our website. This policy should be read in conjunction with our <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-800">Privacy Policy</Link>.
              </p>
              <p>
                By using our website, you consent to the use of cookies in accordance with this policy. If you do not agree with our use of cookies, you should adjust your browser settings or refrain from using our website.
              </p>

              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p>
                Cookies allow websites to:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Improve website functionality and user experience</li>
                <li>Analyse how you use the website</li>
                <li>Provide personalised content and advertisements</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>

              <h3>3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions such as page navigation, secure access to certain areas, and remembering items in your shopping cart. The website cannot function properly without these cookies.
              </p>
              <table className="min-w-full border-collapse border border-neutral-300 my-4">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">session_id</td>
                    <td className="border border-neutral-300 px-4 py-2">Maintains your session during your visit</td>
                    <td className="border border-neutral-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">cookie_consent</td>
                    <td className="border border-neutral-300 px-4 py-2">Remembers your cookie preferences</td>
                    <td className="border border-neutral-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <em>Note: Essential cookies do not require consent under UK law (PECR).</em>
              </p>

              <h3>3.2 Performance and Analytics Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, such as which pages are visited most often and whether visitors receive error messages. This helps us improve how our website works.
              </p>
              <table className="min-w-full border-collapse border border-neutral-300 my-4">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_ga</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - distinguishes users</td>
                    <td className="border border-neutral-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_gid</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - distinguishes users</td>
                    <td className="border border-neutral-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_gat</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - throttles request rate</td>
                    <td className="border border-neutral-300 px-4 py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>

              <h3>3.3 Functional Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalised features.
              </p>
              <table className="min-w-full border-collapse border border-neutral-300 my-4">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">preferred_location</td>
                    <td className="border border-neutral-300 px-4 py-2">Remembers your preferred clinic location</td>
                    <td className="border border-neutral-300 px-4 py-2">6 months</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">language_preference</td>
                    <td className="border border-neutral-300 px-4 py-2">Remembers your language choice</td>
                    <td className="border border-neutral-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h3>3.4 Marketing and Targeting Cookies</h3>
              <p>
                These cookies track your browsing activity and may be used to deliver advertisements more relevant to you and your interests. They may also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
              <table className="min-w-full border-collapse border border-neutral-300 my-4">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_fbp</td>
                    <td className="border border-neutral-300 px-4 py-2">Facebook Pixel - tracks conversions</td>
                    <td className="border border-neutral-300 px-4 py-2">3 months</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">fr</td>
                    <td className="border border-neutral-300 px-4 py-2">Facebook - delivers advertising</td>
                    <td className="border border-neutral-300 px-4 py-2">3 months</td>
                  </tr>
                </tbody>
              </table>

              <h2>4. Third-Party Cookies</h2>
              <p>
                Some cookies on our website are placed by third-party services. We use the following third-party services that may set cookies:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> To analyse website traffic and user behaviour</li>
                <li><strong>Facebook Pixel:</strong> To measure advertising effectiveness and deliver targeted ads</li>
                <li><strong>Instagram:</strong> For social media integration and embedded content</li>
              </ul>
              <p>
                These third parties have their own privacy and cookie policies. We recommend reviewing their policies:
              </p>
              <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Facebook Privacy Policy</a></li>
                <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Instagram Privacy Policy</a></li>
              </ul>

              <h2>5. How to Manage Cookies</h2>

              <h3>5.1 Cookie Consent Banner</h3>
              <p>
                When you first visit our website, you will see a cookie consent banner that allows you to accept or reject non-essential cookies. Your choice will be saved and you can change your preferences at any time by clicking the cookie settings link in the footer of our website.
              </p>

              <h3>5.2 Browser Settings</h3>
              <p>
                Most web browsers allow you to manage cookies through their settings. You can typically:
              </p>
              <ul>
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p>
                Here are links to cookie management guides for popular browsers:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>

              <h3>5.3 Impact of Blocking Cookies</h3>
              <p>
                Please note that blocking certain cookies may impact your experience on our website:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> The website may not function properly if these are blocked</li>
                <li><strong>Performance cookies:</strong> We won't be able to monitor and improve website performance</li>
                <li><strong>Functional cookies:</strong> You may need to re-enter preferences each time you visit</li>
                <li><strong>Marketing cookies:</strong> You may see less relevant advertisements</li>
              </ul>

              <h2>6. Other Tracking Technologies</h2>

              <h3>6.1 Web Beacons</h3>
              <p>
                We may use web beacons (also known as pixel tags or clear GIFs) in conjunction with cookies to track user activity, measure campaign effectiveness, and compile statistics about website usage.
              </p>

              <h3>6.2 Local Storage</h3>
              <p>
                We may use local storage technology to store information on your device to enhance website functionality and remember your preferences.
              </p>

              <h2>7. Do Not Track Signals</h2>
              <p>
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. At present, our website does not respond to DNT browser settings.
              </p>

              <h2>8. Mobile Devices</h2>
              <p>
                If you access our website through a mobile device, you may manage cookies through your device settings. Mobile operating systems typically provide options to limit tracking and reset advertising identifiers.
              </p>

              <h2>9. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of significant changes by posting a notice on our website. The "Last updated" date at the top of this page indicates when the policy was last revised.
              </p>

              <h2>10. Your Rights</h2>
              <p>
                Under UK law (PECR and UK GDPR), you have the right to:
              </p>
              <ul>
                <li>Be informed about cookies before they are placed on your device (except essential cookies)</li>
                <li>Accept or reject non-essential cookies</li>
                <li>Withdraw your consent at any time</li>
                <li>Access information about cookies stored on your device</li>
              </ul>

              <h2>11. Further Information</h2>
              <p>
                For more information about cookies and how to manage them, visit:
              </p>
              <ul>
                <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">AboutCookies.org</a></li>
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">AllAboutCookies.org</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">ICO - Cookies</a></li>
              </ul>

              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicyPage;
