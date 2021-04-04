import { Component } from "react";
import style from "./ContactView.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { CSSTransition } from "react-transition-group";
import Alert from "../../components/Alert/Alert";

class ContactView extends Component {
  state = {
    message: false,
    showAlert: false,
  };

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.showAlert}
          timeout={500}
          classNames={style}
          unmountOnExit
        >
          <Alert message={this.state.message} />
        </CSSTransition>
        <div className={style.container}>
          <div>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={style}
              unmountOnExit
            >
              <h1 className={style.title}>Phonebook</h1>
            </CSSTransition>

            <ContactForm />
          </div>

          <div>
            <h1 className={style.title}>Contacts</h1>
            <p className={style.title}>Find contacts by name</p>
            <Filter />
            <ContactList />
          </div>
        </div>
      </>
    );
  }
}

export default ContactView;
