const GET_LIFESTYLE = 'lifestyle/getLifestyle';

const allLifestyle = lifestyle => {
    return {
        type: GET_LIFESTYLE,
        lifestyle
    }
};

export const allLifestyleThunk = () => async (dispatch) => {
    const response = await fetch('/api/lifestyle');

    if (response.ok) {
        const lifestyle = response.json();
        dispatch(allLifestyle(lifestyle));
        return lifestyle;
    }
};

const initialState = {};
const lifestyleReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIFESTYLE: {
            action.lifestyle.Lifestyle.forEach(life => {
                state[life.id] = life;
            })
            return state;
        }
        default:
            return state
    }
}

export default lifestyleReducer;
