import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";

let _cars = [];

class CarStore extends EventEmitter{
    addChangeListener(callback){
        this.on("change", callback)
    }

    removeChnageListener(callback){
        this.removeListener("change", callback);
    }

    emitChnage(){
        this.emit("change");
    }

    getCarsData(){
        return _cars;
    }

    getCarByName(name){
        return _cars.find((car) => car.name === name);
    }
}

const store = new CarStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case "CREATE_CAR":
            _cars.push(action.car);
            store.emitChnage();
            break;
        case "DELETE_CAR":
            _cars = _cars.filter(car => car.id !== action.id);
            store.emitChnage();
            break;
        case "UPDATE_CAR":
            _cars = _cars.map(car => 
                car.id === action.car.id ? action.car : car);
            store.emitChnage();
            break;
        case "LOAD_CARS":
            _cars = action.cars;
            store.emitChnage();
            break;
        default:
                //no case
    }
});

export default store;