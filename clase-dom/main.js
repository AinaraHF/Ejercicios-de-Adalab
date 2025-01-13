'use strict';

const data = [
    {
      id: '123x',
      title: 'Titulo 1',
      desc: 'cariñoso',
      img: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg',
      autor: 'Petra',
    },
    {
      id: '2567y',
      title: 'Titulo 2',
      desc: 'elegante',
      img: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
      autor: 'Anacleta',
    },
    {
      id: '378o',
      title: 'Titulo 3',
      desc: 'arisco',
      img: 'https://people.com/thmb/pX_6cwzhf7ofzK7SiAewtmcKvhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(646x129:648x131)/dog-born-with-crooked-face-112823-1-e303fbe5c5674ae28b69ab3521bb64c2.jpg',
      autor: 'Dolores',
    },
  ];

  const uList = document.querySelector('.js-list');

/* 
1. Creamos la estructura a seguir en HTML para verlo claro y luego nos la traemos aquí para organizarlo
<li>
    <article class="card">
        <img src="" alt=""/>
        <h3>título</h3>
        <p>descripción</p>
    </article>
 </li>
 2. Creamos función con un bucle porque tenemos que recorrer un array (data)
 3. Queremos que el id aparezca como atributo de cada li
 4. Queremos que el author aparezca como atributo de cada li
 5. Queremos que al clicar una tarjeta salga el autor abajo
*/

function handleClick(ev){
    const id = ev.currentTarget.id;
    const autor = ev.currentTarget.dataset.autor; 
    const h2Autor = document.querySelector('.js-autor');
    h2Autor.textContent = `Autor: ` + autor; // textContent es solo válido para p o h123456 xke solo es para texto
}

function listener(){
    const allLi = document.querySelectorAll('li'); //querySelectorAll devuelve un array y no se puede escuchar un evento en array, por lo tanto creamos otro bucle
    for (const li of allLi) {
        li.addEventListener('click', handleClick);
    }
}

function render(){
    for (const item of data) {
        const li = document.createElement('li'); // no se podría combinar con uList.innerHTML en vez de uList.appendChild(li);
        uList.appendChild(li);
        li.setAttribute('id', item.id); //3
        li.dataset.autor = item.autor; // 4: li no tiene un atributo para ponerle la info del autor, entonces lo ponemos así para que salga en el codigo pero no se vea renderizado

        const article = document.createElement('article');
        article.classList.add('card'); // para clases de CSS se puede usar setAttribute o classList.add
        li.appendChild(article);

        const image = document.createElement('img');
        //image.src = item.img; Habría que añadirle el src con item.img porque estamos dentro del for
        // en vez de image.src, se puede poner así: image.setAttribute("src", item.img) y para añadirle otro atributo como una clase, creamos otro debajo image.setAttribute('class', 'image')
        image.setAttribute("src", item.img);
        image.setAttribute('alt', item.autor);
        //article.appendChild(image); appendChild solo puede añadir una cosa, para añadir varias sería solo append y en este caso sería lo correcto *

        const h3 = document.createElement('h3');
        const textH3 = document.createTextNode(item.title);
        h3.appendChild(textH3);
        //article.appendChild(h3);

        const p = document.createElement('p');
        const textP = document.createTextNode(item.desc);
        p.appendChild(textP);
        //article.appendChild(p);
        article.append(image, h3, p); //*
    }
    listener();
}
render();