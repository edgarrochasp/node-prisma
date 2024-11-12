import { Router } from 'express';
import { createUser, createUsers, deleteUser, getAllUsers, getUserByEmail, updateUser  } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    //Validar os dados recebidos.

    const user = await createUser({
            name:'Edgar',
            email:'Edgar@hotmail.com'
});
if (user) {
    res.status(201).json({ user });
} else {
    res.status(500).json({error: 'E-mail já cadastrado!'});
}
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        {name: 'Sayuri', email: 'sayuri@gmail.com'},
        {name: 'Laura', email: 'laura@gmail.com'},
        {name: 'Luisa', email: 'luisa@gmail.com'}

    ]);
    res.json({ result });
}) 

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
})

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('laura@gmail.com');
    res.json({ result });
})

mainRouter.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result });
})

mainRouter.delete('/user', async (req, res) => {
    const result = await deleteUser();
    res.json({ result });
})