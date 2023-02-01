import React from "react";

const ContactCard = props => {
  return (
    <div className="border-b pb-2 border-b-slate-500">
      <h2 className="text-xl capitalize mb-1 mt-2">{props.contact.name}</h2>
      <p>
        <a
          href={`tel:${props.contact.phone}`}
          className="pointer text-slate-900"
        >
          {props.contact.phone}
        </a>
      </p>
      <p>
        <a
          href={`mailto:${props.contact.email}`}
          className="pointer text-slate-900"
        >
          {props.contact.email}
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
