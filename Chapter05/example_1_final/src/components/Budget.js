import {
  Grid,
  IconButton,
  LinearProgress,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';
import React from 'react';

const styles = (theme) => ({
  root: { [theme.breakpoints.down('xs')]: { fontSize: '1rem' } },
  span: { paddingRight: '20px' },
  primary: {
    fontSize: '1.3125rem',
    [theme.breakpoints.down('xs')]: { fontSize: '1rem' },
  },
});

const Budget = ({
  classes,
  categoryName,
  totalBudget,
  setAmtSpent,
  amtSpent,
  deleteBudget,
  id,
}) => {
  const addExpense = () => {
    return amtSpent + 5 <= totalBudget ? setAmtSpent(id, 'add') : null;
  };

  const subtractExpense = () => {
    return amtSpent - 5 >= 0 ? setAmtSpent(id, 'subtract') : null;
  };

  const handleDeleteBudget = () => deleteBudget(id, totalBudget);

  // This method transforms a value in any range to a scale of 0 - 100:
  const normalize = (value) => ((value - 0) * 100) / (totalBudget - 0);

  return (
    <ListItem style={{ paddingRight: 0, paddingLeft: 0 }} divider>
      <Grid alignItems='center' container>
        <Grid item xs={1}>
          <DeleteForeverTwoToneIcon
            aria-label='trash can'
            onClick={handleDeleteBudget}
            className={classes.icon}
          />
        </Grid>
        <Grid item xs={3}>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary={categoryName}
          />
        </Grid>

        <Grid style={{ textAlign: 'right' }} item xs={8}>
          <Typography classes={{ root: classes.root }} variant='h6'>
            <IconButton aria-label='ArrowLeft' onClick={subtractExpense}>
              <ArrowLeft />
            </IconButton>
            ${amtSpent}
            <IconButton aria-label='ArrowRight' onClick={addExpense}>
              <ArrowRight />
            </IconButton>
            <span className={classes.span}>of</span>${totalBudget}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <LinearProgress
            style={{ width: '100%', height: '10px', background: 'green' }}
            color='secondary'
            variant='determinate'
            value={normalize(amtSpent)}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

Budget.propTypes = {
  classes: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  totalBudget: PropTypes.number.isRequired,
  setAmtSpent: PropTypes.func,
  amtSpent: PropTypes.number.isRequired,
  deleteBudget: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(Budget);
