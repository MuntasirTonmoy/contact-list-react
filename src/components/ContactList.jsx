import React from "react";
import ContactCard from "./ContactCard";

const ContactList = props => {
  const renderList = props?.contacts.map(contact => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div>
      <h2 className="text-2xl py-3">Contact List</h2>
      <hr className="bg-black" />
      {renderList}
    </div>
  );
};

export default ContactList;
