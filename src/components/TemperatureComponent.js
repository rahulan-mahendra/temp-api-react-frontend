import userEvent from "@testing-library/user-event";
import React from "react";
import TemperatureService from "../services/TemperatureService";

class TemperatureComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            temperatures:[]
        }
    }

    componentDidMount(){
        TemperatureService.getTemperature().then((response) =>{
            this.setState({ temperatures: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Temperature</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Date</td>
                            <td>Data Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.temperatures.map(
                                temperature =>
                                <tr key= {temperature.id}>
                                    <td>{temperature.id}</td>
                                    <td>{temperature.date}</td>
                                    <td>{Number(temperature.data_value.slice(0, -1))}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        )
    }
}

export default TemperatureComponent