import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = props => {
  // destructuring
  const contacts = props.contacts;
  const renderList = contacts?.map((contact, index) => {
    return (
      <ContactCard contact={contact} key={contact.id} getId={props.getId} />
    );
  });
  return (
    <>
      <button className="p-3 w-full bg-blue-500 font-semibold text-slate-200">
        <Link to="/add">Add Contact</Link>
      </button>
      <div className="mt-1">{renderList}</div>
    </>
  );
};

export default ContactList;
