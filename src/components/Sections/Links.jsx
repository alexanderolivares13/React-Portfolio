import contactsArray from "../jsxArrays/contacts";
import "./Links.css";

const Links = () => {
  return (
    // returns the links in the bottom of the page based on an imported array, target _blank is used to keep the user on the portfolio page.
    <footer className='links'>
      <ul>
        {contactsArray.map((contact) => (
          <li key={contact.name}>
            <a href={contact.link} target='_blank'>
              <img src={contact.logo} alt={contact.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Links;
