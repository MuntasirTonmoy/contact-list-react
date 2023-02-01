import React from "react";

const ContactList = props => {
  const renderList = props?.contacts.map(contact => {
    return (
      <div className="" key={contact.id}>
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    );
  });
  return <div>{renderList}</div>;
};

export default ContactList;
