import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

const addIncomeBtnTheme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

const styles = (theme) => ({
  paper: {
    width: theme.spacing(50),
    [theme.breakpoints.down('xs')]: { width: '75%' },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    margin: 'auto',
  },
  newIncomeBtn: {
    [theme.breakpoints.down('xs')]: { width: '100%' },
  },
});

class SetIncome extends Component {
  state = {
    open: false,
    income: 0,
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ amount: 0, open: false });

  handleChange = (event) => this.setState({ income: event.target.value });

  handleSetIncome = () => {
    this.props.setIncome(parseInt(this.state.income, 10));
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { open, income } = this.state;
    return (
      <Fragment>
        <MuiThemeProvider theme={addIncomeBtnTheme}>
          <Button
            variant='contained'
            className={classes.newIncomeBtn}
            color='secondary'
            onClick={this.handleOpen}
          >
            Set Income
          </Button>
        </MuiThemeProvider>
        <Modal
          aria-labelledby='Set Income Amount '
          aria-describedby="Set's the income amount"
          open={open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant='body1' id='modal-title'>
              Enter you total income.
            </Typography>

            <FormControl
              style={{
                display: 'block',
                marginTop: '10px',
                marginBottom: '20px',
              }}
            >
              <InputLabel htmlFor='adornment-amount'>Amount</InputLabel>
              <Input
                type='number'
                placeholder='Enter a number'
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
              />
            </FormControl>
            <MuiThemeProvider theme={addIncomeBtnTheme}>
              <Button
                disabled={income <= 0 ? true : false}
                fullWidth
                variant='contained'
                color='secondary'
                onClick={this.handleSetIncome}
              >
                Submit
              </Button>
            </MuiThemeProvider>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

SetIncome.propTypes = {
  classes: PropTypes.object.isRequired,
  setIncome: PropTypes.func.isRequired,
};

export default withStyles(styles)(SetIncome);
