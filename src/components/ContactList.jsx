import React from "react";

const ContactList = props => {
  const renderList = props?.contacts.map(contact => {
    return (
      <div className="border-b pb-2 border-b-slate-500" key={contact.id}>
        <h2 className="text-xl capitalize mb-1 mt-2">{contact.name}</h2>
        <p>
          <a href={`tel:${contact.phone}`} className="pointer text-slate-900">
            {contact.phone}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${contact.email}`}
            className="pointer text-slate-900"
          >
            {contact.email}
          </a>
        </p>
      </div>
    );
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
