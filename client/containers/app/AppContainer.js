import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Import custom components
import MainRouter from '../../routers/routes';
import { StyledAppContainer } from '../../components/common/styled/app-wrapper';
import { Hidden } from '@material-ui/core';
import DesktopHeader from '../../components/common/header/desktop-header';
import MobileHeader from '../../components/common/header/mobile-header';
import { StyledMain } from '../../components/common/styled/main';
import { checkAuth } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../selectors/auth';

function AppContainer() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(getAuthorizationStatus);
  React.useEffect(() => {
    dispatch(checkAuth);
  }, []);

  return (
    <StyledAppContainer maxWidth={false}>
      <Hidden xsDown>
        <DesktopHeader />
      </Hidden>

      <StyledMain>
        <MainRouter />
      </StyledMain>

      <Hidden smUp>
        <MobileHeader />
      </Hidden>
    </StyledAppContainer>
  );
}

// class AppContainer extends Component {
//   render() {
//     return (
//       <StyledAppContainer maxWidth={false}>
//         <Hidden xsDown>
//           <DesktopHeader />
//         </Hidden>

//         <StyledMain>
//           <MainRouter />
//         </StyledMain>

//         <Hidden smUp>
//           <MobileHeader />
//         </Hidden>
//       </StyledAppContainer>
//     );
//   }
// }

export default hot(module)(AppContainer);
