import React, {Component} from 'react';

class Search extends Component{
    searchHandler(event){
        event.preventDefault();
        let trainNumber = this.refs.trainNumber.value;
        let jurneyDate = this.refs.jurneyDate.value
        this.props.getTrainDetails(trainNumber, jurneyDate)
    }

    render(){
        return(
            <div className="jumbotron">
            <h1 className="display-3">Check where is your train</h1>
            <p className="lead">This application helps to find the live staus of the train such as current position, statation and time</p>
            <form onSubmit={this.searchHandler.bind(this)}> 
                <div className="row"> 
                    <div className="col-md 4"> 
                        <input ref="trainNumber" type="number" className="form-control" placeholder="Enter train number - 12079" id="inputDefault" />
                    </div>
                    <div className="col-md 4"> 
                        <input ref="jurneyDate" type="text" className="form-control" placeholder="18-07-2018" id="inputDefault" />
                    </div>
                    <div className="col-md 4"> 
                        <input type="submit" className="btn btn-success" value="Check Live Status" />
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
export default Search;