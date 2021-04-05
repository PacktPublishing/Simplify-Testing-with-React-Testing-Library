import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Budget from './Budget';

const BudgetList = ({ budgets, setAmtSpent, deleteBudget }) => {
  return (
    <List>
      {budgets.map(budget => (
        <Budget
          key={budget.id}
          categoryName={budget.category}
          totalBudget={budget.amount}
          setAmtSpent={setAmtSpent}
          amtSpent={budget.amtSpent}
          deleteBudget={deleteBudget}
          id={budget.id}
        />
      ))}
    </List>
  );
};

BudgetList.propTypes = {
  budgets: PropTypes.array.isRequired,
  setAmtSpent: PropTypes.func,
  deleteBudget: PropTypes.func,
};

export default BudgetList;
