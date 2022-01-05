import React, { Component } from 'react'


export default class TodoForm extends Component {
constructor(props){
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.state.value);
    this.setState({value: ""});
    
    
    return this.state.value;
  }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
              
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="New todo"/>
              
              <input type="submit" value="add" />
            
            </form>
            
            
          );
    }

}
