import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { fetchCoins } from '../redux/HomePage/HomePage';
import Coins from './Coins';
import './HomePage.css';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <>
      <div className="nav-bar">
        <p>Coins</p>
        <div className="total">
          Total coins :
          {coins.length}
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
          placeholder="Search coin .."
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
        {coins
          .filter((element) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const coinName = element.name.toLowerCase();
            return coinName.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <>
              <Coins
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
