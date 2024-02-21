import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  items:PropTypes.arrayOf(PropTypes.shape({
    label        :PropTypes.string.isRequired,
    url          :PropTypes.string.isRequired,
    footerContent:PropTypes.string,
    items        :PropTypes.array,
  })),

  /** The label of the menu */
  menuLabel:PropTypes.string,

  /* The current footer content */
  currentFooterContent:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>

export type ItemType = {
  label         :string;
  url           :string;
  disabled      :boolean;
  parentUrl     :string;
  items         :ItemType[];
  footerContent?:React.ReactElement;
}
/*
  const {
    items,
    currentIndex,
    menuLabel,
    currentTree,
    hoverTree,
    maxLevel,
    selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)
  */

export type ContextValue = {
  previous               :React.ReactElement;
  next                   :React.ReactElement;
  menuLabel?             :string;
  items                  :ItemType[];
  currentIndex           :number;
  currentTree            :ItemType[];
  hoverTree              :ItemType[];
  maxLevel               :number;
  selectUrl              :string;
  fixed                  :boolean;
  title                  :string;
  onItemMouseEnterHandler:(event: React.MouseEvent) => void;
  onMenuMouseLeave       :(event: React.MouseEvent) => void;
}
