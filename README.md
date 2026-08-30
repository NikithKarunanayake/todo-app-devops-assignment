# Todo Application – Git & DevOps Team Collaboration

![CI](https://github.com/NikithKarunanayake/todo-app-devops-assignment/actions/workflows/ci.yml/badge.svg)

A responsive Todo List web application developed as part of the Advanced Git & DevOps Team Collaboration assignment. The project demonstrates feature-based Git development, pull requests, merge conflict resolution, automated CI/CD using GitHub Actions, and deployment to GitHub Pages.

## Live Application

**Live Website:**

https://nikithkarunanayake.github.io/todo-app-devops-assignment/

**GitHub Repository:**

https://github.com/NikithKarunanayake/todo-app-devops-assignment
---

## Student Information

Although this assignment was designed as a team collaboration task, this implementation was completed individually.

**Student:** Nikith Karunanayake

**Student ID:** ITBIN-2211-0200

**Role:** Full-Stack Developer & DevOps Engineer

### Individual Contribution

I completed the overall development and DevOps workflow for the project, including:

- Designed and developed the Todo application
- Implemented the user interface and responsive styling
- Implemented task creation and deletion
- Implemented task editing functionality
- Implemented task completion functionality
- Implemented All, Active, and Completed filters
- Implemented task counter functionality
- Implemented browser localStorage persistence
- Added error handling for localStorage loading and saving
- Created and managed Git branches
- Created feature branches for different development tasks
- Created and merged Pull Requests
- Demonstrated merge conflict creation and resolution
- Configured GitHub Actions for continuous integration
- Configured GitHub Actions for deployment
- Deployed the application using GitHub Pages
- Tested the application locally and on the deployed website
- Prepared the project documentation

---

# Project Overview

The project is a simple and responsive Todo List application that allows users to manage daily tasks.

Users can add tasks, edit existing tasks, mark tasks as completed, delete tasks, and filter tasks based on their completion status.

Task data is stored in the browser using `localStorage`, allowing tasks to remain available after refreshing the page.

The project was also used to demonstrate professional Git and DevOps practices, including feature branches, Pull Requests, merge conflict resolution, Continuous Integration, and Continuous Deployment.

---

# Features

## Task Management

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- View the total number of tasks

## Task Filtering

The application provides three filters:

- **All** – displays all tasks
- **Active** – displays incomplete tasks
- **Completed** – displays completed tasks

## Data Persistence

Tasks are stored in the browser using `localStorage`.

This means that task data remains available after refreshing the browser.

The application also includes error handling when loading or saving localStorage data so that invalid stored data does not cause the application to crash.

## Responsive User Interface

The application provides a responsive interface suitable for different screen sizes and devices.

---

# Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Browser localStorage

---

# Project Structure

```text
todo-app/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md