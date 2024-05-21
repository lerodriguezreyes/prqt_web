import { useState } from "react";
import Typewriter from "typewriter-effect";
import { post } from "../../services/CRUD_APIS";

function Subscribe() {
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
      <h1 className="header1"> Leading the Puerto Rican Community to 
      
        <Typewriter
          options={{
            strings: ["Innovation", "Development", " Creativity"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h3 className="header3"> Connecting industry leaders, design thinkers and innovators for a better tomorrow. </h3>
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
      </form>
    </>
  );
}

export default Subscribe;
