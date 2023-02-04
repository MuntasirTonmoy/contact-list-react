import React from "react";
import { BsTrash } from "react-icons/bs";

const ContactCard = props => {
  const { id, name, phone, email } = props.contact;
  return (
    <div className="border-b pb-2 border-b-slate-500 flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <img src="/images/pngegg.png" alt="user" height="40" width="40" />
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

      <BsTrash
        className="text-2xl font-bold cursor-pointer"
        onClick={() => props.getId(id)}
      />
    </div>
  );
};

export default ContactCard;
