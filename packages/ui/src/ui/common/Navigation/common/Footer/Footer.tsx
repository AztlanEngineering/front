/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'navigation-footer'

/**
 * description
 * @param {InferProps<typeof Footer.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Footer
 */
function Footer({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  fixed,
  content,
  next,
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
      <span className="span-6 md-span-11">{content}</span>
      <span className="span-2 md-span-3">{next}</span>
    </Wrapper>
  )
}

Footer.propTypes = ComponentPropTypes

export default Footer
