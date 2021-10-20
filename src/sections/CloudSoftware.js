import React from "react";
import BillingIcon from "../components/BillingIcon";
import DateIcon from "../components/DateIcon";
import CustomerIcon from "../components/CustomerIcon";

function CloudSoftware() {
  return (
    <div className="cloud-section">
      <div className="cloud-section-title">
        <h2>
          All-In-One <span>Cloud Software.</span>
        </h2>
        <p>
          Skilline is one powerful online software suite that combines all the
          <br />
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className="cloud-section-cards">
        <div className="card billing">
          <BillingIcon />
          <div className="card-title">
            <h2>Online Billing, 
            Invoicing & Contracts</h2>
          </div>
          <div className="card-description">
            <p>
              Simple and secure control of your
              organization's financial and legal
              transactions. Send customized
              invoices and contracts.
            </p>
          </div>
        </div>
        <div className="card attendance">
          <DateIcon />
          <div className="card-title">
            <h2>
              Easy Scheduling &
              Attendance Tracking
            </h2>
          </div>
          <div className="card-description">
            <p>
              Schedule and reserve classrooms
              at one campus or multiple campuses.
              Keep detailed records of students
              attendance.
            </p>
          </div>
        </div>
        <div className="card tracking">
          <CustomerIcon />
          <div className="card-title">
            <h2>Customer Tracking</h2>
          </div>
          <div className="card-description">
            <p>
              Automate and track emails to
              individuals or groups. Skilline's
              built-in system helps organize
              your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudSoftware;
