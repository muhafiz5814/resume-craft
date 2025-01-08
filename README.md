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

- Open project in any code editor of your choice, open terminal and then install dependencies using following command:
  ```bash
    npm install
  ```
- Run your local JSON Server on localhost port 3030.
  - **Strictly** use [this structure](#structure-of-json-server-database) to store data.
  - To setup and know more about `json-server` go [here](https://www.npmjs.com/package/json-server). (It will not take long, it's a 2-3 step process)

- Return to Resume Craft project terminal and run following command:
  ```bash
    npm start
  ```
- Hurray! You have successfully cloned and started the project in localhost environment.
- If you want to make any changes or code optimizations, create an issue [here](https://github.com/muhafiz5814/resume-craft/issues).
- If got assigned, make changes and make a PR mentioning the issue solved.

#### Structure of json server database
```json
{
  "resumes": [
    {
      "id": "DSfQoS0vDdlKAwIEXTR7A",
      "basicInfo": {
        "name": "Babil",
        "designation": "Developer",
        "address": "India",
        "email": "some@gmail.com",
        "phone": "1212121212",
        "website": ""
      },
      "aboutMe": "Tell something about yourself",
      "education": [
        {
          "school": "Aman",
          "startYear": "2024-01",
          "endYear": "2024-02",
          "description": "Higher Education"
        }
      ],
      "experience": [
        {
          "designation": "Web developmer",
          "organization": "Microsoft",
          "startYear": "2023-01",
          "endYear": "2024-01",
          "location": "India",
          "description": "Worked as an intern in Git team."
        }
      ],
      "projects": [
        {
          "title": "shopcart",
          "startMonth": "2024-01",
          "endMonth": "2024-02",
          "url": "www.project.com",
          "description": "A good project"
        }
      ],
      "skills": [
        {
          "skill": "cloud",
          "rating": "2"
        },
        {
          "skill": "web development",
          "rating": "4"
        }
      ]
    }
  ]
}
```
