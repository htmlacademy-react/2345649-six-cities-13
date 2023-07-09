import FavoritesPage from '../pages/favorites-page';
import LoginPage from '../pages/login-page';
import MainPage from '../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferPage from '../pages/offer-page';
import NotFound from '../pages/not-found';

type AppProps = {
  proposalsCount: number;
};

export default function App({
  proposalsCount: proposalsCount,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage proposalsCount={proposalsCount} />}
        >
        </Route>
        <Route
          path="/offer/:id"
          element={<OfferPage />}
        >
        </Route>
        <Route
          path="/login"
          element={<LoginPage />}
        >
        </Route>
        <Route
          path="/favorites"
          element={<FavoritesPage />}
        >
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
