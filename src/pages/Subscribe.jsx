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
      <h1 className="header1"> Leading the Puerto Rican Community </h1>
      <h1 className="header1">
        {" "}
        <Typewriter
          options={{
            strings: ["To Innovation", "To Development", "To Creativity"],
            autoStart: true,
            loop: true,
          }}
        />{" "}
      </h1>
      <h2 className="header2"> Connecting industry leaders, design thinkers </h2>
      <h2 className="header1"> and innovators for a better tomorrow. </h2>
      <h4 className="header4"> Let's Connect </h4>
      <p className="bodyText"> Join the Next-Generation of Tech Talent in Puerto Rico! </p>
      <form onSubmit={submitHandler}>
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
