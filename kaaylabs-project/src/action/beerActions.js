import axios from "axios";

export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERSBEFOREDATE_SUCCESS = "FETCH_BEERSBEFOREDATE_SUCCESS";

export const fetchBeers = (page, dispatch) => async () => {
  try {
    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    );
    dispatch({
      type: FETCH_BEERS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetchBeersDate = (Bdate, Adate, dispatch) => async () => {
  let BeforeDate =
    Bdate !== null && Bdate !== undefined && Bdate !== ""
      ? `https://api.punkapi.com/v2/beers?brewed_before=${Bdate}`
      : `https://api.punkapi.com/v2/beers?brewed_after=${Adate}`;
  try {
    const response = await axios.get(BeforeDate);
    console.log(response, "DATE");
    dispatch({
      type: FETCH_BEERSBEFOREDATE_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
