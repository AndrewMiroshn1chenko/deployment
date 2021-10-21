import React from "react";

function SpeedDetector(props) {
    return(
    (props.speed >= props.maxSpeed)
    ? <div>Too much</div>
    :  <div>Ok</div>
    )
}

export default SpeedDetector;