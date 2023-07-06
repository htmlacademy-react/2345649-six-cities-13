import MainPage from './main-page';

type AppProps = {
  proposals: number;
};

export default function App({ proposals }: AppProps): JSX.Element {
  return <MainPage proposals={proposals}></MainPage>;
}
