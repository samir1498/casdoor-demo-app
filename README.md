# Casdoor Demo App

This repository contains a demo React application integrated with Casdoor for user authentication and authorization.

## Getting Started

To get started with the demo application, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/samir1498/casdoor-demo-app.git
   cd casdoor-demo-app
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the Development Server:**

   ```bash
   pnpm run dev
   ```

   This command launches your React development server, usually accessible at [http://localhost:3000](http://localhost:5173).

## Setting Up Casdoor with Docker

Get Casdoor running with Docker for a streamlined experience:

1. **Ensure Docker is Installed:** Verify and install Docker from [https://www.docker.com/](https://www.docker.com/).

2. **Run the Casdoor Container:** Launch a Casdoor container with the provided command:

   ```bash
   docker run -p 8000:8000 casbin/casdoor-all-in-one
   ```

   This command runs a Casdoor container and maps its port 8000 to your host machine's port 8000. You can access the Casdoor web interface by opening [http://localhost:8000](http://localhost:8000) in your web browser.

   **Default Login Credentials:**

   - **Username:** admin
   - **Password:** 123

   Change these credentials after setup for security.

3. **Configure Casdoor:**

   After accessing Casdoor's web interface, follow these steps to set up your organization, application, users, and roles:

   - **Create Organization:** Create a new organization for your application.
   - **Create Application:** Inside your organization, create a new application for your React application.
   - **Define Roles:** Define the necessary roles for your application (e.g., admin, user).
   - **Create Users:** Add users to your organization and assign them roles as needed.
