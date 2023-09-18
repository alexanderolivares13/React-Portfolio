import { v4 as uuidv4 } from "uuid";
import RMS from "../../assets/RMS.png";
import DBMS from "../../assets/Ecommerce-DBMS.png";
import SVG from "../../assets/SVG-Creator.png";
import WTP from "../../assets/WTP.png";
import GameGo from "../../assets/GameGo.png";
import NoteSaver from "../../assets/NoteSaver.png";

const projectsArray = [
  {
    projectTitle: "Who's That Pokémon",
    image: WTP,
    shortDescription:
      "A group project built using only front-end coding. Utilizing jQuery, Bootstrap, and 2 different APIs. The data on the search results page is dynamically generated to match the user's search.",
    link: "https://alexanderolivares13.github.io/Whos-that-Pokemon/",
    github: "https://github.com/alexanderolivares13/Whos-that-Pokemon",
    id: uuidv4(),
  },
  {
    projectTitle: "GameGo",
    image: GameGo,
    shortDescription:
      "An Ecommerce website built as a group project entirely from scratch. Utilizing a fullstack build with Node.js, MySQL, Sequelize ORM package, Handlebars templating engine, Bootstrap CSS framework, and the Express server package.",
    link: "https://gamego-0cd11327ffbc.herokuapp.com",
    github: "https://github.com/alexanderolivares13/GameGo",
    id: uuidv4(),
  },
  {
    projectTitle: "Note Saver",
    image: NoteSaver,
    shortDescription:
      "A simple note taking app that utilizes Node.js with the Express server package. The app uses a simple JSON file to keep track of the notes, lacking an actual back end database, but has fully functioning API routes.",
    link: "https://note-saver-uofm-54de8f7c842c.herokuapp.com/",
    github: "https://github.com/alexanderolivares13/Note-Saver",
    id: uuidv4(),
  },
  {
    projectTitle: "Role Management System",
    image: RMS,
    shortDescription:
      "A simple CLI program, built with Node.js, MySQL, and Express server package. Focusing on MySQL, the program allows data editing of user data with full CRUD implementation on the server side.",
    link: "https://github.com/alexanderolivares13/Role-Management-System",
    github: "https://github.com/alexanderolivares13/Role-Management-System",
    id: uuidv4(),
  },
  {
    projectTitle: "SVG Creator",
    image: SVG,
    shortDescription:
      "A simple CLI program, built with Node.js, Express server package, and Inquirer package. Focusing on Object Oriented Programming, the app asks the user questions to create a simple SVG of a selected simple shape.",
    link: "https://github.com/alexanderolivares13/SVG-Creator",
    github: "https://github.com/alexanderolivares13/SVG-Creator",
    id: uuidv4(),
  },
  {
    projectTitle: "Ecommerce DBMS",
    image: DBMS,
    shortDescription:
      "A simple CLI program, built with Node.js, Express server package, MySQL, and Sequelize ORM. My first project utilizing full CRUD implementation whith a complete database. The app allows users to update and test the app using Insomnia.",
    link: "https://github.com/alexanderolivares13/Ecommerce-DBMS",
    github: "https://github.com/alexanderolivares13/Ecommerce-DBMS",
    id: uuidv4(),
  },
];

export default projectsArray;
