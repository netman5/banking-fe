import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center pt-5">
            <div className="text-center">
              <h1 className="display-1 fw-bold">404</h1>
              <p className="fs-3">
                {' '}
                <span className="text-danger">Opps!</span>
                {' '}
                Page not found.
              </p>
              <br />

              <h2 className='display-6'>Wait!!!!</h2>
              <p className="lead">
                Maybe you are not authorized to view this page.
                <br />
                Login to view this page.
              </p>
              <br />
              <NavLink to="/login" className="btn btn-secondary">Go Back</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;