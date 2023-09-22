import contactsArray from "../jsxArrays/contacts";
import "./Links.css";

const Links = () => {
  return (
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
