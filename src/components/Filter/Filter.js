import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import style from "./Filter.module.css";
import phonebookSelector from "../../redux/phonebook/phonebook-selector";

const Filter = ({ filter, handleChange }) => {
  return (
    <div className={style.containerFilter}>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: phonebookSelector.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
