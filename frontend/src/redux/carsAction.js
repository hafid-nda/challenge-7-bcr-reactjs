const fetchCarsSuccess = (cars) => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: cars,
  };
};
const fetchCarsRequest = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};
const fetchCarsFailure = (error) => {
  return {
    type: "FETCH_CARS_FAILURE",
    payload: error,
  };
};

const fetchUsers = (filter) => {
  return (dispatch) => {
    dispatch(fetchCarsRequest);
    fetch("http://localhost:8000/api/cars", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((res) => res.json())
      .then((cars) => {
        dispatch(fetchCarsSuccess(cars));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchCarsFailure(errorMsg));
      });
  };
};

export default fetchUsers;
