import React from 'react';
import {Line} from 'react-chartjs-2';
import TemperatureService from "../services/TemperatureService";

class LineChart extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            chartXValues:[],
            chartYValues:[]
        }
    }

    componentDidMount(){
        this.fetchTemp();
    }

    fetchTemp(){
        const pointToThis = this;
        console.log(pointToThis);
        const API_Call = 'http://localhost:8080/temperature';
        let tempChartXValueFunction = [];
        let tempChartYValueFunction = [];

        fetch(API_Call)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Temperature Chart</h1>
                
            </div>
        )
    }
} 

export default LineChart;