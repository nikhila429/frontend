import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import UserTrnmtDash from './UserTrnmtDash';

const UserMatchList = (props) => {
const TId = props.location.state.TId;
const OId = props.location.state.OId;
const RId = props.location.state.RId;
const RNumber = props.location.state.RNumber;


const [matches, setMatches] = useState([]);


useEffect(() => {
axios.get(`http://localhost:8080/api/matches/${RId}`)
.then(response => {
setMatches(response.data);
})
.catch(error => {
console.log(error);
});
}, []);



const handleUpdate = (taskId) => {
  // TODO: Implement update functionality
  console.log(`Update task with id ${taskId}`);
};

return (
<div className="tasklist-container">
<LoggedComponent />
<UserTrnmtDash TId={TId} OId={OId}/>
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
        <td><Link
        to={{
          pathname: "/userroundlist",
          state:
          {
            OId: OId,
            TId: TId,
            RId: RId,
            RNumber: RNumber
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
          pathname: "/userroundlist",
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
export default UserMatchList;