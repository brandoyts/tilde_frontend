import React from "react";
// import guests from "../../../../data/guests.json";

function GuestList({ guests }) {
	return (
		<ul>
			{guests &&
				guests.map((guest) => {
					return (
						<li key={`${guest.UserId}-${guest.UserId}`}>
							<small>
								{guest.firstname} {guest.lastname} -{" "}
								{guest.createdAt}
							</small>
						</li>
					);
				})}
		</ul>
	);
}

export default GuestList;
