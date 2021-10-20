import React from "react";
import ForInstructorsImage from "../images/for-instructors.png";
import ForStudentsImage from "../images/for-students.png";
import VideoImage from "../images/video-img.png";

function WhatIs() {
  return (
    <div className="whatis-section">
      <div className="whatis-section-title">
        <h1>
          What is <span>Skilline?</span>
        </h1>
        <p>
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online, manage
          assignments, quizzes and exams, monitor due dates, grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      <div className="whatis-section-images">
        <div className="for-instructors">
          <img src={ForInstructorsImage} />
          <div className="for-instructors-text">
            <h3>For instructors</h3>
            <a href="#">Start a class today</a>
          </div>
        </div>
        <div className="for-students">
          <img src={ForStudentsImage} />
          <div className="for-students-text">
            <h3>For students</h3>
            <a href="#">Enter access code</a>
          </div>
        </div>
      </div>
      <div className="whatis-section-video">
        <div className="video-description">
          <h3>
            Everything you can do in a physical classroom,{" "}
            <span>you can do with Skilline</span>
          </h3>
          <p>
            Skilline's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="video">
            <img src={VideoImage}/>
        </div>
      </div>
    </div>
  );
}

export default WhatIs;
