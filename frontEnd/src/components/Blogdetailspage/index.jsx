import "./style.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from "react";
import axios from "axios";

const Blogdetailpage = () => {
    
    const [data, setData] = useState({
        name:" Name",
        email:" Email",
        subject:" Subject",
        phone:"Phone ",
        message:" Message",
    })

    const handleinput1 = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    const onSubmit1 = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/contact/insert",data); 
            console.log("res:::",res)
            alert("your data is submitted");
        } catch (error) {
            console.log("error::::",error)
        }

        setData( {
            name:" Name",
            email:" Email",
            subject:" Subject",
            phone:"Phone ",
            message:" Message",
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="/images/Blogdetailsimg/Photo.jpg" className="firstimg" alt="" />
                    </div>
                </div>
            </div>


            <div className="container mt-md-5 pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <h3 className="maintitle">Let’s Get Solution for Building
                            Construction Work</h3>
                        <img src="/images/Blogdetailsimg/Photo.png" className="firstimgofdetail" alt="" />
                        <div className="dateandtype d-sm-flex justify-content-between pt-md-4 pt-2">
                            <h5 className="date">26 december,2022</h5>
                            <h5 className="type">Intrior / Design / Home / Decore</h5>
                        </div>
                        <p className="paragraphone pt-md-4">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                            <br /><br />
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        <img src="/images/Blogdetailsimg/Quotes.png" className="secondimgofdetail"  alt="" />
                        <h3 className="maintitle pt-3">Design sprints are great</h3>
                        <p className="paragraphone">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <li className="notes">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li className="notes">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li className="notes">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <img src="/images/Blogdetailsimg/Photo (1).png" className="firstimgofdetail pt-4" alt="" />
                        <p className="paragraphone py-4 ">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <hr />
                        <div className="tagsandicon d-lg-flex justify-content-between py-4">
                            <div className="tags d-flex">
                                <h3>Tags</h3>
                                <button className="buttonforkitchen">Kitchen</button>
                                <button className="buttonforbedroom">Bedroom</button>
                            </div>
                            <div className="icons d-flex list-unstyled justify-content-lg-around" >
                                <li>f</li>
                                <li><TwitterIcon/></li>
                                <li>in</li>
                                <li><InstagramIcon/></li>
                            </div>
                        </div>
                        <hr />
                        <form action="">
                            <h1 className="formtext">Leave a reply</h1>
                            <div className="nameandemail d-flex mt-4">
                                <div className="nameform">
                                    <input type="text"  placeholder="Name" onChange={handleinput1} value={data.name} name="name"/>
                                </div>
                                <div className="email">
                                    <input type="text" placeholder="Email" onChange={handleinput1} value={data.email} name="email" />
                                </div>
                            </div>
                            <div className="nameandemail d-flex mt-4">
                                <div className="nameform">
                                    <input type="text"  placeholder="website"onChange={handleinput1} value={data.subject} name="subject"  />
                                </div>
                                <div className="email">
                                    <input type="text" placeholder="Phone"onChange={handleinput1} value={data.phone} name="phone" />
                                </div>
                            </div>
                            <textarea  id="" className="textarea" cols="30" rows="10" placeholder="Hello iam interested in." onChange={handleinput1} value={data.message} name="mesage"></textarea>
                            <button className="formbutton my-md-4" onClick={(e)=>onSubmit1(e)}>
                                Send now
                            </button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <form action="">
                            <input type="text" placeholder="search" className="Searchbuttonofblogdetail" />
                        </form>
                        <h3 className="maintitletwo pt-4">Latest news</h3>
                        <h4 className="titles py-2">We Focus On Comfort <br /> And Gorgues</h4>
                        <h5 className="titlesdate text-end">06/02/2023</h5>
                        <hr  />
                        <h4 className="titles py-2">We Focus On Comfort <br /> And Gorgues</h4>
                        <h5 className="titlesdate text-end">06/02/2023</h5>
                        <hr /><h4 className="titles py-2">We Focus On Comfort <br /> And Gorgues</h4>
                        <h5 className="titlesdate text-end">06/02/2023</h5>
                        <hr />

                        <div className="categories list-unstyled p-4">
                            <h3 className="Categoriestitle">categories</h3>
                            <li className="borderbottomofcategories">
                                Decoration
                            </li>
                            <li className="borderbottomofcategories">
                                Door Windows
                            </li>
                            <li className="borderbottomofcategories">
                                Home Land
                            </li>
                            <li >
                                Roof Installatio
                            </li>
                        </div>
                        <h3 className="Categoriestitle pt-5">Tags</h3>
                        <div className="buttonsforcategories">
                            <button className="buttonsofcat">Kitchen</button>
                            <button className="buttonsofcat">Bedroom</button>
                        </div>
                        <div className="buttonsforcategories">
                            <button className="buttonsofcat">Building</button>
                            <button className="buttonsofcat">Architecture</button>
                        </div>
                        <div className="buttonsforcategories">
                            <button className="buttonsofcat">Kitchen Planning</button><button className="buttonsofcat"> Bedroom</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogdetailpage;