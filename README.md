# Keeper

Keeper is a React application inspired by Google Keep for note-taking. Users can add, view, and delete notes. This project demonstrates the use of React hooks and component-based architecture.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/keeper.git

2. Navigate to the project directory:
    ```sh
    cd keeper

3. Install the dependencies:
    ```sh
    npm install
4. Start the development server:
    ```sh
    npm start
    
    The application should now be running on http://localhost:3000.

## Usage

1. Open the application in your web browser.
2. Use the input fields to add a title and content for your note.
3. Click the "Add" button to save the note.
4. Your notes will appear below the input fields.
5. Click the "DELETE" button on a note to remove it.


## Components

### App

The `App` component is the main component that holds the state and manages the logic for adding and deleting notes. It renders the `Header`, `CreateArea`, and `Footer` components, and it dynamically generates `Note` components for each item in the state.

### CreateArea

The `CreateArea` component contains the form for creating new notes. It accepts props for handling changes to the input fields and submitting the form.

### Header

The `Header` component displays the application title.

### Footer

The `Footer` component displays the current year.

### Note

The `Note` component displays individual notes with a title and content. It also includes a button to delete the note.

## Author

Kunal Tyagi