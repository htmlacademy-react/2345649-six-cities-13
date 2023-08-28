import { Map } from '../map/map';
import HeaderNav from '../header-nav';
import { OfferCardList } from '../offer-card-list';
import { Locations } from '../locations';
import { cities } from '../../const';
import { useAppSelector } from '../../hooks';

export default function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const currentCity = offers.find((o) => o.city.name === city)?.city;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList offers={currentOffers} city={city}/>
            <div className="cities__right-section">
              <Map
                city={currentCity?.location}
                points={currentOffers.map((o) => o.location)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
