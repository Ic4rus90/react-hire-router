import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";
import PropTypes from "prop-types";

function PersonProfile({ people, hiredPeople, updateHiredList }) {
  const [person, setPerson] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Check if the person is in the hiredPeople list first
      let matchingPerson = hiredPeople.find((hiredPerson) => hiredPerson.login.uuid === id);
      if (!matchingPerson) {
        // If not in hiredPeople, fall back to people list
        matchingPerson = people.find((person) => person.login.uuid === id);
      }
      setPerson(matchingPerson);
    }
  }, [people, hiredPeople, id]);

  if (!person) return <p>Person not found</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} updateHiredList={updateHiredList} />
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  updateHiredList: PropTypes.func.isRequired,
};

export default PersonProfile;
