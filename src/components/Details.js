import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { fetchCoinsDetails } from '../redux/Details/Details';
import './Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchCoinsDetails(id));
  }, []);

  return (
    <>

      <div className="container">

        {details.map((coin) => (
          <div key={coin.name} className="card text-white bg-dark mb-3" style={{ width: '18rem' }}>
            <Link to="/">
              <IoChevronBackOutline size={30} style={{ color: 'black' }} />
            </Link>
            <img src={coin.image} alt={coin.name} />
            <div className="card-body">
              <h5 className="card-title">
                Name:
                {coin.name}
              </h5>
              <p className="card-text">
                Price:
                {coin.price}
                $
              </p>
              <p className="card-text">
                priceChange1d:
                {coin.priceChange1d}
                $
              </p>
              <p className="card-text">
                priceChange1h:
                {coin.priceChange1h}
                $
              </p>
              <p className="card-text">
                priceChange1w:
                {coin.priceChange1w}
                $
              </p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Details;
