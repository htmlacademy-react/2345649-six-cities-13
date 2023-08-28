import { Offer } from '../../types/offer';
import { Map } from '../map/map';
import HeaderNav from '../header-nav';
import { OfferCardList } from '../offer-card-list';
import { Locations } from '../locations';
import { cities } from '../../const';

type MainPageProps = {
  offers: Offer[];
};

export default function MainPage({ offers }: MainPageProps): JSX.Element {

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
          <Locations cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList/>
            <div className="cities__right-section">
              <Map
                city={offers[0].city.location}
                points={offers.map((o) => o.location)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
