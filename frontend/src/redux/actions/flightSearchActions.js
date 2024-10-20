import { mockFlightResults } from "../../mockFlights";

// This is the action creator for setting flight search details
export const setFlightSearchDetails = (details) => {
  return {
    type: "SET_SEARCH_DETAILS",
    payload: details,
  };
};

// Other actions...
export const fetchFlightResults = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_FLIGHT_RESULTS_REQUEST" });

    // Simulate fetching flight results
    setTimeout(() => {
      dispatch({
        type: "FETCH_FLIGHT_RESULTS_SUCCESS",
        payload: mockFlightResults, // Replace with actual API response later
      });
    }, 1000);
  };
};
