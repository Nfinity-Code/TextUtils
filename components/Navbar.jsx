import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'


const Navbar = (props) => {
  const textColor=()=>{
   if(props.mode==='dark'){
    return 'white';
   }else if(props.mode==='light'){
    return 'black';
   }else if(props.mode==='success'){
    return 'black';
   }else if(props.mode==='warning'){
    return 'red';
   }else{
    return 'violet';
   }
  }
  return (
  
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3 `}>
  <div className={`container-fluid text-${textColor()}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     <div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
 <label htmlFor="" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Custom Mode</label>
    </div>
</div>
  </div>
</nav> 

  
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
}
Navbar.defaultProps={
  title:"title here"
}
export default Navbar
