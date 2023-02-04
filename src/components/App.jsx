import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

const App = () => {
  // if any contacts array in local storage then contacts value will be it else an empty array
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );

  const addContactHandler = newContact => {
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = id => {
    const remainingContacts = contacts?.filter(contact => contact.id !== id);
    setContacts(remainingContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container mx-auto bg-slate-300 min-h-screen">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} getId={removeContactHandler} />
          }
        ></Route>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
