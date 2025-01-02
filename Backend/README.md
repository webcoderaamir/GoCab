# Backend API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a minimum length of 5 characters and a valid email format (required)
- `password`: A string with a minimum length of 7 characters (required)

Example:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```


### Response

## Success Response
When the user is successfully registered, the API returns a JSON object with a JWT token and the registered user details.

## Status Code: 201 Created

### Response Body:

```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### /users/login

## Description
This endpoint is used to log in an existing user.

## Method
POST

## Request Body
The request body should be a JSON object with the following fields:

email: A string with a valid email format (required)
password: A string with a minimum length of 7 characters (required)

Example:
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

# Responses

## Success
## Status Code: 200 OK

## Response Body:

```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# /users/profile
## Description
This endpoint is used to get the profile of the authenticated user.

## Method
GET

## Headers
Authorization: Bearer token (required)
## Responses
## Success
## Status Code: 200 OK
## Response Body:

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## Authentication Errors
## Status Code: 401 Unauthorized
## Response Body:
```json
{
  "message": "Unauthorized"
}
```

# /users/logout
## Description
This endpoint is used to log out the authenticated user.

## Method
GET

## Headers
Authorization: Bearer token (required)
## Responses
## Success
## Status Code: 200 OK
## Response Body:

```json
{
  "message": "Logged out successfully"
}
```

## Authentication Errors : Unauthorized

