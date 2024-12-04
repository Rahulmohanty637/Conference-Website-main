/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner1 from "../../assets/Pic1.png";
import Banner2 from "../../assets/Pic2.png";
import "../../App.css";
import ImportantDates from "../../components/ImportantDates/ImportantDates";
import RegistrationTable from "../../components/RegistrationInfo/RegistrationTable";
// import ChiefPatron from "../../components/OrganizingCommittee/ChiefPatron";
// import Patron from "../../components/OrganizingCommittee/Patron";

const Home = () => {
  // const comittee = {
  //   chiefPatron: [
  //     {
  //       name: "Prof. (Dr.) Mukti Kanta Mishra",
  //       title: "Founder President",
  //       organization:
  //         "Centurion University of Technology and Management, India",
  //       image: "path/to/image1.jpg",
  //     },
  //     {
  //       name: "Prof. D. Narsimha Rao",
  //       title: "Founder Vice-President",
  //       organization:
  //         "Centurion University of Technology and Management, India",
  //       image: "path/to/image2.jpg",
  //     },
  //   ],
  //   patron: [
  //     {
  //       name: "Prof. (Dr.) Supriya Pattanayak",
  //       title: "Vice-Chancellor",
  //       organization:
  //         "Centurion University of Technology and Management, Odisha, India",
  //       image: "path/to/image3.jpg",
  //     },
  //   ],
  //   financeChair: [
  //     {
  //       name: "Prof. (Dr.) Sujata Chakravarty",
  //       title: "Dean, SoET, Department of Computer Science & Engineering",
  //       organization:
  //         "Centurion University of Technology and Management, Bhubaneswar, India",
  //       image: "path/to/image4.jpg",
  //     },
  //     {
  //       name: "Dr. Rajendra Khadanga",
  //       title: "Department of Electrical Engineering",
  //       organization:
  //         "Centurion University of Technology and Management, Bhubaneswar, India",
  //       image: "path/to/image5.jpg",
  //     },
  //     {
  //       name: "Dr. Sudhansu Samal",
  //       title: "Department of Electrical Engineering",
  //       organization:
  //         "Centurion University of Technology and Management, Bhubaneswar, India",
  //       image: "path/to/image6.jpg",
  //     },
  //   ],
  //   organizingChair: [
  //     {
  //       name: "Prof. (Dr.) Sujata Chakravarty",
  //       title: "Dean, SoET, Department of Computer Science & Engineering",
  //       organization:
  //         "Centurion University of Technology and Management, Bhubaneswar, India",
  //       image: "path/to/image7.jpg",
  //     },
  //     {
  //       name: "Mr. Saneev Kumar Das",
  //       title: "Department of Computer Science & Engineering",
  //       organization:
  //         "Centurion University of Technology and Management, Bhubaneswar, India",
  //       image: "path/to/image8.jpg",
  //     },
  //     {
  //       name: "Mr. Sujit Bebortta",
  //       title: "Department of Computer Science",
  //       organization: "Ravenshaw University, Cuttack, India",
  //       image: "path/to/image9.jpg",
  //     },
  //   ],
  // };

  const passage1 = `Centurion University of Technology and Management (CUTM), located in Jatni near Bhubaneswar, Odisha, was established in 2005 by a group of academics aiming to provide high-quality education. Initially acquiring and transforming the ailing Jagannath Institute for Technology and Management (JITM), CUTM became the first Multi-Sector State Private University in Odisha in August 2010. The university focuses on "Shaping lives and empowering communities" by creating opportunities through education, research, and training, especially in rural areas of southern Odisha and northern Andhra Pradesh. With a vision to become a globally recognized center for excellence, CUTM's mission is to offer top-tier, accredited programs in technology and management, foster entrepreneurship, and provide employability training while emphasizing social justice and sustainable development.`;

  const passage2 = `The “International Conference on Responsible, Generative and Explainable AI
(ResGenXAI-2024)” is a newly initiated conference which focuses on high quality research
articles that are quality checked through peer-review process and published in IEEE
Xplore. The scope of the conference is multidisciplinary in the domain focusing on recent
advancements in artificial intelligence. The scope of the conference includes Responsible AI Track, Generative AI Track, Explainable AI Track.`;

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs
        tagline="About Centurion University"
        passage={passage1}
        reverse={true}
        img={Banner1}
        url="https://cutm.ac.in/"
      />
      <AboutUs
        tagline="About ResGenXAI-2025"
        passage={passage2}
        img={Banner2}
        url="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/64788"
      />
      <ImportantDates />
      <RegistrationTable />

      <Footer />
    </div>
  );
};

export default Home;
