import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('Integration: Budget App', () => {
  function setOneDollarIncome() {
    user.click(screen.getByText(/set income/i));
    user.type(screen.getByRole('spinbutton'), '1');
    user.click(screen.getByText(/submit/i));
  }

  function createCarBudget(amount = '5') {
    user.click(screen.getByText(/create new budget/i));
    user.selectOptions(screen.getByRole('combobox', { name: /category/i }), [
      screen.getByText('Auto'),
    ]);
    user.type(screen.getByRole('spinbutton'), amount);
    user.click(screen.getByText(/add budget/i));
  }

  test('SetIncome, given income amount, sets income', () => {
    render(<App />);

    setOneDollarIncome();
    const leftOverBudget = screen.getByText(/left over:/i);
    const leftOverBudgetAmount = within(leftOverBudget).getByText(/\$1/i);

    expect(leftOverBudgetAmount).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /income: \$1/i })
    ).toBeInTheDocument();
  });

  describe('CreateNewBudget', () => {
    test.each`
      budgetAmount | spending           | leftOver
      ${'4'}       | ${'Spending: $5'}  | ${'$-4'}
      ${'5'}       | ${'Spending: $5'}  | ${'$-4'}
      ${'6'}       | ${'Spending: $10'} | ${'$-9'}
    `(
      'given budget, updates budget summary',
      ({ budgetAmount, spending, leftOver }) => {
        render(<App />);
        setOneDollarIncome();

        createCarBudget(budgetAmount);
        const leftOverBudget = screen.getByText(/left over:/i);
        const leftOverBudgetAmount = within(leftOverBudget).getByText(leftOver);

        expect(leftOverBudgetAmount).toBeInTheDocument();
        expect(
          screen.getByRole('heading', { name: spending })
        ).toBeInTheDocument();
      }
    );
    test('given budget, displays budget chart', () => {
      render(<App />);
      setOneDollarIncome();
      createCarBudget();

      expect(screen.getByTestId('chart')).toBeInTheDocument();
    });
  });
  describe('Budget', () => {
    test('given budget, displays details', () => {
      render(<App />);
      setOneDollarIncome();
      createCarBudget();

      const budgetList = screen.getByRole('listitem');

      expect(within(budgetList).getByText(/auto/i)).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /\$0 of \$5/i })
      ).toBeInTheDocument();
    });

    test('given budget expense, updates budget progress', () => {
      render(<App />);
      setOneDollarIncome();
      createCarBudget();

      user.click(screen.getByRole('button', { name: /arrowright/i }));

      expect(
        screen.getByRole('heading', { name: /\$5 of \$5/i })
      ).toBeInTheDocument();
    });
  });

  test('DeleteBudget, given deleted budget, budget removed from DOM', () => {
    render(<App />);
    setOneDollarIncome();
    createCarBudget();

    user.click(screen.getByLabelText(/trash can/i));

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});

it('SetIncome, given initial render, displays budget summary values', () => {
  render(<App />);

  const income = screen.getByRole('heading', { name: /income: \$0/i });
  const spending = screen.getByRole('heading', { name: /spending: \$0/i });
  const leftover = screen.getByText(/left over:/i);

  expect(income).toHaveTextContent('Income: $0');
  expect(spending).toHaveTextContent('Spending: $0');
  expect(leftover).toHaveTextContent('$0');
});
