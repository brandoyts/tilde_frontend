import React, { useState, useEffect, useContext } from "react";
import { LineGraph, PieGraph } from "./Graph";
import { AuthContext } from "../../../../store/Auth/AuthProvider";
import axios from "axios";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import DashboardCalendar from "../../../Calendar_";
import GuestList from "./GuestList";
import { Skeleton } from "@chakra-ui/core";

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

		setTimeout(() => fetchData(state.token), 5000);
	}, []);

	console.log(overviewData);
	return (
		<div className="overview">
			<h1 className="dashboard-title">Daily Overview</h1>

			<div className="overview__top dashboard-item">
				{overviewData ? (
					<LineGraph data={overviewData.graphicalData[0]} />
				) : (
					<Skeleton>
						<LineGraph />
					</Skeleton>
				)}
			</div>

			<div className="overview__middle">
				<div className="dashboard-item overview__pie-graph">
					{overviewData ? (
						<PieGraph data={overviewData.guestsData} />
					) : (
						<Skeleton>
							<PieGraph />
						</Skeleton>
					)}
				</div>
				<div className="dashboard-item overview__guest-count">
					{overviewData ? (
						<CirculatTotal total={overviewData.totalGuest} />
					) : (
						<Skeleton>
							<CirculatTotal />
						</Skeleton>
					)}
				</div>
				<div className="dashboard-item overview__calendar">
					{overviewData ? (
						<DashboardCalendar />
					) : (
						<Skeleton>
							<DashboardCalendar />
						</Skeleton>
					)}
				</div>
			</div>

			<div className="overview__bottom">
				<div className="overview__map">
					{overviewData ? (
						<Map />
					) : (
						<Skeleton>
							<Map />
						</Skeleton>
					)}
				</div>

				<div className="overview__guest-list dashboard-item">
					{overviewData ? (
						<GuestList guests={overviewData.guestsData} />
					) : (
						<Skeleton>
							<GuestList />
						</Skeleton>
					)}
				</div>
			</div>
		</div>
	);
}

export default Overview;
