export default (state, action) => {  
  switch (action.type) {
    case "WITHDRAW_CASH":
      return {
        ...state,
        totalAmount: state.totalAmount-action.amount
      }

    default:
      return state;
  }
};