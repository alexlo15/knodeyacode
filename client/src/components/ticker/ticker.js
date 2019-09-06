import React from "react";
import Ticker from "react-ticker";
import GetTextFromAPI from "./getscorefunction";

function StockTicker() {
    return (
        <Ticker offset="run-in" speed={10}>
            {GetTextFromAPI}
        </Ticker>
    );
}


export default StockTicker;