import React,{Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid'

class App extends Component {

  state = {
    contacts: [],
    name: ''
  }
  //
  handleOnSubmit = ({ name }) => {

    const contact ={
      id: nanoid(),
      name,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleOnSubmit}/>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
};


export default App
