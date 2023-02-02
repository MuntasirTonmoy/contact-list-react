import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = newContact => {
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = id => {
    const remainingContacts = contacts?.filter(contact => contact.id !== id);
    setContacts(remainingContacts);
  };

  useEffect(() => {
    const retrivedContact = JSON.parse(localStorage.getItem("contacts"));
    if (retrivedContact) setContacts(retrivedContact);
  }, []);

  useEffect(() => {
    if (contacts.length === 0) return;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container mx-auto bg-slate-300 min-h-screen">
      <Header />
      <section className="w-[90%] mx-auto">
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getId={removeContactHandler} />
      </section>
    </div>
  );
}

export default App;
