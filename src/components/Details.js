import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchLeaguesDetails } from '../redux/Details/Details';
import './Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchLeaguesDetails(id));
  }, []);

  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <IoChevronBackOutline size={30} style={{ color: '#fff' }} />
        </Link>
        <p>
          All Teams :
          {details.length}
        </p>
        <div className="nav-icons">
          <FaMicrophone size={30} />
          <IoSettingsOutline size={30} />
        </div>
      </div>
      <div className="details-container">
        <div className="clubs-logos">
          {details.map((club) => (
            <div key={club.name}>
              <img
                src={club.logo}
                alt={club.name}
                style={{ width: '40px', height: '40px' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="head">
        <div>TEAMS</div>
        <div> Games Played</div>
        <div className="win">Wins</div>
        <div className="lose">Losses</div>
        <div className="ties">Ties</div>
        <div>Points</div>
      </div>

      <div className="grid-container">
        <div>
          {details.map((club) => (
            <div key={club.name} className="club-container">
              <div className="name-logo">
                {club.rank}
                <img src={club.logo} alt={club.name} />
                <p>{club.name}</p>
              </div>
              <div className="number-container">
                <div className="gamesPlayed">{club.gamesPlayed}</div>
                <div className="games-win">{club.wins}</div>
                <div className="games-lose">{club.losses}</div>
                <div className="games-ties">{club.ties}</div>
                <div className="points-arrow">
                  <p>
                    {club.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
