// useSections.ts
import {
  useCallback, useReducer,
} from 'react'

export type SectionType = {
  label                      :string;
  hideBack?                  :boolean;
  hideNext?                  :boolean;
  overrideProgressPercentage?:number;
  [key: string]              :any;
}

type ConfigType = SectionType[]

interface SectionState {
  currentIndex      :number;
  currentSection    :SectionType | null;
  sections          :ConfigType;
  isFirst           :boolean;
  isLast            :boolean;
  progressPercentage:number;
}

const ACTIONS = { SET_SECTION_INDEX: 'SET_SECTION_INDEX' }

type SectionAction = {
  type   :typeof ACTIONS.SET_SECTION_INDEX;
  payload:number;
}

const reducer = (
  state: SectionState, action: SectionAction,
): SectionState => {
  switch (action.type) {
    case ACTIONS.SET_SECTION_INDEX:
      return {
        ...state,
        currentIndex      :action.payload,
        currentSection    :state.sections[action.payload],
        isFirst           :action.payload === 0,
        isLast            :action.payload === state.sections.length - 1,
        progressPercentage:state.sections[action.payload]
          .overrideProgressPercentage
          ? state.sections[action.payload].overrideProgressPercentage
          : (100 / state.sections.length) * (action.payload + 1),
      }
    default:
      return state
  }
}

function useSections(config: ConfigType) {
  const [
    state,
    dispatch,
  ] = useReducer(
    reducer, {
      currentIndex      :0,
      currentSection    :config[0],
      sections          :config,
      progressPercentage:config[0]?.overrideProgressPercentage || 100 / config.length,
      isFirst           :true,
      isLast            :config.length < 2,
    },
  )

  const setNext = useCallback(
    () => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:state.currentIndex + 1,
      })
    }, [
      state.currentIndex,
      dispatch,
    ],
  )

  const setPrevious = useCallback(
    () => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:state.currentIndex - 1,
      })
    }, [
      state.currentIndex,
      dispatch,
    ],
  )

  const setIndex = useCallback(
    (index: number) => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:index,
      })
    },
    [dispatch],
  )

  return {
    state,
    dispatch,
    setNext,
    setPrevious,
    setIndex,
  }
}

export default useSections
