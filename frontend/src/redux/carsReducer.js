const initialState = {
  loading: false,
  cars: [],
  error: "",
};

const carsReducer = (stateCar = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS_SUCCESS":
      return {
        ...stateCar,
        loading: false,
        cars: action.payload,
      };
    case "FETCH_CARS_REQUEST":
      return {
        ...stateCar,
        loading: true,
      };
    case "FETCH_CARS_FAILURE":
      return {
        ...stateCar,
        error: action.payload,
      };
    default:
      return stateCar;
  }
};

export default carsReducer;
