import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import LiveStatus from '../LiveStatus/LiveStatus';
import Contact from '../../components/Contact/Contact';
import PnrStatus from '../PnrStatus/PnrStatus';
import Navbar from '../../components/Layout/Navbar/Navbar';

class Railway extends Component {
    render(){
        return(
           <div> 
                <Navbar />
                <Switch>
                    <Route path="/" exact component={LiveStatus} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/pnr-status" exact component={PnrStatus} />
                </Switch>
            </div>
        );
    }
};

export default Railway;