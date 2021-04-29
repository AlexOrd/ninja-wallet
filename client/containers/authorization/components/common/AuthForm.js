import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';

export function AuthForm({ initialValues, validate, children, submitHandler, ...rest }) {
  const styles = useStyles();
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      <Form className={styles.form} {...rest}>
        {children}
      </Form>
    </Formik>
  );
}

function useStyles() {
  return makeStyles({
    form: {
      display: 'flex',
      width: '350px',
      flexDirection: 'column',
    },
  })();
}
