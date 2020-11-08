const redux = require("redux");
// import { createStore } from "redux";
const reduxLogger = require("redux-logger");

// commonJS

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const createLogger = reduxLogger.createLogger;
const applyMiddleware = redux.applyMiddleware;

const BUY_TICKET = "BUY_MOVIE_TICKET";
const BUY_POP_CORN = "BUY_POP_CORN";

// action creator
const buyTicket = (num) => {
  return { type: BUY_TICKET, payload: num };
};

const buyPopCorn = () => {
  return { type: BUY_POP_CORN };
};

const getUsers = () => {
  // api
  // FETCH_REQUEST
  // FETCH_SUCCESS
  // FETCH_ERROR
};

const initialState = {
  numOfSeats: 100,
};
const initialPopState = {
  popCorn: 50,
};

// reducer
const ticketReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case BUY_TICKET:
      return { ...state, numOfSeats: state.numOfSeats - action.payload };
    // case BUY_POP_CORN:
    //   return { ...state, popCorn: state.popCorn - 1 };
    default:
      return state;
  }
};

const popCornReducer = (state = initialPopState, action) => {
  switch (action.type) {
    case BUY_POP_CORN:
      return { ...state, popCorn: state.popCorn - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ticket: ticketReducer,
  pop: popCornReducer,
});

const logger = createLogger({});

const store = createStore(rootReducer, applyMiddleware(logger));
// const unsubscribe = store.subscribe(() => {
//   // console.log("Updated state", store.getState());
// });

// store.dispatch(buyTicket(1));
// store.dispatch(buyTicket(1));
// store.dispatch(buyTicket(2));
store.dispatch(buyTicket(1));
store.dispatch(buyTicket(2));
store.dispatch(buyPopCorn());
store.dispatch(buyPopCorn());

// unsubscribe();
