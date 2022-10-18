import React,{Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'

class App extends Component {

  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({
        contacts,
      });
    }
  }
  componentDidUpdate(prevProps, presvState) {
    if (presvState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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


export default App;
