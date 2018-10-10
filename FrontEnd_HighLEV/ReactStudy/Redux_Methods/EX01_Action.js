// Redux Action : 무언가 일어난다 , 행동

// 액션 정의

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// 액션 생산자
export function addTodo(_text) {
  return {
    type : ADD_TODO,
    text : _text
  }  
}

export function completeTodo(_index){
  return {
    type : COMPLETE_TODO,
    index : _index
  }
}

export function visibillityFilters(_filter) {
  return {
    type : SET_VISIBILITY_FILTER,
    filter : _filter
  }
}

// 상수

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}




