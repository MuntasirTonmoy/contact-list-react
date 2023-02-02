import React, { useState } from "react";

const AddContact = props => {
  const { addContactHandler } = props;
  const createContact = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
  };
  return (
    <div className="my-4 border border-slate-800  rounded">
      <h2 className="text-2xl text-center text-slate-200 p-3 bg-slate-500">
        Add Contact
      </h2>
      <form className="p-3" onSubmit={createContact}>
        <label htmlFor="name">Name</label>
        <input
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
  );
};

export default AddContact;
