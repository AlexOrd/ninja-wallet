import { Box, makeStyles, Paper, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { AuthButton } from '../../../../authorization/components/common';
import { SettingsSubPart } from '../../common';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useSelector } from 'react-redux';
import { getSettingsPrivateFS } from '../../../../../selectors/settings';
import { settingsFetchStatusNames } from '../../../../../utils/settings/names';
import { isSuccessFetchStatus } from '../../../../../utils/fetch_statuses/aux_functions';

const { GETTING_VERIFICATION_CODE_FOR_BOT } = settingsFetchStatusNames;

export function TelegramBot({
  disconnectTelegramBotHandler,
  getVerifiedCodeForBotHandler,
  confirmCodeForBot,
  isConnectedBot,
}) {
  const styles = useStyles();
  const [isVisibleBotCredentials, setBotCredentialsVisibility] = React.useState(false);
  const [isCopiedConfCode, setCopiedConfCode] = React.useState(false);
  const [isCopiedCommand, setCopiedCommand] = React.useState(false);

  const getConformCodeForBotFS = useSelector(
    getSettingsPrivateFS(GETTING_VERIFICATION_CODE_FOR_BOT)
  );

  const onCopyConfirmCode = () => {
    setCopiedCommand(false);
    setCopiedConfCode(true);
    navigator.clipboard.writeText(confirmCodeForBot);
  };

  const onCopyCommand = () => {
    setCopiedConfCode(false);
    setCopiedCommand(true);
    navigator.clipboard.writeText(`/verify ${confirmCodeForBot}`);
  };

  React.useEffect(() => {
    if (isSuccessFetchStatus(getConformCodeForBotFS)) {
      setBotCredentialsVisibility(true);
    }
  }, [getConformCodeForBotFS]);

  return (
    <SettingsSubPart title="Telegram bot">
      {isConnectedBot ? (
        <AuthButton onClick={disconnectTelegramBotHandler} text="disconnect our bot" />
      ) : (
        <>
          {
            <AuthButton
              onClick={getVerifiedCodeForBotHandler}
              disabled={isVisibleBotCredentials}
              text="connect our bot"
            />
          }

          {isVisibleBotCredentials && (
            <>
              <Box className={styles.linkWrapper}>
                <Typography className={styles.linkExample}>Link to our bot</Typography>
                <a className={styles.link} target="blanc" href="https://t.me/test_login_chaky_bot">
                  @test_login_chaky_bot
                </a>
              </Box>
              <Box>
                <Typography className={styles.confirmCodeTitle}>
                  Confirm code with command:
                </Typography>
                <Tooltip title={isCopiedCommand ? 'copied' : 'copy'} placement="right" arrow={true}>
                  <Box onClick={onCopyCommand} className={styles.confirmCodeWrapper}>
                    {`/verify ${confirmCodeForBot}`}
                    <FileCopyIcon className={styles.copyIcon} fontSize="small" />
                  </Box>
                </Tooltip>
              </Box>
              <Box>
                <Typography className={styles.confirmCodeTitle}>Confirm code:</Typography>
                <Tooltip
                  title={isCopiedConfCode ? 'copied' : 'copy'}
                  placement="right"
                  arrow={true}
                >
                  <Box onClick={onCopyConfirmCode} className={styles.confirmCodeWrapper}>
                    {confirmCodeForBot}
                    <FileCopyIcon className={styles.copyIcon} fontSize="small" />
                  </Box>
                </Tooltip>
              </Box>
            </>
          )}
        </>
      )}
    </SettingsSubPart>
  );
}

function useStyles() {
  return makeStyles((theme) => {
    return {
      link: {
        color: '#90caf9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          fontWeight: 500,
        },
      },
      confirmCodeTitle: {
        marginBottom: '7px',
        fontWeight: 500,
      },

      linkWrapper: {
        marginTop: '15px',
        marginBottom: '35px',
      },
      linkExample: {
        fontSize: '19px',
      },
      confirmCodeWrapper: {
        display: 'inline-block',
        border: `1px solid ${theme.palette.divider}`,
        padding: '10px',
        paddingRight: '100px',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all .3 linear',
        position: 'relative',
        marginBottom: '5px',
        ['&:hover']: {
          backgroundColor: '#e8f5e9',
        },
      },
      copyIcon: {
        position: 'absolute',
        right: '5px',
      },
    };
  })();
}
