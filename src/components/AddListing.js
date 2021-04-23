import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import Map from '../containers/Map'



class AddListing extends Component {
  state = {
    name: '',
    address: '',
    hours: '',
    description: ''
  }


  handleChange = (e) => {
      const newState = { ...this.state }
      newState[e.target.name] = e.target.value
      this.setState(newState)
      console.log("Address: ", this.state.address) 
    console.log(this.props)
  }

  handleFocus = (e) => {
    if(this.state.address === ''){
      this.props.updateMap('Lubbock, TX')   
    } else {
          e.preventDefault()

      const newState = { ...this.state }
      newState[e.target.address] = e.target.value
      this.setState(newState)
      console.log("New address:", this.state.address)
      this.props.updateMap(this.state.address)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = this.state
    payload.id = this.props.listings.length + 1
    console.log("Listing: ", payload)
    this.props.addListing(payload)
    this.props.updateMap('Lubbock, TX')
    this.setState({
      name: '',
      address: '',
      hours: '',
      description: ''
    })
  }

  render() {
  return (
      <div className="businessDetails" >
        <form className='form' onLoad={this.handleLoad} onSubmit={this.handleSubmit}>
          <TextField required 
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              className="input" label="Name" type="text"/>
          <TextField required 
              onChange={this.handleChange}
              onBlur={this.handleFocus}
              value={this.state.address}
              name="address"
              className="input" label="Address" type="text"/>
          <TextField required 
              onChange={this.handleChange}
              value={this.state.hours}
              name="hours"
              className="input" label="Hours" type="text"/>
          <TextField required 
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              className="input" label="Description" type="text"/>
          <Button type="submit" variant="contained" color="primary">
          Save
          </Button>
        </form>
        <Map />
      </div>
    
  );
  }
}

export default AddListing;
