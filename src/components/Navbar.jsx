import { Link } from "react-router-dom"

function navbar() {

  return (
    <>
        <div className="navWrapper"> 
        <img className="logo" src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1715272143/PRQT/logo/PRQT_Logo_-_Black_e9gimz.svg" /> 
        <p className="webTitle">PUERTO RICO QUIERE TECH</p>
        <p className="navLink"><span> <Link to="/"> Eng </Link> </span> | <span> <Link to="/esp"> Esp </Link> </span></p>
        </div>
    </>
  )
}

export default navbar