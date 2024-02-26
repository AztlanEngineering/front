import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'
import { ComponentPropTypes as VerticalMenuPropTypes } from '../../common/VerticalMenu/types.js'
import { ComponentPropTypes as HeaderPropTypes } from '../../common/Header/types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  ...basePropTypes.htmlShared,

  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  items:PropTypes.arrayOf(PropTypes.shape({
    label        :PropTypes.string.isRequired,
    url          :PropTypes.string.isRequired,
    footerContent:PropTypes.node,
    disabled     :PropTypes.bool,
    items        :PropTypes.array,
  })),

  /** The label of the menu */
  label:PropTypes.string.isRequired,

  /* The current footer content */
  currentFooterContent:PropTypes.string,

  /* the url of the root item */
  url:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>

export interface Group {
  key  :string;
  label:string;
  items:Item[];
}

export interface Item {
  label         :string;
  url           :string;
  disabled?     :boolean;
  className?    :string;
  items?        :Item[];
  footerContent?:React.ReactElement;
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
  label?                 :string;
  root                   :PreparedItem;
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
