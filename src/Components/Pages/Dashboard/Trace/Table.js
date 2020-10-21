import React from "react";
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Time Visited", "Address", "Lat", "Lon"];

const options = {
	filterType: "checkbox",
};

function Table() {
	const data = [
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
		["Brando Test 1", "7:30 AM", "test 1", "322.5232", "-3221232"],
	];

	return (
		<MUIDataTable
			title={"Guest Tabular Data"}
			data={data}
			columns={columns}
			options={options}
			rowsPerPage={5}
		/>
	);
}

export default Table;
