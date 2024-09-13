document.getElementById('car-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const carName = document.getElementById('car-name').value;
    const carPrice = document.getElementById('car-price').value;
    const carDescription = document.getElementById('car-description').value;
    const carImage = document.getElementById('car-image').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const carContainer = document.getElementById('car-container');

        const carItem = document.createElement('div');
        carItem.className = 'car-item';

        const carImg = document.createElement('img');
        carImg.src = e.target.result;
        carImg.alt = carName;

        const carTitle = document.createElement('h3');
        carTitle.textContent = carName;

        const carPriceElem = document.createElement('p');
        carPriceElem.textContent = `Price: $${carPrice}`;

        const carDesc = document.createElement('p');
        carDesc.textContent = carDescription;

        carItem.appendChild(carImg);
        carItem.appendChild(carTitle);
        carItem.appendChild(carPriceElem);
        carItem.appendChild(carDesc);

        carContainer.appendChild(carItem);

        document.getElementById('car-form').reset();
    };

    reader.readAsDataURL(carImage);
});
