import React from 'react';
import clsx from 'clsx';
import { ColorlibConnector } from './components';
import { makeStyles, Step, StepLabel, Stepper, Tooltip } from '@material-ui/core';

export const AuthStepper = ({ steps, activeStep, icons }) => {
  const styles = useStyles();

  function ColorlibStepIcon(props) {
    const { active, completed } = props;

    return (
      <div
        className={clsx(styles.root, {
          [styles.active]: active,
          [styles.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <Stepper
      classes={{ root: styles.stepperRoot }}
      className={styles.stepper}
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <Tooltip title={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} />
          </Tooltip>
        </Step>
      ))}
    </Stepper>
  );
};

function useStyles() {
  return makeStyles(() => {
    return {
      root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      active: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },

      completed: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      },

      stepper: {
        position: 'absolute',
        bottom: '140px',
        left: '50%',
        width: '80%',
        transform: 'translateX(-50%)',
      },

      stepperRoot: {
        height: '50px',
        padding: 0,
        backgroundColor: 'transparent',
      },
    };
  })();
}
