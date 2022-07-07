const main = (operations) => {
  return {
    absProfit: getProfit(operations),
    portfolio: getTicker(operations)
}
  
};

const getProfit = (operations) => {
  return operations.reduce((acc, el) => {
    acc =
      el.type === "BUY"
        ? acc = (acc || 0) - el.price * el.qnt
        : acc = (acc || 0) + el.price * el.qnt;
    return acc;
  }, 0);
};

const getTicker = (operations) => {
    const ticketKeys = [...new Set(operations.map(el => el.ticker))] 
    return ticketKeys.reduce((acc, key) => {
        const filteredOperations = operations.filter(el => el.ticker === key)
        acc[key] = getProfit(filteredOperations)
        return acc
    }, {});
}

module.exports = main;
