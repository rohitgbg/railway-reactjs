import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Display from './Display';

const API_KEY = "nef71f4t4y";
class LiveStatus extends Component {
    constructor(props){
        super(props);
        this.state ={
            trainName: '',
            currentStation:'',
            position: '',
            route: '',
            response_code: ''
        }
    }

    getTrainDetails(trainNumber, jurneyDate){
        let apiUrl = `https://api.railwayapi.com/v2/live/train/${trainNumber}/date/${jurneyDate}/apikey/${API_KEY}/`;
        
        axios.get(apiUrl)
        .then(data=>{
            let result = data.data
            this.setState({
                trainName: result.train.name,
                currentStation: result.current_station.name,
                position:result.position,
                route: result.route,
                response_code: result.response_code || '',
                key: Object.keys(result)
            });
        })
    }
    render(){
        return(
           
           <div className="container"> 
                 <br/>
               <Search getTrainDetails={this.getTrainDetails.bind(this)} />
               <Display result={this.state}/>
           </div>
        );
    }
};

export default LiveStatus;