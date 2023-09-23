import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // some regex for email validation, checks for email name, @ and TLD, works for 2 character domain names as well such as .io
  const emailReg = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{1,6})$/;

  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });
  // tooltip state for that checks for email validity, it will show if the email is invalid
  const [tooltipVisible, setTooltipVisible] = useState(false);
  //state to check for email is valid
  const [isValid, setIsValid] = useState(true);
  // state that checks for each respective empty fields, and displays a tooltip if the user exits the input and it's empty
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  // a function that executes after 200ms giving the page enough time to open up the default email app before emptying out the state and fields
  const clearForm = () => {
    setTimeout(() => {
      setFormState({
        email: "",
        name: "",
        message: "",
      });
    }, 200);
  };

  // checks to see if all fields are filled out then opens the default email app with the email pre-filled to match the form
  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email && formState.name && formState.message) {
      const mailToLink = `mailto:alexander.olivares1310@gmail.com?subject=NewContact%20<${formState.email}>&body=${formState.message}%0D%0A%0D%0ASincerely,%0D%0A%0D%0A${formState.name}`;
      window.location.href = mailToLink;
    }
  };

  return (
    <div className='form-section'>
      <h2 className='contact-me'>Contact Me:</h2>
      <form action='submit' className='form' onSubmit={submitHandler}>
        <div>
          <label>Email*:</label>
          <input
            type='email'
            value={formState.email}
            id='email'
            onFocus={() => setTooltipVisible(true)}
            onBlur={() =>
              !isEmailEmpty && formState.email === ""
                ? setIsEmailEmpty(true)
                : setIsEmailEmpty(false)
            }
            onChange={(e) => {
              setFormState({ ...formState, email: e.target.value });
              emailReg.test(formState.email)
                ? setIsValid(true)
                : setIsValid(false);
              setIsEmailEmpty(false);
            }}
            placeholder='something@example.com'
          />
          {isValid === false && tooltipVisible && (
            <div
              style={{
                color: "red",
              }}
            >
              {isValid ? "" : "Invalid Email"}
            </div>
          )}
          {isEmailEmpty && <div style={{ color: "red" }}>Required Field</div>}
        </div>
        <div>
          <label>Name*:</label>
          <input
            type='text'
            value={formState.name}
            id='name'
            onBlur={() =>
              !isNameEmpty && formState.name === ""
                ? setIsNameEmpty(true)
                : setIsNameEmpty(false)
            }
            onChange={(e) => {
              setFormState({ ...formState, name: e.target.value });
              setIsNameEmpty(false);
            }}
            placeholder='John Doe'
          />
          {isNameEmpty && <div style={{ color: "red" }}>Required Field</div>}
        </div>
        <div>
          <label>Message*:</label>
          <textarea
            type='text'
            value={formState.message}
            id='message'
            onBlur={() =>
              !isMessageEmpty && formState.message === ""
                ? setIsMessageEmpty(true)
                : setIsMessageEmpty(false)
            }
            onChange={(e) => {
              setFormState({ ...formState, message: e.target.value });
              setIsMessageEmpty(false);
            }}
            placeholder='Hello! I love your work!'
          ></textarea>
          <p>* Required fields</p>
          {isMessageEmpty && (
            <div style={{ color: "red", marginBottom: "20px" }}>
              Required Field
            </div>
          )}
        </div>
        <button onClick={clearForm}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
