// CampusEats Task Tracker & Calculator

const VIP_DISCOUNT = 0.1;

// Task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// Calculate order totals safely with customer discount
function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

module.exports = { tasks, calculateTotal };