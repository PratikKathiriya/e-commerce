import { useState } from "react";
 import "./Props2.css"
 import "./Style.css"
import { Projects } from "./Props";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
     <div className="container ">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Bathroom
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bed room
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Kitchen
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Living Area
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
           <div className="row d-flex justify-content-center mainprojects">
                    <div className="col-md-4 me-lg-5">
                        <Projects img="./images/projectsimg/Photo.png" name=" Bathrooms"/>
                        <Projects img="./images/projectsimg/Phototwo.png" name=" Bathrooms"/>
                        <Projects img="./images/projectsimg/Photofive.png" name=" Bathrooms"/>
                        <Projects img="./images/projectsimg/Photosix.png" name=" Bathrooms"/>

                    </div>
                    <div className="col-md-4">
                    <Projects img="./images/projectsimg/Phototwo.png" name=" Bathrooms"/>
                    <Projects img="./images/projectsimg/Photothree.png" name=" Bathrooms"/>
                    <Projects img="./images/projectsimg/Photofour.png" name=" Bathrooms"/>
                    <Projects img="./images/projectsimg/Photoseven.png" name=" Bathrooms" />
                    
                    </div>
                </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <div className="row d-flex justify-content-center mainprojects">
                    <div className="col-md-4 me-lg-5">
                        <Projects img="./images/projectsimg/Photo.png" name=" Minimal Bedroom"/>
                        <Projects img="./images/projectsimg/Phototwo.png" name=" Minimal Bedroom"/>
                        <Projects img="./images/projectsimg/Photofive.png" name=" Minimal Bedroom"/>
                        <Projects img="./images/projectsimg/Photosix.png" name=" Minimal Bedroom"/>

                    </div>
                    <div className="col-md-4">
                    <Projects img="./images/projectsimg/Phototwo.png" name=" Minimal Bedroom"/>
                    <Projects img="./images/projectsimg/Photothree.png" name=" Minimal Bedroom"/>
                    <Projects img="./images/projectsimg/Photofour.png" name=" Minimal Bedroom"/>
                    <Projects img="./images/projectsimg/Photoseven.png" name=" Minimal Bedroom" />
                    
                    </div>
                </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="row d-flex justify-content-center mainprojects">
                    <div className="col-md-4 me-lg-5">
                        <Projects img="./images/projectsimg/Photo.png" name=" Kitchen"/>
                        <Projects img="./images/projectsimg/Phototwo.png" name=" Kitchen"/>
                        <Projects img="./images/projectsimg/Photofive.png" name=" Kitchen"/>
                        <Projects img="./images/projectsimg/Photosix.png" name=" Kitchen"/>

                    </div>
                    <div className="col-md-4">
                    <Projects img="./images/projectsimg/Phototwo.png" name=" Kitchen"/>
                    <Projects img="./images/projectsimg/Photothree.png" name=" Kitchen"/>
                    <Projects img="./images/projectsimg/Photofour.png" name=" Kitchen"/>
                    <Projects img="./images/projectsimg/Photoseven.png" name=" Kitchen" />
                    
                    </div>
                </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className="row d-flex justify-content-center mainprojects">
                    <div className="col-md-4 me-lg-5">
                        <Projects img="./images/projectsimg/Photo.png" name=" Living Area"/>
                        <Projects img="./images/projectsimg/Phototwo.png" name=" Living Area"/>
                        <Projects img="./images/projectsimg/Photofive.png" name=" Living Area"/>
                        <Projects img="./images/projectsimg/Photosix.png" name=" Living Area"/>

                    </div>
                    <div className="col-md-4">
                    <Projects img="./images/projectsimg/Phototwo.png" name=" Living Area"/>
                    <Projects img="./images/projectsimg/Photothree.png" name=" Living Area"/>
                    <Projects img="./images/projectsimg/Photofour.png" name=" Living Area"/>
                    <Projects img="./images/projectsimg/Photoseven.png" name=" Living Area" />
                    
                    </div>
                </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tabs;