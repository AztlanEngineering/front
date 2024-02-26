// REF 4.1
import type {
  Item, PreparedItem, UrlIndex,
} from './types'

interface PreparedNavigationData {
  preparedRoot            :PreparedItem;
  nearestNavigableAncestor:PreparedItem | null,
  urlIndex                :UrlIndex;
}

/**
 * Recursively prepares navigation data, setting correct depth, parent URL, and updating a URL index.
 * It simplifies ancestor tracking by using recursive logic to handle navigation structuring.
 *
 * @param root The current item being processed in the navigation structure.
 * @param nearestNavigableAncestor The closest ancestor item with a URL, used for context in recursion.
 * @param urlIndex A collection for indexing items by their URL for efficient lookups.
 * @returns {PreparedNavigationData} An object containing the prepared navigation structure.
 */
export function prepareNavigationData(
  root: Item,
  nearestNavigableAncestor: PreparedItem | null = null,
  urlIndex: UrlIndex = {},
): PreparedNavigationData {
  // Prepare the root item with its depth and parent URL.
  let preparedRoot: PreparedItem = {
    ...root,
    depth    :nearestNavigableAncestor ? nearestNavigableAncestor.depth + 1 : 0,
    parentUrl:nearestNavigableAncestor ? nearestNavigableAncestor.url : null,
  }

  // If the root item has a URL, it becomes its own nearest navigable ancestor.
  if (root.url) {
    preparedRoot = {
      ...preparedRoot,
      depth:nearestNavigableAncestor ? nearestNavigableAncestor.depth + 1 : 0,
    }
    urlIndex[root.url] = preparedRoot
  }

  // The nearest navigable ancestor for sub-items is either
  // the current root (if navigable) or the passed ancestor.
  const updatedNearestNavigableAncestor = root.url ? preparedRoot : nearestNavigableAncestor

  // Recursively prepare each sub-item.
  preparedRoot.items = root.items?.map((item) => prepareNavigationData(
    item, updatedNearestNavigableAncestor, urlIndex,
  ).preparedRoot)
  return {
    preparedRoot,
    nearestNavigableAncestor:updatedNearestNavigableAncestor,
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
