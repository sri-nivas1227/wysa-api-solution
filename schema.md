## Database schema in NoSQL to implement the API flow
### Users
`{
  "_id" : <unique ID for user, can be a UUID>
  "username" : <unique-nickname>,
  "password" : <hashed-password>
}`
- password is hashed before saving it in the database for security purposes. Used "bcrypt" python library to hash the password.

### Assessment data
`{
  "_id" : <user_id>,
  "username" : <username>,
  "sleep_struggle_period" : <can be "<2" or "2-8" or ">8">,
  "sleeping_time" : <"HH:MM" format>,
  "waking_time" : <"HH:MM" format>,
  "sleep_hours" : <an integer>,
  "score" : <rating of health based on the responses of the user"
}
`
