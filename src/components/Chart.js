import {Component} from "react"
import { PieChart } from "react-minimal-pie-chart";
import {BlockContext} from "./BlockHandler"



class Chart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
            if (this.props.project == undefined) return
            let data = [
              { title: "Goal", value: this.props.project.hardCap, color: "#000000" },
              { title: "Funded", value: this.props.project.hardCap - this.props.project.softCap, color: "#5850EC" },
            ];
            return (
              <div style={{backgroundColor:null, width:250}} className="App">
                <PieChart
                  animate
                  animationDuration={40}
                  animationEasing="ease-in"
                  center={[50, 50]}
                  data={data}
                  lineWidth={15}
                  lengthAngle={360}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                  labelStyle={{
                    fontSize: "6px",
                    fontColor: "FFFFFA",
                    fontWeight: "500",
                    fontFamily: "monospace"
                  }}
                  label={(data) => data.dataEntry.title}
                  labelPosition={70}
                />
              </div>
            );

    }
}

export default Chart