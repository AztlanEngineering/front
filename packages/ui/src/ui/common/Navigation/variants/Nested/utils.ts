// REF 4.1
import type {
  Item, PreparedItem, UrlIndex,
} from './types'

interface PreparedNavigationData {
  preparedRoot:PreparedItem;
  maxDepth    :number;
  urlIndex    :UrlIndex;
}

export function prepareNavigationData(
  root: Item,
  currentDepth = 0,
  urlIndex: UrlIndex = {},
  // parentUrl: string | null = null,
):PreparedNavigationData {
  let maxDepth = currentDepth
  const preparedRoot = {
    ...root,
    depth    :currentDepth,
    parentUrl:null,
  }

  urlIndex = {
    [preparedRoot.url]:preparedRoot,
    ...urlIndex,
  }

  const preparedItems = preparedRoot.items.reduce(
    (
      acc, item,
    ) => {
      const newItem = {
        ...item,
        depth    :currentDepth + 1,
        parentUrl:preparedRoot.url,
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
          currentDepth + 1,
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

  return {
    preparedRoot,
    maxDepth,
    urlIndex,
  }
}

export function findCurrentTree(
  urlIndex:UrlIndex, url,
):PreparedItem[] {
  /**
   * Constructs the initial currentTree based on the current URL.
   *
   * @param {Object} urlIndex - A dictionary mapping URLs to their corresponding items.
   * @param {string} url - The current URL to find in the urlIndex.
   * @returns {Array} The path (array of items) from the root to the item matching the current URL.
   */
  const path = []
  let currentItem = urlIndex[url]
  currentItem = currentItem.items ? currentItem : urlIndex[currentItem.parentUrl]

  while (currentItem) {
    path.unshift(currentItem)
    currentItem = urlIndex[currentItem.parentUrl]
  }

  return path
}
