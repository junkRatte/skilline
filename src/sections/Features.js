import React from "react";
import FeaturesIconOne from "../images/features-icon-one.png";
import FeaturesIconTwo from "../images/features-icon-two.png";
import FeaturesIconThree from "../images/features-icon-three.png";
import FeaturesCallImage from "../images/features-call.png";
import FeaturesToolsImage from "../images/tools-image.png";
import FeaturesTestImage from "../images/tests-image.png";
import FeaturesManagementImage from "../images/management-image.png";
import FeaturesDiscussionsImage from "../images/discussions-image.png";

function Features() {
  return (
    <div className="features-section">
      <div className="features-section-title">
        <h2>
          Our <span>Features</span>
        </h2>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="features-section-features">
        <div className="features-row">
          <div className="features-row-left">
            <img src={FeaturesCallImage} />
          </div>
          <div className="features-row-right">
            <h3>
              A <span>user interface</span> designed
              <br />
              for the classroom
            </h3>
            <div className="list">
              <div className="list-row">
                <img src={FeaturesIconOne} />
                <p>
                  Teachers don't get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="list-row">
                <img src={FeaturesIconTwo} />
                <p>
                  TA's and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="list-row">
                <img src={FeaturesIconThree} />
                <p>
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-row">
          <div className="features-row-left">
            <img src={FeaturesToolsImage} />
          </div>
          <div className="features-row-right">
            <h3>
              <span>Tools</span> For Teachers And Learners
            </h3>
            <p>
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
        </div>
        <div className="features-row">
          <div className="features-row-left">
            <img src={FeaturesTestImage} />
          </div>
          <div className="features-row-right">
            <h3>
              Assessments, <span>Quizzes</span>, Tests
            </h3>
            <p>
              Easily launch live assignments, quizzes and tests. Student results
              are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
        <div className="features-row">
          <div className="features-row-left">
            <img src={FeaturesManagementImage} />
          </div>
          <div className="features-row-right">
            <h3>
              <span>Class Management</span>
              <br />
              Tools for Educators
            </h3>
            <p>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>
        <div className="features-row">
          <div className="features-row-left">
            <img src={FeaturesDiscussionsImage} />
          </div>
          <div className="features-row-right">
            <h3>
              One-on-One
              <br />
              <span>Discussions</span>
            </h3>
            <p>
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </div>
      <div className="features-section-button">
        <a href="#">See more features</a>
      </div>
    </div>
  );
}

export default Features;
