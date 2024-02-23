// REF 4.1
import type { ItemType } from './types'

export function prepareNavigationData(
  root: { label: string; items: ItemType[], url: string },
  currentLevel = 1,
  urlIndex: { [url: string]: ItemType } = {},
  // parentUrl: string | null = null,
) {
  let maxDepth = currentLevel
  const {
    label, items,
    url,
  } = root

  urlIndex = {
    [url]:root,
    ...urlIndex,
  }

  const preparedItems = items.reduce(
    (
      acc, item,
    ) => {
      const newItem = {
        ...item,
        depth    :currentLevel,
        parentUrl:url,
      }

      if (item.url) {
        urlIndex[item.url] = newItem
      }

      if (item.items) {
        const childData = prepareNavigationData(
          {
            label:item.label,
            items:item.items,
            url  :item.url,
          },
          currentLevel + 1,
          urlIndex,
        )
        newItem.items = childData.preparedRoot.items
        maxDepth = Math.max(
          maxDepth, childData.maxDepth,
        )
        urlIndex = {
          ...urlIndex,
          ...childData.urlIndex,
        }
      }

      acc.push(newItem)
      return acc
    }, [],
  )

  const preparedRoot = {
    url,
    label,
    items:preparedItems,
  }

  return {
    preparedRoot,
    maxDepth,
    urlIndex,
  }
}

export function findCurrentTree(
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
