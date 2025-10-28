import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold mb-8 text-balance">Terms of Service</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on GMB Platform for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Account Responsibilities</h2>
            <p className="mb-4">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring your use complies with applicable laws</li>
              <li>The accuracy of information you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Service Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify or discontinue the service at any time without notice. We shall not be
              liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall GMB Platform be liable for any damages arising out of the use or inability to use the
              materials on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to{" "}
              <a href="mailto:legal@gmbplatform.com" className="text-orange-500 hover:underline">
                legal@gmbplatform.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
