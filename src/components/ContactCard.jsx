import React from "react";

const ContactCard = props => {
  const { name, phone, email } = props.contact;
  return (
    <div className="border-b pb-2 border-b-slate-500">
      <h2 className="text-xl capitalize mb-1 mt-2">{name}</h2>
      <p>
        <a href={`tel:${phone}`} className="pointer text-slate-900">
          {phone}
        </a>
      </p>
      <p>
        <a href={`mailto:${email}`} className="pointer text-slate-900">
          {email}
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
