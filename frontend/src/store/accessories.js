const GET_ACCESSORIES = "accessories/allAccessories";
const GET_MODEL_ACCESSORIES = "accessories/modelAccessories";

const allAccessories = accessories => {
    return {
        type: GET_ACCESSORIES,
        accessories
    }
};

const getModelAccessories = accessories => {
    return {
        type: GET_MODEL_ACCESSORIES,
        accessories
    }
};

export const allAccessoriesThunk = () => async (dispatch) => {
    const response = await fetch('/api/accessory');

    if (response.ok) {
        const accessories = await response.json();
        dispatch(allAccessories(accessories));
        return accessories
    }
}

export const getModelThunk = (modelSign) => async (dispatch) => {
    const response = await fetch(`/api/accessory/${modelSign}`);

    if (response.ok) {
        const accessories = await response.json();
        dispatch(getModelAccessories(accessories));
        return accessories
    }
}

const initialState = {};
const accessoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ACCESSORIES: {
            action.accessories.Accessories.forEach(acc => {
                state[acc.id] = acc;
            })
            return state;
        }
        case GET_MODEL_ACCESSORIES: {
            action.accessories.Accessories.forEach(acc => {
                state[acc.id] = acc;
            })
            return state;
        }
        default:
            return state
    };
};

export default accessoriesReducer;
