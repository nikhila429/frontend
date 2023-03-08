import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';

const RoundList = (props) => {
  const tournamentId = props.location.state.TId;
  const OId = props.location.state.OId;
  const [rounds, setRounds] = useState([]);
  const [newRound, setNewRound] = useState({
    roundNumber: '',
    topCut: '',
    tournamentId: tournamentId
  });
  const [selectedRound, setSelectedRound] = useState(null);
  const [showAddRoundForm, setShowAddRoundForm] = useState(false);
  const [showUpdateRoundForm, setShowUpdateRoundForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/rounds/${tournamentId}`)
      .then(response => {
        setRounds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewRound({ ...newRound, [e.target.name]: e.target.value });
  };

  const handleSelectRound = (round) => {
    setSelectedRound(round);
    setShowUpdateRoundForm(true);
  };

  const handleDelete = (roundId) => {
    axios.delete(`http://localhost:8080/api/round/deleteRound/${roundId}`, {
    headers: {
    "username": OId
    }
    })
    .then(response => {
      console.log(response);
      setRounds(rounds.filter(round => round.id !== roundId));
    })
    .catch(error => {
    console.log(error);
    });
    };

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log(selectedRound);
    axios.put(`http://localhost:8080/api/round/updateRound`, selectedRound)
      .then(response => {
        setRounds(rounds.map(round => round.id === selectedRound.id ? response.data : round));
        setSelectedRound(null);
        setShowUpdateRoundForm(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddRound = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/api/round/createRound', newRound)
      .then(response => {
        setRounds([...rounds, response.data]);
        setNewRound({
            roundNumber: '',
            topCut: '',
            tournamentId: tournamentId
        });
        setShowAddRoundForm(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="tasklist-container">
      <LoggedComponent />
      <TrnmtDash TId={tournamentId} OId={OId}/>
      <br />
      <div className="tasklist-content">
        <h2 className="tasklist-heading" style={{color: 'white'}}>Round Details</h2>
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>Round Number</th>
              <th>Top Cut</th>
              <th>View Match List</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rounds.map((round) => (
              <tr key={round.id}>
                <td><Link
                  to={{
                    pathname: "/matchlist",
                    state: {
                      OId: OId,
                      TId: tournamentId,
                      RId: round.id,
                      RNumber: round.roundNumber
                    }
                  }}
                >{round.roundNumber}</Link></td>
                <td>{round.topCut}</td>
<td><Link
to={{
pathname: "/matchlist",
state: {
OId: OId,
TId: tournamentId,
RId: round.id,
RNumber: round.roundNumber
}
}}
>View</Link></td>
<td><button onClick={() => handleSelectRound(round)} className='update-button'>Update</button></td>
<td><button onClick={() => handleDelete(round.id)} className='delete-button'>Delete</button></td>
</tr>
))}
</tbody>
</table>
<br />
<button onClick={() => setShowAddRoundForm(true)} className='update-button'>Add Round</button>
{showAddRoundForm &&
<div>
<h3>Add Round</h3>
<form className="add-task-form-container">
<label>Round Number:</label>
<input type="text" name="roundNumber" value={newRound.roundNumber} onChange={handleInputChange} />
<label>Top Cut:</label>
<input type="text" name="topCut" value={newRound.topCut} onChange={handleInputChange}/>

<button type="button" onClick={handleAddRound} className='update-button'>Add</button>
<button type="button" onClick={() => setShowAddRoundForm(false)} className='delete-button'>Cancel</button>
</form>
</div>
}
{showUpdateRoundForm &&
<div>
<h3>Update Round</h3>
<form className="add-task-form-container">
<label>Round Number:</label>
<input type="text" name="roundNumber" value={selectedRound.roundNumber} onChange={(e) => setSelectedRound({ ...selectedRound, roundNumber: e.target.value })} />
<label>Top Cut:</label>
<input type="text" name="topCut" value={selectedRound.topCut} onChange={(e) => setSelectedRound({ ...selectedRound, topCut: e.target.value })} />
<button type="button" onClick={handleUpdate} className='update-button'>Update</button>
<button type="button" onClick={() => setShowUpdateRoundForm(false)} className='delete-button'>Cancel</button>
</form>
</div>
}
</div>
</div>
);
};

export default RoundList;





