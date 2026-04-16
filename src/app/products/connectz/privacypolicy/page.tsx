import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Privacy Policy — Connectz | Sub Spatial Studio",
  description:
    "Privacy policy for Connectz. All user data is stored exclusively in Apple CloudKit — no servers, no tracking, no advertising.",
}

// ─── Section helpers ──────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-3 pb-2 border-b border-white/10">
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base sm:text-lg font-semibold text-[#99D6EA] mt-6 mb-2">
      {children}
    </h3>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-3">
      {children}
    </p>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-400 text-sm leading-relaxed mb-3 pl-4 border-l-2 border-[#47B5DD]/40 italic">
      {children}
    </p>
  )
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mb-4 ml-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#47B5DD]/70 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConnectzPrivacyPolicyPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/products/connectz"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors mb-8 group"
        >
          <svg
            aria-hidden
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
          Back to Connectz
        </Link>

        {/* Header card */}
        <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-10 mb-5">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/brand/connectz-logo.svg"
              alt="Connectz"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
            />
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-wider mb-0.5">Connectz</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Privacy Policy
              </h1>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-sky-300/40 via-blue-500/40 to-transparent mb-5" />
          <p className="text-neutral-400 text-xs sm:text-sm">Last updated: April 2026</p>
        </div>

        {/* Policy content card */}
        <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-10">

          {/* Overview */}
          <Body>
            Connectz is built on Apple&apos;s iCloud infrastructure. We do not run our own servers, sell
            your data, share it with advertisers, or use it for anything beyond making the app work
            for you. Everything described below lives inside Apple&apos;s CloudKit service.
          </Body>

          {/* ── What We Collect ── */}
          <SectionHeading>What We Collect and Why</SectionHeading>

          <SubHeading>Your Profile</SubHeading>
          <Body>
            When you sign in with Apple, we store your first name and last name in your Connectz
            profile. We do not collect your Apple ID email address. We also store your profile
            photo if you choose to upload one. This is entirely optional.
          </Body>
          <Note>
            Why: So other users can identify you by name and photo on the map and in their
            connections list.
          </Note>

          <SubHeading>Activity Posts</SubHeading>
          <Body>When you post an activity, we store:</Body>
          <Ul
            items={[
              "The message you write (e.g. 'Working from the coffee shop')",
              "The location name you choose (e.g. 'Brooklyn, New York')",
              "The precise coordinates of that location (latitude and longitude, resolved automatically from the place you select)",
              "The category you pick (Work, Leisure, or Adventure)",
              "The time you posted it",
            ]}
          />
          <Note>
            Why: So your connections can see where you are and what you&apos;re up to on the globe map.
          </Note>
          <Body>
            <strong className="text-white">Important:</strong> When you choose a location in
            Connectz, the app stores the exact GPS coordinates of that place — not just the name.
            These coordinates are visible to your connections. You are shown a consent notice the
            first time you post an activity, and you can delete any activity at any time from your
            Profile tab.
          </Body>

          <SubHeading>Connections</SubHeading>
          <Body>
            When you add someone as a connection (via the Connectz+ nearby share feature), we store
            a link between your profile and theirs. This is how the app knows whose activities and
            locations to show you on the map.
          </Body>
          <Body>
            We also store whether you have chosen to hide your status from a specific connection.
            That setting is only visible to you.
          </Body>
          <Note>Why: To build and maintain your friends list within the app.</Note>

          <SubHeading>Travel Guides</SubHeading>
          <Body>If you create a travel guide, we store:</Body>
          <Ul
            items={[
              "The city name and its coordinates",
              "The category of your guide (e.g. Dinner, Cafes, Sightseeing)",
              "Up to 10 location names, your personal notes about each, and the precise coordinates of each place",
              "A count of upvotes your guide has received, and which users have upvoted it",
            ]}
          />
          <Note>
            Why: To share your local knowledge with your connections and display your guide pins on
            the map.
          </Note>

          <SubHeading>Nearby Share (Connectz+)</SubHeading>
          <Body>
            When you use the Connectz+ feature to add a nearby friend, your device temporarily
            shares your name, profile photo, and current activity status directly with their device
            over an encrypted local Bluetooth/Wi-Fi connection. This data is never sent to our
            servers or stored anywhere beyond what is already in your CloudKit profile. Once the
            exchange is complete, no temporary data is retained.
          </Body>

          {/* ── How Data Is Stored ── */}
          <SectionHeading>How Your Data Is Stored</SectionHeading>
          <Body>
            All Connectz data is stored in Apple&apos;s iCloud CloudKit service. Apple operates this
            infrastructure in the United States. We do not operate independent servers or databases.
          </Body>
          <Body>
            Because Connectz is a social app where connections see each other&apos;s information, your
            profile, activities, and guides are stored in a shared CloudKit database accessible to
            other Connectz users you are connected with. Data is not accessible to random members
            of the public — only users who are in your connections list can see your activity and
            location.
          </Body>
          <Body>
            For more on how Apple handles CloudKit data, see{" "}
            <a
              href="https://www.apple.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#47B5DD] hover:text-[#99D6EA] transition-colors underline underline-offset-2"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </Body>

          {/* ── What We Do Not Do ── */}
          <SectionHeading>What We Do Not Do</SectionHeading>
          <Ul
            items={[
              "We do not sell your data to anyone",
              "We do not share your data with advertisers or marketing platforms",
              "We do not use third-party analytics or tracking tools",
              "We do not collect your email address",
              "We do not access your device's GPS — all location data is chosen manually by you within the app",
              "We do not run background location tracking",
            ]}
          />

          {/* ── Retention ── */}
          <SectionHeading>How Long We Keep Your Data</SectionHeading>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-2.5 pr-6 text-neutral-300 font-semibold whitespace-nowrap">Data</th>
                  <th className="py-2.5 text-neutral-300 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {[
                  ["Your profile", "Until you delete your account"],
                  ["Activity posts", "Until you delete them individually, or you delete your account"],
                  ["Connections", "Until you remove them, or you delete your account"],
                  ["Travel guides", "Until you delete them, or you delete your account"],
                  ["Upvotes", "Until the guide or your account is deleted"],
                ].map(([data, retention]) => (
                  <tr key={data} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 pr-6 text-white whitespace-nowrap align-top">{data}</td>
                    <td className="py-2.5 text-neutral-400 align-top">{retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Body>
            When you delete your account, all of the above is permanently removed from CloudKit.
          </Body>

          {/* ── Your Rights ── */}
          <SectionHeading>Your Rights</SectionHeading>
          <Ul
            items={[
              "Delete your account: Open the Profile tab → scroll to the bottom → tap Delete Account. This permanently removes your profile, all activity posts, connections, guides, and upvotes from CloudKit. This action cannot be undone.",
              "Delete individual activities: Tap any activity in your Profile tab to remove it.",
              "Remove a connection: Swipe left on any connection in the Connectionz tab and tap Delete.",
              "Update your profile: Edit your name or photo at any time in the Profile tab.",
            ]}
          />
          <Body>
            If you have questions about your data or need assistance exercising any of these rights,
            contact us at the email below.
          </Body>

          {/* ── Children ── */}
          <SectionHeading>Children&apos;s Privacy</SectionHeading>
          <Body>
            Connectz is not directed at children under 13. We do not knowingly collect personal
            information from anyone under 13. If you believe a child under 13 has created an
            account, please contact us and we will remove the data promptly.
          </Body>

          {/* ── Changes ── */}
          <SectionHeading>Changes to This Policy</SectionHeading>
          <Body>
            If we make material changes to this policy, we will update the &ldquo;Last updated&rdquo; date at
            the top of this page. Continued use of the app after changes are posted constitutes
            acceptance of the updated policy.
          </Body>

          {/* ── Contact ── */}
          <SectionHeading>Contact</SectionHeading>
          <Body>For privacy questions or data requests:</Body>
          <div className="rounded-2xl border border-[#264E9B]/30 bg-[#264E9B]/10 p-5 mt-2">
            <div className="space-y-1 text-sm text-neutral-300">
              <p><span className="text-neutral-500 w-24 inline-block">App</span> Connectz</p>
              <p><span className="text-neutral-500 w-24 inline-block">Developer</span> Sub Spatial Studio</p>
              <p>
                <span className="text-neutral-500 w-24 inline-block">Email</span>
                <a
                  href="mailto:creative@subspatial.studio"
                  className="text-[#47B5DD] hover:text-[#99D6EA] transition-colors"
                >
                creative@subspatial.studio
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Footer note */}
        <p className="text-center text-neutral-600 text-xs mt-8 pb-4">
          © {new Date().getFullYear()}Sub Spatial Studio LLC · Connectz Privacy Policy
        </p>
      </div>
    </div>
  )
}
