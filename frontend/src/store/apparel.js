const GET_APPAREL = 'apparel/getApparel';
const GET_CATEGORY = 'apparel/getCategory';

const allApparel = apparel => {
    return {
        type: GET_APPAREL,
        apparel
    }
};

const getCategory = cat => {
    return {
        type: GET_CATEGORY,
        cat
    }
}

export const allApparelThunk = () => async (dispatch) => {
    const response = await fetch('/api/apparel');

    if (response.ok) {
        const apparel = response.json();
        dispatch(allApparel(apparel));
        return apparel;
    }
};

export const getCategoryThunk = (category) => async (dispatch) => {
    const response = await fetch(`/api/apparel/${category}`);

    if (response.ok) {
        const cat = await response.json();
        dispatch(getCategory(cat));
        return cat;
    }
}

const initialState = {};
const apparelReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_APPAREL: {
            action.apparel.Apparel.forEach(app => {
                state[app.id] = app;
            })
            return state;
        }
        case GET_CATEGORY: {
            action.cat.Apparel.forEach(app => {
                state[app.id] = app;
            })
        }
        default:
            return state
    }
};

export default apparelReducer;
