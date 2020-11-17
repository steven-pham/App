import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Nav from "./components/Navigation/Navigation";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import { stringify } from 'querystring';



export class FormDetails {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  service: string;

  constructor( name: string, email: string, mobile:string, service:string){
    this.name =name;
    this.email = email;
    this.mobile = mobile;
    this.service =service;
  }

}

function App() {

  

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [service,setService] = useState("");

  const [appointments, setAppointments] = useState<FormDetails[]>([]);


 /* useEffect(() => {
    getLocalAppointments();
  },[])

  useEffect(() => {
    saveLocalAppointments();
  }, [appointments])

  const saveLocalAppointments = () => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }

  const getLocalAppointments = () => {
    if (localStorage.getItem('appointments') === null) { //local Storage is used to allow websites to store data making it available in the future 
      //Storage.getItems('appointmentId') return the appointmentId's value 
      localStorage.setItem('appointments', JSON.stringify([]));
    } else {
      const appointmentsLocal = localStorage.getItem('appointments');
      console.log(appointmentsLocal);
    }
  }*/

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/booking" exact>
            <Booking
                name ={name}
                setName = {setName}
                email = {email}
                setEmail = {setEmail}
                mobile = {mobile}
                setMobile = {setMobile}
                service = {service}
                setService = {setService}

                appointments ={appointments}
                setAppointments = {setAppointments}
            />
          </Route>

          <Route path="/appointment" exact>
            <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
