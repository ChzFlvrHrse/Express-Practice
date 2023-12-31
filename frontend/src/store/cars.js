const GET_CARS = "cars/allCars";
const GET_MODEL = "cars/getModel";

const allCars = cars => {
    return {
        type: GET_CARS,
        cars
    }
};

const getModel = model => {
    return {
        type: GET_MODEL,
        model
    }
};

export const allCarsThunk = () => async (dispatch) => {
    const response = await fetch('/api/cars');

    if (response.ok) {
        const cars = await response.json();
        dispatch(allCars(cars));
        return cars
    }
}

export const getModelThunk = (modelSign) => async (dispatch) => {
    const response = await fetch(`/api/cars/model/${modelSign}`);

    if (response.ok) {
        const model = await response.json();
        dispatch(getModel(model));
        return model
    }
}

const initialState = {};
const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARS: {
            state = {...state}
            action.cars.Cars.forEach(car => {
                state[car.id] = car;
            })
            return state;
        }
        case GET_MODEL: {
            state = {...state}
            action.model.Cars.forEach(model => {
                state[model.id] = model;
            })
            return state;
        }
        default:
            return state
    };
};

export default carsReducer;
