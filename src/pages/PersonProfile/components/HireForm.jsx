import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';


function HireForm({ person, updateHiredList }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const updatedPerson = { ...person, wage: wage}
    
    updateHiredList(updatedPerson);
    
    navigate("/");
  }

  useEffect(() => {
    if (person && person.wage !== undefined) {
      setWage(person.wage);
    }
  }, [person])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer: </label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(Number(e.target.value))}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm

HireForm.propTypes = {
  person : PropTypes.object,
  updateHiredList : PropTypes.func
}