import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminTDB.css';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';

const UserTDB = (props) => {
  const userId = props.location.state.userId;
  const [tasks, setTasks] = useState([]);
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
  const createdDate = "2023-03-05 21:30 PM UTC";

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/tournaments`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleInputChange = (e) => {
    
    setNewTournament({ ...newTournament, [e.target.name]: e.target.value });
  };
  

  const handleUpdate = (taskId) => {
    // TODO: Implement update functionality
    console.log(`Update task with id ${taskId}`);
  };

  const handleAddTrnmt = () => {
   
    newTournament.ownerUserId = userId;
    console.log(newTournament);
    axios.post('http://localhost:8080/api/add/tournament', newTournament, {
        headers: {
            "username": userId
        }
    })
      .then(response => {
        setTasks([...tasks, response.data]);
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

  const filterTasks = (searchInput) => {
    return tasks.filter((task) =>
      task.venue.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div className="tasklist-container">
      <LoggedComponent />
      <br />

      <div className="tasklist-content">
        <h2 className="tasklist-heading" style={{color: 'white'}}>Tournamet List</h2>
        <input
          type="text"
          placeholder="Search Venue..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>Trnmt Id</th>
              <th>Owner Name</th>
              <th>Trnmt Name</th>
              <th>Trnmt venue</th>
              
              <th>Trnmt Type</th>
              <th>View</th>
   
            </tr>
          </thead>
          <tbody>
            {filterTasks(searchInput).map((task) => (
              <tr key={task.id}>
                <td>{task.id} </td>
                <td>{task.ownerUsername}</td>
                <td>{task.tournamentName}</td>
                <td>{task.venue}</td>
                
                <td>{task.competitionType}</td>
            <td>
            <Link
                    to={{
                      pathname: "/userroundlist",
                      state: { TId: task.id,  OId: userId }
                    }}
                  >
              <button
                onClick={() => handleUpdate(task.taskId)}
                className="update-button"
              >
                View
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
</div>
);
};

export default UserTDB;