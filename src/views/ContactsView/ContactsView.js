import { Component } from "react";
import style from "./ContactView.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { CSSTransition } from "react-transition-group";
import Alert from "../../components/Alert/Alert";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";
import { connect } from "react-redux";

class ContactView extends Component {
  render() {
    return (
      <>
        <CSSTransition
          in={this.props.showAlert}
          timeout={500}
          classNames={style}
          unmountOnExit
        >
          <Alert message={this.props.errorMessage} />
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

const mapStateToProps = (state) => ({
  errorMessage: phonebookSelector.getError(state),
  showAlert: Boolean(phonebookSelector.getError(state)),
});

export default connect(mapStateToProps)(ContactView);
