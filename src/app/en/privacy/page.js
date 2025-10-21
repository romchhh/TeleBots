import { useTranslation } from '../../../hooks/useTranslation';

export const metadata = {
  title: 'Privacy Policy | TeleBots',
  description: 'TeleBots Privacy Policy regarding the processing of users\' personal data and protection of their privacy.',
  alternates: {
    canonical: 'https://telebots.site/en/privacy',
    languages: {
      'uk': 'https://telebots.site/privacy',
      'en': 'https://telebots.site/en/privacy',
      'pl': 'https://telebots.site/pl/privacy',
      'ru': 'https://telebots.site/ru/privacy',
      'x-default': 'https://telebots.site/privacy',
    },
  },
  openGraph: {
    title: 'Privacy Policy | TeleBots',
    description: 'TeleBots Privacy Policy regarding the processing of users\' personal data and protection of their privacy.',
    url: 'https://telebots.site/en/privacy',
    siteName: 'TeleBots',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. General Provisions</h2>
          <p className="text-gray-700">
            This Privacy Policy defines the procedure for processing and protecting information about individuals who use TeleBots services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
          <p className="text-gray-700">
            We collect the following information:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Name and contact information</li>
            <li>Data about the use of our services</li>
            <li>Technical information about devices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
          <p className="text-gray-700">
            The collected information is used for:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Providing and improving our services</li>
            <li>Communication with users</li>
            <li>Analysis and optimization of service operation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Information Protection</h2>
          <p className="text-gray-700">
            We take all necessary measures to protect your personal information from unauthorized access, modification, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. User Rights</h2>
          <p className="text-gray-700">
            Users have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Access their personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of their data</li>
            <li>Withdraw consent for personal data processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
          <p className="text-gray-700">
            For privacy policy related questions, you can contact us through our social media or email.
          </p>
        </section>
      </div>
    </div>
  );
} 