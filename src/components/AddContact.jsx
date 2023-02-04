import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

const AddContact = props => {
  const navigate = useNavigate();
  const { addContactHandler } = props;
  const createContact = e => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    if (!name || !phone || !email) return;

    const newContact = {
      id,
      name,
      phone,
      email,
    };
    // clear form field
    // addContactHandler(newContact);
    e.target.reset();
    navigate("/");
  };
  return (
    <>
      <button className="p-2  mb-4  bg-red-300 w-full  font-semibold flex items-center justify-center gap-1">
        <BiLeftArrowAlt className="text-xl" />
        <Link to="/">Back</Link>
      </button>
      <div className="mb-8 mx-4 border border-slate-800  rounded">
        <h2 className="text-2xl text-center text-slate-200 p-3 bg-slate-500">
          Add Contact
        </h2>
        <form className="p-3" onSubmit={createContact}>
          <label htmlFor="name">Name</label>
          <input
            autoFocus
            id="name"
            name="name"
            type="text"
            className="block w-full p-1 my-1.5 focus:border focus:border-slate-400 rounded"
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="block w-full p-1 my-1.5 focus:border focus:border-slate-400 rounded"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full p-1 my-1.5 focus:border focus:border-slate-400 rounded"
          />
          <button className="p-2 mt-3  w-full bg-blue-500 font-semibold rounded text-slate-200">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
