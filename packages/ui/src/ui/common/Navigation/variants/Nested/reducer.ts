import { findCurrentTree } from './utils.js'

function reducer(
  state, action,
) {
  switch (action.type) {
    case 'SELECT_URL': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state // URL not found

      const updatedCurrentTree = [
        ...findCurrentTree(
          state.urlIndex, url,
        ),
      ]

      return {
        ...state,
        currentItem :item,
        hoverTree   :[],
        currentDepth:item.items ? item.depth : -1,
        currentTree :updatedCurrentTree,
      }
    }
    case 'FOCUS_MENU': {
      return {
        ...state,
        currentDepth:state.currentTree.length - 1,
      }
    }
    case 'FOCUS_CANVAS': {
      return {
        ...state,
        currentDepth:-1,
      }
    }
    case 'FOCUS_PARENT': {
      if (state.currentTree.length <= 1) {
        return state
      }

      const parentItem = state.urlIndex[state.currentItem.parentUrl]

      return {
        ...state,
        currentItem :parentItem,
        // currentTree :updatedCurrentTree,
        currentDepth:parentItem.depth,
      }
    }
    // REF 8.1
    case 'HOVER_ITEM': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state // Item not found

      // Recalculate the hover path for the item
      const newHoverTree = [
        ...findCurrentTree(
          state.urlIndex, url,
        ),
      ]

      return {
        ...state,
        hoverTree:newHoverTree,
      }
    }

    case 'LEAVE_MENU': {
      return {
        ...state,
        hoverTree:[], // Clear hoverTree when mouse leaves the navigation menu
      }
    }
    case 'RESET':
      return {
        ...state,
        currentDepth:-1,
        currentItem :null,
        currentTree :[],
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default reducer
