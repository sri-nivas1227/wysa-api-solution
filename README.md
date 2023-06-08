# Wysa Jr. Full-stack Assignment
## 1. API and data design

### 1. API interaction flows
a.    API Name: **Sleeping Struggle Period**
    
    API Endpoint: /api/v1/sleep/assessment/struggle-period
    Method: POST
    Description: 
        - This is an assessment in the sleep app. So, everything that happens inside the 'sleep' app can be comprised under the sleep path.
        - In the assessment, the answer for the particular question can be sent as a POST request with question and answer in the body of the request.
        - We can use a token (JWT) to authorize the user for the requests and resoponses. It can be added in the Authorization headers of the request.
    Parameters:
        1. sleep-struggle-period
            Type: string
            Desc: the time period can be three fixed strings (as per the options provided in the example),
                  "<2"  or  "2-8"  or ">8" so we can perform required operations based on the answer using conditional statements.
            Required: Yes
    Request Headers:
        {
            Content-Type : "application/json",
            Authorization : "Bearer <token>"
        }
    Request body:
        Format: JSON
        Example:
                {
                    sleep-struggle-period : "<2"
                }
    Response:
        Format: JSON
        Example:
                {
                    status: "success",
                }
    Response Description: The status can also be "error" is the reques is not successful and can have another field "error-message" explaining the cause of the error
    Response Code:
        - 200 OK: The request is successful
        - 401 Unauthorized: If authentication credentials are missing or invalid. If the token is tampered.
        - 500 Internal Server Error: If an unexpected error occured at the server side.
    
b. API Name: **Sleeping Time**

    Endpoint: /api/v1/sleep/assessment/sleeping-time
    Method: POST
    Description:
        - This post request will have the waking time as a field in the request body.
        - JWT token will be added to the request headers.
        - We can analyze the value for the "sleeping time" and send a response with an estimated waking time so it would be easier for the user to choose time around the given value.
    Parameters:
        1. sleeping-time
            Type : time
            Required: Yes
    Request Headers: 
        {
            Content-Type : "application/json",
            Authorization : "Bearer <token>"
        }
    Request Body:
        Format: JSON
        Example:
            {
                sleeping-time : "hh:mm am/pm"
            }
    Response:
        Format: JSON
        Example:
            {
                status: "success",
                estimated-waking-time : "hh:mm am/pm"
            }
    Response Desc: Let's say an average human sleeps for 6-8 a day, we can add that many hours to the sleeping time and send it as the 'estimated-wake-time' so the user can choose it directly or can change as required around the provided time which would be easier than setting the time totally by themselves.
    Response Codes:
        - 200 OK: The request is successful
        - 401 Unauthorized: If authentication credentials are missing or invalid. If the token is tampered.
        - 500 Internal Server Error: If an unexpected error occured at the server side.
        
c. API Name: **Wake Time**
   
    Endpoint: /api/v1/sleep/assessment/waking-time
    Method: POST
    Description:
    - This post request will have the waking time as a field in the request body.
    - JWT token will be added to the request headers.
    - We can analyze the difference between the "sleeping time" and the "waking-time" and estimate the no.of hours of sleep the user gets, so it would be easier for the user to choose an option around the suggested one.
    Parameters:
        1. waking-time
        Type : time
        Required: Yes
    Request Headers: 
    {
        Content-Type : "application/json",
        Authorization : "Bearer <token>"
    }
    Request Body:
        Format: JSON
        Example:
            {
                waking-time : "hh:mm am/pm"
            }
    Response:
        Format: JSON
        estimated-sleep-hours Type: Integer
        Example:
            {
                status: "success",
                estimated-sleep-hours : <an integer>
            }
    Response Desc: An estimate of no.of sleep hours a user can get can be sent as a response. It can be an integer of no.of hours, say 5hrs, 7hrs etc..
    Response Code:
        - 200 OK: The request is successful
        - 401 Unauthorized: If authentication credentials are missing or invalid. If the token is tampered.
        - 500 Internal Server Error: If an unexpected error occured at the server side.

d. API Name: **Sleep Hours**
        
    Endpoint: /api/v1/sleep/assessment/sleep-hours
    Method: POST
    Description:
    - This post request will have the no.of sleep hours as a field in the request body.
    - JWT token will be added to the request headers.
    - We can add all the data to the database and analyze it to maybe rate the mental health of the user in a scale of 1-10. This can be sent as a response for the request.
    Parameters:
        1. sleep-hours
        Type : integer
        Required: Yes
    Request Headers: 
    {
        Content-Type : "application/json",
        Authorization : "Bearer <token>"
    }
    Request Body:
        Format: JSON
        Example:
            {
                sleep-hours : <int>
            }
    Response:
        Format: JSON
        Example:
            {
                status: "success",
                mental-health-rating : <an integer>
            }
    Response Desc: We can use the data to analyze and extract different type of information, but here I'm trying to rate the mental health of the user.
    Response Code:
        - 200 OK: The request is successful
        - 401 Unauthorized: If authentication credentials are missing or invalid. If the token is tampered.
        - 500 Internal Server Error: If an unexpected error occured at the server side.


## LeetCode Challenge Submission link
https://leetcode.com/playground/NKeXfvbw