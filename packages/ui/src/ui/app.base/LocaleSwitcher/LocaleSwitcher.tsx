/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

import { useApplicationContext } from '../../common/index.js'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'locale-switcher'

/**
 * This is the component description.
 */
function LocaleSwitcher({
  id,
  className: userClassName,
  style,
  locales = {
    en:'English',
    es:'Español',
  },
}: // ...otherProps
InferProps<typeof LocaleSwitcher.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    // locale,
    isLocale,
    setLocale,
  } = useApplicationContext()

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'inline',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {Object.keys(locales).map((localeName) => (
        <li key={localeName}>
          <a
            onClick={() => setLocale(localeName)}
            className={isLocale(localeName) ? 'bold' : ''}
          >
            {locales[localeName]}
          </a>
        </li>
      ))}
    </ul>
  )
}

LocaleSwitcher.propTypes = {
  /** The HTML id for this element */ id:PropTypes.string,

  /** The HTML class names for this element */ className:PropTypes.string,

  /** The React-written, css properties for this element. */ style:PropTypes.objectOf(PropTypes.string),

  /** The data for this component */ locales:PropTypes.objectOf(PropTypes.string),
}

export default LocaleSwitcher
