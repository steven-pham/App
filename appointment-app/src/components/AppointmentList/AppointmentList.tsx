import React, {} from 'react';
import "./AppointmentList.css";
import Appointment from '../Appointment/Appointment'
import {FormDetails} from '../../App'

type AppsProps = {
    appointments:  FormDetails[]
    setAppointments: (appointments: FormDetails[]) => void
}

function AppointmentList (props: AppsProps) {

    const fetchItems = async() => {
        const data = await fetch('https://appointment-app-database.azurewebsites.net/api/Appointments');
    }   
    

    return(
        <div className="container">
            <h1>Our Current Appointments</h1>
            <select id="service" name="service">
                    <option >All</option>
                    <option >Customer 1</option>
                    <option >Customer 2</option>
                    <option >Customer 3</option>
                    <option >Costumer 4</option>
            </select>
            <ul>
                {props.appointments.map(appointment => {
                    return <Appointment appointments={props.appointments} setAppointments={props.setAppointments} appointment={appointment} />
                })}
            </ul>
            
            
        </div>
    )
}

export default AppointmentList;