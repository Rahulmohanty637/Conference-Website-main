/* eslint-disable no-unused-vars */
import React from "react";
import ProfileCard from "./ProfileCard";
import Male from "../../assets/people-01.png";
import Female from "../../assets/people-02.png";

const profiles = [
  {
    title: "Organizing Chair",
    name: "Prof. (Dr.) Sujata Chakravarty",
    position: "Dean, SoET",
    department: "Department of Computer Science & Engineering",
    organization:
      "Centurion University of Technology and Management, Bhubaneswar, India",
    image: Female,
  },
  {
    title: "Organizing Chair",
    name: "Mr. Saneev Kumar Das",
    department: "Department of Computer Science & Engineering",
    organization:
      "Centurion University of Technology and Management, Bhubaneswar, India",
    image: Male,
  },
  {
    title: "Organizing Chair",
    name: "Mr. Sujit Bebortta",
    department: "Department of Computer Science",
    organization: "Ravenshaw University, Cuttack, India",
    image: Male,
  },
  {
    title: "Honorary Advisory Board",
    name: "Prof. (Dr.) Pradipta Kishore Dash",
    organization:
      "Siksha ‘O’ Anusandhan (Deemed to be University), Bhubaneswar, India",
    image: Male,
  },
  {
    title: "Honorary Advisory Board",
    name: "Prof. (Dr.) Ganapati Panda",
    organization: "C.V. Raman Global University, Bhubaneswar, India",
    image: Male,
  },
  {
    title: "Honorary Advisory Board",
    name: "Prof. (Dr.) Bansidhar Majhi",
    position: "Vice Chancellor",
    organization: "V.S.S.U.T., Burla, India",
    image: Male,
  },
  {
    title: "Chief Advisory Board",
    name: "Prof. (Dr.) Ashish Ghosh",
    position: "Professor & Former Head, Machine Intelligence Unit",
    department: "Former In-Charge, Center for Soft Computing Research",
    organization: "Indian Statistical Institute, Kolkata, India",
    image: Male,
  },
  {
    title: "Chief Advisory Board",
    name: "Prof. (Dr.) Sudeep Tanwar",
    position: "Professor",
    organization: "Nirma University, India",
    department:
      "Visiting Professor, Jan Wyzykowski University, Poland, University of Pitesti, Romania",
    image: Male,
  },
  {
    title: "Publicity Chair",
    name: "Dr. Shom Prasad Das",
    organization: "Birla Global University, Bhubaneswar, India",
    image: Male,
  },
  {
    title: "Editorial and Publication Board",
    name: "Prof. (Dr.) Sujata Chakravarty",
    position: "Dean, SoET",
    department: "Department of Computer Science & Engineering",
    organization:
      "Centurion University of Technology and Management, Bhubaneswar, India",
    image: Female,
  },
  {
    title: "Editorial and Publication Board",
    name: "Mr. Saneev Kumar Das",
    department: "Department of Computer Science & Engineering",
    organization:
      "Centurion University of Technology and Management, Bhubaneswar, India",
    image: Male,
  },
  {
    title: "Editorial and Publication Board",
    name: "Mr. Sujit Bebortta",
    department: "Department of Computer Science",
    organization: "Ravenshaw University, Cuttack, India",
    image: Male,
  },
];

const ProfileGrid = () => {
  return (
    <div className="min-h-screen mt-20 flex items-center justify-center">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            title={profile.title}
            name={profile.name}
            position={profile.position}
            department={profile.department}
            organization={profile.organization}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
