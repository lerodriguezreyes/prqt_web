import { useState } from "react";
import Typewriter from "typewriter-effect";
import { post } from "../../services/CRUD_APIS";

function Subscribe() {
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(
      "This is what is being typed in this text area form element",
      email
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    post("/signUp/new", {email: email})
      .then((response) => {
        console.log(
          "New subscriber email sent to database ===>",
          response.data
        );
        const success = response.data.message;
        console.log(
          "New subscriber email sent to database ===>", success)
        setSuccessMessage(success)
      })
      .catch((error) => {
        console.log("Error subscribing ===>", error)
        const errorDescription = error.response.data.message;
        console.log("Error message ===>", errorDescription)
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <h1 className="header1"> Leading the Puerto Rican Community to 
      
        <Typewriter
          options={{
            strings: ["Innovation", "Development", " Creativity"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h3 className="header3"> Connecting industry leaders, design thinkers, web developers, innovators and much more. </h3>
      <h2 className="header2"> Let's Connect </h2>
      <h3 className="header3"> Join the Next-Generation of Tech Talent in Puerto Rico! </h3>
      <form onSubmit={submitHandler} className="form">
        <input 
          type="text"
          name="email"
          placeholder="Email Address"
          className="inputText"
          onChange={handleChange}
        />
        <button 
        className="inputButtonText"
        type="submit"> Subscribe </button>
        <br />
        {errorMessage && <p className="inputText">{errorMessage}</p>}
        {successMessage && <p className="inputText">{successMessage}</p>}
      </form>
    </>
  );
}

export default Subscribe;
