import ReactDOM from 'react-dom/client';
import App from './components/app';
import { PROPOSALS } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App proposals={PROPOSALS} />);
