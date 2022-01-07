import React, { Component } from 'react'
import TodoItems from './TodoItems';


let items =[];
export default class TodoForm extends Component {
constructor(props){
    super(props)
    this.state = {
      value: '',
      isChecked: false,
      className: ''   
  };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.DeleteTodo = this.DeleteTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputChange(event) { //checker
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
     console.log(this.state.isChecked)

     if(!this.state.isChecked){
      
      this.setState({
         isChecked: true,
         className:'checked'
      });
     }
     else{
      this.setState({
         isChecked: false,
         className:''
      });
     }
    
  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: ""});
     console.log(items);
     
     if(!items.includes(this.state.value)){
      return items.unshift(this.state.value);
     }
     else{
       alert("Данное обещание уже есть");
     }


    
     
    // if(this.state.value ===""){
    //     // alert("Нельзя ввести пустую строчку")
    // }
    // else{
    //     return items.unshift(this.state.value);
    // }
    
  }

  DeleteTodo(event){
    // items.forEach((item, i) =>{
    //     if(item === event.target.value) {
    //         item.splice(i,1);
    //     }
    // })
    // this.setState(items.filter(item => item !==event.target.value));
    for(var i = 0; i < items.length; i++){
        if(items[i] === event.target.value){
            items.splice(i, 1);
            i--;
        }
    }

    this.setState(items);
    // console.log(items);
    
    // console.log(this.setState(event.target.value));
}

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
              
                <input  required type="text" value={this.state.value} onChange={this.handleChange} placeholder="New todo"/>
              
              <input type="submit" value="add" />
            
            </form>
           
            <ul>{items.map(item => 
            <li className={this.state.className} key={item.toString()}> {item} <input
            name="isChecked"
            type="checkbox"
            // value={item.toString()}
            checked={this.state.isChecked}
            onChange={this.handleInputChange} /> 
            <button value={item.toString()}  onClick={this.DeleteTodo} >X</button> </li>)
            }</ul>
        </div>
          );
    }

}
