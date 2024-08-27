# ResumeCraft

A resume craft react application which helps in creating, updating and viewing resumes.

## Features
- Good UI/UX
- Attractive GUI
- Easy to navigate
- Fetches the list of resumes from backend and shows on home screen.
- Can view individual resume details in whole
- Can create new resumes
- Can update existing resumes
- Can delete existing resumes

### Run Locally
- First clone the repo in local machine
- install dependencies using npm install.
- run npm start
- it will start two localhost servers, one for frontend and another for local json server backend
- backend server runs on port 3030 while frontend server runs on port 3000
- json server has data as "resumes" endpoint
- now you can use it

### Run using surge
To run using surge on local computer, first run the local server at port 3030 as it will interact with it.

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

## Note: 
Updates to this project such as code optimisation, new feature addition and other updates will be maintained in "updatesAfterSubmission" branch until evaluation completes. Checkout to see the updates and optimisations.
