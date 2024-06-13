This is the TypeScript version of the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/huang0h/c4c-challenge-ts-fall-2024.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`

##New features
1. The setup instructions are the same
2. I decided to continue the project using typescript and persist the partner data in a JSON file
The users are able to create a new partner by entering an id, name, url for a logo, description, and
whether the organization is active or not. The data is persited and the user can delte or view the 
parther organizations.

3. I enjoyed working on this project as it was similar to some work I've done before in Web Dev (CS4550).
It was great review on typescript since I hadn't coded in react in a while. I learned more about making the backend of a web app of this type. One challenge I faced was related to GitHub. I refreshed my memory on Github since I had issues with merge conflicts when I worked on this project. I decided to create a new clean repo to resolve my issues. If I were to do this again I would spend more time on organization and add more bonus features. The only additional feature I made was persisting data in a JSON file.