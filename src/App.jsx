import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto bg-slate-300 min-h-screen">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
