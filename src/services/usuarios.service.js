import usuarioRepository from "../repositories/usuarios.repository.js";

async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    
    if (!usuario) {
        throw new Error("Erro ao criar usuário");
    }

    return usuario;
}

async function findAllUsuarioService() {
    const usuarios = await usuarioRepository.findAllUsuarioRepository();
    return usuarios;
}

async function findUsuarioByIdService(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);
    
    if (!usuario) {
        throw new Error("Usuário não encontrado");
    }
    
    return usuario;
}

async function updateUsuarioService(novoUsuario, id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);
    
    if (!usuario) {
        throw new Error("Usuário não encontrado");
    }
    
    const usuarioAtualizado = usuarioRepository.updateUsuarioRepository(id, novoUsuario);

    return usuarioAtualizado;
}

async function deleteUsuarioServices(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("Usuario nao encontrado!");
    }
    
    const mensagemRetorno = await usuarioRepository.updateUsuarioRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Error ao deletar usuario!");
    }
    
    return mensagemRetorno;
}

export default {
    createUsuarioService,
    findAllUsuarioService,
    findUsuarioByIdService,
    updateUsuarioService,
    deleteUsuarioServices
}