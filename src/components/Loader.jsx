import { loading } from '../assets';

const Loader = () => (
  <div className="w-full flex justify-center items-center flex-col mt-24">
    <img src={loading} alt="loader" className="w-32 h-32 object-contain" />
  </div>
);

export default Loader;
