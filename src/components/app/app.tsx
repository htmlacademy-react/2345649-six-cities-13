import MainPage from '../pages/main-page';

type AppProps = {
  proposalsCount: number;
};

export default function App({ proposalsCount: proposalsCount }: AppProps): JSX.Element {
  return <MainPage proposalsCount={proposalsCount}></MainPage>;
}
