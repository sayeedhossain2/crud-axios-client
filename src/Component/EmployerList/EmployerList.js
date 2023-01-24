import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployerModal from "../EmployerModal/EmployerModal";
import EmployerDetails from "./EmployerDetails";
// import spinner from "../../../public/Spinner.gif";
import { Puff } from "react-loader-spinner";

const EmployerList = () => {
  const [employInfo, setEmployInfo] = useState([]);
  const [employerInfo, SetEmployerInfo] = useState(null);
  const [isChange, setIsChange] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:5000/employerInfo").then((data) => {
      const information = data.data;
      setEmployInfo(information);
      setIsLoading(false);
    });
  }, [employInfo, isChange]);

  if (isLoading) {
    return (
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-4xl my-3 font-bold">Total {employInfo.length}</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Full Name</th>

              <th>All Information</th>

              <th>Lock</th>
              <th>Action</th>
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
