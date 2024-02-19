/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'navigation-paginator'

/**
 * description
 * @param {InferProps<typeof Paginator.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Paginator
 */
function Paginator({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  left,
  right,
  desktopOnly,
  span = 4,
  spanDesktop = 3,
  // children,
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
        desktopOnly && 'desktop-only',
        'container grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        '--span'        :span,
        '--span-desktop':spanDesktop,
        ...style,
      }}
      // {...otherProps}
    >
      <span>{left}</span>
      <span>{right}</span>
    </Wrapper>
  )
}

Paginator.propTypes = ComponentPropTypes

export default Paginator
