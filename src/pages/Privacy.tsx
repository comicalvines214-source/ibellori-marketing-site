import LegalLayout from "../components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="September 6, 2026">
      <h2>Overview</h2>
      <p>
        iBellori ("iBellori," "we," "us," or "our") provides a subscription software service
        that connects to the selling platforms you already use — currently Etsy — and turns
        that information into dashboards, reports, and AI-assisted guidance for your shop.
        This policy explains what information we collect, how we use it, who we share it
        with, how long we keep it, and the choices you have.
      </p>
      <p>
        This policy covers the iBellori website at ibellori.com and the iBellori application.
        If we add new platform connections or features, we will update this policy to reflect
        any new data we collect or new ways we use it.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Account information</strong> — when you create an iBellori account we
          collect your email address and a password, which we store only as a salted hash and
          never in readable form. We send a verification email before an account can be used,
          and we send password-reset emails when you request one.
        </li>
        <li>
          <strong>Etsy shop data from connected accounts</strong> — if you choose to connect
          an Etsy shop, we request your authorization through Etsy's own login and consent
          screen using OAuth. With that authorization we access the shop data needed to build
          your dashboards and reports: shop and listing details, orders and receipts,
          financial figures such as revenue and fees, and shop analytics. We never see or
          store your Etsy password. Where we offer connections to additional platforms such
          as Pinterest, the same approach applies: authorization happens on that platform's
          own consent screen, we receive only the account data needed for the features you
          use, and we never receive your password for that platform.
        </li>
        <li>
          <strong>Content you provide to AI features</strong> — the questions, instructions,
          and other text you enter into iBellori's AI-assisted features, together with the
          shop data those features need in order to answer, and the output generated in
          response.
        </li>
        <li>
          <strong>Billing information</strong> — your subscription plan, billing period,
          subscription status, renewal date, and the identifiers Stripe assigns to your
          customer and subscription records.{" "}
          <strong>iBellori does not collect or store full payment-card details.</strong> Card
          numbers are entered directly with Stripe and are never sent to or held by iBellori.
        </li>
        <li>
          <strong>Technical and security information</strong> — session cookies that keep you
          signed in, and server logs recording events such as sign-in attempts, connection
          activity, and errors. We use these to operate the service and to detect and
          investigate abuse.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To create and authenticate your account and keep you signed in.</li>
        <li>
          To build the dashboards, reports, and AI-assisted guidance you have asked for from
          your connected shop data.
        </li>
        <li>To take subscription payments and manage your plan.</li>
        <li>
          To send service messages you need, such as email verification, password resets, and
          notices about your account or subscription.
        </li>
        <li>To secure the service, prevent abuse, and diagnose faults.</li>
        <li>To meet legal, tax, and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your personal information or your connected shop data, we do not share
        it with advertisers, and we do not use it to advertise to you. We do not use your shop
        data or your AI prompts to train our own AI models.
      </p>

      <h2>How we use connected platform data</h2>
      <p>
        We use data from connected accounts for one purpose: to provide the features you have
        asked for inside iBellori. Where a platform's own policies restrict how we may store
        or retain data accessed through their API, we follow those restrictions. Some data is
        requested live at the time you view a page rather than stored by us — in those cases
        we query the platform directly each time and do not keep a permanent copy. Some
        results are cached briefly to keep the service responsive and to stay within platform
        rate limits.
      </p>

      <h2>Service providers we share information with</h2>
      <p>
        We share information only with the providers that make the service work, and only to
        the extent each one needs. We do not share your information with anyone else except
        where required by law or as described below.
      </p>
      <ul>
        <li>
          <strong>Etsy</strong> — to read the shop data you authorize. Your use of Etsy
          remains governed by Etsy's own terms and privacy policy. Where we offer a Pinterest
          connection, Pinterest is used on the same basis and remains governed by Pinterest's
          own terms and privacy policy.
        </li>
        <li>
          <strong>Stripe</strong> — for subscription checkout, billing, and payment
          processing, including through Stripe's managed payments service. Stripe collects and
          processes your payment details directly, under Stripe's own privacy policy.
        </li>
        <li>
          <strong>Anthropic</strong> — to power iBellori's AI-assisted features. The prompts
          and the shop context needed to answer them are sent to Anthropic's API to generate a
          response.
        </li>
        <li>
          <strong>Render</strong> — application hosting.
        </li>
        <li>
          <strong>Neon</strong> — the managed PostgreSQL database where your account and shop
          data is stored.
        </li>
        <li>
          <strong>Resend</strong> — delivery of account emails such as verification and
          password resets.
        </li>
        <li>
          <strong>Cloudflare</strong> — hosting and delivery of this website.
        </li>
      </ul>

      <h2>International processing</h2>
      <p>
        iBellori is operated from the United States, and the providers above may process and
        store information in the United States and in other countries where they operate. If
        you use iBellori from outside the United States, you understand that your information
        will be transferred to and processed in the United States, where data protection laws
        may differ from those in your own country.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep your account information for as long as your account exists. Connected shop
        data is kept while the connection is active and is removed when you disconnect the
        shop or close your account, except where a platform requires us to delete it sooner.
        Short-lived caches expire on their own within hours. Billing records are kept for as
        long as tax and accounting rules require, even after an account is closed. Security
        logs are kept for a limited period for troubleshooting and abuse prevention.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organizational measures appropriate to the
        sensitivity of the data we hold. Traffic is encrypted in transit, passwords are stored
        only as salted hashes, and platform authorization tokens are encrypted at rest. Access
        to your data inside iBellori is scoped to your own account. No method of storage or
        transmission is completely secure, but we work to protect your information
        appropriately and to correct problems promptly when we find them.
      </p>

      <h2>Disconnecting Etsy and deleting your data</h2>
      <p>
        You can disconnect a shop from iBellori at any time from the Integrations page in the
        app, and you can also revoke iBellori's access from your Etsy account settings.
        Disconnecting stops any further access and removes the stored authorization token and
        the shop data we hold for that connection. Where we offer a Pinterest connection, it
        can be disconnected the same way. To close your account and have the personal
        information we hold about you deleted, contact us and we will action the request,
        subject to records we are required to keep for legal, tax, or accounting reasons.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to access the personal information
        we hold about you, to ask us to correct it, to ask us to delete it, to receive a copy
        in a portable form, and to object to or restrict certain processing. You may also
        withdraw a platform authorization at any time as described above. To exercise any of
        these rights, contact us using the address below. We will not treat you differently
        for exercising them.
      </p>

      <h2>Cookies and sessions</h2>
      <p>
        The iBellori application sets an essential session cookie so that you stay signed in
        between pages; without it the service cannot work. This website may use minimal
        essential cookies required for it to function. We do not use cookies for advertising
        or cross-site tracking.
      </p>

      <h2>Children's privacy</h2>
      <p>
        iBellori is intended for business owners and professionals. It is not directed at
        children, we do not knowingly collect information from anyone under the age of 13, and
        we will delete such information if we discover we have collected it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        As iBellori's products grow, this policy will be updated to reflect new features and
        data practices. We will update the date at the top of this page whenever changes are
        made, and we will give notice of material changes through the service or by email.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy, want to exercise a privacy right, or want your
        account deleted, contact us at{" "}
        <a href="mailto:hello@ibellori.com">hello@ibellori.com</a>.
      </p>
    </LegalLayout>
  );
}
