function detectarBandeira(numero) {
    numero = numero.replace(/\D/g, ''); //Remove caracteres que não são dígitos do número do cartão

    if (/^5[1-5]/.test(numero) || /^222[1-9]/.test(numero) || /^22[3-9][0-9]/.test(numero) || /^2[3-6][0-9]{2}/.test(numero) || /^27[01][0-9]/.test(numero) || /^2720/.test(numero)) {
        return "MasterCard";
    }
    if (/^4/.test(numero)) {
        return "Visa";
    }
    if (/^3[47]/.test(numero)) {
        return "American Express";
    }
    if (/^3(0[0-5]|[68])/.test(numero)) {
        return "Diners Club";
    }
    if (/^6011/.test(numero) || /^65/.test(numero) || /^64[4-9]/.test(numero)) {
        return "Discover";
    }
    if (/^2014/.test(numero) || /^2149/.test(numero)) {
        return "EnRoute";
    }
    if (/^35(2[89]|[3-8][0-9])/.test(numero)) {
        return "JCB";
    }
    if (/^8699/.test(numero)) {
        return "Voyager";
    }
    if (/^38/.test(numero)) {
        return "HiperCard";
    }
    if (/^50/.test(numero)) {
        return "Aura";
    }
    return "Desconhecida";
}

document.querySelector('.card-form').addEventListener('submit', function(e) {
    e.preventDefault(); //Impede o envio padrão do formulário (não recarrega a página)
    const numero = document.getElementById('card-number').value;
    const bandeira = detectarBandeira(numero);
    document.getElementById('resultado').textContent = `Bandeira: ${bandeira}`;
});

