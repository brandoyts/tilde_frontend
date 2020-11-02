import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../store/Auth/AuthProvider";
import LineGraph from "../../../Graphs/LineGraph";
import BarGraph from "../../../Graphs/BarGraph";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import DashboardCalendar from "../../../Calendar_";
import GuestList from "./GuestList";
import SkeletonWrapper from "../../.././SkeletonWrapper";

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
      } catch (error) {
        console.log(error);
      }
    };

    const updateData = setInterval(() => fetchData(state.token), 3000);
    return () => {
      clearInterval(updateData);
      setOverviewData(null);
    };
  }, [state]);

  return (
    <div className="overview">
      <h1 className="dashboard-title">Daily Overview</h1>

      {/* LINE GRAPH */}
      <section className="dashboard-item overview__top">
        <SkeletonWrapper data={overviewData}>
          <LineGraph data={overviewData && overviewData.graphicalData[0]} />
        </SkeletonWrapper>
      </section>

      {/* PIE GRAPH */}
      <section className="grid-container">
        <div className="dashboard-item overview__pie-graph ">
          <SkeletonWrapper data={overviewData}>
            <BarGraph data={overviewData && overviewData.guestsData} />
          </SkeletonWrapper>
        </div>

        {/* GUEST COUNT */}
        <div className="dashboard-item overview__guest-count">
          <SkeletonWrapper data={overviewData}>
            <CirculatTotal
              title="Total Guest"
              total={overviewData && overviewData.totalGuest}
            />
          </SkeletonWrapper>
        </div>

        {/* CALENDAR */}
        <div className="dashboard-item overview__calendar">
          <SkeletonWrapper data={overviewData}>
            <DashboardCalendar />
          </SkeletonWrapper>
        </div>
        {/* </section> */}

        {/* <section className="overview__bottom"> */}
        <div className="overview__map map">
          <SkeletonWrapper data={overviewData}>
            {overviewData && (
              <Map guestsData={overviewData && overviewData.guestsData} />
            )}
          </SkeletonWrapper>
        </div>

        <div className="dashboard-item overview__guest-list">
          <SkeletonWrapper data={overviewData}>
            <GuestList guests={overviewData && overviewData.guestsData} />
          </SkeletonWrapper>
        </div>
      </section>
    </div>
  );
}

export default Overview;
