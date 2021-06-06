import React, { Component } from "react";
import "./styles.scss";

    
export class DeleteStatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: JSON.parse(localStorage.getItem("settings")),
    };
  }
  
  handleCloseModal = () => {
    this.props.onCloseModal()
  }

  handleDeleteStat = (e) => {
    this.props.onDeleteLevelStat(this.props.size,this.props.level);
  };

  render() {
    const classN = this.props.isOpen ? "modal fade show display" : "modal fade";
    return (
      <div className={classN} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Clear Statistic</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure to delete statistic of level {this.props.level}, size {this.props.size}x{this.props.size}?</p>
            </div>
            <div className="modal-footer">
                <button 
                  onClick={this.handleDeleteStat}
                  type="button"
                  autoFocus
                  tabindex="1"
                  className="btn btn-success modalButton btn-danger"
                >
                  Yes, delete
                </button>
              
              <button
                onClick={this.handleCloseModal}
                type="button"
                className="btn btn-outline-secondary modalButton"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
