// useSections.ts
import {
  useCallback, useReducer,
} from 'react'

export interface SectionConfig {
  label                      :string;
  hideBack?                  :boolean;
  hideNext?                  :boolean;
  overrideProgressPercentage?:number;
  [key: string]              :any;
}

export type SectionsConfig = SectionConfig[]

export interface SectionState {
  currentIndex      :number;
  currentSection    :SectionConfig | null;
  sections          :SectionsConfig;
  isFirst           :boolean;
  isLast            :boolean;
  progressPercentage:number;
}

export interface SectionsController {
  setIndex   :(index: number) => void;
  setNext    :() => void;
  setPrevious:() => void;
}

export type SectionsReturn = [SectionState, SectionsController]

const ACTIONS = { SET_SECTION_INDEX: 'SET_SECTION_INDEX' } as const

export type SectionsReducerAction = {
  type   :keyof typeof ACTIONS;
  payload:number;
}

const initialState = (config: SectionsConfig): SectionState => ({
  currentIndex      :0,
  currentSection    :config[0] || null,
  sections          :config,
  progressPercentage:config[0]?.overrideProgressPercentage || 100 / config.length,
  isFirst           :true,
  isLast            :config.length <= 1,
})

export const reducer = <T extends SectionState>(
  state: T,
  action: SectionsReducerAction,
): T => {
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

/**
 * Custom hook to manage state in components that require sequential section display.
 * @param {SectionsConfig} config - Array of section configuraion objects
 * @returns {SectionsReturn} - Hook return type with state and control functions
 */
function useSections(config: SectionsConfig): SectionsReturn {
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

  const methods: SectionsController = {
    setIndex,
    setNext,
    setPrevious,
  }

  return [
    state,
    methods,
  ]
}

export default useSections
