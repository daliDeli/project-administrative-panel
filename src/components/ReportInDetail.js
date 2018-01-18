import React, { Component } from 'react';

export default class ReportInDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalReport: {}
        }

        this.setAndSendModalState = this.setAndSendModalState.bind(this);
    }

    setAndSendModalState() {
        this.props.shouldCloseModal(false);

    }

    componentDidMount() {
        let modalReport = this.props.candidateReport;
        this.setState({ modalReport });

    }

    render() {

        if(!this.state.modalReport){
            return "";
        }
        let { companyName, interviewDate, phase, status, note } = this.state.modalReport;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h5>Company</h5>
                        <p >{companyName}</p>
                        <h5>Interview Date</h5>
                        <p >{interviewDate}</p>
                        <h5>Phase</h5>
                        <p >{phase}</p>
                        <h5>Status</h5>
                        <p >{status}</p>
                    </div>
                    <div className="col-12 col-md-8">
                        <h5>Notes</h5>
                        <p>{note}</p>
                    </div>
                    <button onClick={this.setAndSendModalState} className="btn btn-outline-success my-2 my-sm-0" >
                        Close
                     </button>
                </div>
            </div>
        )
    }
}