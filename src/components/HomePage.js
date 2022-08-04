import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/HomePage/HomePage';
import Leagues from './Leagues';
import './HomePage.css';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  // console.log(leagues)
  const dispatch = useDispatch();

  useEffect(() => {
    if (leagues.length === 0) {
      dispatch(fetchLeagues());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <>
      <div className="nav-bar">
        <p>Leagues</p>
        <div className="total">
          Total Leagues :
          {leagues.length}
        </div>
        <div className="nav-icons">
          <FaMicrophone size={30} />
          <IoSettingsOutline size={30} />
        </div>
      </div>
      <div />
      <div className="main-container">

        <input
          className="searchbar"
          type="text"
          value={search.get('filter') || ''}
          placeholder="Search league .."
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
      </div>
      <div className="leagues-container">
        {leagues
          .filter((element) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const leagueName = element.name.toLowerCase();
            return leagueName.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <>
              <Leagues
                id={element.id}
                name={element.name}
                logo={element.logo}
                key={element.id}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default HomePage;
