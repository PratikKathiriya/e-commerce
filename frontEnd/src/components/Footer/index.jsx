
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css";



const Footer = () => {
    return(
        <>
            <div className="container footer">
                <div className="row mb-5">
                    <div className="col-md-5 list-unstyled footer-first">
                        <li><img src="./images/Logo.jpg" alt="" /></li>
                        <li><p>It is a long established fact that a reader <br /> will be distracted lookings.</p></li>
                        <li className="d-flex justify-content-around footer-icons"> 
                            <li><FacebookIcon></FacebookIcon> </li>
                            <li><TwitterIcon></TwitterIcon></li>
                            <li><a href="#" className='text-decoration-none f-icon-three'>in</a></li>
                            <li><InstagramIcon></InstagramIcon></li>
                        </li>
                    </div>
                    <div className="col-md-2 list-unstyled footer-second">
                        <h5>Pages</h5>
                        <li><a href=""> About us</a></li>
                        <li><a href=""> Our Projects</a></li>
                        <li><a href=""> Our Team</a></li>
                        <li><a href=""> Contact us</a></li>
                        <li><a href=""> Services</a></li>
                    </div>
                    <div className="col-md-2 list-unstyled footer-three">
                    <h5>Services</h5>
                        <li><a href=""> Kitchen</a></li>
                        <li><a href=""> Living area</a></li>
                        <li><a href=""> Bathroom</a></li>
                        <li><a href=""> Dinning hall</a></li>
                        <li><a href=""> Brdroom</a></li>
                    </div>
                    <div className="col-md-3 list-unstyled footer-four">
                        <h5>Contact</h5>
                        <li> 55 East Birchwood Ave. <br />Brooklyn, New York 11201</li>
                        <li> Contact@interno.com</li>
                        <li> (123) 456 - 7820</li>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col mt-3 mb-2 text-center">
                        <h6>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;