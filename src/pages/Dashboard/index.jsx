import PeopleList from './components/PeopleList'

function Dashboard({ people, hiredPeople }) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList peopleList={people} hired={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList peopleList={hiredPeople} hired={true} />
      </section>
    </main>
  )
}

export default Dashboard
