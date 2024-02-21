export function prepareNavigationData(
  items,
  currentLevel = 0,
  urlIndex = {},
  parentUrl = null,
) {
  /**
   * Enhances navigation items with depth levels, compiles a URL index for direct item access,
   * and annotates each item with a reference to its parent URL.
   *
   * @param {Array} items - The navigation items to process.
   * @param {number} [currentLevel=0] - The current depth level, starting from 0.
   * @param {Object} [urlIndex={}] - Accumulates mappings from URLs to items.
   * @param {string|null} [parentUrl=null] - The URL of the parent item.
   * @returns {Object} Contains annotated items, the maximum depth, and a URL index.
   */
  let maxLevel = currentLevel

  const preparedItems = items.reduce(
    (
      acc, item,
    ) => {
      const newItem = {
        ...item,
        level:currentLevel,
        parentUrl,
      }
      if (item.url) {
        urlIndex[item.url] = newItem
      }
      if (item.items) {
        const childData = prepareNavigationData(
          item.items,
          currentLevel + 1,
          urlIndex,
          item.url,
        )
        newItem.items = childData.preparedItems
        maxLevel = Math.max(
          maxLevel, childData.maxLevel,
        )
      }
      acc.push(newItem)
      return acc
    }, [],
  )

  return {
    preparedItems,
    maxLevel,
    urlIndex,
  }
}

export function findInitialCurrentTree(
  urlIndex, url,
) {
  /**
   * Constructs the initial currentTree based on the current URL.
   *
   * @param {Object} urlIndex - A dictionary mapping URLs to their corresponding items.
   * @param {string} url - The current URL to find in the urlIndex.
   * @returns {Array} The path (array of items) from the root to the item matching the current URL.
   */
  const path = []
  let currentItem = urlIndex[url]

  while (currentItem) {
    path.unshift(currentItem)
    currentItem = urlIndex[currentItem.parentUrl]
  }

  return path
}
