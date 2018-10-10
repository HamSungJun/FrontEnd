// Redux Reducer : Action에 따른 상태의 변경울 서술한다.

import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from './EX01_Action'

const initialState = {
  visibillityFilter : VisibilityFilters.SHOW_ALL,
  todos : []
}

function todoApp(state = initialState , action) {
  switch(action.type){

    case SET_VISIBILITY_FILTER : 
      visibillityFilter(state.visibillityFilter,action);

    case ADD_TODO | COMPLETE_TODO:
      todos(state.todos,action)
      
    default :
      return state
  }
}

function todos(state = [] , action) {
  switch(action.type){

    case ADD_TODO :

      return Object.assign({},state,{
        todos : [...state.todos,{
          text : action.text,
          completed : false
        }]
      })

    case COMPLETE_TODO :

      return Object.assign({},state,{
        todos : [...state.todos.slice(0,action.index)
        ,Object.assign({},
          state.todos[action.index],
          {completed : true}),
        ...state.todos.slice(action.index+1)]
      }) 

    default :

      return state
  }
}

function visibillityFilter(state = VisibilityFilters.SHOW_ALL , action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER :
      return Object.assign({},state,{
        visibillityFilter : action.filter
      })
    
    default:
      return state
  }
}

export default todoApp