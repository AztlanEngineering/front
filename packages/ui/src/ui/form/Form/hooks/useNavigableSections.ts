import {
  useEffect,
  useCallback,
  useReducer,
} from 'react'
import type {
  SectionConfig,
  SectionsController,
  SectionState,
} from '@aztlan/react-hooks'
import { sectionsReducer } from '@aztlan/react-hooks'
import { useHistory } from 'react-router-dom'

export interface NavigableSectionConfig extends SectionConfig {
  path:string;
}

export type NavigableSectionsConfig = NavigableSectionConfig[]

export interface NavigableSectionsOptions {
  loadInitialUrl?:boolean;
}

export interface NavigableSectionsState extends SectionState {
  currentSection:NavigableSectionConfig | null;
  sections      :NavigableSectionsConfig;
}

export type NavigableSectionsReturn = [NavigableSectionsState, SectionsController]
/**
 * A hook for managing a list of sections with navigation functions.
 * @param {NavigableSectionsConfig} config - The list of sections to manage.
 * @param {NavigableSectionsOptions} options - Optional parameters including
 * whether to load the initial URL.
 * @returns {NavigableSectionsReturn} tuple containing the current state and a controller object
 * with functions for setting the current section index, moving to the next section,
 * and moving to the previous section.
 * */
function useNavigableSections(
  config: NavigableSectionsConfig,
  options: NavigableSectionsOptions = {},
): NavigableSectionsReturn {
  const { loadInitialUrl = false } = options
  const history = useHistory()
  const { location } = history

  const initialState = useCallback(
    (initialConfig: NavigableSectionsConfig): NavigableSectionsState => {
      if (loadInitialUrl) {
        const currentPath = location.pathname
        const initialIndex = initialConfig.findIndex((section) => section.path === currentPath)
        if (initialIndex < 0) {
          throw new Error(`Initial path not found in the sections config: ${currentPath} tried: ${JSON.stringify(initialConfig.reduce(
            (
              a, e,
            ) => [
              ...a,
              e.path,
            ], [],
          ))}`)
        }
        const initialSection = initialConfig[initialIndex]
        return {
          sections          :initialConfig,
          currentIndex      :initialIndex,
          currentSection    :initialSection,
          isFirst           :initialIndex === 0,
          isLast            :initialIndex === initialConfig.length - 1,
          progressPercentage:initialConfig[initialIndex]?.overrideProgressPercentage
          || 100 / config.length,
        }
      }
      return {
        sections          :initialConfig,
        currentIndex      :0,
        currentSection    :initialConfig[0] || null,
        isFirst           :true,
        isLast            :initialConfig.length <= 1,
        progressPercentage:initialConfig[0]?.overrideProgressPercentage
          || 100 / initialConfig.length,
      }
    }, [loadInitialUrl],
  )

  const [
    state,
    dispatch,
  ] = useReducer(
    sectionsReducer<NavigableSectionsState>, config, initialState,
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

  useEffect(
    () => {
      if (state.currentSection.path !== location.pathname) {
        history.push(config[state.currentIndex].path)
      }
    }, [
      state.currentIndex,
      config,
    ],
  )

  useEffect(
    () => {
      if (loadInitialUrl) {
        const currentPath = location.pathname
        const sectionIndex = config.findIndex((section) => section.path === currentPath)
        if (sectionIndex >= 0 && sectionIndex !== state.currentIndex) {
          setIndex(sectionIndex)
        }
      }
    }, [],
  )

  return [
    state,
    {
      setIndex,
      setNext,
      setPrevious,
    },
  ]
}
export default useNavigableSections
