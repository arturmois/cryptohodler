# CryptoHodler

A full-stack application for managing cryptocurrency portfolios.

## Project Structure

The project is divided into two main parts:
- `frontend/`: React.js application
- `backend/`: Node.js/Express.js API with MySQL database

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
DB_USER=your_database_user
DB_PWD=your_database_password
DB_NAME=your_database_name
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
```

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
npx sequelize-cli db:migrate
```

4. Start the development server:
```bash
npm run dev
```

The backend server will start on `http://localhost:3000` by default.

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will start on `http://localhost:3000` by default.

## Available Scripts

### Backend
- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot-reload

### Frontend
- `npm start`: Start the development server
- `npm run build`: Build the application for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## Technologies Used

### Backend
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT for authentication
- bcryptjs for password hashing

### Frontend
- React.js
- React Router
- Axios for API calls
- ESLint for code linting

## License

This project is licensed under the MIT License - see the LICENSE file for details.
