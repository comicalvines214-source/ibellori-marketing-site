import LegalLayout from "../components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="August 2026">
      <h2>Overview</h2>
      <p>
        iBellori ("iBellori," "we," "us," or "our") builds dashboards and business
        intelligence tools that connect to platforms and data sources you already use, such
        as Etsy and Pinterest, and present that information back to you in a simplified form.
        This policy explains what information we collect, how we use it, and the choices you
        have.
      </p>
      <p>
        This policy currently covers our website and the early iBellori dashboard products we
        are developing. As those products expand, we will update this policy to reflect any
        new data we collect or new ways we use it.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information in a few ways:</p>
      <ul>
        <li>
          <strong>Information you give us directly</strong> — such as your name and email
          address when you contact us or sign up to use an iBellori product.
        </li>
        <li>
          <strong>Information from connected third-party accounts</strong> — if you choose to
          connect a platform such as Etsy or Pinterest to an iBellori dashboard, we request
          your authorization (via that platform's own login and consent screen, using OAuth)
          to access the specific account data needed to build your dashboard — for example,
          shop listings, orders, or Pin performance metrics. We never see or store your
          platform passwords; authorization is handled entirely by Etsy, Pinterest, or the
          relevant provider.
        </li>
        <li>
          <strong>Basic usage information</strong> — such as general, non-identifying
          information about how our website is used, to help us understand what's working.
        </li>
      </ul>

      <h2>How we use connected platform data</h2>
      <p>
        We use data from connected accounts for one purpose: to build the dashboard and
        morning brief you've asked for. We do not sell this data, share it with advertisers,
        or use it to advertise to you outside of the platform it came from.
      </p>
      <p>
        Where a platform's own policies restrict how we may store or retain data accessed
        through their API, we follow those restrictions. For example, some organic
        platform data may only be requested live at the time you view your dashboard, rather
        than stored by us — in those cases, we query the platform directly each time and do
        not keep a permanent copy.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website may use minimal, essential cookies required for the site to function
        properly (for example, remembering basic preferences). We do not currently use
        cookies for advertising or cross-site tracking.
      </p>

      <h2>How we protect your information</h2>
      <p>
        We take reasonable technical and organizational measures to protect the information
        we hold, including encrypting sensitive credentials such as authorization tokens for
        connected accounts. No method of storage or transmission is 100% secure, but we work
        to protect your information appropriately for the sensitivity of the data involved.
      </p>

      <h2>Your choices</h2>
      <p>
        You can revoke iBellori's access to a connected account (such as Etsy or Pinterest) at
        any time, either from within that platform's own account settings or by contacting us
        directly. You can also request that we delete information we hold about you, subject
        to any legal or operational requirements to retain certain records.
      </p>

      <h2>Children's privacy</h2>
      <p>
        iBellori is intended for business owners and professionals. It is not directed at
        children, and we do not knowingly collect information from anyone under the age of
        13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        As iBellori's products grow, this policy will be updated to reflect new features and
        data practices. We'll update the date at the top of this page whenever changes are
        made.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy or how your information is handled, contact
        us at{" "}
        <a href="mailto:hello@ibellori.com">hello@ibellori.com</a>.
      </p>
    </LegalLayout>
  );
}
