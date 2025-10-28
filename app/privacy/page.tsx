import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-balance">Privacy Policy</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, including name, email address, business information,
              and Google My Business account data when you connect your GMB accounts to our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not share your personal information with third parties except as described in this policy. We may
              share information with service providers who perform services on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and
              unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information at any time through your account
              settings or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@gmbplatform.com" className="text-orange-500 hover:underline">
                privacy@gmbplatform.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
