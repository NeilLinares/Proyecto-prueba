// JavaScript para manejar el formulario y crear tarjetas dinámicamente
document.getElementById('addPlaceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Crear la tarjeta HTML
    const card = document.createElement('div');
    card.className = 'card';
    
    // Agregar imagen si existe
    if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = `Imagen de ${data.name}`;
        card.appendChild(img);
    }
    
    // Agregar título
    const title = document.createElement('h4');
    title.textContent = data.name;
    card.appendChild(title);
    
    // Agregar categoría
    const category = document.createElement('p');
    category.innerHTML = `<strong>Categoría:</strong> ${data.category}`;
    card.appendChild(category);
    
    // Agregar descripción
    const description = document.createElement('p');
    description.innerHTML = `<strong>Descripción:</strong> ${data.description}`;
    card.appendChild(description);
    
    // Agregar ubicación
    const location = document.createElement('p');
    location.innerHTML = `<strong>Ubicación:</strong> ${data.location}`;
    card.appendChild(location);
    
    // Agregar contacto si existe
    if (data.contact) {
        const contact = document.createElement('p');
        contact.innerHTML = `<strong>Contacto:</strong> ${data.contact}`;
        card.appendChild(contact);
    }
    
    // Agregar sección de calificación
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';
    
    card.appendChild(ratingDiv);
    
    // Agregar la tarjeta a la sección de recomendaciones
    document.querySelector('.recommendations').appendChild(card);
    
    // Limpiar el formulario
    event.target.reset();
    
    // Opcional: Mostrar mensaje de éxito
    alert('¡Lugar subido y tarjeta creada exitosamente!');
});
