/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'navigation-header'

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function Header({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  fixed,
  left,
  content,
  right,
  hideOnDesktop = true,
  UNSTABLE_padded,
}: ComponentProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        hideOnDesktop && 'desktop-hidden',
        fixed && styleNames.modifierFixed,
        fixed && 'default-columns',
        UNSTABLE_padded && 'section padded',
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <span className="span-2 md-span-3">{left}</span>
      <span className="span-4 md-span-8">{content}</span>
      <span className="span-2 md-span-3">{right}</span>
    </Wrapper>
  )
}

Header.propTypes = ComponentPropTypes

export default Header
