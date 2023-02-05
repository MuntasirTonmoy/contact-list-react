import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { BsFillPersonPlusFill } from "react-icons/bs";

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
      <Link to="/add">
        <button className="p-3 w-full bg-blue-500 font-semibold text-slate-200 flex items-center justify-center gap-2">
          <BsFillPersonPlusFill className="font-bold text-xl" />
          Add Contact
        </button>
      </Link>
      <div className="mt-1">{renderList}</div>
    </>
  );
};

export default ContactList;
