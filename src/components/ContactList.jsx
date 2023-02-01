import React from "react";

const ContactList = props => {
  const renderList = props?.contacts.map(contact => {
    return <div className="">{contact.name}</div>;
  });
  return <div>{renderList}</div>;
};

export default ContactList;
