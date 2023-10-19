import React from "react";

import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";

function Dashboard(){
    return(
       <div className="dashboard-app">
        <Sidebar/> 
        <div className="content">
            <Header/>
            <MainContent/>
        </div>  
       </div> 
    );
}

export default Dashboard;