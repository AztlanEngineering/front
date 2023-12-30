/* <%= pkg %> <%= version %> */
import * as React from 'react'<% if (!optionNoStyles) { %>
import { useInsertionEffect } from 'react'
<% } %>
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
<% if (!optionNoStyles) { %>
import styleNames from '@<%= npmOrg %>/bem'
<% } %>

<% if (!optionDiet || !optionNoStyles) { %>
const baseClassName = styleNames.base<% } %>
const componentClassName = '<%= lower %>'

/**
 * description
 * @param {InferProps<typeof <%= name %>.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function <%= name %>({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps
<% if (!optionDiet) { %>
}: InferProps<typeof Textarea.propTypes>): React.ReactElement {
  <% else { %>
  }): React.ReactElement {<% } %>

<% if (!optionNoStyles) { %>
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])
<% } %>
  
  return(
    <div
      id={id}
      className={[
        <% if (!optionDiet || !optionNoStyles) { %>
        baseClassName,
        <% } %>
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={ style }
      //{...otherProps}
    >
      {children}
    </div>
  )
}

<% if (!optionDiet) { %>
<%= name %>.propTypes = {
  /** The HTML id for this element */
  id: PropTypes.string,
  
  /** The HTML class names for this element */
  className: PropTypes.string,
  
  /** The React-written, css properties for this element. */
  style: PropTypes.objectOf(PropTypes.string),
  
  /** The children JSX */
  children: PropTypes.node,
}
<% } %>

export default <%= name %>

