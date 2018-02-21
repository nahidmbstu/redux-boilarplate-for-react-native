import axios from 'axios';

export function fetchPeopleFromAPI() {
    return (dispatch) => {
        return axios.get('https://swapi.co/api/people/', {
            headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
        }).then(data => 
            {
            console.log(data.data.results)

            dispatch({
                type: 'FETCHING_PEOPLE_SUCCESS',
                data : data.data.results
            })

            }).catch(function (error) {

            dispatch({
                type: 'FETCHING_PEOPLE_FAILURE',
                message : "FETCH ERROR"
            })
        })
           
    }
}


