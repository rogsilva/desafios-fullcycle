import express from 'express'
import { connect, disconnect, createTables, insertPeople, selectPeople } from './database.js'

const app = express()

app.get('/', function (req, res) {
  const conn = connect()
  createTables(conn)
  insertPeople(conn, `Person ${Math.floor(Math.random() * 100)}`)

  function sendResponse(data) {
    const peopleList = data.map(person => `<li>${person.name}</li>`).join('')
    res.send(
      `<h1>Full Cycle Rocks!</h1>
      <ul>
        ${peopleList}
      </ul>`
    )
  }

  selectPeople(conn, sendResponse)
  disconnect(conn)
})

app.listen(3000)

