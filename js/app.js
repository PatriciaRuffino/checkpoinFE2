const form = document.querySelector('form');
const imgRow = document.querySelector('#img-row');
const imgContainer = document.querySelector('#img-container');

imgContainer.appendChild(imgRow);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //TITLE AND DRESCIPTION CREATION
    const title = document.createElement('h2');
    const description = document.createElement('p');
    title.textContent = document.querySelector('#titulo').value.toUpperCase();
    description.textContent = capitalizeFirstLetter(document.querySelector('#descricao').value);
    //URL GATHERING
    const imgUrl = document.querySelector('#url-imagem').value;
    //CARD CREATION
    appendTip();
    appendImgElements(imgUrl, title, description);
});

let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let appendTip = () => {
    if(imgContainer.parentElement.contains(document.querySelector('#tip'))){
        console.log('hehehe');
    }else{
        const tip = document.createElement('h3');
        tip.textContent = 'Clique na imagem dos cards para deletá-los!';
        tip.classList.add('my-5');
        tip.setAttribute('id', 'tip');
        imgContainer.insertAdjacentElement('beforebegin', tip);
    }
}

let appendImgElements = (imgUrl, title, description) => {
    if(imgUrl === '' || title.textContent === '' || description.textContent === '') {
        alert('Preencha todos os campos');
    }else{
        //IMG CREATION
        const newImg = document.createElement('img');
        newImg.src = imgUrl;
        newImg.alt = 'Imagem do card';
        newImg.classList.add('img-fluid');
        // APPEND SECTION
        const imgCol = document.createElement('div');
        imgCol.classList.add('col-md-6', 'col-sm-12','gx-5','gy-4');
        imgCol.appendChild(title);
        imgCol.appendChild(newImg);
        imgCol.appendChild(description);
        imgRow.appendChild(imgCol);
    }
}

imgContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('img-fluid')) {  //muito legal essa gambiarra kek
        e.target.parentElement.remove();
    }
});
