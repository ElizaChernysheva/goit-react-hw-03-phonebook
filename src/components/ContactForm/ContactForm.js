import React,{Component} from 'react';
import css from './ContactForm.module.css'


class ContactForm extends Component {
  state ={
    name:'',
  }



 handleOnChange = ({target}) => {
   const {name,value} = target;

   this.setState({[name]:value})
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
   this.props.onSubmitForm({...this.state})
  }

  render() {
    return(
      <form className={css.form} onSubmit={this.handleOnSubmit}>
        <label>
          Name
          <input className={css.form__input}
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
