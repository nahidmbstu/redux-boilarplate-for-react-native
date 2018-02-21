const initialState = {
    people: [],
    isFetching: false,
    error: false
}

///  declare your initial state and give it as argument in reducer function

/// also you have to provide the action object

/// switch your action types to return different dispatch

// import it to root reducer



export default function peopleReducer(state = initialState, action) {  
    switch (action.type) {
        case "FETCHING_PEOPLE":
            return {
                ...state,
                people: [],
                isFetching: true
            }
        case "FETCHING_PEOPLE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                people: action.data
            }
        case "FETCHING_PEOPLE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}