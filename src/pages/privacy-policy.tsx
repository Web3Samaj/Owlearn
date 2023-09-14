import Link from 'next/link'
import SEOTags from '../components/SEOTags'

const PrivacyPolicy = () => {
  return (
    <div className="w-[70%] bg-black text-white mx-auto">
      <SEOTags title={`Privacy Policy | Owlearn`} />

      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{' '}
          Back
        </Link>
        <h1 className="text-3xl font-bold pb-6">Privacy Policy for Owlearn</h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: 'sans-serif' }}
        >
          {`Privacy Policy for Owlearn

Last Updated: September 14, 2023

Welcome to Owlearn, a Decentralized Edtech Platform dedicated to helping individuals learn about crypto projects efficiently. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.

Information We Collect

1. Personal Data: When you use Owlearn, we may collect your name, email address, and payment information for the sole purpose of order processing.

2. Non-Personal Data: We may also use web cookies to gather non-personal information about your browsing habits to enhance your experience on our platform.

Purpose of Data Collection

We collect your personal information solely for the purpose of processing orders and ensuring the best user experience possible. We use non-personal data to improve our website and services.

Data Sharing

We do not share your personal data with any third parties. Your information is securely stored and only accessed for order processing and website improvement purposes by authorized personnel.

Children's Privacy

We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with their personal information, please contact us at owlearn@gmail.com, and we will promptly delete this data.

Updates to the Privacy Policy

We may update this Privacy Policy periodically. Users will be informed of any changes via email or by an announcement on our website. It is your responsibility to review this policy to stay informed about how we are protecting your data.

Contact Information

If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at owlearn@gmail.com.

Thank you for choosing Owlearn for your crypto education needs. We are dedicated to ensuring your privacy and providing you with a secure and enjoyable learning experience.`}
        </pre>
      </div>
    </div>
  )
}

export default PrivacyPolicy
