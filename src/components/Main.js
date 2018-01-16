import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { communicationService } from "../services/communicationService";
import CandidatesReport from "./CandidatesReport";
import "./Main.css";

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            candidatesReports: []
        }
        this.bindEventHandlers();
    }

    bindEventHandlers(){
        this.getCandidatesReports = this.getCandidatesReports.bind(this);
    }

    getCandidatesReports() {
        communicationService.fetchCandidatesReports((candidatesReports) => {
            this.setState({
                candidatesReports
            })
        },
            (error) => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.getCandidatesReports();
    }


    render() {

        return (
            <main>
                {this.state.candidatesReports.length === 0
                    ? <p>Loading</p>
                    : ''
                }
                {this.state.candidatesReports.map((report, i) => {
                return(
                    <CandidatesReport renderReports={report} key={i} id={i + 1}/>
                )
            })}
            </main>
        )
    }


}