# Wysa Jr. Full-stack Assignment
## 1. API and data design

### 1. API interaction flows
a.    API Name: **Sleeping Struggle Period**
    
    API Endpoint: /api/v1/sleep/assessment
    Method: POST
    **Description**: 
        - This is an assessment in the sleep app. So, everything that happens inside the 'sleep' app can be comprised under the sleep path.
        - In the assessment, the answer for the particular question can be sent as a POST request with question and answer in the body of the request.
        - We can use a token (JWT) to authorize the user for the requests and resoponses. It can be added in the Authorization headers of the request.
    Parameters:
        1. sleep-struggle-period
            Type: string
            Desc: the time period can be three fixed strings (as per the options provided in the example),
                  "<2"  or  ">2&<8"  or ">8" so we can perform required operations based on the answer using conditional statements.
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
                    data: {
                            question: "what time do you go to bed for sleep?",
                            answer-type : time
                          }
                }
    Response Code:
        - 200 OK: The request is successful
        - 401 Unauthorized: If authentication credentials are missing or invalid. If the token is tampered.
        - 500 Internal Server Error: If an unexpected error occured at the server side.
    
