# React Patterns: Render Props

## What is render prop

Render prop is a pattern for sharing code (state and logic) between React components using a prop whose value is a function.

## Counter Example

- Provider component: `CounterProvider`

  - contains state and state-updater function.
  - receives function that returns presentational components via `props.render`
  - renders presentational components by calling `render` prop (can be any other name) passing in the state and updater

- Presentational components: `ClickCounter`, `HoverCounter`, and `UpArrowCounter`

  - receives (pieces of)state and state updater via props
  - emit something to user based on state (it's up to individual component)
  - if given updater:
    - run it on some event (user-generated | browser generated)
    - run it asynchronously (setTimeout | setInterval | requestAnimationFrame)

- Container component: `CounterContainer`
  - renders provider components passing presentational-component-rendering-function via `render` prop
  - Each presentational component gets separate instance of counter state, so all counters can have different values from one another.
  - Set the key props to reset entire counters but this feels a little bit hacky...
    - You could create `useEffect` hook inside `Counter` that resets its counter on prop change(`props.isReset`), then you can set the App's `isReset` state back to `false` as soon as user increments the count again.
