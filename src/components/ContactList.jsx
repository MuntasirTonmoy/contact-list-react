import React from "react";
import ContactCard from "./ContactCard";

const ContactList = props => {
  // destructuring
  const contacts = props.contacts;

  const renderList = contacts?.map((contact, index) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div>
      <h2 className="text-2xl py-3 border-b border-b-slate-500">
        Contact List
      </h2>
      {renderList}
    </div>
  );
};

export default ContactList;
