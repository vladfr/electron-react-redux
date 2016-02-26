/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(payload) {
  return { type: ADD_TODO, payload }
}

export function completeTodo(payload) {
  return { type: COMPLETE_TODO, payload }
}

export function setVisibilityFilter(payload) {
  return { type: SET_VISIBILITY_FILTER, payload }
}