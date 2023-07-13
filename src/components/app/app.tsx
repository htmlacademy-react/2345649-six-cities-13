import FavoritesPage from '../pages/favorites-page';
import LoginPage from '../pages/login-page';
import MainPage from '../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferPage from '../pages/offer-page';
import NotFound from '../pages/not-found';
import PrivateRoute from '../private-route';
import { Offer } from '../../types/offer';
import { favorites } from '../../mocks/offer';
import { AppRoutes } from '../../const';

type AppProps = {
  proposalsCount: number;
  offers: Offer[];
};

export default function App({ proposalsCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<MainPage proposalsCount={proposalsCount} offers={offers} />}
        />
        <Route path={AppRoutes.Offer} element={<OfferPage />}></Route>
        <Route path={AppRoutes.Login} element={<LoginPage />}></Route>
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Any} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
