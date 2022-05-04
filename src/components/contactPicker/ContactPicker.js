import React from "react";


export const ContactPicker = ({name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="" key={-1}>
        Please choose a contact
      </option>
      {contacts.map((contact) => {
         return (
          <option value={contact} key={contact.name}>
           {contact.name}
          </option>
          );
      })}
    </select>
  );
};
