import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BudgetList from './BudgetList';
import BudgetSummary from './BudgetSummary';
import Chart from './Chart';
import CreateNewBudget from './CreateNewBudget';
import SetIncome from './SetIncome';

const styles = (theme) => ({
  layout: { [theme.breakpoints.up('sm')]: { margin: 'auto' } },
  chart: { [theme.breakpoints.down('xs')]: { display: 'none' } },
});
class App extends Component {
  state = {
    income: 0,
    spending: 0,
    budgets: [],
  };

  setTotalSpending = (newBudgetTotal) => {
    this.setState(({ spending }) => ({ spending: spending + newBudgetTotal }));
  };

  setIncome = (income) => this.setState({ income });

  addNewBudget = (newBudget) => {
    this.setState(({ budgets }) => ({ budgets: [...budgets, newBudget] }));
  };

  deleteBudget = (id, budgetTotal) => {
    this.setState(({ budgets, spending }) => ({
      budgets: budgets.filter((budget) => budget.id !== id),
      spending: spending - budgetTotal,
    }));
  };

  setAmtSpent = (id, expenseAction) => {
    if (expenseAction === 'add') {
      this.setState(({ budgets }) => ({
        budgets: budgets.map((budget) =>
          budget.id === id
            ? { ...budget, amtSpent: budget.amtSpent + 5 }
            : budget
        ),
      }));
    } else {
      this.setState(({ budgets }) => ({
        budgets: budgets.map((budget) =>
          budget.id === id
            ? { ...budget, amtSpent: budget.amtSpent - 5 }
            : budget
        ),
      }));
    }
  };

  render() {
    const { income, spending, budgets } = this.state;
    const { classes } = this.props;
    return (
      <Grid
        className={classes.layout}
        style={{ textAlign: 'center', maxWidth: '600px' }}
        container
        spacing={24}
      >
        <Grid item xs={12}>
          <AccountBalanceIcon style={{ fontSize: '8rem' }} />
        </Grid>

        <Grid item xs={12}>
          <BudgetSummary
            income={income}
            spending={spending}
            leftover={income - spending}
          />
        </Grid>

        <Grid item xs={12} className={classes.chart}>
          <Chart data={budgets} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SetIncome setIncome={this.setIncome} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CreateNewBudget
            setTotalSpending={this.setTotalSpending}
            addNewBudget={this.addNewBudget}
          />
        </Grid>

        <Grid item xs={12}>
          <BudgetList
            deleteBudget={this.deleteBudget}
            setAmtSpent={this.setAmtSpent}
            budgets={budgets}
          />
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
