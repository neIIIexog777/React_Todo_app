import React, { Component } from 'react'

import TodoItems from './TodoItems';



export default class TodoForm extends Component {
constructor(props){
    super(props)
    this.state = {
      value: '',
      
      items: [],
      
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {
    this.setState({
      value: event.target.value,
      
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: ""});
     
     
     if(!this.state.items.includes(this.state.value)){
      
      return this.state.items.unshift(this.state.value);
      
     }
     else{
       alert("Такой план уже есть");
     }
    
  }





    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}> 
                <input  required type="text" value={this.state.value} onChange={this.handleChange} placeholder="New todo"/>
              <input type="submit" value="add" />
            </form>

            <TodoItems entries={this.state.items} 
                  
                  /> 
                  
        </div>
          );
    }

}
