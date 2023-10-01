import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="text-gray-400 focus-within:text-gray-600 w-2/3"
    >
      <div className="flex flex-row justify-center items-start">
        <FiSearch className="w-7 h-7 text-black relative left-11 top-3" />

        <input
          placeholder="노래 검색"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" flex-1 bg-white rounded-full pl-[60px] text-lg text-gray-800 p-3 placeholder-slate-800 outline-none border-none"
        />
      </div>
    </form>
  );
};

export default Searchbar;
