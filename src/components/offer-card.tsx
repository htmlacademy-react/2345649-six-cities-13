import { AppRoutes } from '../const';
import { Offer } from '../types/offer';

type OfferCardProps = {
  offer: Offer;
  from: string;
  width: number;
  heigth: number;
  cardInfoClass: string;
};

type FavoritesOfferCardProps = Pick<OfferCardProps, 'offer'>;
type CitiesOfferCardProps = Pick<OfferCardProps, 'offer'>;


type RaitingProps = {
  rating: number;
}

function Rating({rating}: RaitingProps): JSX.Element {
  const ratingCeil = Math.round(rating);
  const width = ratingCeil * 20;
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${width}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default function OfferCard({ offer, from, width, heigth, cardInfoClass}: OfferCardProps): JSX.Element {
  const { isPremium, previewImage, price, title, type, rating } = offer;
  const offerLink = `${AppRoutes.Offer}${offer.id}`;
  return (
    <article className={`${from}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${from}__image-wrapper place-card__image-wrapper`}>
        <a href={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={heigth}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating rating={rating} />
        <h2 className="place-card__name">
          <a href={offerLink}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export function FavoritesOfferCard({offer}: FavoritesOfferCardProps) {
  return <OfferCard offer={offer} from='favorites' width={150} heigth={110} cardInfoClass='favorites__card-info'/>;
}

export function CitiesOfferCard({offer}: CitiesOfferCardProps) {
  return <OfferCard offer={offer} from='cities' width={260} heigth={200} cardInfoClass=''/>;
}
