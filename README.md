# Math Questions Interface

This project is a web interface for creating and managing mathematical questions. Users can input questions, provide multiple-choice options, and categorize them by difficulty level. The application allows for dynamic addition of questions and options, and it supports exporting the questions in JSON format and generating LaTeX code for PDF generation.

## Features

- Dynamic question and options input
- Difficulty tagging (easy, medium, hard)
- Export questions in JSON format
- Generate LaTeX code for PDF creation

## Project Structure

```
math-questions-interface
├── public
│   ├── index.html          # Main HTML document
│   └── styles.css         # Styles for the web interface
├── src
│   ├── components
│   │   ├── QuestionBox.js  # Component for question input
│   │   ├── OptionsBox.js    # Component for answer options
│   │   └── DifficultyTag.js  # Component for difficulty selection
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── utils
│       └── export.js       # Utility functions for exporting questions
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd math-questions-interface
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the web interface in your default browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.