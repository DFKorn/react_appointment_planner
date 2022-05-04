import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
             name="title"
             type='text'
             value={title} 
             onChange={(e) => setTitle(e.target.value)} 
             required
             placeholder="Appointment Title"
      />
      
      <ContactPicker 
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With" 
      />

      <input 
             name="date"
             type='date'
             min={getTodayString()}
             value={date} 
             onChange={(e) => setDate(e.target.value)} 
             required
             />
             
      <input 
             name="time"
             type='time'
             value={time} 
             onChange={(e) => setTime(e.target.value)} 
             required
             />

      <input type='submit' value='Add Appointment' />
    </form>
  );
};
