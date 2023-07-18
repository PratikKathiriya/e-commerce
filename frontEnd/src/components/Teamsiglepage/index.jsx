import "./Style.css";
import "../Aboutpage/style.css"
import "../Blogdetailspage/style.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useRef } from "react";




const Teamsinglepage = () => {
    const [openQuestion, setopenQuestion] = useState(null);
    const [professionalName, setprofessionalName] = useState([])
    const params = useParams("");
    // const Questionandanswer = useRef();
    console.log("professionalllll", professionalName);
    const getdata = async() =>{
        try {
            const res = await axios.get(`http://localhost:8000/professional/one/${params.uniqueId}`)
            console.log("res111111111::::", res)
            setprofessionalName(res.data.data);
        } catch (error) {
            console.log("error:::", error);
        }
    }

    useEffect(()=>{
        getdata()   
    },[])

    const questionanswer1 = [
        {
            title: 'Website and Mobile App Design?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.',
        },
        {
            title: 'How To Easy Succesfil Project?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.',
        },
        {
            title: 'International Trade Ecperience?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.',
        },

    ]

  const revelansweronclick = (index) => {
        setopenQuestion(index)
    }

    const closeanswer = () => {
        setopenQuestion(null)
    }

    const [data, setData] = useState({
        name:" ",
        email:" ",
        message:" ",
    })

    const handleinput = (e) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/contact/insert",data);
            setData(" ");   
            console.log("res:::",res)
        } catch (error) {
            console.log("error::::",error)
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="/images/teamsinglepageimg/Photo.jpg" className="firstimg" alt="" />
                        <div className="ProfessionalsingleText text-center">
                            <h1>Professional Single</h1>
                            <h6>Home / Team Single</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-md-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                         <img src={professionalName.image} className="teamsingleimg" alt="" />
                    </div>
                    <div className="col-md-5">
                        <h1 className="professionalname">{professionalName.name} {professionalName.lastName}</h1>
                        <h5 className="professionaljob">Designer</h5>
                        <p className="professionalparagraph">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.</p>
                        <div className="iconandname">
                            <button className="iconbutton"><MailOutlineIcon /></button>
                            <a href="" className="iconnames">{professionalName.email}</a>
                        </div>
                        <div className="iconandname">
                            <button className="iconbutton"><CallOutlinedIcon /></button>
                            <a href="" className="iconnames">{professionalName.mobile}</a>
                        </div>
                        <div className="iconandname">
                            <button className="iconbutton"><PublicOutlinedIcon /></button>
                            <a href="" className="iconnames">www.yourdomain.com</a>
                        </div>
                        <div className="icons d-flex list-unstyled justify-content-lg-around" >
                            <li>f</li>
                            <li><TwitterIcon /></li>
                            <li>in</li>
                            <li><InstagramIcon /></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5 pb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <h1 className="titleofbiography">Short Biography</h1>
                        <p className="paragraaphofbiography">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
                            randomised words which don't look even slightly believable.
                            <br />
                            <br />
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>




                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <h5 className="titleofrange">Simplicity and Functionality</h5>
                        <p className="paragraphofrange">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.
                            <br />
                            <br />
                            There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>
                        <h1 className="rangetitle">Project Design</h1>
                        <div className="range-container">
                            <input type="range" className="rangeinput" value="65" min="0" max="100" disabled />
                            <span className="range-value-one">65%</span>
                        </div>
                        <h1 className="rangetitle">Team Management</h1>
                        <div className="range-container">
                            <input type="range" className="rangeinput" value="95" min="0" max="100" disabled />
                            <span className="range-value-two">95%</span>
                        </div>
                        <h1 className="rangetitle">Client Satisfaction</h1>
                        <div className="range-container">
                            <input type="range" className="rangeinput" value="75" min="0" max="100" disabled />
                            <span className="range-value-three">75%</span>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <h3 className="titleofrange">Question And Answer</h3>
                        <p className="paragraphofrange">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
                        {questionanswer1.map((item , index) => {

                            return (
                                <>

                                    <div key={index} className="questionandanswer1 ">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="question1">{item.title}</h4>
                                            <button className="answerbutton1"  onClick={() => { revelansweronclick(index) }  } onDoubleClick={() => {closeanswer()}}>+</button>
                                    

                                        </div>
                                       {openQuestion === index && <div className="content1">{item.answer}</div> } 
                                    </div>  
                                </>
                            )

                        })}
                    </div>
                </div>
            </div>
            <div className="container-fluid peoplesthink">
                <div className="row peoples" >
                    <div className="col text-center">
                        <h1>
                            What People Think <br /> About Us
                        </h1>
                        <div className=" d-flex justify-content-center list-unstyled">
                            <li><img src="/images/aboutPeopleImg.png" alt="" className="peopleone" /></li>
                            <li><img src="/images/aboutPeopleImgtwo.png" alt="" className="peopletwo" /></li>
                            {/* <li><img src="" alt="" /></li> */}
                            <li><img src="/images/aboutPeopleImgthree.png" alt="" className="peoplethree" /></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container inputfield" >
                <div className="row">
                    <div className="col text-center">
                        <h1 className="inputh1">Creative Peoject? let's have <br /> a productive talk</h1>
                        <div className="nameAndEmail">
                            <input type="text" name="name" placeholder="Name" className="nameInput" value={data.name} onChange={handleinput} />
                            <input type="text" name="email" placeholder="Email" className="emailInput" value={data.email} onChange={handleinput} /> <br />
                            <textarea name="message" id="" className="commentInput" cols="30" placeholder="Hello I an Interested In" rows="7" value={data.message} onChange={handleinput} ></textarea> <br />
                            <button className="buttonForform" onClick={(e) => onSubmit(e)}>send now <ArrowForwardIcon className="arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Teamsinglepage;