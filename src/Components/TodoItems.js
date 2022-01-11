import React, { Component } from 'react'

export default class TodoItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            isChecked: false,
            className: '',
        }

        
        this.DeleteTodo = this.DeleteTodo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
         
      }
    
  

      DeleteTodo(event){

        for(var i = 0; i < this.props.entries.length; i++){
            if(this.props.entries[i] === event.target.value){
              this.props.entries.splice(i, 1);
                i--;
            }
        }
        this.setState(this.props.entries);
    }

    handleInputChange(event) { 
       
         console.log(event.target.checked)
         
         
         if(event.target.checked){
            
          this.setState(
          {
             isChecked: true,
             className:''
          }
          );
         }
         else{
            
          this.setState({
             isChecked: false,
             className:'checked'
          },
          
          );
         }
        
      }

    render() {

        const Rand = Math.random();

        
        return (
            <div>
            <ul>{this.props.entries.map(item => 
            <li className={this.state.className} key={Rand + item.toString()}> {item}  
            <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange}
            /> 
            <button value={item.toString()}  onClick={this.DeleteTodo} >X</button> </li>)
            }</ul>

            </div>
        )
    }
}
