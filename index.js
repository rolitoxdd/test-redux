const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty
  }
}


const initialState = {
  numOfCakes: 10,
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: {
      return {
        ...prevState,
        numOfCakes: prevState.numOfCakes - 1,
      };
    }
    default: {
      return prevState;
    }
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update store", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(orderCake());

unsubscribe();
store.dispatch(orderCake());
