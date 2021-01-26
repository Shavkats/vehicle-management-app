import dispatcher from "../appDispatcher";
import * as carApi from "../api/carApi";

export function saveCarData(car) {
    return carApi.saveCarData(car).then(savedCar => {
        dispatcher.dispatch({
            actionType: car.id 
                ? "UPDATE_CAR" 
                : "CREATE_CAR",
            car: savedCar
        });
    });
}

export function deleteCarData(id) {
    return carApi.deleteCarData(id).then(() => {
        dispatcher.dispatch({
            actionType: "DELETE_CAR",
            id: id
        });
    });
}

export function loadCarsData() {
    return carApi.getCarsData().then(cars => {
        dispatcher.dispatch({
            actionType: "LOAD_CARS",
            cars: cars
        });
    });
}