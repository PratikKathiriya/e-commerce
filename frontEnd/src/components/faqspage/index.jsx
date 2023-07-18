import {  useState } from "react";
import "./style.css";
import "./script.js"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Faqspage = () => {
    const [openQuestion, setopenQuestion] = useState(null)



    const questionanswer = [
        {
            title: 'What is the Hipcouch Interior Design Service?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'So, how exactly does this work?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'What cities do you currently operate in?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'Hipcouch Interior Design Service?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'What kind of interior designers do you have?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },

    ]

    const questionanswerone = [
        {
            title: 'How long does it take?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'Can I use my existing furnishings?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: "I put into redesigning my interior?",
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'What do your services cost?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
            title: 'Do you offer free consultations?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu semvitae turpmaximus.posuere in.Contrary popular belief.There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },

    ]

    function revelansweronclick(index) {
        setopenQuestion(index);
        console.log("hiiiiiii")
     
    }
    

    function closeanswer() {
        setopenQuestion(null)
    }

    return(
        <>
         <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/FAq/Photo.jpg" className="firstimg" alt="" />
                        <div className="servicesingleText text-center">
                            <h1>Faq's</h1>
                            <h6>Home / Faq's</h6>
                        </div>
                    </div>
                </div>
            </div>


        <div className="container my-5 py-5">
             <div className="row d-flex justify-content-center">
                        <h1 className="text-center py-5 Faqbigtext">Every Question Answered</h1>
                        <div className="col-md-5 py-5">
                        {questionanswer.map((questionanswer, index) => {
                            return (
                                <>
                                    <div key={index} className="questionandanswerfaq ">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="questionfaq" style={{ color: openQuestion === index ? "#CDA274" : "black" }}>{questionanswer.title}</h4>
                                            <button className="answerbuttonfaq" onClick={() => { revelansweronclick(index) }  } onDoubleClick={() => {closeanswer()}}>{ openQuestion === index ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</button>
                                        </div>
                                        {
                                            console.log("openQuestion::::",openQuestion,"index::::",index)
                                        }
                                        {openQuestion === index && <div className="contentfaq">{questionanswer.answer}</div>}
                                    </div>
                                </>
                            )

                        })}
                        </div>
                        <div className="col-md-5">
                            <img src="./images/FAq/Photo (1).jpg" className="questionimges" alt="" />
                        </div>
             </div>     
             <div className="row my-md-5 py-5 d-flex justify-content-center">
                       <h1 className="text-center py-5 Faqbigtext">Project Related Questions</h1>
                        <div className="col-md-5">
                        <img src="./images/FAq/Photo (2).jpg" className="questionimges" alt="" />
                        </div>
                        <div className="col-md-5 py-5">
                        {questionanswerone.map((questionanswer, index) => {
                            return (
                                <>

                                    <div key={index} className="questionandanswerfaq ">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="questionfaq" style={{ color: openQuestion === index ? "#CDA274" : "black" }}>{questionanswer.title}</h4>
                                            <button className="answerbuttonfaq" onClick={() => { revelansweronclick(index) }  } onDoubleClick={() => {closeanswer()}}>{ openQuestion === index ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</button>
                                        </div>

                                        {openQuestion === index && <div className="contentfaq" >{questionanswer.answer}</div>}
                                    </div>


                                </>
                            )

                        })}
                        </div>
                </div>  
        </div>    
        
        </>
    )
}

export default Faqspage;