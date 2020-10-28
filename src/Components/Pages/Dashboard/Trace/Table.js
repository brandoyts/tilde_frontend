import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#16171c",
          color: "white",
          borderColor: "#1a1b20",
        },
      },

      MUIDataTableHeadCell: {
        root: {
          color: "#4892ef",
        },
        fixedHeader: {
          backgroundColor: "#16171c",
          color: "#4892ef",
        },
      },

      MUIDataTableSelectCell: {
        root: {
          borderColor: "#1a1b20",
        },
        headerCell: {
          backgroundColor: "#16171c",
          borderColor: "#1a1b20",
        },
      },

      MUIDataTablePagination: {
        root: {
          color: "white",
        },

        tableCellContainer: {
          backgroundColor: "#16171c",
        },
      },
    },
  });

const columns = [
  { name: "name", label: "Name" },
  { name: "timeVisited", label: "Time Visited" },
  { name: "address", label: "Address" },
  { name: "latitude", label: "Latityde" },
  { name: "longitude", label: "Longitude" },
];

const options = {
  filterType: "checkbox",
  pagination: {
    next: "Next Page",
    previous: "Previous Page",
    rowsPerPage: 5,
    displayRows: "of",
    rowsPerPage: 5,
  },
  rowsPerPage: 5,
  pagination: true,
  responsive: "simple",
};

function Table({ guestsData }) {
  console.log(guestsData);

  const data = [];

  if (guestsData) {
    for (let guest of guestsData) {
      const dataObj = {
        name: `${guest.firstname} ${guest.lastname}`,
        timeVisited: guest.createdAt,
        address: guest.address,
        latitude: guest.lat,
        longitude: guest.lon,
      };

      data.push(dataObj);
    }
  }

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"Guest Tabular Data"}
        data={data}
        columns={columns}
        options={options}
        pagination={true}
      />
    </MuiThemeProvider>
  );
}

export default Table;
