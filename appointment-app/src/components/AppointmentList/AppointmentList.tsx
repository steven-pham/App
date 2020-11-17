import React, { useEffect, useState } from 'react';
import "./AppointmentList.css";
import Appointment from '../Appointment/Appointment'
import { FormDetails } from '../../App'

type AppsProps = {
    appointments: FormDetails[]
    setAppointments: (appointments: FormDetails[]) => void
}

function AppointmentList(props: AppsProps) {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://appointment-app-database.azurewebsites.net/api/Appointments');

        const items = await data.json();

        setApps(items);
    }


    return (
        <div className="container">
            <h1>Our Current Appointments</h1>
            <select className="customerlist" id="service" name="service">
                <option >All</option>
                <option >Customer 1</option>
                <option >Customer 2</option>
                <option >Customer 3</option>
                <option >Costumer 4</option>
            </select>
            <ul className="applists">
                {apps.map((item) => {
                    return <Appointment appointments={apps} setAppointments={props.setAppointments} appointment={item} />
                })}
            </ul>


        </div>
    )
}

export default AppointmentList;