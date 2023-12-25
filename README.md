# UK Pension Projection Calculator

A React application that calculates the pension projection based on user inputs. It uses Tailwind CSS for styling and provides an interactive form to enter details like current age, salary, annual bonus, pension pot, and more.

## Features

-   **Pension Projection Calculation**: Calculates future pension based on current age, salary, bonuses, contributions, and more.
-   **Local Storage**: Remembers your input between sessions.
-   **Responsive Design**: Styled with Tailwind CSS for a clean, responsive layout.

## Installation

Before installing, ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

    ```bash
    git clone https://yourrepository/uk-pension-projection-calculator.git
    cd uk-pension-projection-calculator
    ```

2. Install dependencies:

    `npm install`

3. Start the development server:

    `npm start`

4. Open http://localhost:3000 to view it in the browser.

## Usage

Fill in the form fields with your current financial details and future expectations. The app calculates the pension projection based on the input provided. You can clear the data to reset the form or revisit later to adjust and recalculate as needed.

## Components

-   **PensionProjectionCalculator**: The main component that orchestrates the form and results.
-   **CalculatorForm**: Manages and collects user input.
-   **ResultsTable**: Displays the calculated pension projection results.

## License

Distributed under the MIT License. See LICENSE for more information.
