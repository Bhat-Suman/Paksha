# Paksha - Pooja Registration System - Codebase Index

**Date:** November 1, 2025  
**MongoDB Connection:** mongodb+srv://paksha:paksha@paksha.iabbkzb.mongodb.net/poojaDB

---

## 🎯 System Status

✅ **Backend Server:** Running on port 5000  
✅ **Frontend Server:** Running on port 3000  
✅ **MongoDB:** Connected to cluster `paksha.iabbkzb.mongodb.net`  
✅ **Database:** poojaDB  

---

## 📁 Project Structure

```
paksha/
├── frontend/                    # React frontend application
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── background.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       # Navigation component
│   │   │   └── ContactBox.js   # Contact information component
│   │   ├── pages/
│   │   │   ├── Home.js         # Landing page
│   │   │   ├── PoojaForm.js    # Pooja registration form
│   │   │   ├── LodgeBooking.js # Lodge booking page
│   │   │   ├── AboutUs.js      # About page
│   │   │   └── Ghoshala.js     # Ghoshala page
│   │   ├── Admin.js            # Admin dashboard to view registrations
│   │   ├── RegistrationForm.js # Alternative registration form
│   │   ├── App.js              # Main React app with routing
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles with Tailwind
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── pooja-registration-backend/  # Express.js backend
    ├── models/
    │   └── Registration.js      # Mongoose schema for registrations
    ├── routes/
    │   └── registration.js      # API routes for registration operations
    ├── .env                     # Environment variables (MongoDB URI, PORT)
    ├── app.js                   # Main Express application
    └── package.json
```

---

## 🔌 API Endpoints

### Backend (http://localhost:5000)

#### 1. POST `/api/register`
**Purpose:** Register a new pooja  
**Request Body:**
```json
{
  "poojaType": "Shradha",
  "name": "Full Name",
  "gotra": "Gotra Name",
  "date": "2025-11-01T00:00:00.000Z",
  "place": "Place Name",
  "phone": "1234567890",
  "remarks": "Optional remarks"
}
```
**Response (Success):**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "_id": "...",
    "poojaType": "Shradha",
    "name": "Full Name",
    "gotra": "Gotra Name",
    "date": "2025-11-01T00:00:00.000Z",
    "place": "Place Name",
    "phone": "1234567890",
    "remarks": "Optional remarks",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

#### 2. GET `/api/registrations`
**Purpose:** Get all registrations  
**Response:**
```json
[
  {
    "_id": "...",
    "poojaType": "Shradha",
    "name": "Full Name",
    "gotra": "Gotra Name",
    "date": "2025-11-01T00:00:00.000Z",
    "place": "Place Name",
    "phone": "1234567890",
    "remarks": "Optional remarks",
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

---

## 🗄️ Database Schema

### Registration Collection
```javascript
{
  poojaType: String (required, trimmed),
  name: String (required, trimmed),
  gotra: String (required, trimmed),
  date: Date (required),
  place: String (required, trimmed),
  phone: String (required, trimmed),
  remarks: String (trimmed, optional),
  timestamps: true (createdAt, updatedAt)
}
```

---

## 🔄 Frontend-Backend Integration

### Registration Forms
Both `PoojaForm.js` and `RegistrationForm.js` integrate with the backend:

```javascript
// POST request to register pooja
axios.post('http://localhost:5000/api/register', {
  poojaType,
  name,
  gotra,
  date: new Date(date).toISOString(),
  place,
  phone,
  remarks
})
```

### Admin Dashboard
`Admin.js` fetches and displays all registrations:

```javascript
// GET request to fetch all registrations
axios.get('http://localhost:5000/api/registrations')
```

---

## 🎨 Available Pooja Types

1. Shradha
2. Paksha
3. Pinda Pooja
4. Satyanarayan Pooja
5. Rudrabhishek
6. Lakshmi Pooja
7. Navagraha Pooja

---

## 🛣️ Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home.js | Landing page |
| `/pooja` | PoojaForm.js | Pooja registration form |
| `/lodge` | LodgeBooking.js | Lodge booking page |
| `/admin` | Admin.js | Admin dashboard |
| `/about` | AboutUs.js | About page |
| `/ghoshala` | Ghoshala.js | Ghoshala page |

---

## 🔧 Environment Configuration

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://paksha:paksha@paksha.iabbkzb.mongodb.net/poojaDB?retryWrites=true&w=majority&appName=paksha
NODE_ENV=development
```

---

## 📦 Dependencies

### Frontend Dependencies
- **react** (^18.2.0): UI library
- **react-dom** (^18.2.0): React DOM rendering
- **react-router-dom** (^7.9.5): Routing
- **axios** (^1.6.2): HTTP client for API requests
- **tailwindcss** (^3.3.5): CSS framework
- **react-scripts** (5.0.1): Create React App scripts

### Backend Dependencies
- **express** (^5.1.0): Web framework
- **mongoose** (^8.19.2): MongoDB ODM
- **cors** (^2.8.5): CORS middleware
- **dotenv** (^17.2.3): Environment variables

---

## 🚀 How to Run

### Backend
```bash
cd pooja-registration-backend
npm install
npm start
# Server will run on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm start
# App will run on http://localhost:3000
```

---

## ✅ Recent Fixes Applied

1. **Fixed PoojaForm.js date formatting issue**
   - Added ISO string conversion for dates before sending to backend
   - Added proper validation and error handling
   - Improved success/error messages with emoji indicators

2. **Removed MongoDB deprecation warnings**
   - Removed `useNewUrlParser` and `useUnifiedTopology` options
   - These options are no longer needed in Mongoose 6+

---

## 🔐 CORS Configuration

Backend CORS is configured to accept requests from:
- **Origin:** http://localhost:3000
- **Methods:** GET, POST, PUT, DELETE
- **Headers:** Content-Type, Authorization
- **Credentials:** true

---

## 📊 Data Flow

```
User Input (Frontend Form)
    ↓
FormData with ISO Date
    ↓
Axios POST to /api/register
    ↓
Backend Validation
    ↓
Save to MongoDB (poojaDB.registrations)
    ↓
Response to Frontend
    ↓
Display Success/Error Message
```

---

## 🔍 Key Features

### Frontend
- Responsive design with Tailwind CSS
- Form validation (client-side)
- Success/error notifications
- Admin dashboard with data table
- Auto-refresh functionality for admin panel
- Formatted date display

### Backend
- RESTful API design
- Comprehensive error handling
- Request logging for debugging
- MongoDB connection management
- Data validation (server-side)
- Proper HTTP status codes

---

## 🗃️ MongoDB Collections

**Database:** poojaDB  
**Collection:** registrations

All registration data is stored in the `registrations` collection with automatic timestamps (createdAt, updatedAt).

---

## 📝 Notes

- Frontend and backend must both be running for full functionality
- MongoDB
