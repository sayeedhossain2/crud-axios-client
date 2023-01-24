import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EmployerDetails = ({ info, SetEmployerInfo }) => {
  const [open, SetOpen] = useState(false);
  const toggle = () => {
    SetOpen(!open);
  };

  const handleDelete = (info) => {
    console.log(info._id);
    const agree = window.confirm(`Are you sure You want to delete `);

    if (agree) {
      //   fetch(`http://localhost:5000/sayeed/${info._id}`, {
      //     method: "DELETE",
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       if (data.deletedCount > 0) {
      //         // setIsChange(!isChange);
      //         Swal.fire("Good job!", "Deleted Successfully!", "success");
      //       }
      //     });
      axios
        .delete(`http://localhost:5000/sayeed/${info._id}`)

        .then((data) => {
          console.log(data);
          if (data.data.deletedCount > 0) {
            Swal.fire("Good job!", "Deleted Successfully!", "success");
          }
        });
    }
  };

  //   console.log(info);
  const { firstname } = info;
  return (
    <tr>
      <th>1</th>
      <td>{firstname}</td>

      {/* <label
          onClick={() => setConpanyInfo(allinfo)}
          htmlFor="details-info-company"
          className="btn btn-active btn-primary  hover:bg-indigo-800 duration-300"
        >
          Edit
        </label> */}

      <td>
        <label
          onClick={() => SetEmployerInfo(info)}
          htmlFor="employerDetails"
          className="btn btn-active btn-primary  hover:bg-indigo-700 duration-300"
        >
          Details
        </label>
        {/* <button className="btn btn-active btn-secondary">Details</button>{" "} */}
      </td>
      <td>
        <button
          //   className="btn btn-active btn-error hover:bg-pink-500 duration-300"
          //   onClick={() => handleDelete(info)}
          onClick={toggle}
        >
          {" "}
          {open ? (
            <button className="btn btn-active bg-red-500 hover:bg-pink-500 duration-300">
              Block
            </button>
          ) : (
            <button className="btn btn-active btn-accent hover:bg-green-600 duration-300">
              UnBlock
            </button>
          )}
        </button>
      </td>
      <td>
        <button
          className="btn btn-active btn-secondary hover:bg-red-900 duration-300"
          onClick={() => handleDelete(info)}
        >
          Delete
        </button>
      </td>

      {/* <td>{lastname}</td>
      <td> {email} </td>
      <td> {phonenumber} </td> */}
    </tr>
  );
};

export default EmployerDetails;
