import React, { useState, useEffect, useContext } from "react";
import { LineGraph, PieGraph } from "./Graph";
import { AuthContext } from "../../../../store/Auth/AuthProvider";
import axios from "axios";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import DashboardCalendar from "../../../Calendar_";
import GuestList from "./GuestList";
import { Skeleton } from "@chakra-ui/core";

function LoadingContent({ children, hasData }) {
  return !hasData ? (
    <Skeleton height="100%" width="100%">
      {children}
    </Skeleton>
  ) : (
    <>{children}</>
  );
}

function Overview() {
  const [overviewData, setOverviewData] = useState(null);
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

        setOverviewData(data);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    // RUN ON FIRST RENDER
    fetchData(state.token);

    const updateData = setInterval(() => fetchData(state.token), 3000);
    return () => {
      clearInterval(updateData);
      setOverviewData(null);
    };
  }, []);

  return (
    <div className="overview">
      <h1 className="dashboard-title">Daily Overview</h1>

      <div className="overview__top dashboard-item">
        <LoadingContent hasData={overviewData}>
          <LineGraph data={overviewData && overviewData.graphicalData[0]} />
        </LoadingContent>
      </div>

      {/* PIE GRAPH */}
      <div className="overview__middle">
        <div className="dashboard-item overview__pie-graph">
          <LoadingContent hasData={overviewData}>
            <PieGraph data={overviewData && overviewData.guestsData} />
          </LoadingContent>
        </div>

        {/* GUEST COUNT */}
        <div className="dashboard-item overview__guest-count">
          <LoadingContent hasData={overviewData}>
            <CirculatTotal total={overviewData && overviewData.totalGuest} />
          </LoadingContent>
        </div>

        {/* CALENDAR */}
        <div className="dashboard-item overview__calendar">
          <LoadingContent hasData={overviewData}>
            <DashboardCalendar />
          </LoadingContent>
        </div>
      </div>

      <div className="overview__bottom">
        <div className="overview__map">
          <LoadingContent hasData={overviewData}>
            <Map guestData={overviewData && overviewData.guestsData} />
          </LoadingContent>
        </div>

        <div className="overview__guest-list dashboard-item">
          <LoadingContent hasData={overviewData}>
            <GuestList guests={overviewData && overviewData.guestsData} />
          </LoadingContent>
        </div>
      </div>
    </div>
  );
}

export default Overview;
