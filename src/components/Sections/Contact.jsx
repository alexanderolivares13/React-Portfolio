import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });

  //   const [isValid, setIsValid] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const mailToLink = `mailto:alexander.olivares1310@gmail.com?subject=NewContact%20<${formState.email}>&body=${formState.message}%0D%0A%0D%0ASincerely,%0D%0A%0D%0A${formState.name}`;

    window.location.href = mailToLink;
    // setFormState({});
  };

  return (
    <div className='form-section'>
      <h2 className='contact-me'>Contact Me:</h2>
      <form action='submit' className='form' onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            placeholder='something@example.com'
          ></input>
        </div>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            placeholder='John Doe'
          ></input>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            type='text'
            name='message'
            id='message'
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            placeholder='Hello! I love your work!'
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
