import React from "react";
import thumbDown from "../images/thumbs-down-sign_1f44e.png"
import thumbUp from "../images/thumbs-up-sign_1f44d.png";

const availabilities = (props) => {
    return (
        <React.Fragment>
            {props.firstLoad && "Please select a Country from the left."}

            {props.cnetworks && props.cnetworks.map((place, index) => {
                const stationStats = place.network.stations
                    .reduce((stats, {free_bikes, empty_slots}) => ({
                        free_bikes: stats.free_bikes + (free_bikes || 0),
                        empty_slots: stats.empty_slots + (empty_slots || 0)
                    }), {free_bikes: 0, empty_slots: 0});
                const percentage = Math.round(stationStats.free_bikes / (stationStats.free_bikes + stationStats.empty_slots) * 100) || 0;
                return (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h1 className={"display-4 text-center"}>{place.network.location.city}</h1>
                            <p className={"text-center"}>
                                Availability:&nbsp;
                                <img className={"thumb"} src={percentage > 25 ? thumbUp : thumbDown}
                                     alt={"availability"}/>
                                <span className="h3 pl-3" {...percentage > 25 ? thumbUp : thumbDown}>
                                    {percentage}%
                                </span>
                            </p>
                            <div>
                                <p><u>Companies:</u> {stationStats.free_bikes} bikes
                                    / {stationStats.free_bikes + stationStats.empty_slots} spots</p>
                                <p>{place.network.company.join("*").split("*").map(line =>
                                    <span>{line},<br/></span>)}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default availabilities;