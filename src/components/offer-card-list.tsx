import { Offer } from '../types/offer';
import OfferCard from './offer-card';

type OfferCardListProps = {
  offers: Offer[];
};

export default function OfferCardList({ offers }: OfferCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}
