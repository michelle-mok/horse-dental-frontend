import React, {useReducer, useContext} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export const initialState = {
    selectedOwner: null,
    ownersHorses: []
};

const LOAD_OWNER = 'LOAD_OWNER';
const LOAD_OWNERS_HORSES = 'LOAD_OWNERS_HORSES';

export function dentalAppReducer (state, action) {
    switch (action.type) {
        case LOAD_OWNER:
            return {...state, selectedOwner: action.payload.selectedOwner};
        case LOAD_OWNERS_HORSES:
            return {...state, ownersHorses: action.payload.ownersHorses};
        default:
            return state;
    }
}

// #############   action creators   ####################

function loadOwner (ownerObject) {
    return {
        type: LOAD_OWNER,
        payload: {
            selectedOwner: ownerObject
        }
    }
}

function loadOwnersHorses (horsesArray) {
    return {
        type: LOAD_OWNERS_HORSES,
        payload: {
            ownersHorses: horsesArray
        }
    }
}

// ####################### Provider ####################################

export const dentalAppContext = React.createContext(null);
const { Provider } =dentalAppContext;

export function DentalAppProvider ({ children }) {
    const [store, dispatch] = useReducer(dentalAppReducer, initialState);

    return <Provider value={{ store, dispatch }}>{children}</Provider>
}

// ##################################################################
export function getOwner (dispatch, ownerObject) {
    dispatch (loadOwner(ownerObject));
}

// ###################### backend requests ############################
const BACKEND_URL ="http://localhost:3004";

// getting data of all owners
export function getOwners(setOwners) {
    axios
      .get(BACKEND_URL + '/owners')
      .then((response) => {
         // sorting owners array alphabetically by last name
          response.data.allOwners.sort(function(a, b) {
            var nameA = a.last_name.toUpperCase(); 
            var nameB = b.last_name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
            });
          setOwners(response.data.allOwners);
      })
      .catch((error) => console.log(error));
}

// getting horses owned by selected owner
export function getOwnersHorses(owner, setOwnersHorses) {
    axios
    .get(BACKEND_URL + `/ownersHorses/${owner.id}`)
    .then((response) => {
        loadOwnersHorses(response.data.horses);
        setOwnersHorses(response.data.horses);
    })
    .catch((error) => console.log(error));
}