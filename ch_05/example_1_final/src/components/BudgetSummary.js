import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const styles = {
  card: { textAlign: 'center' },
  leftoverText: { fontWeight: 'bold' },
  debt: { color: '#f44336' },
  profit: { color: '#4caf50' },
  neutral: { color: '#9E9E9E' },
};

const BudgetSummary = ({ classes, income, spending, leftover }) => {
  const getLeftOverClass = () => {
    if (leftover > 0) {
      return classes.profit;
    } else if (leftover === 0) {
      return classes.neutral;
    }
    return classes.debt;
  };

  return (
    <Fragment>
      <Card className={classes.card} raised={true}>
        <CardContent>
          <Typography variant='h6'>You've budgeted...</Typography>
          <Typography variant='subtitle1'>Income: ${income}</Typography>
          <Typography variant='subtitle1'>
            Spending: <span className={classes.debt}>${spending}</span>
          </Typography>
          <hr />
          <Typography className={classes.leftoverText}>
            Left over: <span className={getLeftOverClass()}>${leftover}</span>
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

BudgetSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  income: PropTypes.number.isRequired,
  spending: PropTypes.number.isRequired,
  leftover: PropTypes.number.isRequired,
};

export default withStyles(styles)(BudgetSummary);
