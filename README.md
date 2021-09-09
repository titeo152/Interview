# Interview

This document will explain logic behind this feature:

## Current Selected Button

- Button selected will be store in `currentButtonSelected` State.
- This state will be used to detemine which button is selected, which also toggle the `border` CSS style in UI.

## Handle Click event

\- Whenever we click in button, `handleSelected` will catch the set `currentButtonSelected and currentActive` and the same in `localStorage` for refresh purpose.

- Click `yellow button` => `green button` is **inactivate**
- Click `green button` => `yellow button` is **inactivate**
- Click `reset button` => `all button` is **activate** and selected button will be `blue button`
- Click `blue button` => `all button` is **activate** and selected button will be `blue button`.
If we click `blue button` after click `yellow button` then the `yellow button` will be **inactivate** because we can't click yellow button consecutively

- we use **inactive/active status** for the meaning is `this button is clickable or not`

## Get state when refreshing

- I use `localStorage.setItem and localStorage.getItem` to store data to local storage. `UseEffect` will run only one time when component render the setState using data in localStorage.

## Testing

- I use `pre tag` to see which button is click and active list status showed like the right behaviour.
