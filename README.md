<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!
-->

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <!-- <img src="murple_logo.png" alt="logo" width="140"  height="auto" /> -->
  <h2>Ankit</h2>
  <br/>

  <h3><b> LeaderBoard</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[LeaderBoard\] ](#-leaderboard-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [API Key Generation](#api-key-generation)
  - [Endpoints](#endpoints)
    - [`/games/`](#games)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [LeaderBoard] <a name="about-project"></a>

**[LeaderBoard]** is a Html , Css & javascript based project

## 🛠 Built With <a name="built-with"></a>

1- HTML.
2- CSS.
3- Javascript.

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">HTML</a></li>
    <li><a href="https://reactjs.org/">CSS</a></li>
    <li><a href="https://reactjs.org/">Javascript</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Webpack used

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

1. Web browser
2. Code editor.
3. git-smc.

### Setup

Clone this repository to your desired folder:

*Run this command:*

````sh
  cd my-project
  git clone git@github.com:ankitt26/LeaderBoard.git
````

### Install

Install this project with:


*Example command:*
````sh
  cd my-project
  npm install
````

--->

### Usage

To run the project, execute the following command:

````sh
cd my-project
npm run start
````

## API Key Generation

To make requests to the API use this link 🔗
````sh
`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games`
````
Follow the steps below to generate the key:



## Endpoints

This project includes the following endpoints:

### `/games/`

**Allowed actions:**

- POST: Create a new game

**Mandatory parameters for POST action:**

- `name`: Name of the game

**Parameters example for POST action (sent in the body of the request in JSON format):**

```json
{
  "name": "Example Game"
}

````

**Return value: unique identifier for the game:**
````sh 
{
	"result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
}
````

**/games/:id/scores/**

URL parameters:

- id: unique identifier of the game

URL example: `/games/Zl4d7IVkemOTTVg2fUdz/scores/`

Allowed actions:

- POST to create a new score for the given game
- GET to get a list of scores for the given game

Mandatory parameters for POST action:

- user: name of the user
- score: points (number)

Parameters example for POST action (sent in the body of the request in JSON format):
````sh
{ 
	"user": "John Doe",
	"score": 42
}
````

Return value for POST action:
````sh
{
	"result": "Leaderboard score created correctly."
}
````

Parameters for GET action: *none*

Return value for GET action:
````sh
{
    "result": [
        {
            "user": "John Doe",
            "score": 42
        },
        {
            "user": "Peter Parker",
            "score": 35
        },
        {
            "user": "Wonder Woman",
            "score": 50
        }
    ]
}
````
<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Run tests

coming soon

### Deployment

➡️ coming soon...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Ankit**

- GitHub: [@githubhandle](https://github.com/ankitt26)
- Twitter: [@twitterhandle](https://twitter.com/ankit26k)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ankit26k/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Live update leaderboard usong API.
- You can add score in leaderboard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a star

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thanks microverse .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
