import LoginPage from './login-page';
import MainPage from './main-page';
import OfferPage from './offer-page';

type AppProps = {
  proposals: number;
}

export default function App({proposals}: AppProps) {
  return <OfferPage proposals={proposals}></OfferPage>;
}
