import pool from '../../config/databases/db.js';
import bcrypt from 'bcryptjs';

const createUser = async (user) =>{
    let { email, password, rol, lenguage } = user;
    const hashedPass = bcrypt.hashSync(password)
    const sqlQuery = {
        text : 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *',
        values : [email, hashedPass, rol, lenguage],
    };
    const response = await pool.query(sqlQuery);
    return response.rows[0];
}

const byEmail = async (email, password) =>{
    const sqlQuery = {
        text : 'SELECT * FROM usuarios where email = $1',
        values : [email],
    };
    const response = await pool.query(sqlQuery);
    const user = response.rows[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
          return sendErrorResponse(res, 'auth_02');
      }
    return user;
}

const getAll = async() => {
    try {
        const sqlQuery = {
            text: "SELECT id, email, rol, lenguage FROM usuarios",
        };
        const users = await pool.query(sqlQuery);
        return users.rows;
    }
    catch (error) {
        console.log(error);
    }
};

export {createUser, byEmail, getAll};
