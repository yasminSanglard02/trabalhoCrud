import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        foto TEXT
    )
`);
function createUsuarioRepository(novoUsuario) {
    return new Promise((resolve, reject) => {

        const {
            login, 
            email,
            senha,
            foto
        } = novoUsuario;

        db.run(
            `INSERT INTO usuario (login, email, senha, foto)
            VALUES(?,?,?,?)`,
            [login, email, senha, foto],
            (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID,
                        ...novoUsuario
                    });
                }
            }
        );
    });
}

function findUsuarioByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                id, login, email, senha, foto
            FROM usuario
            WHERE id = ?`,
            [id],
            (error, row) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        )        
    });
}

function findAllUsuarioRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT 
                * 
            FROM usuario`,
            [],
            (error, row) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        )
    });
}

function updateUsuarioRepository(id, usuario) {
    return new Promise((resolve, reject) => {

        const {
            login, 
            email, 
            senha, 
            foto
        } = usuario;

        db.run(
            `UPDATE usuario SET 
                login = ?, 
                email = ?, 
                senha = ?, 
                foto = ?
            WHERE id = ?`,
            [login, email, senha, foto, id],
            (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...usuario
                    });
                }
            }
        );
    });
}
function deleteUsuarioRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM usuario
            WHERE id = ?`,
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve ({
                        message: "Usuario excluido com sucesso!"
                        });
                    }
                }
        );
    });
}

export default {
    createUsuarioRepository,
    findUsuarioByIdRepository,
    findAllUsuarioRepository,
    updateUsuarioRepository,
    deleteUsuarioRepository
}