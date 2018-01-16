import React, { Component } from 'react';

export default class CandidatesReport extends Component {
    constructor(props) {
        super(props);   
    }

    

    render() {

        let report = this.props.renderReports;
        return (
            <table className="table table-bordered table-inverse text-center ">
                <thead className=" container-fluid">
                    <tr className="row">
                        <th className="col-12 col-md-1">#{this.props.id}</th>
                        <th className="col-12 col-md-3">{report.candidateName}</th>
                        <th className="col-12 col-md-3">{report.companyName}</th>
                        <th className="col-12 col-md-2">{report.interviewDate}</th>
                        <th className="col-12 col-md-1">{report.status}</th>
                        <th className="col-6 col-md-1"><button type="button" className="btn btn-link"><i className='fa fa-eye' aria-hidden='true'></i></button></th>
                        <th className="col-6 col-md-1"><button type="button" className="btn btn-link"><i className="fa fa-trash" aria-hidden="true"></i></button></th>
                    </tr>
                </thead>
            </table>
        )
    }
}