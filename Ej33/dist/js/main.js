
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const pass = document.getElementById('password');
const confirm = document.getElementById('confirm');
const boton = document.getElementById('boton');

// HE AÑADIDO MUCHOS MÉTODOS PARA LAS VALIDACIONES, HE TENIDO QUE USAR OTROS MEDIOS PARA BASARME YA QUE NO LO ENTENDÍA MUY BIEN, PERO CREO QUE LO HE HECHO BIEN
function validar() {
    // Usuario (3+)
    let uValido = usuario.value.length >= 3;
    usuario.className = uValido ? 'valido' : 'error';
    document.getElementById('error-usuario').style.display = uValido ? 'none' : 'block';
    
    // Email (tiene @ y .)
    let eValido = email.value.includes('@') && email.value.includes('.');
    email.className = eValido ? 'valido' : 'error';
    document.getElementById('error-email').style.display = eValido ? 'none' : 'block';
    
    // Teléfono (9 números)
    let tValido = telefono.value.length === 9 && !isNaN(telefono.value);
    telefono.className = tValido ? 'valido' : 'error';
    document.getElementById('error-telefono').style.display = tValido ? 'none' : 'block';
    
    // Contraseña (8+, mayúscula, número)
    let pValido = pass.value.length >= 8 && 
                  /[A-Z]/.test(pass.value) && 
                  /[0-9]/.test(pass.value);
    pass.className = pValido ? 'valido' : 'error';
    document.getElementById('error-password').style.display = pValido ? 'none' : 'block';
    
    // Confirmar
    let cValido = confirm.value === pass.value && confirm.value !== '';
    confirm.className = cValido ? 'valido' : 'error';
    document.getElementById('error-confirm').style.display = cValido ? 'none' : 'block';
    
    // Botón
    boton.disabled = !(uValido && eValido && tValido && pValido && cValido);
}

usuario.addEventListener('input', validar);
email.addEventListener('input', validar);
telefono.addEventListener('input', validar);
pass.addEventListener('input', validar);
confirm.addEventListener('input', validar);

// Envío
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!boton.disabled) alert('Registro ok');
});