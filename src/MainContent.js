import React from "react";

function MainContent(){
    return(
        <div className="main-content">
            <div className="top-flexbox">
                <div className="earning">Earnings: <b>$189k</b></div>
                <div className="orders">Orders: <b>$2.5k</b></div>
                <div className="balance">Balance: <b>$2.4k</b></div>
                <div className="total-sales">Total Sales: <b>$89k</b></div>
            </div>
            <div className="bottom-flexbox">
                <div className="overview">
                    Overview
                    <div className="image">
                        <img src="https://pnp.github.io/sp-dev-fx-controls-react/assets/BarChart.png" alt="pic"/>
                    </div>
                </div>
                <div className="customer-chart">
                    Customer Chart
                    <div className="photo">
                        <img src="https://reactscript.com/wp-content/uploads/2016/11/Circular-Progress-Indicator-Component-For-React.png" alt="pic2"/>
                    </div>
                </div>
            </div>
            <div className="product-sell">
                <h3>Product Sell</h3>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    );
}

export default MainContent;