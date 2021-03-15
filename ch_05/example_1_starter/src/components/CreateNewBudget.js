import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Select,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import categories from '../data/categories';

const styles = (theme) => ({
  paper: {
    width: theme.spacing.unit * 50,
    [theme.breakpoints.down('xs')]: { width: '75%' },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    margin: 'auto',
  },
  newBudgetBtn: {
    [theme.breakpoints.down('xs')]: { width: '100%' },
  },
});

class CreateNewBudget extends Component {
  state = {
    open: false,
    category: '',
    amount: 0,
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ category: '', amount: 0, open: false });

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddNewBudget = () => {
    const { category } = this.state;
    const amount = Math.ceil(parseInt(this.state.amount, 10) / 5) * 5;
    const id = uuidv4();
    this.props.addNewBudget({ id, category, amount, amtSpent: 0 });
    this.props.setTotalSpending(amount);
    this.handleClose();
  };

  renderBudgetOptions() {
    return categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  }

  render() {
    const { classes } = this.props;
    const { open, category, amount } = this.state;
    return (
      <Fragment>
        <Button
          variant='contained'
          className={classes.newBudgetBtn}
          color='primary'
          onClick={this.handleOpen}
        >
          Create New Budget
        </Button>
        <Modal
          aria-labelledby='Create New Budget'
          aria-describedby="Create's a new budget"
          open={open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant='body1' id='modal-title'>
              Select a category and enter a budget amount.
            </Typography>

            <FormControl
              style={{
                width: '181px',
                marginTop: '10px',
                marginBottom: '20px',
              }}
            >
              <InputLabel htmlFor='category-native-simple'>Category</InputLabel>
              <Select
                native
                value={category}
                onChange={this.handleChange}
                inputProps={{
                  name: 'category',
                  id: 'category-native-simple',
                }}
              >
                <option value='' />
                {this.renderBudgetOptions()}
              </Select>
            </FormControl>

            <FormControl style={{ display: 'block', marginBottom: '20px' }}>
              <InputLabel htmlFor='adornment-amount'>Amount</InputLabel>
              <Input
                type='number'
                inputProps={{
                  name: 'amount',
                  id: 'amount-native-simple',
                }}
                placeholder='Enter a number'
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
              />
              <Typography color='error' variant='body1'>
                * Budgets must be in increments of 5. {<br />}* Amounts less
                than 5 will default to $5.
              </Typography>
            </FormControl>
            <Button
              disabled={amount && category ? false : true}
              fullWidth
              variant='contained'
              color='secondary'
              onClick={this.handleAddNewBudget}
            >
              Add Budget
            </Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

CreateNewBudget.propTypes = {
  classes: PropTypes.object.isRequired,
  addNewBudget: PropTypes.func,
  setTotalSpending: PropTypes.func,
};

export default withStyles(styles)(CreateNewBudget);
