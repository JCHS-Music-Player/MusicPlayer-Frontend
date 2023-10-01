import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/api';

const Search = () => {
  const { query } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsBySearchQuery(query);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
