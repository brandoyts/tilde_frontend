import React from "react";

function GuestList({ guests }) {
  return (
    <ul>
      {guests &&
        guests.map((guest) => {
          return (
            <li key={`${guest.id}`}>
              <small>
                {guest.firstname} {guest.lastname} - {guest.createdAt}
              </small>
            </li>
          );
        })}
    </ul>
  );
}

export default GuestList;
