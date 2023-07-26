import ax  from "../index";
const flightService = {
  getFlightDetails: () => ax.get("/63b85b1209f0a79e89e17e3a/flights")
  };

  
  export const { getFlightDetails} = flightService;
  