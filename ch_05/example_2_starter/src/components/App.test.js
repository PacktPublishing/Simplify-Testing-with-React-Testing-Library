import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('Integration: Budget App', () => {
  test('SetIncome, given income amount, sets income', () => {
    const wrapper = mount(<App />);

    wrapper.find('SetIncome').props().setIncome(1);

    expect(wrapper.find('h3#income').text()).toEqual('Income: $1');
  });

  function createAutoBudget(budgetValue) {
    const wrapper = mount(<App />);
    const computedBudgetAmt = Math.ceil(parseInt(budgetValue, 10) / 5) * 5;

    wrapper.find('CreateNewBudget').props().addNewBudget({
      id: '1',
      category: 'Auto',
      amount: computedBudgetAmt,
      amtSpent: 0,
    });
    return { wrapper, computedBudgetAmt };
  }

  describe('CreateNewBudget', () => {
    test.each`
      budget | spending           | leftOver
      ${'4'} | ${'Spending: $5'}  | ${'$-5'}
      ${'5'} | ${'Spending: $5'}  | ${'$-5'}
      ${'6'} | ${'Spending: $10'} | ${'$-10'}
    `(
      'given budget, updates budget summary',
      ({ budget, spending, leftOver }) => {
        const { wrapper, computedBudgetAmt } = createAutoBudget(budget);

        wrapper
          .find('CreateNewBudget')
          .props()
          .setTotalSpending(computedBudgetAmt);

        expect(wrapper.find('h3#spending').text()).toEqual(spending);
        expect(wrapper.find('span#leftover').text()).toEqual(leftOver);
      }
    );

    test('given budget, displays budget chart', () => {
      const { wrapper, computedBudgetAmt } = createAutoBudget('5');

      wrapper
        .find('CreateNewBudget')
        .props()
        .setTotalSpending(computedBudgetAmt);
      wrapper.update();

      expect(wrapper.find('div#chart')).toBeTruthy();
    });
  });

  describe('Budget', () => {
    test('given budget, displays details', () => {
      const { wrapper, computedBudgetAmt } = createAutoBudget('5');

      wrapper
        .find('CreateNewBudget')
        .props()
        .setTotalSpending(computedBudgetAmt);
      wrapper.update();

      expect(
        toJson(wrapper.find('Budget'), {
          mode: 'shallow',
        })
      ).toMatchInlineSnapshot(`
        <Budget
          amtSpent={0}
          categoryName="Auto"
          classes={
            Object {
              "primary": "Budget-primary-214",
              "root": "Budget-root-212",
              "span": "Budget-span-213",
            }
          }
          deleteBudget={[Function]}
          id="1"
          setAmtSpent={[Function]}
          totalBudget={5}
        />
      `);
    });

    test('given budget expense, updates budget progress', () => {
      const { wrapper, computedBudgetAmt } = createAutoBudget('5');

      wrapper
        .find('CreateNewBudget')
        .props()
        .setTotalSpending(computedBudgetAmt);
      wrapper.update();

      wrapper.find('Budget').props().setAmtSpent('1', 'add');
      wrapper.update();

      expect(
        toJson(wrapper.find('Budget'), {
          mode: 'shallow',
        })
      ).toMatchInlineSnapshot(`
        <Budget
          amtSpent={5}
          categoryName="Auto"
          classes={
            Object {
              "primary": "Budget-primary-214",
              "root": "Budget-root-212",
              "span": "Budget-span-213",
            }
          }
          deleteBudget={[Function]}
          id="1"
          setAmtSpent={[Function]}
          totalBudget={5}
        />
      `);
    });
  });

  test('DeleteBudget, given deleted budget, budget removed from DOM', () => {
    const { wrapper } = createAutoBudget('5');
    wrapper.update();

    wrapper.find('Budget').props().deleteBudget('1', '5');
    wrapper.update();

    expect(
      toJson(wrapper.find('Budget'), {
        mode: 'shallow',
      })
    ).toMatchInlineSnapshot(`null`);
  });
});

describe('ReactTestUtils Module', () => {
  it('SetIncome, given initial render, displays budget summary values', () => {
    let container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(<App />, container);
    });
    const income = container.querySelector('h3#income');
    const spending = container.querySelector('#spending');
    const leftover = container.querySelector('#leftover');

    expect(income.textContent).toBe('Income: $0');
    expect(spending.textContent).toBe('Spending: $0');
    expect(leftover.textContent).toBe('$0');

    document.body.removeChild(container);
  });
});
it('SetIncome, given initial render, displays budget summary values', () => {
  let container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(<App />, container);
  });
  const income = container.querySelector('h3#income');
  const spending = container.querySelector('#spending');
  const leftover = container.querySelector('#leftover');

  expect(income.textContent).toBe('Income: $0');
  expect(spending.textContent).toBe('Spending: $0');
  expect(leftover.textContent).toBe('$0');

  document.body.removeChild(container);
});
