import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle size={45} className="text-[#23df65]" onClick={handlePause} />
) : (
  <FaPlayCircle size={45} className="text-[#23df65]" onClick={handlePlay} />
));

export default PlayPause;
