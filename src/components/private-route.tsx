import {Navigate} from 'react-router-dom';
import { AppRoutes } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={AppRoutes.Login} />;
}
