import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';

const MatchList = (props) => {
const TId = props.location.state.TId;
const OId = props.location.state.OId;
const RId = props.location.state.RId;
const RNumber = props.location.state.RNumber;


const [matches, setMatches] = useState([]);
const [updatedMatch, setUpdatedMatch] = useState({

  firstPlayerId: '',
  roundId: RId,
  secondPlayerId: '',
  matchResultFirstPlayer: '',
  matchResultSecondPlayer: ''
});

const [newMatch, setNewMatch] = useState({
firstPlayerId: '',
roundId: RId,
secondPlayerId: '',
});
const [showAddMatchForm, setShowAddMatchForm] = useState(false);

useEffect(() => {
axios.get(`http://localhost:8080/api/matches/${RId}`)
.then(response => {
setMatches(response.data);
})
.catch(error => {
console.log(error);
});
}, []);


const handleInputChange = (e) => {
  setUpdatedMatch({ ...updatedMatch, [e.target.name]: e.target.value });
};


const handleAddMatch = () => {
axios.post('http://localhost:8080/api/match/createMatch', updatedMatch)
.then(response => {
  setUpdatedMatch([...matches, response.data]);
  setUpdatedMatch({
firstPlayerId: '',
roundId: RId,
secondPlayerId: '',
});
alert("Player Added Successfully")
})
.catch(error => {
console.log(error);
});
};
const handleUpdate = (taskId) => {
  const matchToUpdate = matches.find(match => match.id === taskId);
  setUpdatedMatch({
    id: matchToUpdate.id,
    firstPlayerId: matchToUpdate.firstPlayerId,
    roundId: matchToUpdate.roundId,
    secondPlayerId: matchToUpdate.secondPlayerId,
  });
  setShowAddMatchForm(true);
};

const handleUpdateMatch = () => {
  console.log(updatedMatch);
  axios.put(`http://localhost:8080/api/match/update-match/${updatedMatch.id}`, updatedMatch)
    .then(response => {
      const updatedMatches = matches.map(match => match.id === updatedMatch.id ? updatedMatch : match);
      setMatches(updatedMatches);
      setUpdatedMatch({
        id: null,
        firstPlayerId: '',
        roundId: RId,
        secondPlayerId: '',
      });
      setShowAddMatchForm(false);
    })
    .catch(error => {
      console.log(error);
    });
};

return (
<div className="tasklist-container">
<LoggedComponent />
<TrnmtDash TId={TId} OId={OId}/>
<br />
<div className="tasklist-content">
<h2 className="tasklist-heading" style={{color: 'white'}}>Round: {RNumber} - Match Details</h2>
<table className="tasklist-table">
<thead>
<tr>

<th>Match Id</th>
<th>First Player</th>
<th>Second Player</th>
<th>Match Winner</th>
<th>Update</th>
</tr>
</thead>
<tbody>
{matches.map((match) => (
    <tr key={match.id}>
        <td>{match.id}</td>
        <td>{match.firstPlayerId}</td>
        <td>{match.secondPlayerId}</td>
        <td>{match.matchResultFirstPlayer === "WIN" ? match.firstPlayerId : (match.matchResultSecondPlayer === "WIN" ? match.secondPlayerId : "TBD")}
</td>
        <td>
                  <button
                    onClick={() => handleUpdate(match.id)}
                    className="update-button"
                  >
                    Update
                  </button>
                </td>
    </tr>
))}
</tbody>
</table>
<br />
<br />
<button className="add-task-button" onClick={() => setShowAddMatchForm(!showAddMatchForm)}>
{showAddMatchForm ? "Cancel" : "Add Match"}
</button>
{showAddMatchForm && (
  <div className="add-task-form-container">
    <h2>{updatedMatch.id ? 'Update Match' : 'Add New Match'}</h2>
    <label htmlFor="firstPlayerId">First Player Id</label>
    <input
      type="number"
      name="firstPlayerId"
      id="firstPlayerId"
      value={updatedMatch.firstPlayerId}
      onChange={handleInputChange}
      required
    />
    <label htmlFor="secondPlayerId">Second Player Id</label>
    <input
      type="number"
      name="secondPlayerId"
      id="secondPlayerId"
      value={updatedMatch.secondPlayerId}
      onChange={handleInputChange}
      required
    />
    <label htmlFor="roundId">Round Id</label>
    <input
      type="number"
      name="roundId"
      id="roundId"
      value={updatedMatch.roundId}
      onChange={handleInputChange}
      required
    />
    <label htmlFor="matchResultFirstPlayer">match Result FirstPlayer</label>
    <input
      type="text"
      name="matchResultFirstPlayer"
      id="matchResultFirstPlayer"
      value={updatedMatch.matchResultFirstPlayer}
      onChange={handleInputChange}
      required
    />
    <label htmlFor="matchResultSecondPlayer">match Result SecondPlayer</label>
    <input
      type="text"
      name="matchResultSecondPlayer"
      id="matchResultSecondPlayer"
      value={updatedMatch.matchResultSecondPlayer}
      onChange={handleInputChange}
      required
    />
    <button className="add-task-button" onClick={updatedMatch.id ? handleUpdateMatch : handleAddMatch}>
      {updatedMatch.id ? 'Update Match' : 'Add Match'}
    </button>
  </div>
)}

</div>
<br />
<Link
        to={{
          pathname: "/roundlist",
          state:
          {
            OId: OId,
            TId: TId
            }
            }}
            >
            Back to Round Dashboard
            </Link>
</div>
);
};
export default MatchList;