Brief
This project involves building a RESTful API for a simple task manager application using Node.js, Express.js, and NPM packages. The API allows users to perform CRUD operations (Create, Read, Update, and Delete) on tasks.

Project Description
The API enables users to manage tasks, each having a title, description, completion status, an optional priority level, creation date and last updated date. The project includes setting up a basic Node.js environment with Express.js and other necessary NPM packages. The API supports input validation, error handling, and is tested using Postman or Curl.

API Endpoints ->

GET /api/tasks: Retrieve all tasks.

GET /api/tasks?completed=false&sortBy=desc. Retrieve all task which satisfy the query parameters

GET /api/tasks/:taskId: Retrieve a single task by its ID.

POST /api/tasks: Create a new task.

PUT /api/tasks/:taskId: Update an existing task by its ID.

DELETE /api/tasks/:taskId: Delete a task by its ID.

GET /api/tasks/priority/:level: Retrieve tasks based on priority level (low, medium, high).

Features

1. In-memory data store (e.g., an array) to store tasks.
2. Proper error handling for invalid requests(made custom error classes -> /utils/custom-error.js)
3. Used express-validator package for Input validation. Ensures title and description are not empty, completion status is a boolean value and priority is either low/medium/high
4. Filtering and sorting(asc/desc) for the GET /tasks endpoint based on completion status and creation date.
5. Assign priority level to tasks and support for retrieving tasks by priority.
6. used uuid packge for generating unique taskId.

Project Setup ->

Prerequisites ->

1. Node.js
2. NPM
   Installation
   Clone the repository:
   bash
   Copy code
   git clone https://github.com/Gagan3130/task-manager-api.git
   Navigate to the project directory:
   bash
   Copy code
   cd task-manager-api
   Install the dependencies:
   npm install

Start the server:
npm start

The API will be available at http://localhost:4000.

API Usage
Example Requests ->

1. Retrieve All Tasks ->
   method -> GET
   endpoint -> /api/tasks/completed=false&sortBy=desc
   Response:
   {
   count: 2,
   tasks: [
   {
   "id": "cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f",
   "title": "Install express",
   "description": "Install express as a development dependency",
   "completed": false,
   "priority": "high",
   "createdAt": 1720861957341,
   "updateAt": 1720861957341
   },
   ...
   ]
   }

2. Retrieve a Task by ID
   method -> GET
   endpoint -> /api/tasks/cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f
   Response:
   {
   "id": "cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f",
   "title": "Install express",
   "description": "Install express as a development dependency",
   "completed": false,
   "priority": "high",
   "createdAt": 1720861957341,
   "updateAt": 1720861957341
   }

3. Create a New Task
   method -> POST
   endpoint -> /api/tasks
   Request Body:
   {
   "title": "Updated Task 1", "mandatory"
   "description": "Updated description for Task 1", "mandatory"
   "completed": true, "optional"
   "priority": "low" "optional
   }

   Response:
   {
   "id": "cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f",
   "title": "Updated Task 1",
   "description": "Updated description for Task 1",
   "completed": true,
   "priority": "low",
   "createdAt": 1720861957341,
   "updateAt": 1720861957341
   }

4. Update a Task by ID

   method -> PUT
   endpoint -> /api/tasks/cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f
   Request Body:
   {
   "title": "Updated Task 1", "optional"
   "description": "Updated description for Task 1", "optional"
   "completed": true, "optional"
   "priority": "low" "optional
   }

   Response:
   {
   "id": "cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f",
   "title": "Updated Task 1",
   "description": "Updated description for Task 1",
   "completed": true,
   "priority": "low",
   "createdAt": 1720861957341,
   "updateAt": 1720861957341
   }

5. Delete a Task by ID
   method -> DELETE
   endpoint -> /api/tasks/cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f
   Response:
   {
   count: 1,
   tasks:[
   {
   "id": "cb2d195f-5fe2-4ec3-a6a3-4cb800142a3f",
   "title": "Install express",
   "description": "Install express as a development dependency",
   "completed": false,
   "priority": "high",
   "createdAt": 1720861957341,
   "updateAt": 1720861957341
   },
   ...
   ]
   }

   Testing
   Test the API using Postman or Curl to ensure it works as expected.

  Fork this Postman collection link for testing -> https://www.postman.com/bold-spaceship-371385/workspace/airtribe-be-api/collection/29324337-ed369774-0ed4-4d57-9a51-8f3365fad6f4?action=share&creator=29324337


Feel free to customize the above README.md file with your specific details, such as the repository URL and your contact information.
