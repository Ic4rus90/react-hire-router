import PropTypes from 'prop-types'
import PeopleListItem from './PeopleListItem'

function PeopleList({ peopleList, hired }) {

  return (
    <ul>
      {peopleList.map((person, index) => (
        <PeopleListItem key={index} selectedPerson={person} hired={hired}/>
      ))}
    </ul>
  )
}

export default PeopleList

PeopleList.propTypes = {
  peopleList : PropTypes.array,
  hired: PropTypes.bool
}

