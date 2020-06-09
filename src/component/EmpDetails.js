import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const EmpDetails = () => {
  return (
    <Fragment className="container">
      <div className="row">
        <form className="col mt-3">
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Employee Details</h1>
            <div className="form-group">
              <label htmlFor="emp-id" className="col-form-label">
                Employee ID:
              </label>
              <input type="text" className="form-control" id="emp-id" />
            </div>
            <div className="form-group">
              <label htmlFor="emp-name" className="col-form-label">
                Employee Name:
              </label>
              <input type="text" className="form-control" id="emp-name" />
            </div>
          </div>
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Team Details</h1>
            <div className="form-group">
              <label htmlFor="manager-name">Manager Name:</label>
              <select id="manager-name">
                <option>Uma Maheswaran</option>
                <option>Chandramohan Sankaran</option>
                <option>Sudeepa Jeevan</option>
                <option>Christopher Jonathan</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="team-name">Team Name:</label>
              <select id="team-name">
                <option>Ref Apps</option>
                <option>Performance Service Enablement</option>
                <option>Landscape</option>
                <option>IND CF</option>
                <option>QPA Tools</option>
                <option>E2E Scenario Validation</option>
              </select>
            </div>
          </div>
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Personal Details</h1>
            <div className="form-group">
              <label htmlFor="contact-num" className="col-form-label">
                Contact Number:
              </label>
              <input type="text" className="form-control" id="contact-num" />
            </div>
            <label className="col-form-label">Gender:</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="maleRadio"
                value="male"
              ></input>
              <label className="form-check-label" htmlFor="maleRadio">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="femaleRadio"
                value="female"
              ></input>
              <label className="form-check-label" htmlFor="femaleRadio">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="otherGenderRadio"
                value="otherGender"
              ></input>
              <label className="form-check-label" htmlFor="otherGenderRadio">
                Other
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="age" className="col-form-label">
                Age:
              </label>
              <input type="text" className="form-control" id="age" />
            </div>
            <div className="form-group">
              <label htmlFor="emergency-num" className="col-form-label">
                Emergency Number:
              </label>
              <input type="text" className="form-control" id="emergency-num" />
            </div>
          </div>
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Food Prefernce</h1>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="vegRadio"
                value="veg"
              ></input>
              <label className="form-check-label" htmlFor="vegRadio">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="nonVegRadio"
                value="nonVeg"
              ></input>
              <label className="form-check-label" htmlFor="nonVegRadio">
                Non-Vegetarian
              </label>
            </div>
          </div>
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Address Details</h1>
            <div className="form-group">
              <label htmlFor="reside-area" className="col-form-label">
                Residing Area:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="reside-area"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="street" className="col-form-label">
                Street:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="street"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="landmark" className="col-form-label">
                Landmark:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="landmark"
              ></textarea>
            </div>
          </div>
          <div className="border rounded mx-auto mb-3 p-3 col-8">
            <h1 className="lead">Transport Details</h1>
            <div className="row">
              <button
                type="button"
                className="btn btn-primary col-3 mx-auto"
                data-toggle="modal"
                data-target="#modal-sap-transport"
              >
                SAP Provided
              </button>
              <button
                type="button"
                className="btn btn-warning col-3 mx-auto"
                data-toggle="modal"
                data-target="#modal-own-transport"
              >
                Own Transport
              </button>
            </div>
            {/* SAP Provided Transport */}
            <div
              className="modal fade"
              id="modal-sap-transport"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Congratulations!
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Thanks for all the Details!. We will update your travel
                    details soon!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <Link to="/" className="btn btn-primary">
                      Ok
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Own Transport Modal */}
            <div
              className="modal fade"
              id="modal-own-transport"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Please fill the below details
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="vehicle-type">Vehicle Type:</label>
                        <select id="vehicle-type">
                          <option>Two wheeler</option>
                          <option>Four wheeler</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="vehicle-id" className="col-form-label">
                          Vehicle Number:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="vehicle-id"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="vehicle-capacity">Vehicle Type:</label>
                        <select id="vehicle-capacity">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="start-point" className="col-form-label">
                          Start Point:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="start-point"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="start-time" className="col-form-label">
                          Start Time:
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          id="start-time"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="driver-contact"
                          className="col-form-label"
                        >
                          Driver Contact:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="driver-contact"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="partner" className="col-form-label">
                          Co-Passenger Details:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="partner"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EmpDetails;
