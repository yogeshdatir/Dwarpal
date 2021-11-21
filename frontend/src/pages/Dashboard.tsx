import React, { useEffect } from "react";
import { publicFetch } from "../util/fetch";

interface Props {}

function Dashboard({}: Props) {
  useEffect(() => {
    (async () => {
      const { data } = await publicFetch.get("dashboard-data");
      console.log(data);
    })();
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
