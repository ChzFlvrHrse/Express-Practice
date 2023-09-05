const GET_ENERGY = 'energy/getEnergy';

const allEnergy = energy => {
    return {
        type: GET_ENERGY,
        energy
    }
};

export const allEnergyThunk = () => async (dispatch) => {
    const response = await fetch('/api/energy');

    if (response.ok) {
        const energy = response.json();
        dispatch(allEnergy(energy));
        return energy;
    }
};

const initialState = {};
const energyReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ENERGY: {
            state = {...state}
            action.energy.Energy.forEach(power => {
                state[power.id] = power;
            })
            return state;
        }
        default:
            return state
    }
}

export default energyReducer;
