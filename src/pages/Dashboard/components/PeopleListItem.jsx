import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom"

function PeopleListItem({ selectedPerson, hired}) {

  const navigate = useNavigate();

  const editUser = (person) => {
    navigate(`/view/${person.login.uuid}`);
  }

  return ( 
    <li>
      {hired === true ? 
      <div>
        <span>
          {selectedPerson.name.first} {selectedPerson.name.last} 
          <button onClick={() => editUser(selectedPerson)}>Edit</button> 
        </span>
        {selectedPerson.wage && <p>Wage: £{selectedPerson.wage}</p>}
      </div>
      : 
      <Link to={`view/${selectedPerson.login.uuid}`}> {selectedPerson.name.first} {selectedPerson.name.last} </Link>
      }
    </li>
  )
}

export default PeopleListItem

PeopleListItem.propTypes = {
  selectedPerson : PropTypes.object,
  hired : PropTypes.bool
}