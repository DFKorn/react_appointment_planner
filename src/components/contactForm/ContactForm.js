import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      
      <input 
             type="text"
             name="name"
             value={name}
             onChange = {(e) => setName(e.target.value)}
             placeholder="Contact Name"
             required
      />
      
      
      <input 
             type="tel"
             name="phone"
             value={phone}
             onChange = {(e) => setPhone(e.target.value)}
             placeholder="Contact Phone (min 10 digits)"
             pattern='^(\+)?([0-9]){10,16}$'
             required
             
            
      />
      
      <input 
             type="email"
             name="email"
             value={email}
             onChange = {(e) => setEmail(e.target.value)}
             placeholder="Contact Email"
             required
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
