import React from 'react';


const display = (props) =>{
    const result = props.result;
    const stationData = Object.keys(result.route).map(data=>{
        return{
            stationName: result.route[data].station,
            scharr: result.route[data].scharr,
            actarr: result.route[data].actarr,
            actdep: result.route[data].actdep,
            status: result.route[data].status,
            stops: Number(data),
            
        } 
    })

   const stationDisplay = 
    stationData.map(res=>{
     return  ( 
         <tr >
                <td>
                    {res.stops+1}
                </td>
                <td> 
                     {res.stationName.name}
                </td>
                <td> 
                     {res.scharr}
                </td>
                <td>
                   {res.actarr}
                </td>
                <td>
                   {res.actdep}
                </td>
                <td>
                   {res.status}
                </td>
        </tr>
        );  
   })

    let displayResult = ""; 
    if(result.trainName){
       
            displayResult = (
                <div>
                    <h4> The train <b style={{color:'red'}}> {result.trainName} </b> is currently at <b style={{color:'red'}}>{result.currentStation} </b></h4>
                    <p> {result.position} </p>

                    <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Stops</th>
                        <th scope="col">Station</th>
                        <th scope="col">Scheduled Arrival</th>
                        <th scope="col">Actual Arrival</th>
                        <th scope="col">Departure</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            {stationDisplay}
                    </tbody>
                    </table> 
                </div>
            );
         
    } 
    return (
        displayResult
    );
};

export default display;