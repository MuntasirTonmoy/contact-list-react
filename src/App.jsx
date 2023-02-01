import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const contacts = [
    {
      id: 1,
      name: "muntasir",
      phone: 880111111111,
      email: "muntasir@email.com",
    },
    {
      id: 2,
      name: "jack",
      phone: 880111551111,
      email: "jack@email.com",
    },
  ];
  return (
    <div className="container mx-auto bg-slate-300 min-h-screen">
      <Header />
      <section className="w-[90%] mx-auto">
        <AddContact />
        <ContactList contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
