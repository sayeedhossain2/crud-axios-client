import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const EmployerModal = ({
  SetEmployerInfo,
  employerInfo,
  //   setIsChange,
  //   isChange,
}) => {
  const { firstname, lastname, phonenumber, email, _id } = employerInfo;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const phonenumber = form.phonenumber.value;

    axios
      .put(`http://localhost:5000/employUpdate/${_id}`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
      })
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <>
      <input type="checkbox" id="employerDetails" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => SetEmployerInfo(null)}
            htmlFor="employerDetails"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate}>
            {/* item-1 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                defaultValue={firstname}
                name="firstname"
                className="input input-bordered"
              />
            </div>

            {/* item-2 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                defaultValue={lastname}
                name="lastname"
                className="input input-bordered"
              />
            </div>

            {/* item-3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={email}
                name="email"
                className="input input-bordered"
              />
            </div>
            {/* item-4 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                defaultValue={phonenumber}
                name="phonenumber"
                className="input input-bordered"
              />
            </div>

            <input
              className="btn btn-primary mt-6"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployerModal;
