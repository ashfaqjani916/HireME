HireME

A web application that helps users manage internship opportunities by sending reminder emails before deadlines. Users can create groups with friends to share internships, and the platform ensures duplicate opportunities are filtered out to prevent multiple reminder emails for the same internship.

Table of Contents

- [Description](#description)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

Description

Managing multiple internship applications and keeping track of deadlines can be challenging. This platform simplifies the process by:

- Allowing users to input internship opportunities with deadlines.
- Sending reminder emails a few hours before each deadline.
- Enabling users to create groups with friends to share internship opportunities.
- Filtering out duplicate internships to prevent redundant reminder emails.

Features

- Deadline Reminders: Receive timely email notifications before internship deadlines.
- Group Collaboration: Create groups to share internship opportunities with friends.
- Duplicate Filtering: Automatically identifies and filters out duplicate internships.
- Email Notifications: Sends consolidated emails to avoid inbox clutter.
- User Authentication: Secure login and registration using Firebase Auth.

Demo

*Link to live demo or screenshots if available.*

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Firebase Auth
- **Email Service**: Nodemailer
- **Frontend**: *[Specify if applicable, e.g., React, Angular]*
- **Others**: dotenv, cors

Prerequisites

- Node.js and npm installed
- MongoDB database setup
- Firebase project and service account
- Email Account for sending emails (e.g., Gmail SMTP settings)

Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   FIREBASE_PROJECT_ID=your-firebase-project-id
   FIREBASE_CLIENT_EMAIL=your-firebase-client-email
   FIREBASE_PRIVATE_KEY="your-firebase-private-key"
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password-or-app-password
   ```

4. Set up Firebase

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Navigate to **Project Settings > Service Accounts**.
   - Generate a new private key and save the JSON file.
   - Update the `.env` file with the Firebase credentials.

5. **Set up MongoDB**

   - Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Update the `MONGODB_URI` in your `.env` file.

## Usage

1. **Start the server**

   ```bash
   npm start
   ```

2. **Access the application**

   Open your browser and navigate to `http://localhost:3000`.

3. **Register/Login**

   - Use the signup page to create a new account.
   - Log in using Firebase Authentication.

4. **Create a Group**

   - Navigate to the group creation page.
   - Generate a unique join code to invite friends.

5. **Add Internship Opportunities**

   - Input internship details, including deadlines.
   - Share opportunities within your group.

6. **Receive Reminder Emails**

   - The system will send reminder emails before deadlines.
   - Duplicate internships are filtered to avoid multiple emails.

## API Endpoints

### **User Routes**

- **Register User**

  ```http
  POST /users/register
  ```

  Registers a new user after Firebase authentication.

- **Login User**

  ```http
  POST /users/login
  ```

  Authenticates a user and returns a token.

### **Group Routes**

- **Create Group**

  ```http
  POST /groups/create
  ```

  Creates a new group and generates a join code.

- **Join Group**

  ```http
  POST /groups/join
  ```

  Allows a user to join a group using a join code.

### **Internship Routes**

- **Add Internship**

  ```http
  POST /internships/add
  ```

  Adds a new internship opportunity.

- **Share Internship**

  ```http
  POST /internships/share
  ```

  Shares an internship within a group.

- **Get Internships**

  ```http
  GET /internships/group/:groupId
  ```

  Retrieves all internships for a group.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**.

2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**.

Please make sure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [Your Name](https://www.linkedin.com/in/your-linkedin-profile)

---

Feel free to customize this `README.md` to better fit your project's needs. Add any additional sections or details that are relevant.
