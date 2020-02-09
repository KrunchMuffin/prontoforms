import React from "react";

const Flag = (flag) => {
    if (!flag || flag.length === 0) return null;
    return (
        <React.Fragment>
            <div className={"selected-flag-container"}>
                <img src={"https://www.countryflags.io/" + flag.flag + "/shiny/64.png"}
                     alt={"Country Flag " + flag.flag} className={"img"}/>
            </div>
        </React.Fragment>
    )
};

export default Flag;