import { Component } from "react";
import Form from "./form/Form";
import Button from "./button/Button";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  setNewCandidate(name){
    this.setState({
      ...this.state,
      name:"Text"
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Form changeName={this.setNewCandidate.bind(App)}/>
        <Button text="Create"/>
        <button onClick={()=>{this.setNewCandidate("Alex")}}>Create 2 </button>
      </div>
    )
  }
}
export default App 
