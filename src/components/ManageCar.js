import React, {useState, useEffect} from "react";
import CarForm from "./CarForm";
import carStore from '../stores/carStore';
import * as carActions from "../actions/carActions";
import { toast } from "react-toastify";

const ManageCar = (props) => {
    const [errors, setErros] = useState({});
    const [cars, setCarsData] = useState(carStore.getCarsData());
    const [car, setCarData] = useState({
        id: null,
        name: "",
        model: "",
        year: "",
        price: ""
    });

    useEffect(() => {
        carStore.addChangeListener(onChange)
        const name = props.match.params.name;
        if(cars.length === 0){
            carActions.loadCarsData();
        } else if(name){
            setCarData(carStore.getCarByName(name));
        }
        return () => carStore.removeChnageListener(onChange);
    }, [cars.length, props.match.params.name]);

const onChange = () => {
    setCarsData(carStore.getCarsData());
}

const handleChange = (e) =>{
    const newCar = {...car, [e.target.name]: e.target.value};
    setCarData(newCar);
}

function formIsValid(){
    const _errors = {};

    if (!car.name.trim()) _errors.name = "Name is required!";
    if (!car.model.trim()) _errors.model = "Model is required!";
    if (!car.year.trim()) _errors.year = "Year is required!";
    if (!car.price.trim()) _errors.price = "Price is required!";

    setErros(_errors);

    return Object.keys(_errors).length === 0;
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(!formIsValid()) return;
    carActions.saveCarData(car).then(() =>{
        props.history.push("/cars");
        toast.success("Vehicle data saved!")
    });
}

    return(
        <>
            <h2>Manage Car</h2>
            <CarForm 
                car={car} 
                errors={errors}
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default ManageCar;