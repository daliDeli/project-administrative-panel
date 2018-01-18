import React, { Component } from 'react';

export default class CandidatesReport extends Component {
    constructor(props) {
        super(props);
    this.setAndSendModalState = this.setAndSendModalState.bind(this);
    }

    setAndSendModalState() {
        this.props.shouldOpenModal(true);
        console.log(this.props.renderReports);

        let modalReport = this.props.renderReports;
        this.props.sendReportToModal(modalReport)
    }
    
    render() {
        
        let { candidateName, companyName, interviewDate, status } = this.props.renderReports;
        return (
            
                
                <tbody>
                    <tr className="row">
                        <td className="col-12 col-md-1">#{this.props.id}</td>
                        <td className="col-12 col-md-3">{candidateName}</td>
                        <td className="col-12 col-md-3">{companyName}</td>
                        <td className="col-12 col-md-2">{interviewDate}</td>
                        <td className="col-12 col-md-1">{status}</td>
                        <td className="col-6 col-md-1"><button type="button" onClick={this.setAndSendModalState} className="btn btn-link"><i className='fa fa-eye' aria-hidden='true'></i></button></td>
                        <td className="col-6 col-md-1"><button type="button" className="btn btn-link"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                </tbody>
            
        )
    }
}