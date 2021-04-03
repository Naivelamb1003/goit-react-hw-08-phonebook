import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebook-operation";
import style from "./ContactListItem.module.css";

const ContactListItem = ({ id, number, name, onDelete }) => {
  return (
    <li key={id} className={style.listitem}>
      {name}: {number}
      <button type="button" id={id} onClick={onDelete} className={style.btlist}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (e) => dispatch(phonebookOperations.deleteContacts(e.target.id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
