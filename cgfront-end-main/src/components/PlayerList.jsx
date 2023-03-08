import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';

const PlayerList = (props) => {
  const TId = props.location.state.TId;
  const OId = props.location.state.OId;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/playernames/${TId}`)
      .then(response => {
        // Fetch rating for each player
        Promise.all(response.data.map(player => {
          return axios.get(`http://localhost:8080/ratings/player-average-rating/${player.id}`)
            .then(ratingResponse => {
                
              player.rating = ratingResponse.data;
              return player;
            })
        }))
        .then(playersWithRatings => {
          setPlayers(playersWithRatings);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      <div className="t2asklist-content">
        <h2 className="tasklist-heading" style={{color: 'white'}}>Player Details</h2>
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>Player Id</th>
              <th>Display Name</th>
              <th>Tournament Id</th>
              <th>User Id</th>
              <th>Rating</th> {/* New column for ratings */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.displayName}</td>
                <td>{player.tournamentId}</td>
                <td>{player.userId}</td>
                <td>{player.rating || '-'}</td> {/* Display rating or dash if not available */}
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
        <Link
          to={{
            pathname: "/trnmtdash",
            state: {
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

export default PlayerList;
