import React from "react";

const AddContact = () => {
  return (
    <div className="my-4 border border-slate-800  rounded">
      <h2 className="text-2xl text-center text-slate-200 p-3 bg-slate-500">
        Add Contact
      </h2>
      <form className="p-3">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="block w-full p-1 my-1.5 focus:border focus:border-slate-400 rounded"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          className="block w-full p-1 my-1.5 focus:border focus:border-slate-400 rounded"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
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
