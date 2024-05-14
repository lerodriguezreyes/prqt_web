import { useState } from "react";
import Typewriter from "typewriter-effect";
import { post } from "../../services/CRUD_APIS";

function Subscribirse() {
  const [email, setEmail] = useState(null);
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
      })
      .catch((error) => {
        console.log("Error subscribing ===>", error);
      });
  };

  return (
    <>
      <h1 className="header1"> Liderando a la Comunidad Puertorriqueña </h1>
      <h1 className="header1">
        {" "}
        <Typewriter
          options={{
            strings: ["Hacia Innovación", "Hacia desarrollo", "Hacia creatividad"],
            autoStart: true,
            loop: true,
          }}
        />{" "}
      </h1>

      <h2 className="header2"> Conectando líderes de la industria, diseñadores, </h2>
      <h2 className="header2"> innovadores, desarrollo web para un mejor mañana. </h2>
      <h4 className="header4">  Conéctate </h4>
      <p className="bodyText">  ¡Únete a la revolución y sé parte del cambio en el mundo tech! </p>
      <form onSubmit={submitHandler}>
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
      </form>
    </>
  );
}

export default Subscribirse;
