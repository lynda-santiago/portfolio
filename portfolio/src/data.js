import { htmlImg, designImg, serverImg } from "./svgHelpers/svgVariables";

export const skillsData = [
  {
    img: htmlImg,
    title: "Front End",
    skills: {
      first: "HTML/CSS/SASS",
      second: "REACT",
      third: "BOOTSTRAP/MATERIAL UI",
      fourth: "JAVASCRIPT",
      fifth: "REDUX",
      sixth: "CONTEXT API",
    },
  },
  {
    img: designImg,
    title: "Web Design",
    skills: {
      first: "ADOBE XD",
      second: "FIGMA",
      third: "WEBFLOW",
      fourth: "ADOBE",
      fifth: "ILLUSTRATOR",
    },
  },
  {
    img: serverImg,
    title: "Back End",
    skills: {
      first: "NODE.JS",
      second: "POSTRESSQL",
      third: "POSTMAN",
      fourth: "INSOMNIA",
      fifth: "DATABASE DESIGNER",
      sixth: "SQL LITE",
    },
  },
];

export const resumeData = [
  {
    type: "Education",
    companyName1: "Full Stack Web Development, Lambda School",
    companyName2: "Medical Assistance Program, Lincoln Tech",
    date1: "2020-2021",
    date2: "2013-2014",
    firstAbout:
      "Lambda is a 6 to 9+ month online program that prepared me for success in web development. I was required to complete individual daily projects and I also had a chance to build real products with a team of 6-8 students from other tracks. Collaborative coding sessions and communication were held via Slack and Zoom.",
    secondAbout:
      "In this medical assistant program that I completed, I received training on how to take vital signs, read and update charts, apply surgical dressings, practice phlebotomy tasks like specimen collection, lab testing and etc. Some of the rooms had Doctor’s Office Classrooms that simulated a professional healthcare office, from Reception to exam rooms.",
  },
  {
    type: "Experience",
    companyName1: "Social Media Marketing Specialist, The JK Set",
    companyName2: "Accident & Health Licensee, Optum",
    date1: "2016-2020",
    date2: "2015-2016",
    firstAbout:
      "Assisted with the general day to day administrative tasks. Monitored online media, information sources and social channels. Uploaded content on a daily basis to keep community and followers engaged. Advertised social media account on other platforms to create more brand awareness and increase followings.",
    secondAbout:
      "Quoted customers on available product options and accurately explain plan details. Recommended the best plans that fit the customer's needs. Exceeded monthly performance metrics. Conducted outgoing calls to provide answers and additional information to consumers. Followed a proven sales and quality process to assist customers. Data entry / updated CRM with customer data.",
  },
];
