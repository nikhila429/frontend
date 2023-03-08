import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';



const PRqstList = (props) => {
const TId = props.location.state.TId;
const OId = props.location.state.OId;

const [players, setPlayers] = useState([]);
const [newPlayer, setNewPlayer] = useState({
displayName: '',
tournamentId: TId,
userId: '',
confirmed: false,
});
const [showAddPlayerForm, setShowAddPlayerForm] = useState(false);

useEffect(() => {
axios.get(`http://localhost:8080/api/admins/check-rqst/${TId}`)
.then(response => {
setPlayers(response.data);
})
.catch(error => {
console.log(error);
});
}, []);

const handleInputChange = (e) => {
setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
};

const handleAddPlayer = () => {
axios.post('http://localhost:8080/api/player/createPlayer', newPlayer)
.then(response => {
setPlayers([...players, response.data]);
setNewPlayer({
displayName: '',
tournamentId: TId,
userId: 0,
confirmed: false,

});
})
.catch(error => {
console.log(error);
});
};

const handleUpdate = (newplayer) => {
// TODO: Implement update functionality
newplayer.confirmed = true;
axios.put('http://localhost:8080/api/admins/accept-rqst', newplayer)
.then(response => {
console.log(response.data);
})
.catch(error => {
console.log(error);
});
console.log(`Update player with id ${newplayer.id}`);
};

const handleDelete = (PId) =>{
  axios.delete(`http://localhost:8080/api/admins/delete-rqst/${PId}`)
.then(response => {
console.log(response.data);
})
.catch(error => {
console.log(error);
});
}

return (
<div className="tasklist-container">
<LoggedComponent />
<TrnmtDash TId={TId} OId={OId}/>
<br />
<div className="tasklist-content">
<h2 className="tasklist-heading" style={{color: 'white'}}>Player Details</h2>
<table className="tasklist-table">
<thead>
<tr>
<th>Display Name</th>
<th>Tournament Id</th>
<th>User Id</th>
<th>Accept</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
{players.map((player) => (
<tr key={player.id}>
<td>{player.displayName}</td>
<td>{player.tournamentId}</td>
<td>{player.userId}</td>
<td>
<button
onClick={() => handleUpdate(player)}
className="update-button"
>
Accept
</button>
</td>
<td>
<button
onClick={() => handleDelete(player.id)}
className="delete-button"
>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
<br />
{/* <br />
<button className="add-player-button" onClick={() => setShowAddPlayerForm(!showAddPlayerForm)}>
{showAddPlayerForm ? "Cancel" : "Add Player"}
</button>
{showAddPlayerForm && (
<div className="add-player-form-container">
<h2>Add New Player</h2>
<label htmlFor="displayName">Display Name</label>
<input
           type="text"
           name="displayName"
           id="displayName"
           value={newPlayer.displayName}
           onChange={handleInputChange}
           required
         />
<label htmlFor="userId">User Id</label>
<input
           type="number"
           name="userId"
           id="userId"
           value={newPlayer.userId}
           onChange={handleInputChange}
           required
         />
<button className="add-player-button" onClick={handleAddPlayer}>Add Player</button>
</div>
)}
</div> */}
<br />
  <Link
          to={{
            pathname: "/trnmtdash",
            state:
            {
              OId: OId,
              TId: TId
              }
              }}
              >
              Back to Tournament Dashboard
              </Link>
</div>
</div>
);
};
export default PRqstList;