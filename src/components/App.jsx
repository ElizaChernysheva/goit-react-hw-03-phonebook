import React,{Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  //
  handleOnSubmit = ({ name,number }) => {

    if(this.state.contacts.some(el => el.name === name)){
      alert(`${name} is already in contacts`)
      return
    }

    const contact ={
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  handleOnFilterChange =({ target }) =>{
    const valueToLowerCase = target.value.toLowerCase().trim();
    this.setState({filter:valueToLowerCase})
  }

  removeContact = (id) =>{
    const {contacts} = this.state;
    this.setState(({contacts})=>({
      contacts:contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleOnSubmit}/>
        <h2>Contacts</h2>
        <Filter onFilterChange={this.handleOnFilterChange}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} removeItem={this.removeContact}/>
      </div>
    );
  }
};


export default App
