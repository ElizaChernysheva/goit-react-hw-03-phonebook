import React,{Component} from 'react';
import css from './ContactForm.module.css'



class ContactForm extends Component {
  state ={
    name:'',
    number: '',
  }


 handleOnChange = ({target}) => {
   const {name,value} = target;

   this.setState({[name]:value})
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
   this.props.onSubmitForm({...this.state})
    event.target.name.value = ''
    event.target.number.value = ''
  }

  render() {
    return(
      <form className={css.form} onSubmit={this.handleOnSubmit}>
        <label className={css.form__label}>
          Name
          <input
               className={css.form__input}
               type="text"
               name="name"
               value={this.state.name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={this.handleOnChange}
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
              className={css.form__input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleOnChange}
          />
        </label>
        <button className={css.form__btn} type='submit'>Add contact</button>
      </form>
    )
  }
}


export default  ContactForm;
