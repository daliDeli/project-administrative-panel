import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { communicationService } from "../services/communicationService";
import CandidatesReport from "./CandidatesReport";
import "./Main.css";

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reports: []
        }
    }
    


    render(){
        return(
            <main>
            
            </main>
        )
    }

    
}