function reducer(
  state, action,
) {
  switch (action.type) {
    case 'SELECT_URL': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state // URL not found

      // Calculate new currentTree based on the item's level
      const updatedCurrentTree = [
        ...state.currentTree.slice(
          0, item.level,
        ),
        item,
      ]

      return {
        ...state,
        currentItem:item,
        focus      :item.items ? item.level + 1 : 0,
        currentTree:updatedCurrentTree,
      }
    }
    case 'HOVER_ITEM': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state

      const isDifferentItem = state.hoverTree[state.hoverTree.length - 1]?.url !== url
      const needsUpdate = isDifferentItem || state.hoverTree.length !== item.level + 1

      if (needsUpdate) {
        const updatedHoverTree = [
          ...state.hoverTree.slice(
            0, item.level,
          ),
          item,
        ]

        return {
          ...state,
          hoverTree:updatedHoverTree,
        }
      }

      return state
    }
    case 'LEAVE_ITEM': {
      return {
        ...state,
        hoverTree:[], // Clear hoverTree when mouse leaves the navigation menu
      }
    }
    case 'RESET':
      return {
        ...state,
        focus      :0,
        currentItem:null,
        currentTree:[],
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default reducer
