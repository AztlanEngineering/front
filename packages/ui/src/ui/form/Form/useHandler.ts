import {
  useCallback, useReducer,
} from 'react'

import {
  InputType, SectionType,
} from './types.ts'

const ACTIONS = {
  SET_SECTION_INDEX:'SET_SECTION_INDEX',
}

type ConfigType = SectionType[]

interface FormState {
  sectionIndex      :number;
  section           :SectionType | null;
  sections          :ConfigType;
  isFirstSection    :boolean;
  isLastSection     :boolean;
  progressPercentage:number;
}

// Define the action types using the constant
type ActionType = { type: typeof ACTIONS.SET_SECTION_INDEX; payload: number }

const reducer = (
  state: FormState, action: ActionType,
): FormState => {
  switch (action.type) {
    case ACTIONS.SET_SECTION_INDEX:
      return {
        ...state,
        sectionIndex      :action.payload,
        section           :state.sections[action.payload],
        isFirstSection    :action.payload === 0,
        isLastSection     :action.payload === state.sections.length - 1,
        progressPercentage:state.sections[action.payload]
          .overrideProgressPercentage
          ? state.sections[action.payload].overrideProgressPercentage
          : (100 / state.sections.length) * (action.payload + 1),
      }
    default:
      return state
  }
}

function useHandler(config: ConfigType) {
  const [
    state,
    dispatch,
  ] = useReducer(
    reducer, {
      sectionIndex      :0,
      section           :config[0],
      sections          :config,
      progressPercentage:config[0]?.overrideProgressPercentage || 100 / config.length,
      isFirstSection    :true,
      isLastSection     :config.length < 2,
    },
  )

  const setNextSectionIndex = useCallback(
    () => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:state.sectionIndex + 1,
      })
    }, [
      state.sectionIndex,
      dispatch,
    ],
  )

  const setPrevSectionIndex = useCallback(
    () => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:state.sectionIndex - 1,
      })
    }, [
      state.sectionIndex,
      dispatch,
    ],
  )

  const setSectionIndex = useCallback(
    (sectionIndex: number) => {
      dispatch({
        type   :ACTIONS.SET_SECTION_INDEX,
        payload:sectionIndex,
      })
    },
    [dispatch],
  )

  return {
    state,
    dispatch,
    setNextSectionIndex,
    setPrevSectionIndex,
    setSectionIndex,
  }
}

export default useHandler
