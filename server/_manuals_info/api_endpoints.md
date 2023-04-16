Each API endpoint begins with http://localhost:5005

# Playgrounds
createPlayground        POST /playgrounds/create 
getAllPlaygrounds       GET /playgrounds
getPlaygroundById       GET /playgrounds/:id
updatePlaygroundById    PATCH /playgrounds/:id
deletePlaygroundById    DELETE /playgrounds/:id

# Users
createUser              POST /users/register
getUserById             GET /users/:id
updateUserById          PATCH /users/:id
deleteUserById          DELETE /users/:id

# Reviews
createReview            POST /reviews/create
getAllReviews           GET /playgrounds/:playgroundId/reviews
updateReview            PATCH /reviews/:id
deleteReview            DELETE /reviews/:id
