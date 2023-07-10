import FavoritesPage from '../pages/favorites-page';
import LoginPage from '../pages/login-page';
import MainPage from '../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferPage from '../pages/offer-page';
import NotFound from '../pages/not-found';
import PrivateRoute from '../private-route';
import { Offer } from '../../types/offer';

type AppProps = {
  proposalsCount: number;
  offers: Offer[];
};

export default function App({ proposalsCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage proposalsCount={proposalsCount} offers={offers} />}
        />
        <Route path="/offer/:id" element={<OfferPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
