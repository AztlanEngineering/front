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

export interface SectionState {
  currentIndex      :number;
  currentSection    :SectionType | null;
  sections          :ConfigType;
  isFirst           :boolean;
  isLast            :boolean;
  progressPercentage:number;
}

const ACTIONS = { SET_SECTION_INDEX: 'SET_SECTION_INDEX' } as const // Using 'as const' for a literal type

type SectionAction = {
  type   :keyof typeof ACTIONS; // Referencing the literal type of ACTIONS
  payload:number;
}

const initialState = (config: ConfigType): SectionState => ({
  currentIndex      :0,
  currentSection    :config[0] || null,
  sections          :config,
  progressPercentage:config[0]?.overrideProgressPercentage || 100 / config.length,
  isFirst           :true,
  isLast            :config.length <= 1,
})

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

export interface UseSectionsReturnType {
  state      :SectionState;
  setIndex   :(index: number) => void;
  setNext    :() => void;
  setPrevious:() => void;
}

/**
 * Custom hook to manage state in components that require sequential section display.
 * @param {ConfigType} config - Array of section configuraion objects
 * @returns {UseSectionsReturnType} - Hook return type with state and control functions
 */
function useSections(config: ConfigType): UseSectionsReturnType {
  const [
    state,
    dispatch,
  ] = useReducer(
    reducer, config, initialState,
  )

  const setIndex = useCallback(
    (index: number) => {
      dispatch({
        type   :'SET_SECTION_INDEX',
        payload:index,
      })
    }, [],
  )

  const setNext = useCallback(
    () => {
      if (state.currentIndex < state.sections.length - 1) {
        setIndex(state.currentIndex + 1)
      }
    }, [
      state.currentIndex,
      state.sections.length,
    ],
  )

  const setPrevious = useCallback(
    () => {
      if (state.currentIndex > 0) {
        setIndex(state.currentIndex - 1)
      }
    }, [state.currentIndex],
  )

  return {
    state,
    setIndex,
    setNext,
    setPrevious,
  }
}

export default useSections
