import { useAppSelector } from '../hooks';
import { Offer } from '../types/offer';
import { CitiesOfferCard, NearOfferCard } from './offer-card';
import { SortFilter } from './pages/sort-filter';

type OfferCardListProps = {
  offers: Offer[];
};

export function OfferCardList() {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {currentOffers.length} places to stay in {city}
      </b>
      <SortFilter />
      <div className="cities__places-list places__list tabs__content">
        {currentOffers.map((offer) => (
          <CitiesOfferCard offer={offer} key={offer.id} />
        ))}
      </div>
    </section>
  );
}

export function NearOfferCardList({ offers }: OfferCardListProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((o) => (
          <NearOfferCard offer={o} key={o.id} />
        ))}
      </div>
    </section>
  );
}
