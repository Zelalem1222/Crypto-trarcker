/* eslint-disable */

const BASE_URL = 'https://api.coinstats.app/public/v1/coins/';
const GET_COIN_DATA = 'GET_COIN_DATA';

export const fetchCoinsDetailsApi = async(coin) => {
  const response = await fetch(`${BASE_URL}${coin}`);
  const data = await response.json();
  const coinData = data.coin
  const details =[coinData].map(coin => ({
    id: coin.id,
    name: coin.name,
    image: coin.icon,
    price: coin.price,
    rank: coin.rank,
    priceChange1h: coin.priceChange1h,
    priceChange1d: coin.priceChange1d,
    priceChange1w: coin.priceChange1w
   }))
   return details;
} 

const coinDataReducer = (state = [] , action ={} ) => {
  switch (action.type) {
    case GET_COIN_DATA:
     return action.payload

    default: 
      return state  
  }
}

export default coinDataReducer;



export const fetchCoinsDetails = (coin) => async (dispatch) => {
  const coinData = await fetchCoinsDetailsApi(`${coin}`);
  dispatch({type: GET_COIN_DATA , payload: coinData });
}


