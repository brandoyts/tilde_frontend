import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Map from "../../../Map";
import Table from "./Table";
import { Skeleton } from "@chakra-ui/core";
import { AuthContext } from "../../../../store/Auth/AuthProvider";

function Trace({ guestData }) {
  const [traceData, setTraceData] = useState(null);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:8000/api/v1/dashboard/overview-data",
          headers: { Authorization: token },
        });

        const { data } = response;

        setTraceData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(state.token);

    return () => {
      setTraceData(null);
    };
  }, []);

  console.log("trace");
  console.log(traceData);

  return (
    <div className="trace">
      <h1 className="dashboard-title">Contact Trace</h1>
      <div className="trace__top trace__map map">
        <LoadingContent hasData={traceData}>
          <Map guestsData={traceData && traceData.guestsData} />
        </LoadingContent>
      </div>
      <div className="trace__bottom">
        <LoadingContent hasData={traceData}>
          <Table guestsData={traceData && traceData.guestsData} />
        </LoadingContent>
      </div>
    </div>
  );
}

function LoadingContent({ children, hasData }) {
  return !hasData ? (
    <Skeleton height="100%" width="100%">
      {children}
    </Skeleton>
  ) : (
    <>{children}</>
  );
}

export default Trace;
