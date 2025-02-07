# Number Classification API

## Overview

The **Number Classification API** is a simple RESTful API built with Node.js and Express.js. It takes a number as input and returns mathematical properties of the number, along with a fun fact retrieved from the [Numbers API](http://numbersapi.com/).

## Features

- Checks if a number is **prime**
- Determines if a number is an **Armstrong number**
- Identifies if the number is **even** or **odd**
- Computes the **sum of its digits**
- Fetches a **fun fact** about the number
- Returns results in **JSON format**

## API Endpoint

### **GET /api/classify-number?number={number}**

#### **Query Parameter:**

| Parameter | Type   | Description |
|-----------|--------|-------------|
| number    | Integer | The number to classify |

#### **Successful Response (200 OK):**

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### **Error Response (400 Bad Request):**

```json
{
    "number": "alphabet",
    "error": true
}
```

## Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/yourusername/number-classification-api.git
cd number-classification-api
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Run the Server**

```sh
npm start
```

The API will run on **<http://localhost:3000>** by default.

### **4. Environment Variables (.env file)**

Create a `.env` file in the root directory and set the following:

```
PORT=3000
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Axios** - HTTP client for fetching data from the Numbers API
- **CORS** - Handling cross-origin requests
- **Dotenv** - Managing environment variables

## Author

- **Adejare Adedayo**
- GitHub: https://github.com/dprince-03

---


### API URL
- https://number-classification-api-y4h1.onrender.com/api/classify-number?number=371