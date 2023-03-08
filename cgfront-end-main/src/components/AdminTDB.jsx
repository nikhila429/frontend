import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminTDB.css';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';

const AdminTDB = (props) => {
  const userId = props.location.state.userId;
  const [tournaments, setTournaments] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newTournament, setNewTournament] = useState({
    tournamentName: '',
    tournamentDate: '',
    venue: '',
    playerLimit: '',
    ownerUserId: '',
    winPoints: '',
    lossPoints: '',
    drawPoints: '',
    gamesPerMatch: '',
    firstTiebreaker: '',
  });
  const [updatedTournament, setUpdatedTournament] = useState({
    tournamentName: '',
    tournamentDate: '',
    venue: '',
    playerLimit: '',
    ownerUserId: '',
    winPoints: '',
    lossPoints: '',
    drawPoints: '',
    gamesPerMatch: '',
    firstTiebreaker: '',
  });
  const tDate = "2023-03-05 21:30 PM UTC";
  const createdDate = "2023-03-05 21:30:00 PM UTC";

  const [showAddTournamentForm, setShowAddTournamentForm] = useState(false);
  const [showUpdateTournamentForm, setShowUpdateTournamentForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/tournaments/${userId}`)
      .then(response => {
        setTournaments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewTournament({ ...newTournament, [e.target.name]: e.target.value });
    setUpdatedTournament({ ...updatedTournament, [e.target.name]: e.target.value });
  };

  const handleAddTournament = (e) => {
    e.preventDefault()
    newTournament.ownerUserId = userId;
 axios.post('http://localhost:8080/api/add/tournament', {tournamentName : newTournament.tournamentName,
    tournamentDate : tDate,
    venue : newTournament.venue,
    playerLimit : newTournament.playerLimit,
    ownerUserId : newTournament.ownerUserId,
    winPoints : newTournament.winPoints,
    lossPoints : newTournament.lossPoints,
    drawPoints : newTournament.drawPoints,
    gamesPerMatch : newTournament.gamesPerMatch,
    firstTiebreaker : newTournament.firstTiebreaker,
  createdDate: createdDate}, {
        headers: {
            "username": userId
        }
    }).then(response => {
        setTournaments([...tournaments, response.data]);
        setNewTournament({
            tournamentName: '',
            tournamentDate: '',
            venue: '',
            playerLimit: '',
            ownerUserId: '',
            winPoints: '',
            lossPoints: '',
            drawPoints: '',
            gamesPerMatch: '',
            firstTiebreaker: '',
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdateTournament = (tournamentId) => {
    setShowUpdateTournamentForm(!showUpdateTournamentForm);
    setUpdatedTournament(tournaments.find(tournament => tournament.id === tournamentId));
  };

  const updateTournament = (e) => {
    e.preventDefault();
    updatedTournament.tournamentDate = tDate;
    updatedTournament.createdDate = createdDate;
    updatedTournament.ownerUserId = userId;

    axios.put(`http://localhost:8080/api/update/tournament/`, updatedTournament, {
      headers: {
      "username": userId
      }
      })
      .then(response => {
        setTournaments(tournaments.map(tournament => tournament.id === updatedTournament.id ? response.data : tournament));
        setShowUpdateTournamentForm(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const filterTournaments = (searchInput) => {
    return tournaments.filter((tournament) =>tournament.tournamentName.toLowerCase().includes(searchInput.toLowerCase())
    || tournament.venue.toLowerCase().includes(searchInput.toLowerCase())
    || tournament.ownerUsername.toLowerCase().includes(searchInput.toLowerCase())
    );
    };
    
    const handleDeleteTournament = (tournamentId) => {
    axios.delete(`http://localhost:8080/api/delete/tournament/${tournamentId}`, {
    headers: {
    "username": userId
    }
    })
    .then(response => {
    setTournaments(tournaments.filter(tournament => tournament.id !== tournamentId));
    })
    .catch(error => {
    console.log(error);
    });
    };
    
    return (
      
    <div className="tasklist-container">
    <LoggedComponent/>
    <br />
    <div className="tasklist-content">
    <h1 className="tasklist-heading" style={{color:'white'}}>Tournaments Dashboard</h1>
    <div>
    <div className="search-container">
    <input type="text" placeholder="Search by name, venue or owner username" onChange={(e) => setSearchInput(e.target.value)} />
    </div>
    <br />

    <button className="update-button" onClick={() => setShowAddTournamentForm(!showAddTournamentForm)}>{showAddTournamentForm ? "Cancel" : "Add Tournament"}</button>
    </div>
    {showAddTournamentForm && (
    <div >
    <h2>Add Tournament</h2>
    <form className="add-task-form-container" onSubmit={handleAddTournament}>
    <div className="form-group">
    <label>Tournament Name</label>
    <input type="text" name="tournamentName" value={newTournament.tournamentName} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Tournament Date</label>
    <input type="date" name="tournamentDate" value={newTournament.tournamentDate} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Venue</label>
    <input type="text" name="venue" value={newTournament.venue} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Player Limit</label>
    <input type="number" name="playerLimit" value={newTournament.playerLimit} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Win Points</label>
    <input type="number" name="winPoints" value={newTournament.winPoints} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Loss Points</label>
    <input type="number" name="lossPoints" value={newTournament.lossPoints} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Draw Points</label>
    <input type="number" name="drawPoints" value={newTournament.drawPoints} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>Games Per Match</label>
    <input type="number" name="gamesPerMatch" value={newTournament.gamesPerMatch} onChange={handleInputChange} required />
    </div>
    <div className="form-group">
    <label>First Tiebreaker</label>
    <input type="text" name="firstTiebreaker" value={newTournament.firstTiebreaker} onChange={handleInputChange} required />
    </div>
    <button type="submit" className='update-button'>Add Tournament</button>
    </form>
    </div>
    )}
    
{showUpdateTournamentForm && (
<div className="add-task-form-container">
<h2>Update Tournament</h2>
<form onSubmit={updateTournament}>
<div className="form-group">
<label>Tournament Name</label>
<input type="text" name="tournamentName" value={updatedTournament.tournamentName} onChange={(e) => setUpdatedTournament({ ...updatedTournament, tournamentName: e.target.value })} required />
</div>
<div className="form-group">
<label>Tournament Date</label>
<input type="date" name="tournamentDate" value={updatedTournament.tournamentDate} onChange={(e) => setUpdatedTournament({ ...updatedTournament, tournamentDate: e.target.value })} required />
</div>
<div className="form-group">
<label>Venue</label>
<input type="text" name="venue" value={updatedTournament.venue} onChange={(e) => setUpdatedTournament({ ...updatedTournament, venue: e.target.value })} required />
</div>
<div className="form-group">
<label>Player Limit</label>
<input type="number" name="playerLimit" value={updatedTournament.playerLimit} onChange={(e) => setUpdatedTournament({ ...updatedTournament, playerLimit: e.target.value })} required />
</div>
<div className="form-group">
  <label>Win Points</label>
  <input type="number" name="winPoints" value={updatedTournament.winPoints} onChange={(e) => setUpdatedTournament({ ...updatedTournament, winPoints: e.target.value })} required />
</div>
<div className="form-group">
  <label>Loss Points</label>
  <input type="number" name="lossPoints" value={updatedTournament.lossPoints} onChange={(e) => setUpdatedTournament({ ...updatedTournament, lossPoints: e.target.value })} required />
</div>
<div className="form-group">
  <label>Draw Points</label>
  <input type="number" name="drawPoints" value={updatedTournament.drawPoints} onChange={(e) => setUpdatedTournament({ ...updatedTournament, drawPoints: e.target.value })} required />
</div>
<div className="form-group">
  <label>Games Per Match</label>
  <input type="number" name="gamesPerMatch" value={updatedTournament.gamesPerMatch} onChange={(e) => setUpdatedTournament({ ...updatedTournament, gamesPerMatch: e.target.value })} required />
</div>
<div className="form-group">
  <label>First Tiebreaker</label>
  <input type="text" name="firstTiebreaker" value={updatedTournament.firstTiebreaker} onChange={(e) => setUpdatedTournament({ ...updatedTournament, firstTiebreaker: e.target.value })} required />
</div>
<button type="submit" className='update-button'>Update</button>
</form>
</div>
)}

{/* <div className="tournament-list">
{filterTournaments(searchInput).map((tournament, index */}
{tournaments.length > 0 ?
<table className="tasklist-table">
<thead>
<tr>
<th>Tour ID</th>
<th>Name</th>
<th>Player Limit</th>
<th>Venue</th>
<th>Owner</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{filterTournaments(searchInput).map(tournament => (
<tr key={tournament.id}>

<td><Link
                    to={{
                      pathname: "/roundlist",
                      state: { TId: tournament.id,  OId: userId }
                    }}>{tournament.id}</Link></td>
<td>{tournament.tournamentName}</td>
<td>{tournament.playerLimit}</td>
<td>{tournament.venue}</td>
<td>{tournament.ownerUsername}</td>
<td>

<button className="update-button" onClick={() => handleUpdateTournament(tournament.id) }>{showUpdateTournamentForm ? "Cancel" : "Edit"}</button>
{/* <button className="delete-button" onClick={() => handleDeleteTournament(tournament.id)}>Delete</button> */}
{/* <Link className="update-button" to={{
pathname: `/admin/tournament/${tournament.id}`,
state: {
userId: userId,
tournamentId: tournament.id
}
}}>View</Link> */}
</td>
</tr>
))}
</tbody>
</table>
:
<p>No tournaments created yet.</p>
}

</div>
</div>
);
};
export default AdminTDB;



    
    
    
    
    
     
