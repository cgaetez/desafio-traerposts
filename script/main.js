
// Función para realizar la solicitud a la API
async function fetchData() {
    try {
        // Realizar la solicitud a la API usando fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Esperar a que la respuesta sea transformada a JSON
        const data = await response.json();
        
        // Devolver los datos
        return data;
        } catch (error) {
            // Manejo de errores
            console.log('Error al obtener los datos:', error);
            return null;
        }
}

// Función para usar los datos obtenidos
async function processData() {
    try {
        // Obtener los datos de la API
        const apiData = await fetchData();
        
        // Hacer algo con los datos
        //console.log('Datos obtenidos:', apiData);
        let res = '';
        apiData.forEach(data => {
            res += `<li>
            <p class="my-0"><strong>${data.title}</strong></p>
            <p class="my-0">${data.body}</p>
            </li>`;
            //console.log(data.title);
           //console.log(data.body);
        });
        let result = document.getElementById('result');
        result.innerHTML = res;
    } catch (error) {
        // Manejo de errores
        console.log('Error al procesar los datos:', error);
    }
}

// Llamar a la función para procesar los datos
let btn = document.getElementById('load');
btn.addEventListener('click', () => {
    processData();
    
});

          
 