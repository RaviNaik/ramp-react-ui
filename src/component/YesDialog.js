import React, { Fragment } from "react";

const YesDialog = () => {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Iam in
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please Enter the Details
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
                <div className="form-group">
                  <label htmlFor="manager-name">Manager Name:</label>
                  <select id="manager-name">
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="team-name">Team Name:</label>
                  <select id="team-name">
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-num" className="col-form-label">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-num"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <input type="radio"></input>
                  </span>
                  <span className="input-group-addon">Male</span>

                  <span className="input-group-addon">
                    <input type="radio"></input>
                  </span>
                  <span className="input-group-addon">Female</span>

                  <span className="input-group-addon">
                    <input type="radio"></input>
                  </span>
                  <span className="input-group-addon">Other</span>
                </div>
                <div className="form-group">
                  <label htmlFor="age" className="col-form-label">
                    Age:
                  </label>
                  <input type="text" className="form-control" id="age" />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <input type="radio"></input>
                  </span>
                  <span className="input-group-addon">Vegetarian</span>

                  <span className="input-group-addon">
                    <input type="radio"></input>
                  </span>
                  <span className="input-group-addon">Non-Vegitarian</span>
                </div>
                <div className="form-group">
                  <label htmlFor="emergency-num" className="col-form-label">
                    Emergency Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emergency-num"
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
    </Fragment>
  );
};

export default YesDialog;
