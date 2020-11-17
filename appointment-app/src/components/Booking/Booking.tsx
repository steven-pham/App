import React, {useState} from 'react';
import './Booking.css';
import  {FormDetails} from '../../App'
import nextId from "react-id-generator";


type BookingProps = {
    name: string,
    setName: (name: string) => void
    email: string
    setEmail: (email:string) => void
    mobile: string
    setMobile: (mobile: string) => void
    service: string
    setService: (service: string) => void

    appointments:  FormDetails[]
    setAppointments: (appointments: FormDetails[]) => void
}




function Booking(props: BookingProps) {
    

    const inputNameHandler = (e: any) => {
        props.setName(e.target.value);
        //console.log(e.target.value);
    };

    const inputEmailHandler = (e: any) => {
        props.setEmail(e.target.value);
        //console.log(e.target.value);
    };

    const inputMobileHandler = (e: any) => {
        props.setMobile(e.target.value);
        //console.log(e.target.value);
    };

    const inputServiceHandler = (e: any) => {
        props.setService(e.target.value);
        //console.log(e.target.value);
    };


    const submitHandler = (e: any) => {
        e.preventDefault();
        props.setAppointments([
            ...props.appointments, new FormDetails(props.name, props.email, props.mobile, props.service, nextId())
        ]);
        props.setName("");
        props.setEmail("");
        props.setMobile("");
        props.setService("Style Cut ($20.00)");

        alert("You've booked your appointment! Click Appointent tab to view your appointment!");
    };

    return (
        <div className="container">
            <h1>Book Your Next Appointment</h1>
            <form>
                <label>Name</label>
                <input value={props.name} onChange={inputNameHandler} type="text" placeholder="Your name.." />

                <label>Email Address</label>
                <input value={props.email} onChange={inputEmailHandler} type="text" placeholder="Your email.." />

                <label>Mobile Number</label>
                <input value={props.mobile} onChange={inputMobileHandler} type="text"  placeholder="Your mobile number.." />

                <label>Select Service</label>
                <select className="ses" value={props.service} onChange={inputServiceHandler} >
                    <option>Style Cut       ($20.00)</option>
                    <option>Clipper Cut     ($30.00)</option>
                    <option>Skin Fade       ($30.00)</option>
                    <option>Buzz Cut        ($15.00)</option>
                    <option>Student Cut     ($15.00)</option>
                </select>
                <input onClick={submitHandler} type="submit" value="Submit" />
            </form>
        </div>

    );
}

export default Booking;