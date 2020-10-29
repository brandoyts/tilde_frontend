import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTableSearch: {
        searchIcon: {
          color: "white",
        },

        clearIcon: {
          color: "white",
        },
      },

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

          "&:selected": {
            color: "pink",
          },
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
          border: "none",
        },

        toolbar: {
          color: "#4892ef",
        },
      },

      MuiInput: {
        input: {
          color: "white",
        },
      },

      MUIDataTableToolbar: {
        icon: {
          color: "white",

          // "&:hover": {
          //   color: "#621ff3",
          // },
        },
      },
    },
  });

const columns = [
  { name: "id", label: "ID" },
  { name: "name", label: "Name" },
  { name: "address", label: "Address" },
  { name: "latitude", label: "Latitude" },
  { name: "longitude", label: "Longitude" },
  { name: "timeVisited", label: "Time Visited" },
];

const options = {
  textLabels: {
    pagination: {
      next: "Next Page",
      previous: "Previous Page",
      displayRows: "of",
    },

    filter: {
      all: "asd",
      title: "FILTERS",
      reset: "RESET",
    },
  },
  rowsPerPageOptions: false,
  rowsPerPage: 5,
  selectableRows: false,
  pagination: true,
  responsive: "scroll",
  filter: false,
};

function Table({ guestsData }) {
  const data = [];
  console.log(guestsData);
  if (guestsData) {
    for (let guest of guestsData) {
      const dataObj = {
        id: guest.id,
        name: `${guest.firstname} ${guest.lastname}`,
        address: guest.address,
        latitude: guest.lat,
        longitude: guest.lon,
        timeVisited: guest.createdAt,
      };

      data.push(dataObj);
    }
  }

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"Guest Data"}
        columns={columns}
        data={data}
        options={options}
        paging={false}
      />
    </MuiThemeProvider>
  );
}

export default React.memo(Table);
