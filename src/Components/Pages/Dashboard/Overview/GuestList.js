import React from "react";
import guests from "../../../../data/guests.json";

function GuestList() {
	return (
		<ul>
			{guests.map((guest) => {
				return (
					<li key={guest.id}>
						<p>
							{guest.name} <small>{guest.time}</small>
						</p>
					</li>
				);
			})}
		</ul>
	);
}

export default GuestList;
