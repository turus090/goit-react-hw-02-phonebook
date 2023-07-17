import { Component } from "react";
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Filter from "./filter/Filter"; 
import Form from "./form/Form";
import List from "./list/List";

import s from "./app.module.css";
import { startSearch } from "assets/search";



class App extends Component {
  state = {
    contacts: [
      {
        id:'1',
        name:"John",
        phone: '123'
      },
      {
        id:'21',
        name:"John Smith",
        phone: '123'
      },
      {
        id:'3',
        name:"Bob",
        phone: '123'
      },
    ],
    filter: ''
  }
  deleteContact = (idCandidate) => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== idCandidate)
     })
    )
  }
  changeFilterValue = (newValue) => { 
    this.setState(prevState => ({
        filter: newValue
      })
    )
  }
  /*changeSearchInput = (length) => {
    if (length === 0){
      this.setState( {
        ...this.state,
        status:'viewList'
      })
    } else { 
      this.setState({
        status: 'search'
      })
    }
  }*/
  setNewContact = (contactCandidate) => { 
    console.log(contactCandidate)
    if(contactCandidate.name.length === 0 || contactCandidate.phone.length === 0) {
      Notify.warning("Please enter  name or phone number")
    } else { 
      const result = this.state.contacts.find(contactItem => contactItem.name === contactCandidate.name)
      if (result){
        Notify.warning(`${contactCandidate.name} is already in contact`)
      } else { 
        this.setState(prevState => ({
            contacts: [
              ...prevState.contacts,
              {
                id: nanoid(),
                ...contactCandidate
              }
            ]
          })
        )
      }
    }
  }

  setNewCandidate = () =>{
    const candidate = JSON.parse(localStorage.getItem('candidate'))
    if ( candidate.name.length === 0 || candidate.phone.length === 0) {
      Notify.warning("Please enter  name or phone number")
    } else {
      let result = false 
      this.state.contacts.forEach(contact => {
        if (contact.name === candidate.name){
          result = true}
      })
      if (result) {
        Notify.warning(`${candidate.name} is already in contact`)
      } else {
        this.setState({
          ...this.state,
          contacts: [
            ...this.state.contacts,
            {
              id: nanoid(),
              ...candidate
            }
          ]
        })
      }
    }
  }
  render() {
    return (
      <div>
      <h2 className={s.title}>Phonebook</h2>
      <Form 
        setNewContact = {this.setNewContact}
      />
      <Filter
        filterValue = {this.state.filter} 
        changeEvent = {this.changeFilterValue}
        />
      <List 
        list={this.state.filter.length === 0 ? this.state.contacts : startSearch(this.state.contacts, this.state.filter)}
        deleteContact={this.deleteContact} 
        />

      </div>
    )
  }
}
export default App
