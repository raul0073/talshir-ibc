import { ModalType } from "@/components/Root/Footer/Modal";

 const PRIVACY_POLICY = `**Privacy Policy** 

**Effective Date:** [Date]

**1. Introduction**
Welcome to [Website Name]. 
We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. 
This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.

**2. Information We Collect**
We may collect the following types of information:
- **Personal Information:** Name, email address, phone number, and other contact details you provide when filling out forms on our website.
- **Usage Data:** Information on how you interact with our website, including IP addresses, browser type, pages visited, and time spent on the website.
- **Cookies and Tracking Technologies:** Data collected through cookies and similar technologies to enhance your browsing experience.

**3. How We Use Your Information**
We use the information collected for the following purposes:
- To provide and improve our services.
- To respond to your inquiries and provide customer support.
- To send newsletters or promotional materials, if you have opted in.
- To analyze website usage and improve user experience.
- To comply with legal obligations.

**4. Sharing Your Information**
We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:
- Service providers who help us operate the website and provide services.
- Legal authorities if required by law or to protect our rights.

**5. Data Security**
We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse.

**6. Your Rights**
You have the right to:
- Access the personal information we hold about you.
- Request corrections to inaccurate information.
- Request the deletion of your personal information.
- Object to the processing of your data in certain circumstances.

To exercise these rights, please contact us at [Email Address].

**7. Third-Party Links**
Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.

**8. Changes to This Policy**
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.

**9. Contact Us**
If you have any questions or concerns about this Privacy Policy, please contact us at:
[Website Name]
[Email Address]
[Phone Number]
`;
 const TERMS_AND_CONDITIONS = `Terms and Conditions content here...`;
 const ACCESSIBILITY = `Accessibility content here...`;
 const IMPRESSIUM = `Impressium content here...`;
 export const policyMap: Record<ModalType, string> = {
    terms: TERMS_AND_CONDITIONS,
    accessibility: ACCESSIBILITY,
    privacy: PRIVACY_POLICY,
    impressum: IMPRESSIUM,
  };