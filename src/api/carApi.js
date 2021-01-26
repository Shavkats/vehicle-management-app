import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/cars/";

export function getCarsData() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCarByName(name) {
  return fetch(baseUrl + "?name=" + name)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(cars => {
        if (cars.length !== 1) throw new Error("car not found: " + name);
        return cars[0];
      });
    })
    .catch(handleError);
}

export function saveCarData(car) {
  return fetch(baseUrl + (car.id || ""), {
    method: car.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...car
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCarData(carId) {
  return fetch(baseUrl + carId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
