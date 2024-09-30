import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => setPeople(data.results))
  }, [])

  const updateHiredList = (person) => {
    const index = hiredPeople.findIndex(
      (hiredPerson) => hiredPerson.login.uuid === person.login.uuid
    );
  
    if (index !== -1) {
      // Person already exists, so update their information
      setHiredPeople((previousHiredPeople) => {
        const updatedPeople = [...previousHiredPeople];
        updatedPeople[index] = person;  // Update the person in the list
        return updatedPeople;
      });
    } else {
      // Person is not in the hired list, so add them
      setHiredPeople((previousHiredPeople) => [...previousHiredPeople, person]);
    }
  };
  

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      {/* Global header above*/}
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people} hiredPeople={hiredPeople} updateHiredList={updateHiredList}/>}
        />
      </Routes>
    </>
  )
}
