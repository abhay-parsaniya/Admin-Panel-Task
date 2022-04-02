import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BackgroundWrapper from "./Wrappers/BackgroundWrapper";
import ContainerWrapper from "./Wrappers/ContainerWrapper";

const EducationDetails = () => {

  const [educationData, setEducationData] = useState([]);

  useEffect(() => {

    let abc = JSON.parse(localStorage.getItem("user"));
    console.log(abc.iduser_details);

    fetch('http://localhost:5000/geteducationdetails', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "id": abc.iduser_details,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          console.log(data.result)
          setEducationData(data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <BackgroundWrapper>
        <Navbar />
        {/* <ContainerWrapper> */}
          <div className="table-responsive">
            <table className="table table-info w-75 text-center mx-auto my-5">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">School / Institute Name</th>
                  <th scope="col">Course / Stream</th>
                  <th scope="col">CGPA</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                </tr>
              </thead>
              <tbody>
              {
                educationData.map((item, index) => {
                  return(
                    <tr>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.institute_name}</td>
                      <td>{item.course}</td>
                      <td>{item.cgpa}</td>
                      <td>{item.start_date}</td>
                      <td>{item.end_date}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        {/* </ContainerWrapper> */}
      </BackgroundWrapper>
    </>
  );
};

export default EducationDetails;
