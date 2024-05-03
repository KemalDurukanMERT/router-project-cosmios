import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const People = () => {

  const navigate = useNavigate()

  //hook

  //dinamik degiskenler

  //useState Hook

  const [people, setPeople] = useState([]);

  const getPeople = () => {
    // HTTP Request

    // request

    // response

    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.page)
        console.log(data.total)
        console.log(data.data)  // [kisi bilgileri]

        setPeople(data.data)
      })
      .catch((err) => {
        console.log(err)
      });
  };


  // Component LifeCycle

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center">
        {people.map((person) => {

          const {id, first_name, last_name, avatar} = person

          return (
            <div key={id} className="col-lg-4 col-md-6 col-sm-12"

            // onClick={() => navigate(`/people/${id}`, {state: person})}

            //! absolute path
            // onClick={() => navigate(`/people/${id}`)}


            //! relative path
            onClick={() => navigate(`${id}`)}
            
            
            >

              <img src={avatar} />
              <h6>{first_name} {last_name}</h6>
            </div>
          ) 
        })}
      </div>
    </div>
  );
};

export default People;
