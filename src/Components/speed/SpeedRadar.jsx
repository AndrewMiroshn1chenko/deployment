import MyInput from "../UI/Input/MyInput";
import SpeedDetector from "./SpeedDetector";
import React from "react";

const maxSpeed = 60
class SpeedRadar extends React.Component {
    constructor(props){
    super(props)
    this.onChangeSpeed = this.onChangeSpeed.bind(this)
    this.state = {speed : null}
}

    onChangeSpeed(e) {
        this.setState({speed : e.target.value});
    }
render() {
    const speed = this.state.speed;
    return(
        <div>
        <h1>Enter speed</h1>
        <MyInput value={speed} onChange={this.onChangeSpeed.bind(this)}></MyInput>
        <SpeedDetector speed={parseFloat(speed)} maxSpeed={maxSpeed}/>
        </div>
    )
}
}

export default SpeedRadar;