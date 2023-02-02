import CoffeeTea_Project from "../assets/CoffeeTea_Project.png";
import StrangersThings_Project from "../assets/StrangersThings_Project.png";
import TheArcade_Project from "../assets/TheArcade_Project.png";

const projectData = [
  {
    id: 1,
    name: "Coffee & Tea - Fullstack Academy Grace Shopper Project",
    img: CoffeeTea_Project,
    description:
      "Coffee & Tea is a basic e-commerce web application that allows any user to browse and/or purchase from a variety of high quality coffee and teas. Additional capabilities open up to registered users, and site maintenance capabilities do exist but are restricted to administrator access only.",
    techStack:
      "Languages & Technologies Used: HTML, CSS, Javascript, Node, NPM, SQL, PostgreSQL, React JS, Express JS, Git, GitHub Projects, Slack, Zoom, Discord"
  },
  {
    id: 2,
    name: "Stranger's Things",
    img: StrangersThings_Project,
    description:
      '"Craigslist-lite” style front end application designed to allow a user to navigate through posts and corresponding messages.',
    techStack:
      "Languages & Technologies Used: HTML, CSS, Javascript, AJAX, React JS, GitHub, Netlify."
  },
  {
    id: 3,
    name: "The Arcade",
    img: TheArcade_Project,
    description:
      "Classic arcade came “Snake” where the perpetually moving snake grows and becomes faster upon eating apples but achieves game over if it hits or runs into something else.",
    techStack:
      "Languages & Technologies Used: HTML, CSS, Javascript, DOM manipulation, GitHub, Netlify.",
  },
];

export default projectData;
