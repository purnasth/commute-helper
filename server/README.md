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

---- Rides

1. Post a ride:

- **POST** `localhost:3000/rides`

Request body:

```json
{
  "from": "from_location",
  "to": "to_location",
  "message": "your_message",
  "role": "your_role", // e.g., "rider", "passenger
  "riderId": "rider_user_id", // required if role is "passenger"
  "passengerId": "passenger_user_id" // required if role is "rider"
}
```

Response:

```json
{
  "message": "Ride created",
  "ride": {
    "id": "ride_id",
    "from": "from_location",
    "to": "to_location",
    "message": "your_message",
    "role": "your_role",
    "timestamp": "timestamp", // when the ride was created
    "riderId": "rider_user_id", // if role is "passenger"
    "passengerId": "passenger_user_id" // if role is "rider"
  }
}
```

2. Get all rides:

- **GET** `localhost:3000/rides`
  (optional query parameters: `?role=your_role&userId=your_user_id`)
  Example: `localhost:3000/rides?role=rider`

Response:

```json
{
  "rides": [
    {
      "id": "ride_id",
      "from": "from_location",
      "to": "to_location",
      "message": "your_message",
      "role": "your_role",
      "timestamp": "timestamp", // when the ride was created
      "riderId": "rider_user_id", // if role is "passenger"
      "passengerId": "passenger_user_id" // if role is "rider"
      "rider": {
        "id": "rider_user_id",
        "fullname": "rider_full_name",
        "email": "rider_email",
        "role": "rider_role",
        "phone": "rider_phone_number",
        "address": "rider_address",
        "profilePicture": "rider_profile_picture_url",
        "ratings": 5,
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      },
    },
    // more rides...
  ]
}
```

3. Get a specific ride:

- **GET** `localhost:3000/rides/:rideId`
  Response:

```json
{
  "ride": {
    "id": "ride_id",
    "from": "from_location",
    "to": "to_location",
    "message": "your_message",
    "role": "your_role",
    "timestamp": "timestamp", // when the ride was created
    "riderId": "rider_user_id", // if role is "passenger"
    "passengerId": "passenger_user_id", // if role is "rider"
    "rider": {
      "id": "rider_user_id",
      "fullname": "rider_full_name",
      "email": "rider_email",
      "role": "rider_role",
      "phone": "rider_phone_number",
      "address": "rider_address",
      "profilePicture": "rider_profile_picture_url",
      "ratings": 5,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
}
```

4. Update a ride:

- **PUT** `localhost:3000/rides/:rideId`

Request body:

```json
{
  "updates": {
    "from": "updated_from_location",
    "to": "updated_to_location",
    "message": "updated_message"
  }
}
```

Response:

```json
{
  "message": "Ride updated successfully",
  "ride": {
    "id": "ride_id",
    "from": "updated_from_location",
    "to": "updated_to_location",
    "message": "updated_message",
    "role": "your_role",
    "timestamp": "timestamp", // when the ride was created
    "riderId": "rider_user_id", // if role is "passenger"
    "passengerId": "passenger_user_id", // if role is "rider"
    "rider": {
      "id": "rider_user_id",
      "fullname": "rider_full_name",
      "email": "rider_email",
      "role": "rider_role",
      "phone": "rider_phone_number",
      "address": "rider_address",
      "profilePicture": "rider_profile_picture_url",
      "ratings": 5,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
}
```

5. Delete a ride:

- **DELETE** `localhost:3000/rides/:rideId`

Response:

```json
{
  "message": "Ride deleted successfully"
}
```

// Confirm a ride (delete it from DB)
@Post(':id/confirm')
async confirmRide(@Param('id') id: string) {
await this.prisma.ride.delete({ where: { id: Number(id) } });
return { message: 'Ride confirmed and removed from database' };
}

// Reject a ride (mark as rejected for the user)
@Post(':id/reject')
rejectRide(@Param('id') id: string, @Body() body: { userId: number }) {
return {
message: 'Ride rejected for user',
rideId: id,
userId: body.userId,
};
}

5. Confirm a ride:

- **POST** `localhost:3000/rides/:rideId/confirm`

Response:

```json
{
  "message": "Ride confirmed and removed from database"
}
```

6. Reject a ride:

- **POST** `localhost:3000/rides/:rideId/reject`

Request body:

```json
{
  "message": "Ride rejected for user",
  "rideId": "5"
}
```
