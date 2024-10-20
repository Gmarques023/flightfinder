const initialState = {
  departureAirport: "",
  destinationAirport: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  flightClass: "Economy",
  flightResults: [], // Add flight results to state
  loading: false, // Add loading state
};

// Reducer function to handle state updates
const flightSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_DETAILS":
      return {
        ...state,
        ...action.payload,
      };
    case "FETCH_FLIGHT_RESULTS_SUCCESS":
      return {
        ...state,
        flightResults: action.payload,
        loading: false,
      };
    case "FETCH_FLIGHT_RESULTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default flightSearchReducer;
