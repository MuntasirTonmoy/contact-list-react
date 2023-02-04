import React from "react";
import ContactCard from "./ContactCard";

const ContactList = props => {
  // destructuring
  const contacts = props.contacts;
  const renderList = contacts?.map((contact, index) => {
    return (
      <ContactCard contact={contact} key={contact.id} getId={props.getId} />
    );
  });
  return <div className="mt-1">{renderList}</div>;
};

export default ContactList;
