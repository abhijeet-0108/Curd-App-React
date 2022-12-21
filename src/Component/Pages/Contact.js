import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 className="mb-4">Contact Us</h1>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit} style={{border:'2px solid black',borderRadius:'10px',boxShadow:"0 0 8px"}} className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Enter Your Name .
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address .
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password .
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            
            <button type="submit" className="btn btn-primary mt-4 mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
