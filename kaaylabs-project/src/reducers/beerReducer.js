import {
  FETCH_BEERSAFTERDATE_SUCCESS,
  FETCH_BEERSBEFOREDATE_SUCCESS,
  FETCH_BEERS_SUCCESS
} from "../action/beerActions";

const initialState = {
  beers: []
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.payload
      };
    case FETCH_BEERSBEFOREDATE_SUCCESS:
      return {
        ...state,
        beers: action.payload
      };
    default:
      return state;
  }
};

export default beerReducer;
