export const htmlTypes = [
  'text',
  'email',
  'password',
  'number',
  'date',
  'datetime',
  'month',
  'tel',
]

export const allTypes = [
  ...htmlTypes,
  'hidden',
  'select',
  'choices',
  'simple-choices',
  'textarea',
  'checkbox',
  // 'query-combobox',
  // 'query-select',
]

/**
 * We will store in the state a dict of booleans
 * that describe the fields which are allowed to be rerendered.
 * This is useful to rerender validation or refetch back-end data */
export const rerenderAllowedStatusKey = 'rerenderAllowed'
