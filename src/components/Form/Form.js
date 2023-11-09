import './Form.css'

const Form = ( { character } ) => {

  const filterCharacter = (role) => {
    if (role === "") {

    }
  }

  return (
    <div className='form-container'>
      <form>
        <select className='drop-down-menu'>
          <option value=''>All Roles</option>
          <option value='Controller'>Controller</option>
          <option value='Dualist'>Dualist</option>
          <option value='Initiator'>Initiator</option>
          <option value='Sentinel'>Sentinel</option>
        </select>
        <button className='filter-button'>Filter</button>
      </form>
    </div>
  )
}

export default Form;