import React, { Component } from 'react';
import Modal from 'react-modal';
// import { Link } from "react-router-dom";
import { communicationService } from "../services/communicationService";
import { redirectionService } from "../services/redirectionService";
import CandidatesReport from "./CandidatesReport";
import ReportInDetail from "./ReportInDetail";
import "./Main.css";

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            candidatesReports: [],
            modalIsOpen: false,
            modalReport: {}
        }

        this.bindEventHandlers();

        const style = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
                position: 'absolute',
                top: '100px',
                left: '100px',
                bottom: '100px',
                right: '100px',
                border: '1px solid #ccc',
                background: '#DAE2DF',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'

            }
        };
    }

    bindEventHandlers() {
        this.getCandidatesReports = this.getCandidatesReports.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sendReportToModal = this.sendReportToModal.bind(this);
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

    deleteChosenReport(reportId){
        communicationService.deleteCandidatesReports(reportId, (response)=>{
            console.log(response)
        },(error)=>{
            console.log(error);
        })
    }

    openModal(state) {
        console.log(state);
        this.setState({ modalIsOpen: state });
    }

    closeModal(state) {
        this.setState({ modalIsOpen: state });
    }

    sendReportToModal(modalReport) {
        console.log("radi",modalReport);
        this.setState({
            modalReport
        });
    }

    componentDidMount() {
        this.getCandidatesReports();
    }


    render() {

        return (
            <main>
                {this.state.candidatesReports.length === 0
                    ? <p>Loading</p>
                    : ''
                }
                <table className="table table-bordered table-inverse text-center ">
                    <thead className=" container-fluid">
                        <tr className="row">
                            <th className="col-12 col-md-1">#</th>
                            <th className="col-12 col-md-3">Candidate Name</th>
                            <th className="col-12 col-md-3">Company Name</th>
                            <th className="col-12 col-md-2">Interview Date</th>
                            <th className="col-12 col-md-1">Status</th>
                            <th className="col-6 col-md-1">Details</th>
                            <th className="col-6 col-md-1">DELETE</th>
                        </tr>
                    </thead>
                    {this.state.candidatesReports.map((report, i) => {
                        return (
                            <CandidatesReport deleteChosenReport={this.deleteChosenReport} sendReportToModal={this.sendReportToModal} renderReports={report} shouldOpenModal={this.openModal}  key={i} id={i + 1} />
                        )
                    })}
                </table>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={this.style}
                    ariaHideApp={false}
                >
                    <ReportInDetail shouldCloseModal={this.closeModal} candidateReport={this.state.modalReport} />
                </Modal>
            </main>
        )
    }


}