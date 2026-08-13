import React from "react";
import { IoMdSearch } from "react-icons/io";

const Searchbar = ({ text, handleChange, handleSearch }) => {
  return (
    // เปลี่ยน div เป็น form และใส่ onSubmit
    <form
      onSubmit={handleSearch}
      className="flex item-center justify-center gap-2 p-2"
    >
      <label className="text-black text-2xl">Favorite Pokemon</label>
      <input
        type="text"
        placeholder="Write some favorite Pokemon"
        value={text} // ผูก value เพื่อทำ Controlled Input
        onChange={handleChange}
        className="border bg-white w-full max-w-sm rounded-md p-2 text-black "
      />
      <button
        type="submit"
        className="bg-black rounded-sm p-3 text-white cursor-pointer hover:bg-gray-200"
      >
        <IoMdSearch size={20} />
      </button>
    </form>
  );
};

export default Searchbar;
