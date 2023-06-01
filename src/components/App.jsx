import { Component } from "react";
import { nanoid } from "nanoid";
import Button from "./button/Button";
import Filter from "./filter/Filter"; 

import s from "./app.module.css";


class App extends Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
  }
 
  render() {
    const setNewCandidate = () =>{
      this.setState({
        name: '',
        contacts: [
          ...this.state.contacts,
          {
            id: nanoid(),
            name: this.state.name,
            phone: this.state.phone
          }
        ]
      })
    }
    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <div className={s.form}>
          <p className={s.title}> Create new contact</p>
        <input className={s.wrapper}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={e=>this.setState({
            ...this.state,
            name: e.target.value
          })}
          placeholder="Entry new name"
        />
        <input className={s.wrapper}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Entry new phone number"
          onChange={e=>this.setState({
            ...this.state,
            phone: e.target.value
          })
          }
        />
        <Button text="Add contact" handleClick={setNewCandidate}/>
      </div>
      <Filter/>
        <ul>
        {this.state.contacts.map(contact => (
          <li className={s.contactItem} key={contact.id}>
            <p>{contact.name}: </p>
            <p>{contact.phone}</p>
            </li>
            
        ))}
        </ul>

      </div>
    )
  }
}
export default App
