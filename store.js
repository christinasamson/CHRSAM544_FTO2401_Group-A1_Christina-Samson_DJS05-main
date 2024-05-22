// Define the type of action
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count +  2};
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return { getState, dispatch, subscribe };
}

// Create the store with the reducer and initial state
const store = createStore(counterReducer, initialState);

// Subscribe to store updates
store.subscribe(() => console.log('State:', JSON.stringify(store.getState())));

// Initial State Verification
console.log('Initial State:', JSON.stringify(store.getState())); // Should log { count: 0 }

// Incrementing the Counter
store.dispatch({ type: ADD });

// Decrementing the Counter
store.dispatch({ type: SUBTRACT });

// Resetting the Counter
store.dispatch({ type: RESET });
