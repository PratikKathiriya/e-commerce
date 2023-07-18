import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
    const nevigate = useNavigate()
    return(
        <>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-2">
                        <img src="../images/Logo.jpg" onClick={() => nevigate("/")} className="logo " alt="" />
                    </div>
                    <div className="col-md-6 d-flex list-unstyled menu">
                        <li><NavLink to = "/">Home</NavLink> </li>
                        <li><NavLink to = "/About">Pages</NavLink> </li>
                        <li><NavLink to = "/Services">Services</NavLink> </li>
                        <li><NavLink to = "/Project">Project</NavLink></li>
                        <li><NavLink to = "/Blog">Blog</NavLink> </li>
                        <li><NavLink to = "/Contactus">Contact</NavLink> </li>
                        <SearchIcon className="search-btn"></SearchIcon>
                    </div>
                </div>
            </div>
        </>
    //       <div className="container">
    //       <div className="row d-flex justify-content-between">
    //           <nav className="navbar navbar-expand-lg">
    //           <div className="col-2">
    //               <img src="../images/Logo.jpg" className="logo" alt="" />
    //           </div>
    //           <button class="navbar-toggler" data-toggle="collapse" data-target="#mynav">
    //           <span class="navbar-toggler-icon"></span>
    //          </button>
    //           <div className="col-6 d-flex justify-content-end list-unstyled menu collapse navbar-collapse " id="mynav">
    //               <li className="nav-item"><a href=""className="nav-link"> Home</a> </li>
    //               <li className="nav-item"><a href=""className="nav-link"> Pages</a> </li>
    //               <li className="nav-item"><a href=""className="nav-link">Services</a> </li>
    //               <li className="nav-item"><a href=""className="nav-link">Project</a></li>
    //               <li className="nav-item"><a href=""className="nav-link">BLog</a> </li>
    //               <li className="nav-item"><a href=""className="nav-link">Contact</a> </li>
    //               <SearchIcon className="search-btn nav-link"></SearchIcon>
    //           </div>
    //           </nav>
    //       </div>
    //   </div>
    );
}

export default Navbar;