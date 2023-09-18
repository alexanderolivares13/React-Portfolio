import contactsArray from "../jsxArrays/contacts";

const Links = () => {
    return (
        <div className='links'>
        <h2>Contact Me:</h2>
        <ul>
          {contactsArray.map((contact) => (
            <li key={contact.name}>
              <a href={contact.link}>
                <img src={contact.logo} alt={contact.alt} />
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Links