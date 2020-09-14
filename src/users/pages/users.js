import React from "react";
import UsersList from "../components/usersList/usersList";

const Users = (props) => {
  const USER = [
    {
      id: "u1",
      name: "samir",
      image:
        "https://images.pexels.com/photos/1449670/pexels-photo-1449670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      place: "3",
    },
  ];

  return <UsersList items={USER} />;
};

export default Users;
