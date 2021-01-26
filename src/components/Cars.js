import React, {useState, useEffect} from "react";
import carStore from "../stores/carStore"
import CarList from "./CarList";
import { Link } from "react-router-dom";
import { loadCarsData, deleteCarData } from "../actions/carActions";

function Cars(){
    const [cars, setCarsData] = useState(carStore.getCarsData());

    useEffect(() => {
        carStore.addChangeListener(onChange);
        if(carStore.getCarsData().length === 0){loadCarsData()};
        return () => carStore.removeChnageListener(onChange);
    },[]);

const onChange = () => {
    setCarsData(carStore.getCarsData());
}

    return(
        <>
            <h2>Car list</h2>
            <Link className="btn btn-primary" to="/car/">
                Add Car
            </Link>
            <CarList cars={cars} deleteCarData={deleteCarData} />
        </>
    )
}

export default Cars;