import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Landing = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="row my-4">
        <Link to="/details" className="btn btn-primary col-3 mx-auto">
          Iam in
        </Link>
        {/* <div> */}
        <button
          type="button"
          className="btn btn-danger col-3 mx-auto"
          data-toggle="modal"
          data-target="#noModal"
        >
          Sorry
        </button>
        <div
          className="modal fade"
          id="noModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
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
                    <label htmlFor="manager-name" className="col-form-label">
                      Manager Name:
                    </label>
                    <select>
                      <option>Uma Maheswaran</option>
                      <option>Chandramohan Sankaran</option>
                      <option>Sudeepa Jeevan</option>
                      <option>Christopher Jonathan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="team-name" className="col-form-label">
                      Team Name:
                    </label>
                    <select>
                      <option>Ref Apps</option>
                      <option>Performance Service Enablement</option>
                      <option>Landscape</option>
                      <option>IND CF</option>
                      <option>QPA Tools</option>
                      <option>E2E Scenario Validation</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="reason-text" class="col-form-label">
                      Reason:
                    </label>
                    <textarea class="form-control" id="reason-text"></textarea>
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
      {/* </div> */}
    </Fragment>
  );
};

export default Landing;
