import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { Offer } from '../../types/offer';
import { FavoritesOfferCard } from '../offer-card';
import HeaderWithProfile from '../header';

type FavoritesPageProps = {
  offers: Offer[];
};

export default function FavoritesPage({
  offers,
}: FavoritesPageProps): JSX.Element {
  const cities = offers.reduce<string[]>(
    (acc, item) =>
      acc.includes(item.city.name) ? acc : [...acc, item.city.name],
    []
  );

  return (
    <div className="page">
      <HeaderWithProfile />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers
                      .filter((item) => item.city.name === city)
                      .map((offer) => (
                        <FavoritesOfferCard offer={offer} key={offer.id} />
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoutes.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}
