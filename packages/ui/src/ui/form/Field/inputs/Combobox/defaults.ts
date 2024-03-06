export interface Item {
  value?       :string;
  label?       :string;
  [key: string]:any; // Additional properties
}

/** Default key used to fetch the value of the item */
export const defaultValueKey = 'value'

/**
 * Filters combobox items based on the input value.
 *
 * @param {Item[]} items - The list of items to filter.
 * @param {string} inputValue - The current value of the combobox input.
 * @returns {Item[]} - The filtered list of items.
 */
export const defaultFilterItems = (
  items: Item[], inputValue: string,
): Item[] => console.log(
  'ddd', items, inputValue,
)
  || items.filter((item) => !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase()))

/**
 * Default function to convert an item to a string.
 * @param {Item | null} item - The item to convert.
 * @returns {string} - The string representation of the item.
 */
export function defaultConvertItemToString(item: Item | null): string {
  return item ? item.label : ''
}

/**
 * Default function to find an item based on its string value.
 * @param {string} value - The string value to match.
 * @param {Item[]} items - The array of items to search.
 * @param {string} [valueKey='value'] - The key to match the value against.
 * @returns {Item | undefined} - The found item, if any.
 */
export function defaultConvertValueToItem(
  value: string,
  items: Item[],
  valueKey: string = defaultValueKey,
): Item | undefined {
  return items.find((item) => item[valueKey] === value)
}
