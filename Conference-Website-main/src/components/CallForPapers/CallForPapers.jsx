import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ItemList = () => {
  const PaperData = [
    {
      id: 1,
      name: "Responsible AI Track:",
      items: {
        content: [
          "Ethical AI Frameworks and Principles",
          "Fairness, Bias, and Diversity in AI",
          "AI Safety, Robustness, and Reliability",
          "Privacy-Preserving AI and Data Protection",
          "Algorithmic Accountability and Transparency",
          "Human-Centered AI and User Interaction",
          "Regulatory Landscape and Governance of AI",
          "Environmental Sustainability in AI",
          "Cross-Disciplinary Perspectives on Responsible AI",
        ],
      },
    },
    {
      id: 2,
      name: "Generative AI Track:",
      items: {
        content: [
          "Advances in Generative AI",
          "Generative AI in Healthcare and Medicine",
          "Generative AI for Content Creation and Entertainment",
          "Generative AI in Design and Creativity",
          "Generative AI for Personalization and Recommendation Systems",
          "Generative AI for Electrical Applications",
        ],
      },
    },
    {
      id: 3,
      name: "Explainable AI Track:",
      items: {
        content: [
          "Explainable AI: Methods and Applications",
          "Fairness, Bias, and Diversity in AI",
          "Privacy-Preserving AI and Data Protection",
          "Algorithmic Accountability and Transparency",
          "Human-Centered AI and User Interaction",
        ],
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-evenly text-start ">
      {
        PaperData.map((paper) =>
          <div key={paper.id} className="">
            <h2 className="text-black-900 text-xl">{paper.name}</h2>
            <ul className="opacity-50 list-disc">
              {paper.items.content.map((item) =>
                <li key={item} className="text-sm">{item}</li>
              )}
            </ul>
          </div>
        )

      }
      </div>
    </div>
  );
};

const CallForPapers = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div className="container my-16 heading space-y-4">
        <div className="text-center mx-auto space-y-2">
          <h1 className="text-2xl font-bold text-dark">Call for Papers</h1>
          <h3 className="opacity-50">Papers in the main technical program must describe high-quality, original research.<br/>The topics of interest include but not limited to : </h3>
          <p className="">
            <ItemList />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
