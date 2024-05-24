# Counter State Management

## Overview

This project implements a simple state management system in JavaScript inspired by Redux. The system manages a counter with three actions: add, subtract, and reset. The key components include action types, a reducer function, and a store creation function.

Approach
The project is structured around the core principles of Redux:

Action Types: Define constants for each action that can be dispatched.
Initial State: Set an initial state for the counter.
Reducer Function: Create a reducer to handle state changes based on dispatched actions.
Store Creation: Implement a store that manages the state, handles subscriptions, and dispatches actions.
Code Structure
Action Types: Constants for ADD, SUBTRACT, and RESET actions.
Initial State: Object with a single property count initialized to 0.
Reducer Function: Handles state transitions based on action types.
Store Function: Manages state, allows dispatching actions, and handles subscriptions.
Challenges and Solutions
State Management: Ensuring state immutability while handling actions was a key challenge. The solution was to use the spread operator and return new state objects from the reducer.
Subscription Management: Keeping track of and managing multiple subscribers required careful handling of array operations to add and remove listeners. Implementing a proper unsubscribe mechanism resolved issues related to lingering listeners.
Code

The code is well-commented to enhance readability and maintainability. It adheres to best practices, including avoiding direct state mutations and ensuring pure functions within the reducer.

