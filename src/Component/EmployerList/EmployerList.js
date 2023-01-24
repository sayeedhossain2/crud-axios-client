import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployerModal from "../EmployerModal/EmployerModal";
import EmployerDetails from "./EmployerDetails";

const EmployerList = () => {
  const [employInfo, setEmployInfo] = useState([]);
  const [employerInfo, SetEmployerInfo] = useState(null);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/employerInfo").then((data) => {
      const information = data.data;
      setEmployInfo(information);
    });
  }, [employInfo, isChange]);

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-4xl my-3 font-bold">Total {employInfo.length}</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>

              <th>All Information</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employInfo.map((info) => (
              <EmployerDetails
                key={info._id}
                info={info}
                SetEmployerInfo={SetEmployerInfo}
              ></EmployerDetails>
            ))}
          </tbody>

          {employerInfo && (
            <EmployerModal
              employerInfo={employerInfo}
              SetEmployerInfo={SetEmployerInfo}
              setIsChange={setIsChange}
              isChange={isChange}
            ></EmployerModal>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployerList;
