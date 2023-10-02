# YiFi


https://github.com/gregdevs/yahoo-finance-comments-sample/assets/3936775/ee02c19f-53d6-440a-a5c8-14f2a3d1515c

Simple React Application that renders out a comment tree similar to HackerNews and the like;

Has a backend at `/server` that fetches the data and performs some simple transformation to serve up to FE

## To get started

- First run `nvm use` (node 18+)
- `npm i`

### `npm run start:server`

Runs the express app on port 3001;

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

API endpoints:
`http://localhost:3001/yahoo`

Returns the Comment data in a parent > child hiearchy format
<img width="1117" alt="Screenshot 2023-10-02 at 9 56 18 AM" src="https://github.com/gregdevs/yahoo-finance-comments-sample/assets/3936775/c003044f-f59f-4989-a357-388065b3e5d3">

