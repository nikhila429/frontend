import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import UserTrnmtDash from './UserTrnmtDash';


const UserRoundList = (props) => {
  const tournamentId = props.location.state.TId;
  const OId = props.location.state.OId;
  const [rounds, setRounds] = useState([]);

  const [showAddRoundForm, setShowAddRoundForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/rounds/${tournamentId}`)
      .then(response => {
        setRounds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div className="tasklist-container">
      <LoggedComponent />
      <UserTrnmtDash TId={tournamentId} OId={OId}/>
      <br />
      <div className="tasklist-content">
        <h2 className="tasklist-heading" style={{color: 'white'}}>Round Details</h2>
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>Round Number</th>
              <th>Top Cut</th>
              <th>View Match List</th>
        
            </tr>
          </thead>
          <tbody>
            {rounds.map((round) => (
              <tr key={round.id}>
                <td><Link
        to={{
          pathname: "/matchlist",
          state:
          {
            OId: OId,
            TId: tournamentId,
            RId: round.id,
            RNumber: round.roundNumber
            }
            }}
            >{round.roundNumber}</Link></td>
                <td>{round.topCut}</td>
                <td>
                <Link
        to={{
          pathname: "/usermatchlist",
          state:
          {
            OId: OId,
            TId: tournamentId,
            RId: round.id,
            RNumber: round.roundNumber
            }
            }}
            >
                    
                  <button
                    className="delete-button"
                  >
                    view
                  </button>
                  </Link>
                </td>

                
                
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        
      </div>
      <br />
      <Link
        to={{
          pathname: "/trnmtdash",
          state:
          {
            OId: OId,
            TId: tournamentId
            }
            }}
            >
            Back to Tournament Dashboard
            </Link>
            </div>
            );
};
export default UserRoundList;