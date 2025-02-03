# ResumeCraft

A react application which helps in creating, updating and viewing multiple resumes.  
This project is solution to a Hackathon problem which made me secure `Winner's Position` in Hackathon.  
Even though it was a Hackathon project, I still do enhancements and code optimizations to keep the project and my skills update.

## Features
- Good UI/UX
- Attractive GUI
- Easy to navigate
- Fetches the list of resumes from backend and shows on home screen.
- Can view individual resume details in whole
- Can create new resumes
- Can update existing resumes
- Can delete existing resumes

### Project overview
  <p align="center"><b>Click on image to see overview video tutorial.</b></p>
  
[![Home page](https://github.com/user-attachments/assets/0f34c3ef-3681-4c20-a70d-a2d7efa22c91)](https://drive.google.com/file/d/1Qij1WnI_CjCfoXYwlaNS2CCk9fyha-Cc/view?usp=sharing)


### Run Locally
- First Fork the project to include it in your repositories.
  - See how to fork [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

- Clone the repo in local machine.
  - Open CLI or terminal and go to the directory you want to clone the project in and then type following command. (Replace `<YOUR_GITHUB_USERNAME>` with your own github username)
    
  ```bash
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/resume-craft.git
  ```
  - See how to clone [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Main project directory has two sub-directories for `Backend` and `Frontend`.

Let's first run backend so that frontend can connect with it.

#### Start Backend

- Open project in any code editor of your choice, open terminal and then go to the `Backend` directory from current main `resume-craft` directory using the following command: 
  ```bash
    cd Backend
  ```

- Install all dependencies by running following command:
  ```bash
    npm install
  ```

- Create a `.env` file and set environment variable `DATABASE_CONNECTION_STRING` to your mongoDB atlas database.
  - If not sure how to connect to MongoDB atlas, take a reference [**here from step 4-8**](https://www.geeksforgeeks.org/how-to-connect-node-js-to-mongodb-atlas-using-mongoose/),  which will work for this setup.

- Finally to start backend locally, run following command:
  ```bash
    npm start
  ```

- You have successfully cloned and started the backend in `localhost` environment on port - `3030`.


#### Start Frontend

- To start frontend, come back to main project directory `resume-craft` from `Backend` directory and go to `Frontend` directory using following commands: 
  ```bash
    cd ..
    cd Frontend
  ```

- Install all dependencies by running following command:
  ```bash
    npm install
  ```

- Finally to start frontend locally, run following command:
  ```bash
    npm start
  ```

- You have successfully cloned and started the frontend in `localhost` environment on port - `3000`.

There is no extra step needed to connect frontend and backend, these two are already connected locally if both are running on specified ports.

If you wish to make any changes or code optimizations that can enhance appliction performance, create an issue [here](https://github.com/muhafiz5814/resume-craft/issues).

If got assigned, do desired changes and make a PR mentioning the issue solved.
