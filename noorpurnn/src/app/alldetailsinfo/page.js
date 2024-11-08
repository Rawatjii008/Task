import dynamic from "next/dynamic";
import React from "react";
import AllDetailsInfo from "./AllDetailsInfo";
// const AllDetailsInfo = dynamic(() => import('./AllDetailsInfo'))


const page = () => {
  return (
    <div>
      <AllDetailsInfo />
    </div>
  );
};

export default page;
