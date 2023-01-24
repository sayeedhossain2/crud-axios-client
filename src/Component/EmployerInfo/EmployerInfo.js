import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const EmployerInfo = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const phonenumber = form.phonenumber.value;

    axios({
      method: "post",
      url: "http://localhost:5000/employerInfo",
      data: {
        firstname,
        lastname,
        email,
        phonenumber,
      },
    });

    form.reset();
    Swal.fire("Good job!", "User Information Added Successfully!", "success");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">employees Info</h1>
          </div> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl m-10 bg-base-100">
            <h1 className="text-5xl font-bold mt-4 ">Employees Info</h1>
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Submit</button> */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerInfo;
