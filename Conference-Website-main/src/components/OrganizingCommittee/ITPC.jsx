/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Male from "../../assets/people-01.png";
import Female from "../../assets/people-02.png";
import Search from "../../assets/search.png";

const ITPC = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    {
      title: "Honorary Chair",
      name: "Dr. Radhakanta Padhi",
      position: "Professor",
      department: "Department of Aerospace Engineering",
      organization:
        "Indian Institute of Science, Bangalore",
      image: Male,
    },
    {
      title: "Honorary Chair",
      name: "Dr. Subhransu Ranjan Samantaray",
      position: "Professor, HoS",
      department: "School of Electrical Sciences",
      organization:
        "Indian Institute of Technology, Bhubaneswar",
      image: Male,
    },
    {
      title: "General Chair",
      name: "Dr. Sujata Chakravarty",
      position: "Professor, Dean",
      department: "School of Engineering and Technology",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Female,
    },
    {
      title: "General Chair",
      name: "Dr. Debi Prosad Dogra",
      position: "Associate Professor",
      department: "School of Electrical Sciences",
      organization:
        "Indian Institute of Technology, Bhubaneswar",
      image: Male,
    },
    {
      title: "Technical Program Chair",
      name: "Dr. Tapan Kumar Gandhi",
      position: "Associate Professor",
      department: "SDepartment of Electrical Engineering",
      organization:
        "Indian Institute of Technology, Delhi",
      image: Male,
    },
    {
      title: "Technical Program Chair",
      name: "Dr. Tanmoy Roy Choudhury",
      position: "Assistant Professor",
      department: "Electrical Engineering",
      organization:
        "National Institute of Technology, Rourkela",
      image: Male,
    },
    {
      title: "Technical Program Committee",
      name: "Dr. Durga Pasad Mohapatra",
      position: "Professor",
      department: "Computer Science and Engineering",
      organization:
        "National Institute of Technology, Rourkela",
      image: Male,
    },
    {
      title: "Technical Program Committee",
      name: "Dr. Rakesh Chandra Balabantaray",
      position: "Professor and Dean, Academics",
      department: "Computer Science and Engineering",
      organization:
        "International Institute of Information Technology, Bhubaneswar",
      image: Male,
    },
    {
      title: "Technical Program Committee",
      name: "Dr. Sanjay Saxena",
      position: "Assistant Professor",
      department: "Computer Science and Engineering",
      organization:
        "International Institute of Information Technology, Bhubaneswar",
      image: Male,
    },
    {
      title: "Technical Program Committee",
      name: "Dr. Renu Sharma",
      position: "Professor and Head",
      department: "Department of Electrical Engineering",
      organization:
        "Institute of Technical Education and Research, SoA University, Bhubaneswar",
      image: Male,
    },
    {
      title: "Technical Program Committee",
      name: "Dr. Satyabrata Dash",
      position: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      organization:
        "Gandhi Institute of Technology and Management (GITAM), Visakhapatnam",
      image: Male,
    },
    {
      title: "Organizing Secretary",
      name: "Dr. Manohar Mishra",
      position: "Professor",
      department: "Department of Electrical and Electronics Engineering",
      organization:
        "Institute of Technical Education and Research, SoA University, Bhubaneswar",
      image: Male,
    },
    {
      title: "Organizing Secretary",
      name: "Saneev Kumar Das",
      position: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Male,
    },
    {
      title: "Organizing Secretary",
      name: "Sujit Bebortta",
      position: "Assistant Professor",
      department: "Department of Computer Science",
      organization:
        "Ravenshaw University, Cuttack",
      image: Male,
    },
    {
      title: "Organizing Secretary",
      name: "Dr. Satyasis Mishra",
      position: "Professor",
      department: "Department of Electronics and Communication Engineering",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Male,
    },
    {
      title: "Finance Chair",
      name: "Dr. Sudhansu Kumar Samal",
      position: "Associate Professor",
      department: "Department of Electrical Engineering",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Male,
    },
    {
      title: "Publication Chair",
      name: "Dr. Ramesh Chandra Mohanty",
      position: "Professor",
      department: "School of Engineering and Technology",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Male,
    },
    {
      title: "Publication Chair",
      name: "Dr. Rajendra Khadanga",
      position: "Associate Professor",
      department: "Department of Electrical Engineering",
      organization:
        "Centurion University of Technology and Management, Bhubaneswar",
      image: Male,
    },
    {
      title: "Publication Chair",
      name: "Dr. Ranjeeta Patel",
      position: "Associate Professor",
      department: "School of Electrical Engineering",
      organization:
        "KIIT Deemed to be University, Bhubaneswar",
      image: Female,
    },
    {
      title: "Publication Chair",
      name: "Dr. Ranjeeta Patel",
      position: "Associate Professor",
      department: "School of Electrical Engineering",
      organization:
        "KIIT Deemed to be University, Bhubaneswar",
      image: Female,
    },
  ];

  // Committee Members
  // const members = [
  //   {
  //     id: 1,
  //     name: "Dr. Sameerchand Pudaruth",
  //     designation: "University of Mauritius",
  //     image: Male,
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Karen Panetta",
  //     designation: "Tufts University, USA",
  //     image: Female,
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Dilbag Singh",
  //     designation: "Gwangju Institute of Science and Technology, South Korea",
  //     image: Male,
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. Omprakash Kaiwartya",
  //     designation: "Nottingham Trent University, UK",
  //     image: Male,
  //   },
  //   {
  //     id: 5,
  //     name: "Dr. Shazia Hasan",
  //     designation: "BITS Pilani, Dubai Campus",
  //     image: Female,
  //   },
  //   {
  //     id: 6,
  //     name: "Dr. Kavi Khedo",
  //     designation: "University of Mauritius",
  //     image: Male,
  //   },
  //   {
  //     id: 7,
  //     name: "Dr. Renu Sharma",
  //     designation: "Institute of Technical Education and Research, India",
  //     image: Female,
  //   },
  //   {
  //     id: 8,
  //     name: "Dr. P. Roop",
  //     designation: "University of Auckland, New Zealand",
  //     image: Male,
  //   },
  //   {
  //     id: 9,
  //     name: "Dr. Amit Mishra",
  //     designation: "University of Cape Town, South Africa",
  //     image: Male,
  //   },
  //   {
  //     id: 10,
  //     name: "Dr. Sagar Naik",
  //     designation: "University of Waterloo, Canada",
  //     image: Male,
  //   },
  //   {
  //     id: 11,
  //     name: "Dr. Swati Vipsita",
  //     designation:
  //       "International Institute of Information Technology, Bhubaneswar, India",
  //     image: Female,
  //   },
  //   {
  //     id: 12,
  //     name: "Dr. Shingo Yamaguchi",
  //     designation: "Yamaguchi University, Japan",
  //     image: Male,
  //   },
  //   {
  //     id: 13,
  //     name: "Dr. Bharati Mishra",
  //     designation:
  //       "International Institute of Information Technology, Bhubaneswar, India",
  //     image: Female,
  //   },
  //   {
  //     id: 14,
  //     name: "Dr. Nilesh Goel",
  //     designation: "BITS Pilani, Dubai Campus",
  //     image: Male,
  //   },
  //   {
  //     id: 15,
  //     name: "Dr. Saeed Gazor",
  //     designation: "Queen's University, Canada",
  //     image: Male,
  //   },
  //   {
  //     id: 16,
  //     name: "Dr. Xiaojun Qiu",
  //     designation: "University of Technology, Sydney, Australia",
  //     image: Male,
  //   },
  //   {
  //     id: 17,
  //     name: "Dr. Alberto Gonzalez Salvador",
  //     designation: "Universitat Politècnica de València, Spain",
  //     image: Male,
  //   },
  //   {
  //     id: 18,
  //     name: "Dr. Suchismita Chinara",
  //     designation: "National Institute of Technology, Rourkela, India",
  //     image: Female,
  //   },
  //   {
  //     id: 19,
  //     name: "Dr. David V Anderson",
  //     designation: "Georgia Tech, USA",
  //     image: Male,
  //   },
  //   {
  //     id: 20,
  //     name: "Dr. Kalyanmoy Deb",
  //     designation: "Michigan State University, USA",
  //     image: Male,
  //   },
  //   {
  //     id: 21,
  //     name: "Dr. Kutub Thakur",
  //     designation: "New Jersey City University, USA",
  //     image: Male,
  //   },
  //   {
  //     id: 22,
  //     name: "Dr. Saurabh Singh",
  //     designation: "Dongguk University, South Korea",
  //     image: Male,
  //   },
  //   {
  //     id: 23,
  //     name: "Dr. Sachi Nandan Mohanty",
  //     designation: "Univerzitet Singidunum, Serbia",
  //     image: Male,
  //   },
  //   {
  //     id: 24,
  //     name: "Dr. Madhukrishna Priyadarshini",
  //     designation: "KIIT University, India",
  //     image: Female,
  //   },
  //   {
  //     id: 25,
  //     name: "Dr. Sasmita Kumari Nayak",
  //     designation: "Centurion University of Technology and Management, India",
  //     image: Female,
  //   },
  //   {
  //     id: 26,
  //     name: "Dr. Chinmayee Dora",
  //     designation: "Centurion University of Technology and Management, India",
  //     image: Female,
  //   },
  //   {
  //     id: 27,
  //     name: "Dr. Srinivas Sethi",
  //     designation: "Indira Gandhi Institute of Technology, India",
  //     image: Male,
  //   },
  //   {
  //     id: 28,
  //     name: "Dr. Basanta Kumar Swain",
  //     designation: "Govt. College of Engineering, India",
  //     image: Male,
  //   },
  //   {
  //     id: 29,
  //     name: "Dr. Mrutyunjaya Panda",
  //     designation: "Utkal University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 30,
  //     name: "Dr. Chandrasekhar Narayan Bhende",
  //     designation: "Indian Institute of Technology, Bhubaneswar, India",
  //     image: Male,
  //   },
  //   {
  //     id: 31,
  //     name: "Dr. Dillip Singh Sisodia",
  //     designation: "National Institute of Technology, Raipur, India",
  //     image: Male,
  //   },
  //   {
  //     id: 32,
  //     name: "Dr. Faheem Khan",
  //     designation: "University of Huddersfield, UK",
  //     image: Male,
  //   },
  //   {
  //     id: 33,
  //     name: "Dr. Li Tan",
  //     designation: "Purdue University Northwest, USA",
  //     image: Male,
  //   },
  //   {
  //     id: 34,
  //     name: "Dr. Shom Prasad Das",
  //     designation: "Birla Global University, Bhubaneswar, India",
  //     image: Male,
  //   },
  //   {
  //     id: 35,
  //     name: "Dr. Satyabrata Dash",
  //     designation: "Ramachandra College of Engineering, Eluru, India",
  //     image: Male,
  //   },
  //   {
  //     id: 36,
  //     name: "Dr. Bernard Mulgrew",
  //     designation: "University of Edinburgh, UK",
  //     image: Male,
  //   },
  //   {
  //     id: 37,
  //     name: "Dr. Deepak Ranjan Nayak",
  //     designation: "Malaviya National Institute of Technology, Jaipur, India",
  //     image: Male,
  //   },
  //   {
  //     id: 38,
  //     name: "Dr. V. Ravikumar Pandi",
  //     designation: "Amrita Vishwa Vidyapeetham, India",
  //     image: Male,
  //   },
  //   {
  //     id: 39,
  //     name: "Dr. Rojalina Priyadarshini",
  //     designation: "C.V. Raman Global University, India",
  //     image: Female,
  //   },
  //   {
  //     id: 40,
  //     name: "Dr. Sumanjit Das",
  //     designation: "Indian Institute of Technology, Bhubaneswar, India",
  //     image: Male,
  //   },
  //   {
  //     id: 41,
  //     name: "Dr. Trupti Swarnakar",
  //     designation: "ITER, Siksha O Anusandhan University, India",
  //     image: Female,
  //   },
  //   {
  //     id: 42,
  //     name: "Dr. Padmalochan Bera",
  //     designation: "Indian Institute of Technology, Bhubaneswar, India",
  //     image: Male,
  //   },
  //   {
  //     id: 43,
  //     name: "Dr. Rakesh Chandra Balabantaray",
  //     designation:
  //       "International Institute of Information Technology, Bhubaneswar, India",
  //     image: Male,
  //   },
  //   {
  //     id: 44,
  //     name: "Dr. Arun Solanki",
  //     designation: "Gautam Buddha University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 45,
  //     name: "Mrs. Pranati Mishra",
  //     designation: "Odisha University of Technology and Research, India",
  //     image: Female,
  //   },
  //   {
  //     id: 46,
  //     name: "Dr. Durga Shankar Baggam",
  //     designation: "Shastra University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 47,
  //     name: "Dr. Janmenjoy Nayak",
  //     designation: "Maharaja Sriram Chandra Bhanjadeo University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 48,
  //     name: "Dr. Sarika Jain",
  //     designation: "NIT Kurukshetra, India",
  //     image: Female,
  //   },
  //   {
  //     id: 49,
  //     name: "Dr. Mihir Narayan Mohanty",
  //     designation: "SOA University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 50,
  //     name: "Dr. Mamata Wag",
  //     designation: "CGU, Bhubaneswar, India",
  //     image: Female,
  //   },
  //   {
  //     id: 51,
  //     name: "Dr. Manas Ranjan Patra",
  //     designation: "Berhampur University, India",
  //     image: Male,
  //   },
  //   {
  //     id: 52,
  //     name: "Dr. Prem Kumar Singh",
  //     designation: "Gandhi Institute of Technology and Management, India",
  //     image: Male,
  //   },
  //   {
  //     id: 53,
  //     name: "Dr. Suneeta Satpathy",
  //     designation: "Sri Sri University, India",
  //     image: Female,
  //   },
  //   {
  //     id: 54,
  //     name: "Dr. Bharati Mishra",
  //     designation:
  //       "International Institute of Information Technology, Bhubaneswar, India",
  //     image: Female,
  //   },
  //   {
  //     id: 55,
  //     name: "Dr. Kamalakanta Sethi",
  //     designation: "Indian Institute of Information Technology, India",
  //     image: Male,
  //   },
  //   {
  //     id: 56,
  //     name: "Dr. Bijay Ketan Panigrahi",
  //     designation: "Indian Institute of Technology, Delhi, India",
  //     image: Male,
  //   },
  //   {
  //     id: 57,
  //     name: "Dr. Tapan K. Gandhi",
  //     designation: "Indian Institute of Technology, Delhi, India",
  //     image: Male,
  //   },
  //   {
  //     id: 58,
  //     name: "Dr. Naeem Hannoon",
  //     designation: "Universiti Teknologi MARA (UiTM) Shah Alam, Malaysia",
  //     image: Male,
  //   },
  //   {
  //     id: 59,
  //     name: "Dr. Rajendra Kumar Khadanga",
  //     designation: "Centurion University of Technology and Management, India",
  //     image: Male,
  //   },
  //   {
  //     id: 60,
  //     name: "Dr. Sasmita Padhy",
  //     designation: "Vellore Institute of Technology, India",
  //     image: Female,
  //   },
  // ];

  // Filter members based on search query
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="py-4 mt-20 bg-white rounded-lg shadow-md flex justify-center">
      <main className="mb-4">
        <section>
          <h1 className="md:text-5xl text-2xl mb-8 neuton-regular font-semibold text-gray-700">
            Committee Members
          </h1>
          <div className="relative heading mt-3">
            <input
              type="search"
              placeholder="Search Data..."
              className="w-full px-4 py-2 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src={Search}
              alt="Search"
              className="absolute right-3 top-2.5 w-5 h-5"
            />
          </div>
        </section>
        <section className="">
          <table className="heading text-sm font-medium">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-8 py-2 text-left text-gray-700 hover:text-primary">
                  Sl. No.{" "}
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-2 rounded-full border border-gray-700">
                    <FaArrowUp />
                  </span>
                </th>
                <th className="px-4 py-2 text-left text-gray-700 hover:text-primary">
                  Title{" "}
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-2 rounded-full border border-gray-700">
                    <FaArrowUp />
                  </span>
                </th>
                <th className="px-4 py-2 text-left text-gray-700 hover:text-primary">
                  Members{" "}
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-2 rounded-full border border-gray-700">
                    <FaArrowUp />
                  </span>
                </th>
                <th className="px-4 py-2 text-left text-gray-700 hover:text-primary">
                  Organization{" "}
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-2 rounded-full border border-gray-700">
                    <FaArrowUp />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className="bg-gray-100 hover:bg-white text-gray-700 hover:text-primary"
                  >
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">
                      {/* <img
                        src={member.image}
                        alt={member.name}
                        className="w-8 h-8 rounded-full mr-2"
                      /> */}
                      {member.title}
                    </td>
                    <td className="px-4 py-2">
                      <p className="status">{member.name}</p>
                    </td>
                    <td className="px-4 py-2">
                      <p className="status">{member.organization}</p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center px-4 py-2">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ITPC;
