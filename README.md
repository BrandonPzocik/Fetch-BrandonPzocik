# Fetch-BrandonPzocik
La api que utilice : https://emojihub.yurace.pro/api/all
Utilece la estructura que el profe dejo en el dicord que es esta: 
const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link) 
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}
La cual me permite realizar una solicitud HTTP a una URL y obtener los datos en formato JSON.

Luego cree una funcion para mostrar los emojis, con el arreglo de datos que obtuve en formato JSON gracias a la funcion mencionada anteriormente y crear asi los elementos HTML con DOM para mostrar cada emoji y su descripción.
Tambien le di estilos con CSS a dichos elementos creados con el DOM. 
