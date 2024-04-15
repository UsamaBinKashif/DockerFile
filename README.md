
# Node.js Timezone Application

This Node.js application allows users to select a country/city and view the current time in that timezone.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 10 or higher)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/node-timezone-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node-timezone-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To run the application, use the following command:

npm start
The application will prompt you to select a country/city from a list, and then display the current time in that timezone.

Docker
You can also run the application in a Docker container. Make sure you have Docker installed on your machine.

Build the Docker image:

bash
Copy code
docker build -t node-timezone-app .
Run the Docker container:

bash
Copy code
docker run -it --rm node-timezone-app
Functionality
Select a country/city from a predefined list of timezones.
View the current time in the selected timezone.
Continuous prompt until a valid selection is made.
No external ports exposed.
Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.