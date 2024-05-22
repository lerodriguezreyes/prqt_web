import { useState } from "react";
import Typewriter from "typewriter-effect";
import { post } from "../../services/CRUD_APIS";

function Subscribirse() {
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
      <h1 className="header1"> Liderando a la Comunidad Puertorriqueña
      
        <Typewriter
          options={{
            strings: ["a la Innovación", "al desarrollo", "a la creatividad"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h3 className="header3"> Conectando líderes de la industria, diseñadores, desarrolladores, innovadores y mucho más. </h3>
      <h2 className="header2"> Conéctate </h2>
      <h3 className="header3"> ¡Únete a la revolución y sé parte del cambio en el mundo tech! </h3>
      <form onSubmit={submitHandler} className="form">
        <input 
          type="text"
          name="email"
          placeholder="Correo electrónico"
          className="inputText"
          onChange={handleChange}
        />
        <button 
        className="inputButtonText"
        type="submit"> Subscríbete </button>
        <br/>
        {errorMessage && <p className="inputText">{errorMessage}</p>}
        {successMessage && <p className="inputText">{successMessage}</p>}
      </form>
    </>
  );
}

export default Subscribirse;
