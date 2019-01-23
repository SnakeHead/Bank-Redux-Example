export function withdrawMoney(amount) {
  return {
    type: "WITHDRAW_CASH",
    amount: amount
  }
}