import Header1 from "@/components/header/Header1";
import Header3 from "@/components/header/Header3";
import React from "react";

export const LazyLoading = () => {
  return(
    <>
    <Header3/>
    <div className="d-flex justify-content-center" style={{ height: '300px', alignItems: 'center' }}>
        <div className="loader">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
        </div>
    </div>
    </>
  )
};
