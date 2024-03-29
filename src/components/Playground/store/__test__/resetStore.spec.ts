import playgroundReducer, {
  initialState,
  resetStore,
  setCurrentStep,
} from "../slices"

describe("initial resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreState = playgroundReducer(setCurrentStepState, resetStore())

    expect(resetStoreState).toEqual(initialState)
  })
})
