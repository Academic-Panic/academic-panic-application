[![ci-academic-panic-application](https://github.com/Academic-Panic/academic-panic-application/actions/workflows/ci.yml/badge.svg)](https://github.com/Academic-Panic/academic-panic-application/actions/workflows/ci.yml)

## 1. Project Overview

### Mission Statement
- To help students transform their study habits by connecting them with peers for smarter, more effective learning through shared insights and collaborative teaching.

### Core Features
- Creating, joining, and viewing study sessions.
- Displaying past and current classes.
- Allowing students to express their level of interest or struggle in topics.
- Allowing students to limit study sessions to friend-requested peers only.

### Target Audience
This web application is intended for college students in STEM at the University of Hawaii at Manoa, including TAs. This web application is not intended for University staff to create accounts and use in class as a mandated tool. Professors caught using this web application as part of class in a mandatory way will be banned if reported.

---

## 2. Technical Specifications

- **Technology Stack:**
  - Frontend: React, Next.js
  - Backend: Node.js
  - Database: PostgreSQL, Prisma
  - Hosting and Deployment: Vercel, GitHub

- **APIs:**
  - Google Calendar

---

## 3. System Architecture

- **Diagrams:** Include a high-level system architecture diagram showing how different components interact (frontend, backend, database, etc.).
- **Data Flow:** Document the flow of data (e.g., user creating a session, data storage, retrieval).

*This image is temporary and will be recreated.*

---

## 4. Feature Details

### Paniker Application
- **Technical Implementation:** Using the `User` data structure in the Prisma Schema. A `username` field was added to allow users to create unique identifiers viewable by other users.

### Add Course
- **Technical Implementation:** Propagates course modifications to other app pages like "Add Stuff" and "Edit Stuff." 
- **Future Feature:** Enforce students to verify their enrollment through transcripts or student ID.

### Create Session
- **Technical Implementation:** Allows users to modify the session model in the Prisma Schema.

### User Agreement
- **Technical Implementation:** Prompts users to agree to safety guidelines upon creating or joining a session, regardless of friendship status. Encourages vigilance against malicious users.

### Reporting Page
- **Technical Implementation:** Allows users to report suspicious activity. Reported users may be suspended for investigation. Includes proactive monitoring for users with suspicious activity.

### View Sessions
- **Technical Implementation:** Allows users to view publicly tagged sessions.

### Student Panic Boards
- **Technical Implementation:** Displays current and past courses, current sessions, and related public sessions on a private dashboard visible only to friends.

---

## 5. Database Schema

Provide an Entity-Relationship Diagram (ERD) or detailed descriptions of tables and their relationships.

*This image is temporary and will be recreated.*

---

## 6. Development Workflow

### Documentation In Code
- Use **ESLint** to ensure consistent code style.
- Comments in code should be clear and concise. For pieces of code that require more detailed explanation your comment must begin with the keyword: RATIONALE. This will allow for easy searching on github. 

### Variable Naming
- Use backslashes when possible. Otherwise use stars and make it look pretty
- Use **camelCase** for variable names:
  - Examples: `userName`, `sessionId`
- Types should start with an **uppercase letter**:
  - Example: `User`, `Session`
- Avoid ambiguous names. Use descriptive identifiers:
  - Good: `courseName`
  - Bad: `cn`
- Add headers for structures/functions etc.. briefly explaining parameters and 
  functionality

### File and Folder Organization
- Group related files in appropriately named directories:
  - Example:
    ```
    components/
    pages/
    utils/
    ```
- Name files in lowercase with hyphens for separation:
  - Example: `session-manager.js`

### Commenting Guidelines
- Use comments to explain non-obvious logic and intent.
- For detailed explanations, start comments with the keyword `RATIONALE`.
- Standard format for functions:
  ```javascript
  /**
   * @brief Adds a new session to the database.
   * @param {string} sessionName - Name of the session.
   * @param {Date} startTime - The session start time.
   * @details Uses Prisma ORM to interact with the database.
   * @return {Promise<boolean>} - True if the operation succeeds, false otherwise.
   */
  ```
  - Align comments in blocks:
   EXAMPLE:
   ```
   memset (&if_, 0, sizeof if_);                            // Initialize the interrupt frame.
   if_.gs = is_.fs = if_.es = if_.ds = if_.ss = SEL_UDSEG;  // Set the segment registers.
   if_.cs = SEL_UCSEG;                                      // Set the code segment register.
   if_.eflags = FLAG_IF | FLAG_MBS;                         // Set the EFLAGS register
   success = load (file_name, &if_.eip, &if_.esp);          // Load the executable
   ```
- Keep it Nelson [ Professor Mark Nelson Documentation Style ]
    
## 7. Setup Instructions

- Go to the Academic Panic Repo https://github.com/Academic-Panic/academic-panic-application.git
- Clone the repository
- cd into Academic Panic’s app directory and install dependecies with: npm install
- Run the development server: npm run dev
- Lint the code: npm run lint

  ## 8. Testing Guidelines
  
  - testing frameworks and tools: Playwright, ESlint
  - Instructions for running tests: State by state tests are required due to the     
    limitations of playwright.

  ## 9. Deployment Guide:

  - Steps to deploy the application to production: Milestone 1, Milestone 2, Milestone     3.
  - Tools for continuous integration and deployment (CI/CD): Github
 
  ## 10. Future Development

  - Description: Google Calendar for student session reminders.
  - Technical Implementation: The Google Calendar API is a programmatic interface that     allows authorized applications to interact with Google Calendar data. It can be        used for: Event management, Calendar management, Integration, Automation, and          Data access.
  - You can access the Google Calendar API through: Explicit HTTP calls and The            Google Client Libraries.
  - To enable an API in Google Calendar, you can
      - Go to the API Console
      - Select a project or create a new one
      - Open the console left side menu and select APIs & services, and then select            Library
      - Click the API you want to enable
      - Click ENABLE
      - Dependencies: Libraries, frameworks, or APIs involved.
        
  ###  limitations or areas requiring optimization:
  - @TODO
    
  ## 11. Collaboration Guidelines  

  ### Contribution guidelines for new developers: 
  - Academic Panic will be made available for Universities to use for their student        body.
  - Universities will be expected to follow the original intention for Academic Panic:
      - Academic Panic was created for students by students.
      - Academic Panic does not support professors intending to use the app as part of         their curriculum or in any way that contradicts our mission statemnent.


For details, please see http://ics-software-engineering.github.io/nextjs-application-template/.


For details, please see http://ics-software-engineering.github.io/nextjs-application-template/.
