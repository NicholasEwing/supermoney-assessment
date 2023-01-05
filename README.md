[Click here to try a live demo!](https://cozy-sunburst-fd3eab.netlify.app/)

**Notes:**

- **Time Spent:** I crammed this into my busy week, so I've only worked on it for two days. I'd guess I spent about 10 - 12 hours to be super conservative.
- **Sliders:** Styling slider inputs is way harder than I imagined due to inconsistent browser behavior. I tried my best with these and figured it wasn't worth pouring more than an hour into. I think the design I used looks pretty good!
- **Directly Changing State:** A couple of my objects (`monthly` / `results`, also not the best names) in the `<ConfigureResult>` components are acting as application state and being directly modified. I know this a BIG no-no in React and would never be shipped to prod, but for the sake of time I wasn't able to correct this. I'd love to discuss a better solution for moving those variables into the state without infinite looping renders.
- **Remaining Debt Input:** This number input doesn't use commas - I spent about 45 minutes fighting with formatting to get a comma to appear while typing. However, this introduces a lot of edge-cases with strings that I didn't feel it was worth writing code and checking for. Overall, the commas are nice but they don't add much value to the app so I left the input field as a number for this assessment.
- **Potential QoL:** Numbers could get huge, so it might be worth limiting some number input fields to prevent insanely high values. In the future, mobile support could be added as well. It wasn't clear what screen sizes to support, so I ensured it looked better on my monitor (only ~1000px, it's an old Mac...) and anything larger.
- **Dashes For Incomplete Calculations:** Instead of display negative numbers or other confusing data, the `<ResultsBoxes>` display a simple `-`.

**Technologies Used:**

- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Finance Library by Trent Richardson](https://trentrichardson.com/examples/FinanceJs/index.html)
- Hosted on [Netlify](https://netlify.com/)
