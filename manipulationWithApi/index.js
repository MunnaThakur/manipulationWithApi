
const root =document.querySelector('#root');
const button = document.querySelector('button');


function createItem(item){
    // Card
    const card = document.createElement('div');
    card.classList.add('card');


    //Images
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    //Title
    const title = document.createElement('h4');
    title.innerHTML = item.title
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}



function displayImages(items){
    items.forEach((item) => {
        createItem(item);
    });
    // console.log(images);
    
}



button.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) =>res.json())
    .then((items)=>{
        displayImages(items);
    })
})

