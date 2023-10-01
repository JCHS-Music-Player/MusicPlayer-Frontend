import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className="hidden sm:block h-16 w-16 mr-4">
      <img src={activeSong?.images?.coverart} alt="cover art" />
    </div>
    <div className="w-[80%] sm:w[30%]">
      <Link to={`/songs/${activeSong?.key}`}>
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </p>
      </Link>

      <Link to={`/artist/${activeSong?.artists[0]?.adamid}`}>
        <p className="truncate text-gray-300 hover:underline">
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </Link>
    </div>
  </div>
);

export default Track;
