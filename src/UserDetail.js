import React from "react";
import axios from "axios";

const getUserDetailsByID = (id) => {

  axios
    .get(`jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
};

export default function UserDetail(props) {
  return (
    <div>

      <h4 key={props.user.id}>
        {props.user.name} - {props.user.username}
      </h4>

      <button onClick={(event) => getUserDetailsByID(props.user.id)}>
        User Details
      </button>
    </div>
  );
}