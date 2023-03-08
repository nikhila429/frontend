import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/TrnmtDash.css';
import LoggedComponent from './LoggedComponent';

const PRqst = (props) => {
  // console.log(props.location.state);
  const UId = props.location.state.userId;

  const [showForm, setShowForm] = useState(false);

  const handleRaiseRequest = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      displayName: form.displayName.value,
      tournamentId: parseInt(form.tournamentId.value),
      userId: parseInt(form.userId.value),
    };
    fetch('http://localhost:8080/api/player/trnmt-rqst', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        window.alert('Tournament request successfully created!');
      })
      .catch((error) => {
        // console.error(error);
        window.alert('Failed to create tournament request.');
      });
  };

  return (
    <div className="employee-dash-container">
      <LoggedComponent />
      <section className="header">
        <nav>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active"></div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="nav-links" id="navLinks">
            <br />
            <div className="margin-left">
              <h2>
                <b>User Tournament Dashboard</b>
              </h2>
              <h4>User ID: {UId}</h4>
              <br />
              <br />

              <ol className="button-list" style={{ alignItems: 'left' }}>
                <li>
                  <Link
                    to={{
                      pathname: '/usertdb',
                      state: { userId: UId },
                    }}
                  >
                    Tournament List
                  </Link>
                </li>
                <li>
                  <button onClick={handleRaiseRequest} className='update-button'>
                    Raise a Tournament Request
                  </button>
                </li>
              </ol>
              {showForm && (
                <form onSubmit={handleSubmit} className="add-task-form-container">
                  <label>
                    Display Name:
                    <input type="text" name="displayName"  />
                  </label>
                  <br />
                  <label>
                    Tournament ID:
                    <input type="text" name="tournamentId" />
                  </label>
                  <br />
                  <label>
                    User ID:
                    <input type="text" name="userId" value={UId}/>
                  </label>
                  <br />
                  <button type="submit" className='update-button'>Submit</button>
                </form>
              )}
            </div>
          </div>
        </nav>
      </section>
    </div>

    );
};

export default PRqst;
