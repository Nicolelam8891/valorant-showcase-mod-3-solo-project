import "./Form.css";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Form = ( { filterRole} ) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleFilterButton = (event) => {
    event.preventDefault();
    filterRole(selectedRole);
  };

  return (
    <div className='form-container'>
      <form>
        <select className='drop-down-menu' value={selectedRole} onChange={handleRoleChange}>
          <option value=''>All Roles</option>
          <option value='Controller'>Controller</option>
          <option value='Duelist'>Duelist</option>
          <option value='Initiator'>Initiator</option>
          <option value='Sentinel'>Sentinel</option>
        </select>
        <button className='filter-button' onClick={handleFilterButton}>Filter</button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  filterRole: PropTypes.func.isRequired
};