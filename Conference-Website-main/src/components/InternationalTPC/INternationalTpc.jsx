import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import form from "../../assets/form.png";

const INternationalTpc = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div>
        <section className="py-12 md:py-12 container">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div>
              <h2 className="text-2xl neuton-bold md:text-3xl font-bold mb-4">
                Reviewer Qualifications
              </h2>
              <ul className="heading font-normal text-gray-500 space-y-2">
                <li>
                  <span className="font-semibold text-black">
                    Expertise in AI:
                  </span>{" "}
                  Reviewers must possess a deep understanding of the field of
                  Artificial Intelligence, with specific knowledge in areas
                  related to Responsible AI, Generative AI, and Explainable AI.
                  They should be familiar with the latest research trends,
                  methodologies, and challenges in these domains.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Academic and Professional Background:
                  </span>{" "}
                  Reviewers should have an advanced degree (typically a Ph.D.)
                  in Computer Science, AI, Machine Learning, or a closely
                  related field. Relevant academic publications, research
                  experience, or professional work in AI are essential.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Research and Publication Record:
                  </span>{" "}
                  A strong publication record in top-tier AI conferences or
                  journals is required. Reviewers should have experience in
                  conducting and publishing original research, particularly in
                  areas pertinent to the conference's themes.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Previous Reviewing Experience:
                  </span>{" "}
                  Prior experience as a peer reviewer for academic journals or
                  conferences is preferred. Reviewers should be familiar with
                  the review process, including evaluating the novelty,
                  significance, and technical quality of research papers.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Ethical and Responsible AI Knowledge:
                  </span>{" "}
                  Given the focus on Responsible AI, reviewers should be
                  well-versed in ethical considerations, including fairness,
                  accountability, transparency, and the societal impact of AI
                  technologies.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Commitment to High Standards:
                  </span>{" "}
                  Reviewers must demonstrate a commitment to maintaining high
                  academic and ethical standards. They should be diligent,
                  thorough, and unbiased in their evaluations, providing
                  constructive feedback to authors.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Professional Integrity and Confidentiality:
                  </span>{" "}
                  Reviewers are expected to uphold the highest standards of
                  professional integrity. They must maintain the confidentiality
                  of the submissions and avoid conflicts of interest that could
                  compromise the objectivity of their reviews.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Active Participation in the AI Community:
                  </span>{" "}
                  Active involvement in the AI research community, such as
                  participation in relevant conferences, workshops, or
                  AI-related projects, is highly desirable. Reviewers should be
                  engaged with ongoing developments in the field.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl neuton-bold md:text-3xl font-bold mb-4">
                Reviewer Guidelines
              </h2>
              <ul className="heading font-normal text-gray-500 space-y-2">
                <li>
                  <span className="font-semibold text-black">
                    Relevance and Contribution:
                  </span>{" "}
                  Evaluate whether the paper addresses significant issues in the
                  field of Responsible, Generative, and Explainable AI. The
                  paper should contribute original ideas, methods, or results
                  that advance the state of the art.
                </li>
                <li>
                  {" "}
                  <span className="font-semibold text-black">
                    Clarity and Organization:
                  </span>{" "}
                  Assess the clarity of the writing and the logical flow of the
                  paper. The paper should be well-organized, with clear sections
                  such as introduction, methodology, results, discussion, and
                  conclusion.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Technical Soundness:
                  </span>
                  Verify that the methods and experiments are rigorous and
                  scientifically sound. Reviewers should check for appropriate
                  use of algorithms, models, and statistical analyses, ensuring
                  that the results are reproducible.{" "}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold text-black">
                    Ethical Considerations:
                  </span>
                  Ensure that the paper addresses ethical implications relevant
                  to Responsible AI. Papers should include discussions on the
                  potential impact of the work, addressing issues like fairness,
                  transparency, accountability, and societal implications.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Generative and Explainable AI Focus:
                  </span>{" "}
                  For papers focusing on Generative and Explainable AI, assess
                  the effectiveness of the proposed methods in generating or
                  explaining AI outcomes. The paper should demonstrate the
                  utility and interpretability of the proposed approaches.
                </li>
                <li>
                  {" "}
                  <span className="font-semibold text-black">
                    Originality:
                  </span>{" "}
                  Evaluate the novelty of the paper. It should present original
                  research that is not a mere extension of previous work.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    References and Citations:
                  </span>{" "}
                  Check the adequacy and accuracy of references. The paper
                  should properly cite related work its contributions within the
                  context of existing research.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Length and Completeness:
                  </span>{" "}
                  Ensure the paper is within the length limits specified by the
                  conference, including all necessary components such as data,
                  figures, and appendices.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Review Process Integrity:
                  </span>{" "}
                  Maintain confidentiality of the submission and provide a fair
                  review. Avoid any conflicts of interest that could affect the
                  impartiality of the review.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Constructive Feedback:
                  </span>{" "}
                  Provide feedback that can help authors improve their work,
                  even if the paper is not accepted. Highlight strengths as well
                  as areas for improvement.
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl neuton-bold font-bold mb-4">
                Registration Form
              </h2>
              <div className="flex">
                <Link to="https://forms.zohopublic.in/rahulmohanty637/form/ReviewerForm/formperma/-FMox_h3vHZLZkoXlDCxdnD0e7aNICOifwJXlHRj2hI">
                  <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#a037c9] w-full">
                    Register Now
                  </button>
                  <div className="text-center mt-2">OR</div>
                  <img src={form} alt=""></img>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default INternationalTpc;
