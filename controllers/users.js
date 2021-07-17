const { v4: uuidv4 } = require('uuid');

let users = [
    {
        first_name: "John",
        second_name: "doe",
        age: 25,
        id: uuidv4()
    },
    {
        first_name: "Mike",
        second_name: "Mondo",
        age: 24,
        id: uuidv4()
    }
];

const getUsers = (req, res) =>{
    console.log(users);
    res.send(users);
    
};

const createUser = (req,res) =>{
    const user = req.body;

    users.push({...user, id: uuidv4()});

    console.log(user); 

    res.send(`${user.first_name} added`);
};

const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`${users.first_name} deleted`);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { first_name, second_name, age } = req.body;

    const user = users.find((user) => user.id == id);
    
    if(first_name){
        user.first_name = first_name;
    }

    if(second_name){
        user.second_name = second_name;
    }

    if(age){
        user.age = age;
    }
    res.send(`Updated record for ${user.first_name}`);
};

module.exports = {getUsers, getUser, createUser, deleteUser, updateUser};