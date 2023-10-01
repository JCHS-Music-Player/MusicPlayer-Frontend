import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/api';

const ArtistDetail = () => {
  const { id } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(id);

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={id}
        artistData={artistData}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetail;
