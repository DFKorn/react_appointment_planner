import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  const {contacts, addContact} = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
    addContact(name, phone, email)
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    const isDuplicate = () => {
      const found = contacts.find(contact => contact.name === name);
      if (found) {
        return true;
      }
      return false;
    };

    if (isDuplicate()){
      setDuplicate(true);
    } else {
      setDuplicate(false)
    }

  },[name, contacts, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact
          {duplicate ? ' - This name already exist' : ''}
        </h2> 
        <ContactForm name = {name}
                     phone = {phone}
                     email = {email}
                     setName = {setName}
                     setPhone = {setPhone}
                     setEmail = {setEmail}
                     handleSubmit = {handleSubmit}
                      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles = {contacts}/>
      </section>
    </div>
  );
};
