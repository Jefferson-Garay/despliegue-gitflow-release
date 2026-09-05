function login(usuario, password) {
  if (!usuario || !password) {
    return "El usuario y la contraseña son obligatorios.";
  }

  return `Inicio de sesión exitoso para ${usuario}.`;
}

module.exports = { login };