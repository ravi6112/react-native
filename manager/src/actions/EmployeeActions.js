import firebase from '@firebase/app';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type:EMPLOYEE_UPDATE,
        payload:{prop , value }
    };
};

export const employeeCreate = ({ name,phone,shift }) =>{
    const { currentUser } = firebase.auth();

    return(dispatch)=> {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() =>{
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.employeeList({type: 'reset'});
    });
    }
};

export const employeesFetch =()=>{
    const { currentUser } = firebase.auth();

    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value',snapshot=>{
                dispatch({ type:EMPLYEES_FETCH_SUCCESS,payload:snapshot.val()})
            })
    }
}