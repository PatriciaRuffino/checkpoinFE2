const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //TITLE AND DRESCIPTION CREATION
    const title = document.createElement('h2');
    const description = document.createElement('p');
    title.textContent = document.querySelector('#titulo').value.toUpperCase();
    description.textContent = capitalizeFirstLetter(document.querySelector('#descricao').value);
    //URL GATHERING
    const imgUrl = document.querySelector('#url-imagem').value;
    appendImgElements(imgUrl, title, description);
});

let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let appendImgElements = (imgUrl, title, description) => {
    if(imgUrl === '' || title.textContent === '' || description.textContent === '') {
        alert('Preencha todos os campos');
    }else{
        //IMG CREATION
        const newImg = document.createElement('img');
        newImg.src = imgUrl;
        newImg.classList.add('img-fluid');
        // APPEND SECTION
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(title);
        card.appendChild(newImg);
        card.appendChild(description);
        document.querySelector('.imagem-container').appendChild(card);
    }
}
