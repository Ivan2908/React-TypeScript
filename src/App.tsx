import { useState, useEffect } from "react"
import List from "./components/List"
import Form from "./components/Form"

import Sub from "./types.d"

const App = () => {
  // const [person, setPerson] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])

  // const [filteredData,setFilteredData] = useState(person);
  // const [newPerson, setnewPerson] = useState('Type something...')
  // const [newPhone, setNewPhone] = useState('Type something...')

  interface AppState {
    subs: Array<Sub>;
  }

  const INITIAL_STATE = [
    {
      nickname: 'dapelu',
      subMonth: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Dapelu hace de moderador aveces'
    },
    {
      nickname: 'Ivan',
      subMonth: 3,
      avatar: 'https://i.pravatar.cc/150?u=Ivan',
    },
  ]

  const [subs, setSubs] = useState<AppState["subs"]>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
      <h1>Subscriptores</h1>
      <List subs={subs} />
      <Form  onNewSub={handleNewSubs} />
    </>
  )
}

export default App
