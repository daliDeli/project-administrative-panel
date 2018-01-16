import React, { Component } from 'react';

export default class ReportInDetail extends Component {
    constructor(props) {
        super(props);

        this.setAndSendModalState = this.setAndSendModalState.bind(this);
    }


    setAndSendModalState() {
        this.props.shouldCloseModal(false);
        console.log(this.props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h5>Company</h5>
                        <p ></p>
                        <h5>Interview Date</h5>
                        <p ></p>
                        <h5>Phase</h5>
                        <p ></p>
                        <h5>Status</h5>
                        <p ></p>
                    </div>
                    <div className="col-12 col-md-8">
                        <h5>Notes</h5>
                        <p id="note"></p>
                    </div>
                    <button onClick={this.setAndSendModalState} className="btn btn-outline-success my-2 my-sm-0" >
                        Close
                    </button>
                </div>
            </div>
        )
    }
}