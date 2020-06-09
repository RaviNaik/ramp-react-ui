import React, { Fragment } from "react";

const NoDialog = () => {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal1"
      >
        Sorry
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
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
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="team-name" className="col-form-label">
                    Team Name:
                  </label>
                  <select>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
                    <option>Raju Badadani</option>
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
    </Fragment>
  );
};

export default NoDialog;
