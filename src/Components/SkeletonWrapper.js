import React from "react";
import { Skeleton } from "@chakra-ui/core";

const options = {
  height: "100%",
  width: "100%",
  colorStart: "#1c1d1f",
  colorEnd: "#16171c",
  speed: 0.5,
};

function SkeletonWrapper({ children, data }) {
  return !data ? <Skeleton {...options}>{children}</Skeleton> : <>{children}</>;
}

export default SkeletonWrapper;
