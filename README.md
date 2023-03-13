# Social-Network-API

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in ThunderClient for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in ThunderClient
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in ThunderClient
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following pictures show the API models being used for this application:

Posting a user:
![Posting a user](./Assets/users/user%20post.png)

Updating a user:
![Updating a user](./Assets/users/user%20put.png)

Getting a single user:
![Getting a single user](./Assets/users/user%20get%20single.png)

Getting all users:
![Getting all users](./Assets/users/user%20get%20all.png)

Deleting a user:
![Deleting a user](./Assets/users/user%20deleted.png)

Posting a thought:
![Posting a thought](./Assets/thought/post%20thought.png)

Updating a thought:
![Updating a thought](./Assets/thought/put%20thought.png)

Getting a single thought:
![Getting a single thought](./Assets/thought/get%20single%20thought.png)

Getting all thoughts:
![Getting all thoughts](./Assets/thought/get%20all%20thought.png)

Deleting a thought:
![Deleting a thought](./Assets/thought/delete%20thought.png)

Posting a reaction:
![Posting a reaction](./Assets/reaction/post%20reaction.png)

Deleting a reaction:
![Deleting a reaction](./Assets/reaction/delete%20reaction.png)

Posting a friend:
![Posting a friend](./Assets/friend/post%20friend.png)

Deleting a friend:
![Deleting a friend](./Assets/friend/delete%20friend.png)

## Links

### GitHub Repository

https://github.com/edgarmartinez1212/Social-Network-API

### Video Walkthrough
