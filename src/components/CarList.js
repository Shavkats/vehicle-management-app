import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

function CarList(props) {

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.cars.map(car => {
                    return(
                        <tr key={car.id}>
                            <td><Link to={"/car/" + car.name}>{car.name}</Link></td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>
                                <button className="btn btn-outline-danger" 
                                    onClick={() =>{props.deleteCarData(car.id); toast.info("Vehicle data deleted!")}}>Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

CarList.propTypes = {
    deleteCar: PropTypes.func.isRequired,
    cars: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    )
}

export default CarList;