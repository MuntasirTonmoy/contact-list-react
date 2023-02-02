import React from "react";

const ContactCard = props => {
  const { name, phone, email } = props.contact;
  return (
    <div className="border-b pb-2 border-b-slate-500 flex items-center gap-3">
      <img src="/public/images/pngegg.png" alt="user" height="40" width="40" />
      <div>
        <h2 className="text-xl capitalize mb-1 mt-2">{name}</h2>
        <p>
          <a href={`tel:${phone}`} className="pointer text-slate-900">
            {phone}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${email}`}
            className="pointer text-slate-900 text-sm"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
