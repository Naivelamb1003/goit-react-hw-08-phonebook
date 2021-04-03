import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Component } from "react";
import phonebookOperations from "../../redux/phonebook/phonebook-operation";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <>
        <TransitionGroup component="ul" className={style.list}>
          {contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={250} classNames={style}>
              <ContactListItem
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        {this.props.isLoadingPhonebook && <h1>Загрузка</h1>}
      </>
    );
  }
}

ContactList.propTypes = {
  cotacts: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

const mapStateToProps = (state) => ({
  isLoadingPhonebook: phonebookSelector.getLoading(state),

  contacts: phonebookSelector.getVisibleContacts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
