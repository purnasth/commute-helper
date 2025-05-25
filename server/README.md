# Commuto

---

## API Documentation

1. Register an account:

- **POST** `localhost:3000/auth/signup`

Request body:

```json
{
  "fullname": "your_full_name",
  "email": "your_email",
  "password": "your_password",
  "role": "your_role", // e.g., "rider", "passenger"
  "phone": "your_phone_number",
  "address": "your_address",
  "profilePicture": "your_profile_picture_url",
  "ratings": 5 // optional, user rating hardcoded
}
```

Response:

```json
{
  "message": "Signup successful",
  "user": {
    "id": "user_id",
    "fullname": "your_full_name",
    "email": "your_email",
    "role": "your_role",
    "phone": "your_phone_number",
    "address": "your_address",
    "profilePicture": "your_profile_picture_url",
    "ratings": 5,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

2. Login to your account:

- **POST** `localhost:3000/auth/login`

Request body:

```json
{
  "email": "your_email",
  "password": "your_password"
}
```

Response:

```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "fullname": "your_full_name",
    "email": "your_email",
    "role": "your_role",
    "phone": "your_phone_number",
    "address": "your_address",
    "profilePicture": "your_profile_picture_url",
    "ratings": 5,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  "token": "your_jwt_token"
}
```

3. Logout from your account:

- **POST** `localhost:3000/auth/logout`

Request body:

````json
{
  "email": "your_email",
  "password": "your_password"
}

Response:

```json
{
  "message": "Logout successful"
}
````

4. Get user profile:

- **GET** `localhost:3000/auth/user?email=your_email`

Response:

```json
{
  "user": {
    "id": "user_id",
    "fullname": "your_full_name",
    "email": "your_email",
    "role": "your_role",
    "phone": "your_phone_number",
    "address": "your_address",
    "profilePicture": "your_profile_picture_url",
    "ratings": 5,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

5. Update user profile:

- **PUT** `localhost:3000/auth/update`
  Request body:

```json
{
  "email": "your_email",
  "password": "your_password",
  "updates": {
    "fullname": "updated_full_name",
    "phone": "new_phone_number"
  }
}
```

Response:

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "user_id",
    "fullname": "new_full_name",
    "email": "your_email",
    "role": "your_role",
    "phone": "new_phone_number",
    "address": "new_address",
    "profilePicture": "new_profile_picture_url",
    "ratings": 5,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

6. Delete user account:

- **DELETE** `localhost:3000/auth/delete`

Request body:

```json
{
  "email": "your_email",
  "password": "your_password"
}
```

Response:

```json
{
  "message": "Account deleted successfully"
}
```
