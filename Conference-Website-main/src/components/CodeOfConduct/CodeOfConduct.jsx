import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const CodeOfConduct = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Code of Conduct</h1>
        <p className="mb-4">
          ResGenXAI-2025 is dedicated to fostering an environment that promotes
          the free exchange of ideas and respects the rights of all
          participants. All attendees of ResGenXAI-2025 events, including
          workshops, tutorials, exhibitions, and poster sessions, are expected
          to enjoy a welcoming and harassment-free atmosphere.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Harassment Policy</h2>
        <p className="mb-4">
          Harassment of any kind is strictly prohibited, including but not
          limited to actions based on gender, gender identity and expression,
          sexual orientation, disability, physical appearance, race, age,
          religion, or any other protected status under the laws applicable in
          the host location. Prohibited conduct includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Abusive, offensive, or degrading language.</li>
          <li>Intimidation, stalking, or harassing photography/recording.</li>
          <li>
            Inappropriate physical contact, sexual imagery, or unwelcome sexual
            advances.
          </li>
        </ul>
        <p className="mb-4">
          Violations will be addressed promptly. Participants must cease any
          inappropriate behavior immediately upon request.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Expectations for Exhibitors and Speakers
        </h2>
        <p className="mb-4">
          Exhibitors are prohibited from displaying sexualized images,
          activities, or materials in their booths and must avoid sexualized
          clothing or environments. Speakers should refrain from using sexual
          language or imagery unless it serves a clear scientific purpose and
          must avoid language or visuals that constitute harassment.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Reporting Violations
        </h2>
        <p className="mb-4">
          Any instances of harassment or violations should be reported to the
          conference ombud via email at{" "}
          <a
            href="mailto:resgenxai2025@cutm.ac.in"
            className="text-blue-500 underline"
          >
            resgenxai2025@cutm.ac.in
          </a>
          . Reports will be treated with confidentiality. The ombud will
          investigate and determine findings based on a preponderance of
          evidence. Recommended sanctions, if violations are proven, will be
          reviewed by the conference standards committee, whose decision will be
          final.
        </p>
        <p className="mb-4">Sanctions may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Exclusion from specific or all conference events.</li>
          <li>Removal of material from the online conference record.</li>
          <li>Referrals to the violator’s institution or employer.</li>
          <li>Referral to law enforcement.</li>
        </ul>
        <p className="mb-4">
          Please note that registration fees and expenses will not be refunded
          in cases of proven violations.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Commitment to Equity, Diversity, and Inclusion
        </h2>
        <p className="mb-4">
          Our goal is to ensure every participant enjoys equal opportunities to
          engage in ResGenXAI-2025 activities, free from discrimination or
          harassment. We encourage diverse representation in all conference
          roles, including technical committees, steering groups, and
          organizational teams.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Event Conduct and Safety
        </h2>
        <p className="mb-4">
          ResGenXAI-2025 aligns with a commitment to providing safe, productive,
          and welcoming environments for all participants. Discrimination,
          harassment, or bullying in any form will not be tolerated.
        </p>
        <p className="mb-4">
          Reports of unsafe or inappropriate behavior can be directed to on-site
          staff, security personnel, venue management, or via email to{" "}
          <a
            href="mailto:resgenxai2025@cutm.ac.in"
            className="text-blue-500 underline"
          >
            resgenxai2025@cutm.ac.in
          </a>
          .
        </p>
        <p>
          ResGenXAI-2025 remains committed to advancing knowledge in AI while
          ensuring respect, diversity, and inclusion in every aspect of the
          conference.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CodeOfConduct;
