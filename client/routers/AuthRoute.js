import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthorizationStatus } from '../selectors/auth';

export const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getAuthorizationStatus);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
