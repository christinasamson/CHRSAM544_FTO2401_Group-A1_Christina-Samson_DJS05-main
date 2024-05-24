// Define the type of actions.
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Define the initial state of the counter
const initialState = { count: 0 };

// Reducer function to handle actions and update the state accordingly
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      // Increase the count by 2 when the ADD action is dispatched
      return { count: state.count + 2 };
    case SUBTRACT:
      // Decrease the count by 1 when the SUBTRACT action is dispatched
      return { count: state.count - 1 };
    case RESET:
      // Reset the count to 0 when the RESET action is dispatched
      return { count: 0 };
    default:
      // Return the current state if the action type is unrecognized
      return state;
  }
}

// Function to create a store that holds the state and dispatches actions
function createStore(reducer, initialState) {
  let state = initialState; // Initialize state
  const listeners = []; // Array to hold subscription callbacks

  // Function to get the current state
  const getState = () => state;

  // Function to dispatch an action and update the state using the reducer
  const dispatch = (action) => {
    state = reducer(state, action);
    // Notify all subscribed listeners about the state change
    listeners.forEach(listener => listener());
  };

  // Function to subscribe a listener to state changes
  const subscribe = (listener) => {
    listeners.push(listener);
    // Return a function to unsubscribe the listener
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  // Return the public methods to interact with the store
  return { getState, dispatch, subscribe };
}

// Create the store with the counter reducer and initial state
const store = createStore(counterReducer, initialState);

// Subscribe to store updates and log the state whenever it changes
store.subscribe(() => console.log('State:', JSON.stringify(store.getState())));

// Log the initial state
console.log('Initial State:', JSON.stringify(store.getState())); // Should log { count: 0 }

// Dispatch an ADD action to increment the counter
store.dispatch({ type: ADD });

// Dispatch a SUBTRACT action to decrement the counter
store.dispatch({ type: SUBTRACT });

// Dispatch a RESET action to reset the counter
store.dispatch({ type: RESET });
