import React from 'react'
import { hashHistory } from 'react-router'
import { Button, Modal, Component } from 'react-bootstrap'
import BoxOfRain from './BoxOfRain'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true, errorAlertShow: true }
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.setState({show: false})
    hashHistory.push('/rainHarvest')
  }


  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
          id='boxOfRainModal'
        >
        <button onClick={this.hideModal} className='btn btn-xs btn-danger' id='closeModal'> 
        CLOSE
        </button>
          <BoxOfRain/>
        </Modal>
      </div>
    )
  }
}