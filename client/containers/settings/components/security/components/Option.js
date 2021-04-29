import React from 'react';
import { commonFetchStatuses } from '../../../../../utils/auth/constants';
import { FormControlLabel, makeStyles, Switch } from '@material-ui/core';
import { isSuccessFetchStatus } from '../../../../../utils/fetch_statuses/aux_functions';
const { LOADING } = commonFetchStatuses;

export function SettingOption({
  initialValue,
  handler,
  privateFetchStatuses,
  commonFetchStatus,
  label,
}) {
  const [isChecked, setChecked] = React.useState(true);
  const { statusOn, statusOff } = privateFetchStatuses;

  const isDisabled = commonFetchStatus === LOADING;
  const toggleHandle = () => handler(!isChecked)();

  React.useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    if (isSuccessFetchStatus(statusOn) || isSuccessFetchStatus(statusOff)) {
      setChecked((prevState) => {
        return !prevState;
      });
    }
  }, [privateFetchStatuses]);

  return (
    <FormControlLabel
      control={
        <Switch disabled={isDisabled} size="normal" checked={isChecked} onChange={toggleHandle} />
      }
      label={label}
    />
  );
}
