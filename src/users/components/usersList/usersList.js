import React from "react";
import "./usersList.css";
import UsersItem from "../usersItem/usersItem";
import Card from "../../../shared/components/UIElement/Card";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h4> No User Found. </h4>{" "}
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((users) => (
        <UsersItem
          key={users.id}
          id={users.id}
          name={users.name}
          image={users.image}
          place={users.place}
        />
      ))}
    </ul>
  );
};

export default UsersList;
