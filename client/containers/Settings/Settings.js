import { Box, makeStyles, Snackbar } from '@material-ui/core';
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { EmailSettings, AccountSecurity, LoggedDevices } from './components';
import { FetchStatusSnackBars } from '../../components/common/fetch_status_snackbars/FetchStatusSnackBars';
import { receiveAccountSettings } from '../../actions/settings';
import { useDispatch } from 'react-redux';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const styles = useStyles();

  return (
    <div
      className={styles.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function SettingsPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  React.useEffect(() => {
    dispatch(receiveAccountSettings);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.tabsWrapper}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            classes={{ root: classes.tab }}
            className={classes.tab}
            label="Account security"
            {...a11yProps(0)}
          />
          <Tab className={classes.tab} label="Email" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Logged devices" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <AccountSecurity />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmailSettings />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LoggedDevices />
        </TabPanel>
      </div>
      <FetchStatusSnackBars reducerName="settings" />
    </div>
  );
}

function useStyles() {
  return makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
    },

    tabsWrapper: {
      width: '80%',
      display: 'flex',
      paddingTop: '50px',
      paddingBottom: '50px',
    },

    tabs: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '8px',
      width: '300px',
    },

    tab: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingRight: '25px',
      paddingLeft: '25px',
    },

    tabPanel: {
      width: '100%',
    },
  }))();
}

export default SettingsPage;
