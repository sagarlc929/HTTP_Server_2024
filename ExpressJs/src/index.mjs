import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
const mockUsers = [
    { id: 1, username: "Jhon", displayName: "JHON" },
    { id: 2, username: "jack", displayName: "Jack" },
    { id: 3, username: "adam", displayName: "Adam" },
];

app.get("/api/users", (request, response) => {
    response.status(mockUsers);
});

app.get('/api/users/:id', (request, response) => {
    console.log(request.params);

    const parseId = parseInt(request.params.id);

    console.log(parseId);

    if (isNaN(parseId))
        return response.status(400).send({msg: "Bad Request. Invalid."});
    
    const findUser = mockUsers.find((user) => user.id === parseId)

    if (!findUser) return response.sendStatus(404);
        return response.send(findUser);
    /*response.send([
        { id: 1, username: "Jhon", displayName: "JHON" },
        { id: 2, username: "jack", displayName: "Jack" },
        { id: 3, username: "adam", displayName: "Adam" },
    ]);
    */
});

app.get('/api/products', (request, response) => {
    response.send([{ id: 123, name: "VegFood", price: 12.99 }]);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});