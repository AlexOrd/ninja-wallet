import React from 'react';
import { useSelector } from 'react-redux';
import { SuccessSnackbar, LoadingSnackbar, ErrorSnackbar } from './components';
import {
  getFetchError,
  getAllPrivateFetchStatuses,
  getCommonFetchStatus,
} from '../../../selectors/common';

export function FetchStatusSnackBars({ reducerName }) {
  const fetchError = useSelector(getFetchError);
  const fetchStatus = useSelector(getCommonFetchStatus);
  const allFetchStatuses = useSelector(getAllPrivateFetchStatuses);

  return (
    <div>
      <SuccessSnackbar {...{ allFetchStatuses, reducerName }} />
      <LoadingSnackbar {...{ fetchStatus }} />
      <ErrorSnackbar {...{ fetchError }} />
    </div>
  );
}
