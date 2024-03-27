import {createUser, getAll} from '../models/userModel.js';

const createNewUser = async (req, res) =>{
    try {
        const {user} = req.body;
        const newUser = await createUser(user)
        res.status(201).json({user: newUser})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await getAll();
        if (!users)
            return res.status(204).send({ "No users": users });
        return res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
};

export {createNewUser, getAllUser};