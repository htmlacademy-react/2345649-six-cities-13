import { useAppDispatch, useAppSelector } from '../hooks';
import { cityChange } from '../store/action';

type LocationsProps = {
  cities: string[];
};

export function Locations({ cities }: LocationsProps) {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li
            className="locations__item"
            key={city}
            onClick={() => dispatch(cityChange(city))}
          >
            <a
              className={`locations__item-link tabs__item ${
                city === activeCity ? 'tabs__item--active' : ''
              }`}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
