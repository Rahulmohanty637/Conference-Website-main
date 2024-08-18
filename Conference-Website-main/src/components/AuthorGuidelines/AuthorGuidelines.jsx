/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AuthorGuidelines = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl neuton-bold font-bold text-gray-800 mb-6">
          Author Guidelines
        </h1>
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Instructions for Authors
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed">
            All papers must be submitted electronically in PDF format through
            the conference submission system by the specified deadlines. The
            submission process includes multiple stages, from initial submission
            to final camera-ready paper. Authors must adhere to the guidelines
            below to ensure their paper is eligible for review and publication.
          </p>
        </section>
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Paper Submission Guidelines
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">Manuscript Templates:</strong>{" "}
            Authors must use the IEEE conference templates to ensure correct
            formatting. Templates are available in both LaTeX and Microsoft Word
            formats for U.S. Letter Size. These templates can be found at:
            <a
              href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
              className="text-blue-600 underline ml-1"
            >
              IEEE Templates
            </a>
            .
            <br />
            <strong className="text-gray-700">Note:</strong> The LaTeX template
            does not support keywords. If using LaTeX, do not include keywords
            in your paper.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">Paper Length:</strong> The paper
            should be up to 6 pages in length, including figures, tables, and
            references.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">Formatting Requirements:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Paper Size: U.S. Letter (8.5" x 11").</li>
              <li>
                Font and Spacing: Use 10-point Times New Roman font,
                double-column, single-spaced.
              </li>
              <li>
                Margins: Top: 1" (25mm) on the first page, 0.75" (19mm)
                thereafter; Left, Right, and Bottom: 0.75" (19mm).
              </li>
              <li>
                No Page Numbers: Do not include page numbers; they will be added
                by the conference organizers.
              </li>
            </ul>
          </p>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">Plagiarism Check:</strong> All
            submissions will be checked for plagiarism using the IEEE CrossCheck
            system. Papers with significant overlap with the authors' previous
            work or other publications will be rejected.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed">
            <strong className="text-gray-700">
              Important Submission Checks:
            </strong>{" "}
            Ensure the following before submitting:
            <ul className="list-disc list-inside ml-4">
              <li>
                The paper is in U.S. Letter format (A4 or other formats are not
                accepted).
              </li>
              <li>The paper is within the 6-page limit.</li>
            </ul>
          </p>
        </section>
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Camera-Ready Paper Submissions
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">
              Final Submission Deadline:
            </strong>{" "}
            The final camera-ready manuscript must be submitted no later than
            June 30, 2025. Late submissions may not be included in the
            conference proceedings.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            <strong className="text-gray-700">IEEE Copyright Form:</strong> A
            signed IEEE Copyright Form is required for each accepted paper. This
            form must be completed and submitted along with the final paper. The
            ResgenXAI-2025 conference will use the IEEE Electronic Copyright
            (eCF) service for this process. The form can be accessed via the
            link provided after submitting your final paper.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed">
            <strong className="text-gray-700">Publication Requirements:</strong> An accepted paper will be
            published in the conference proceedings and included in IEEE Xplore
            only if:
            <ul className="list-disc list-inside ml-4">
              <li>The final camera-ready version is submitted.</li>
              <li>The corresponding IEEE Copyright Form is completed.</li>
              <li>
                At least one author registers for the conference at the full
                member or non-member rate.
              </li>
              <li>The paper is presented at the conference.</li>
            </ul>
          </p>
        </section>
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Policy on Plagiarism
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed">
            All papers submitted to ResGenXAI-2025 will be checked for
            plagiarism through the IEEE CrossCheck system. Papers with high
            similarity, including self-plagiarism, will be automatically
            rejected and will not be reviewed. Even if accepted, papers found to
            have plagiarism issues may be excluded from the proceedings. For
            further details, refer to the
            <a
              href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
              className="text-blue-600 underline"
            >
              IEEE Plagiarism Information Center
            </a>
            .
          </p>
        </section>
        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Copyright Clearance Code
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The appropriate copyright notice must appear at the bottom of the
            first page of each paper, aligned with the left column margin. The
            correct notice depends on the authors’ affiliations:
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>U.S. Government Work:</strong> U.S. Government work not
                protected by U.S. copyright.
              </li>
              <li>
                <strong>Crown Government Work (UK, Canada, Australia):</strong>{" "}
                978-1-6654-4407-1/21/$31.00 ©2021 Crown.
              </li>
              <li>
                <strong>European Union Work:</strong>{" "}
                978-1-6654-4407-1/21/$31.00 ©2021 European Union.
              </li>
              <li>
                <strong>All Other Papers:</strong> 978-1-6654-4407-1/21/$31.00
                ©2021 IEEE.
              </li>
            </ul>
          </p>
        </section> */}
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            IEEE PDF eXpress
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed mb-4">
            All final manuscripts must be generated using the IEEE PDF eXpress
            tool to ensure compatibility with IEEE Xplore. To create your IEEE
            Xplore-compatible PDF file:
          </p>
          <p className="text-gray-500 font-normal leading-relaxed">
            <strong className="text-gray-700">Create an IEEE PDF eXpress Account:</strong>{" "}
            <a
              href="https://ieee-pdf-express.org/"
              className="text-blue-600 underline"
            >
              IEEE PDF eXpress
            </a>
            <br />
            <strong className="text-gray-700">Conference ID:</strong> Will be provided
            <br />
            <strong className="text-gray-700">Steps:</strong>
            <ul className="list-decimal list-inside ml-4">
              <li>Register as a new user if accessing for the first time.</li>
              <li>Upload the source file of your paper.</li>
              <li>Receive the IEEE Xplore-compatible PDF via email.</li>
              <li>
                Upload the received PDF to the conference system without any
                changes to the file or filename.
              </li>
            </ul>
          </p>
        </section>
        <section className="mb-8 heading">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Additional Resources
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed">
            The{" "}
            <a
              href="https://www.ieee.org/publications/authors/author-center.html"
              className="text-blue-600 underline"
            >
              IEEE Author Center
            </a>{" "}
            offers guidance and best practices for authors involved in IEEE
            conferences. This resource covers topics such as ethics, paper
            structure, peer review, and publication essentials.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AuthorGuidelines;
