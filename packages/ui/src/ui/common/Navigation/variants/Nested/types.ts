import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'
import {
  ComponentPropTypes as VerticalMenuPropTypes,
  rootItemPropType,
} from '../../common/VerticalMenu/types.js'
import { ComponentPropTypes as HeaderPropTypes } from '../../common/Header/types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  ...basePropTypes.htmlShared,

  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  rootItem:rootItemPropType,

  /* The current footer content */
  currentFooterContent:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>

export interface Item {
  label?         :string;
  url?           :string;
  disabled?      :boolean;
  className?     :string;
  items?         :Item[];
  footerContent? :React.ReactElement;
  displayItemsAs?:string; // Do not match propTypes : 'nested' | 'group';
}

export interface PreparedItem extends Item {
  parentUrl:string | null;
  depth    :number;
}

/*
  const {
    items,
    currentIndex,
    menuLabel,
    currentTree,
    hoverTree,
    maxDepth,
    selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)
  */

export type ContextValue = {
  previous               :React.ReactElement;
  next                   :React.ReactElement;
  rootItem               :PreparedItem;
  currentItem            :PreparedItem;
  currentTree            :PreparedItem[];
  hoverTree              :PreparedItem[];
  currentDepth           :number;
  maxDepth               :number;
  selectUrl              :string;
  fixed                  :boolean;
  title                  :string;
  focusParent            :() => void;
  focusMenu              :() => void;
  focusCanvas            :() => void;
  onItemMouseEnterHandler:(event: React.MouseEvent) => void;
  onMenuMouseLeave       :(event: React.MouseEvent) => void;
}

export type UrlIndex = {
  [url: string]:PreparedItem;
}

export const NestedNavigationVerticalMenuPropTypes = {
  ...VerticalMenuPropTypes,
  /* The class name for the group of vertical menus (the container) */
  groupClassName:PropTypes.string,
}

export const NestedNavigationCanvasPropTypes = {
  ...basePropTypes.htmlShared,

  /* the span of vertical menu single elements on desktop */
  desktopVerticalMenuSingleSpan:PropTypes.number,

  /* the span of vertical menu group elements on desktop */
  desktopVerticalMenuGroupSpan:PropTypes.number,

  /* The children to render */
  children:PropTypes.node.isRequired,
}

export const NestedNavigationHeaderPropTypes = { ...HeaderPropTypes }

export type NestedNavigationVerticalMenuProps = InferProps<
  typeof NestedNavigationVerticalMenuPropTypes
>

export type NestedNavigationCanvasProps = InferProps<
  typeof NestedNavigationCanvasPropTypes
>

export type NestedNavigationHeaderProps = InferProps<
  typeof NestedNavigationHeaderPropTypes
>
