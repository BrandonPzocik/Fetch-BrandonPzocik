const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link);
        const info = await respuesta.json();
        return info;
    } catch (error) {
        console.log("Hubo un error");
        return null;
    }
}

const mostrarEmojis = async () => {
    const emojis = await procesarFetch('https://emojihub.yurace.pro/api/all');
    if (emojis) {
        const container = document.getElementById('emoji-container');
        emojis.forEach(emoji => {
            const emojiCard = document.createElement('div');
            emojiCard.className = 'emoji-card';

            const emojiImg = document.createElement('div');
            emojiImg.className = 'emoji-img';
            emojiImg.innerHTML = emoji.htmlCode[0]; 

            const emojiDescription = document.createElement('p');
            emojiDescription.textContent = emoji.name;

            emojiCard.appendChild(emojiImg);
            emojiCard.appendChild(emojiDescription);

            container.appendChild(emojiCard);
        });
    } else {
        console.log("No se pudieron obtener los emojis");
    }
}

mostrarEmojis();