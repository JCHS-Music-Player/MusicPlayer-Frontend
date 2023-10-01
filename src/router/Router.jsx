import { Navigate, Route, Routes } from 'react-router-dom';

import { ArtistDetail, Search, TopCharts } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<TopCharts />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/artist/:id" element={<ArtistDetail />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Router;
