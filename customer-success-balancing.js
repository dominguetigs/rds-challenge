function customerSuccessIsNotAway(customerSuccessAwayList) {
  return function ({ id: customerSuccessId }) {
    return customerSuccessAwayList.indexOf(customerSuccessId) === -1;
  };
}

function customerSuccessWithMinimumAcceptableScore(minimumAcceptableScore) {
  return function ({ score: customerSuccessScore }) {
    return customerSuccessScore >= minimumAcceptableScore;
  };
}

function getMinimumScoreFromCustomer(customers) {
  return customers.reduce((acc, curr) => (acc.score < curr.score ? acc : curr)).score;
}

/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */
function customerSuccessBalancing(customerSuccess, customers, customerSuccessAway) {
  const minimumScoreFromCustomer = getMinimumScoreFromCustomer(customers);
  const css = customerSuccess
    .filter(customerSuccessWithMinimumAcceptableScore(minimumScoreFromCustomer))
    .filter(customerSuccessIsNotAway(customerSuccessAway))
    .sort((cssA, cssB) => cssA.score - cssB.score);

  let cs = customers;
  let customerSuccessId = 0;
  let numberOfCustomers = 0;

  for (const { id, score } of css) {
    const previousNumberOfCustomers = cs.length;

    cs = cs.filter((customer) => customer.score > score);

    const currentNumberOfCustomers = previousNumberOfCustomers - cs.length;

    if (currentNumberOfCustomers > numberOfCustomers) {
      customerSuccessId = id;
      numberOfCustomers = currentNumberOfCustomers;
    } else if (currentNumberOfCustomers === numberOfCustomers) {
      customerSuccessId = 0;
    }
  }

  return customerSuccessId;
}

module.exports = customerSuccessBalancing;
