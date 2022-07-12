const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const app = express();
const port = 8000;

const { filterCars } = require("./Filter");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({
        message: "Api Success",
    });
});


app.post("/api/cars", async (req, res) => {
    const cars = (await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")).data;
    const filteredCars = filterCars(cars, req.body);
    res.send(filteredCars);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
