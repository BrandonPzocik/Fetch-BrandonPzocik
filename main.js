
const apiEmoji = 'https://emojihub.yurace.pro/api/all'

const procesarFetch = async (apiEmoji) => {
    try {
        const respuesta = await fetch(apiEmoji) 
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}

const ElContedoremoji = document.getElementById("contenedorEmojis")
function displayEmojis(emojis) {
    emojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('emoji');
        emojiElement.innerHTML = emoji.htmlCode[0]; // Usamos innerHTML para renderizar el HTML del emoji
        emojiContainer.appendChild(emojiElement);
    });
}

// Llamar a la funcion para obtener y mostrar los emojis
procesarFetch();