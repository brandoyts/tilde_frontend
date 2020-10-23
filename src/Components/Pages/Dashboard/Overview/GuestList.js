import React from "react";
// import guests from "../../../../data/guests.json";

function GuestList({ guests }) {
	return (
		<ul>
			{guests &&
				guests.map((guest) => {
					return (
						<li key={`${guest.UserId}-${guest.UserId}`}>
							<p>
								{guest.firstname} {guest.lastname}
								<small>{guest.createdAt}</small>
							</p>
						</li>
					);
				})}
		</ul>
	);
}

export default GuestList;
