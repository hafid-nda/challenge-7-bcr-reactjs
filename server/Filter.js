const filterCars = (cars, { type, date, time, passsanger }) => {
    return cars
        .filter((car) => car.available === true) // Filter available true
        .filter((car) => {
            // Filter type
            if (type === "Keyless Entry") {
                if (car.options.includes(type)) {
                    return car;
                }
            } else {
                return !car.options.includes("Keyless Entry");
            }
        })
        .filter((car) => {
            // Filter date
            const dateCar = new Date(car.availableAt);
            const datePicked = new Date(date);
            if (dateCar >= datePicked) {
                return car;
            }
        })
        .filter((car) => {
            // Filter time
            let dateCar = new Date(car.availableAt).getHours();
            if (dateCar >= Number(time)) {
                return car;
            }
        })
        //Filter Passanger
        .filter((car) => car.capacity >= passsanger);
};

module.exports = { listCar, filterCars }
