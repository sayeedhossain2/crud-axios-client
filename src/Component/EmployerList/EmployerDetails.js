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

  const { firstname, lastname } = info;
  return (
    <tr>
      <td className="font-bold">{firstname + " " + lastname}</td>

      <td>
        <label
          onClick={() => SetEmployerInfo(info)}
          htmlFor="employerDetails"
          className="btn btn-active bg-teal-600  hover:bg-teal-700  border-none duration-300"
        >
          Details
        </label>
      </td>
      <td>
        <button onClick={toggle}>
          {" "}
          {open ? (
            <button className="btn btn-active px-[26.5px] bg-yellow-600 hover:bg-yellow-700  border-none duration-300">
              Block
            </button>
          ) : (
            <button className="btn btn-active bg-slate-400 text-black  hover:bg-yellow-600 hover:text-white  border-none duration-300">
              UnBlock
            </button>
          )}
        </button>
      </td>
      <td>
        <button
          className="btn bg-rose-600 hover:bg-rose-700 border-none duration-300"
          onClick={() => handleDelete(info)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployerDetails;
