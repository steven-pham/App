import React from 'react';
import "./Appointment.css";
import { FormDetails } from '../../App'

type AppProps={
    appointment : FormDetails
    appointments: FormDetails[]
    setAppointments: (appointments: FormDetails[]) => void
}

function Appointment (props: AppProps) {
    const deleteHandler = () =>{
       props.setAppointments(props.appointments.filter(el => el.key !== props.appointment.key))
    };

    return(
        <div className="appointment">
            <li className="appointment-item"> {props.appointment.name}</li>
            <li className="appointment-item"> {props.appointment.email}</li>
            <li className="appointment-item"> {props.appointment.mobile}</li>
            <li className="appointment-item"> {props.appointment.service}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Appointment;