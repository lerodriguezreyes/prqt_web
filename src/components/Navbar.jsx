import { Link } from "react-router-dom"

function navbar() {

  return (
    <>
        <div className="navWrapper"> 
        <img className="logo" src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1715272143/PRQT/logo/PRQT_Logo_-_Black_e9gimz.svg" /> 
        <p className="webTitle">PUERTO RICO QUIERE TECH</p>
        <p> <Link to="/" className="navLink"> Eng </Link> | <Link to="/esp" className="navLink"> Esp </Link> </p>
        </div>
    </>
  )
}

export default navbar