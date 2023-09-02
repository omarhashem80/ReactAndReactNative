import React from "react";
import { useState } from "react";
import "./CSS/fourth-page.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FourthPage = () => {
  const [Experince, setExperience] = useState([]);
  const [ExpArr, setExpArr] = useState([]);
  const [Exp, setiExp] = useState(0);
  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Resume", {
      state: {
        ...location.state,
        Experince: Experince,
      },
    });
  };
  const location = useLocation();
  const BackHandler = () => navigate("/Skills");

  const AddExperince = () => {
    setiExp(Exp + 1);
    setExperience((prev) => [
      ...prev,
      { jobTitle: "", JobDesc: "", From: "", To: "" },
    ]);
    setExpArr((prevprojects, index) => {
      return [
        ...prevprojects,
        <div className="Projects" id={Exp}>
          <button onClick={del} name={Exp}>X</button>
          <div className="JobTitle">
            <p>Job Title</p>
            <input
              type="text"
              name={Exp}
              placeholder="e.g. Junior Software Engineer"
              onChange={(e) => {
                setExperience((prev) => {
                  const value = e.target.value;
                  let key = parseInt(e.target.name);
                  if (key <= prev.length) {
                    prev[key].jobTitle = value;
                  } else {
                    prev = [...prev, { jobTitle: value }];
                  }
                  return prev;
                });
              }}
            ></input>
          </div>
          <div className="JobDesc">
            <p>Job Description</p>
            <textarea
              type="text"
              name={Exp}
              placeholder="e.g. I design softwares for companies"
              onChange={(e) => {
                setExperience((prev) => {
                  const value = e.target.value;
                  let key = parseInt(e.target.name);
                  if (key <= prev.length) {
                    prev[key].JobDesc = value;
                  } else {
                    prev = [...prev, { JobDesc: value }];
                  }
                  return prev;
                });
              }}
            ></textarea>
          </div>
          <div className="From">
            <p>From</p>
            <input
              type="text"
              name={Exp}
              placeholder="e.g. 2020"
              onChange={(e) => {
                setExperience((prev) => {
                  const value = e.target.value;
                  let key = parseInt(e.target.name);
                  if (key <= prev.length) {
                    prev[key].From = value;
                  } else {
                    prev = [...prev, { From: value }];
                  }
                  return prev;
                });
              }}
            ></input>
          </div>
          <div className="To">
            <p>To</p>
            <input
              type="text"
              name={Exp}
              placeholder="e.g. 2023"
              onChange={(e) => {
                setExperience((prev) => {
                  const value = e.target.value;
                  let key = parseInt(e.target.name);
                  if (key <= prev.length) {
                    prev[key].To = value;
                  } else {
                    prev = [...prev, { To: value }];
                  }
                  return prev;
                });
              }}
            ></input>
          </div>
        </div>,
      ];
    });
  };
  const del =(e)=>{
    console.log(e.target.name);
    const x=document.getElementById(e.target.name);
    x.remove();
  }
  function debug() {
    console.log(Experince);
  }
  return (
    <>
      <Header />
      <div id="fourthPage">
        <Navbar props={3} />
        <div className="Background">
          <div className="mainWrapper">
            <p>Experience</p>
            <div className="Wrapper">
              <div className="inputWrapper">
                <button onClick={AddExperince} className="Probutton">
                  Add Job Experience
                </button>
                <div className="projectWrapper">
                  {ExpArr.map((project) => {
                    return <div>{project}</div>;
                  })}
                </div>
              </div>
            </div>
            <div className="buttonsWrapper">
              <button className="Back" onClick={BackHandler}>
                Back
              </button>
              <button className="Next" type="submit" onClick={NextHandler}>
                Next
              </button>
              <button onClick={debug}>debug</button>
            </div>
          </div>
          <div className="BackgroundImg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FourthPage;