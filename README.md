# REDUX FEEDBACK APP

## Description

_Duration: Weekend Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it?

For this project I used Redux within a React app in order to pass data from different pages of a survey to a reducer on the index page. I reused functions wherever possible, which helped reduce the amount of logic that needed to be incorporated on every page. I used the history.push() function from React in order to move the user between pages seamlessly.


### Prerequisites

Software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. For students, start at the home page to start the survey.
2. Go through each page and use the range selector to answer the prompts.
3. When finished with the survey, review your answers and submit!
4. Survey feedback is now saved on the database.

## Built With

- React
- Redux
- Express


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality!

## Support
If you have suggestions or issues, please email me at [krale006@umn.edu](www.google.com)