import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  /* The current index */
  id:PropTypes.string,

  /* The class name */
  className:PropTypes.string,

  /* The style */
  style:PropTypes.objectOf(PropTypes.string),

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

export interface Item {
  label         :string;
  url           :string;
  disabled?     :boolean;
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
