import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'
import {
  // ComponentPropTypes as VerticalMenuPropTypes,
  rootItemPropType,
} from '../../common/VerticalMenu/types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  rootItem:rootItemPropType,

  /** The label of the menu */
  menuLabel:PropTypes.string,

  /** Override showing then previous button */
  hidePreviousButton:PropTypes.bool,

  /** Override showing then next button */
  hideNextButton:PropTypes.bool,

  /** handler handler for the previous button. This overrides fully the default navigation function,
   * so it is crucial that a navigation action is provided on that handler,
   * for instance to the previous section. */
  handlerPrevious:PropTypes.func,

  /* handler handler for the next button. This overrides fully the default navigation function,
   * so it is crucial that a navigation action is provided on that handler,
   * for instance to the next section. */
  handlerNext:PropTypes.func,

  /* A component to display on the last page instead of the next button.
   * This can for instance be a submit button, or a link to a different place */
  submit:PropTypes.element,

  /* The current footer content */
  currentFooterContent:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>

export type ItemType = {
  label        :string;
  url          :string;
  disabled     :boolean;
  footerContent:string;
  className    :string;
}

export interface Item {
  label?         :string;
  url?           :string;
  disabled?      :boolean;
  className?     :string;
  items?         :Item[];
  footerContent? :React.ReactElement;
  displayItemsAs?:string; // Do not match propTypes : 'nested' | 'group';
}

export type ContextValue = {
  previous             :React.ReactElement;
  next                 :React.ReactElement;
  menuLabel?           :string;
  currentIndex         :number;
  currentContent       :React.ReactNode;
  currentFooterContent?:string;
  rootItem             :Item;
  fixed                :boolean;
  hideNextButton       :boolean;
  hidePreviousButton   :boolean;
}
