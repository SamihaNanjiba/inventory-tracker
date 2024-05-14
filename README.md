# Inventory Tracking Web App - Backend

## Description

Simple Inventory Tracking Web Application with basic CRUD Functionalities.

## Key Features

- **Separation of Concerns:** Follows a similar pattern to the MVC (Model, View, Control) Architecture pattern.
The View part, or the Frontend is in a separate repository. See the section [additional info](#additional-information).

- **Implements Soft Delete:** During DELETE operation, an item is not permanently deleted, rather it can be flagged as deleted with an optional comment. A deleted item can also be restored again.

I also plan to add other features to the project, such as authentication, caching, etc.

## Setup Guide

If you wish to setup the project locally, follow the steps below:

- Clone the repository
- In the project directory run: `npm install` to install the required dependencies
- To start the server, run: `npm run start`

## Technologies Used

- **React**
- **Node.js**
- **Express**
- **MongoDB**

## Additional Information

The frontend repository for this project can be found here: [Frontend Repository](https://github.com/SamihaNanjiba/inventory-tracker-frontend)

A working demo of the entire project can be accessed here: [Inventory Tracker](https://inventory-tracker-tixq.onrender.com/)

This project is hosted with [Render](https://render.com).