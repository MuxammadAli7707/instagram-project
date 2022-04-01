const elList = document.getElementById("post-list");
const modalBox = document.getElementById('modal-box');
let idxs = 0;

showIt(object, 1);
function showIt(array, num){
  elList.style.display = "none";
  array.forEach((item) => {
    let li = document.createElement("li");
    li.className = `post__item col-4`;
    li.setAttribute("data-bs-toggle","modal");
    li.setAttribute("data-bs-target",`#staticBackdrop${idxs}`);
    li.innerHTML = `
    <div class="post__box">
            <div class="post__imgbox">
              <img src="${item.imgs[0]}" alt="img">
            </div>
            <div class="post__hover"></div>
            <div class="post__icons d-flex">
              <div class="post__like d-flex align-items-center">
                <i class='bx bxs-heart post__icon'></i>
                <span class="post__text">${item.likes}</span>
              </div>
              <div class="post__comment d-flex align-items-center">
                <i class='bx bxs-message-rounded post__icon'></i>
                <span class="post__text">${item.comment}</span>
              </div>
            </div>
          </div>
  `;
  let div = document.createElement('div');
  div.innerHTML = `
  <!-- Modal -->

    <div class="modal fade" id="staticBackdrop${idxs}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        
          <div class="modal-body">
            <div class="d-flex col-12">
              <div class="modal__imgbox col-6">
               
                <div id="carouselExampleControls${idxs}" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="modal-img" src="${item.imgs[0]}" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img class="modal-img" src="${item.imgs[1]}" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img class="modal-img" src="${item.imgs[2]}" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${idxs}" data-bs-slide="prev">
                    <span class="carusel__ikon" aria-hidden="true"><i class='bx bxs-chevron-left'></i></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${idxs}" data-bs-slide="next">
                    <span class="carusel__ikon" aria-hidden="true"><i class='bx bx-chevron-right'></i></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="modal-info d-flex flex-column col-6">
              <div class="modal__wrapper d-flex align-items-center justify-content-between">
                <div>
                  <img class="modal__img" src="../imgs/img-najit.jpg" alt="img" width="32" height="32">
                  <span class="modal__title">najottalim</span>
                  <span class="modal__text">Подписки</span>
                </div>
                <button class="modal__horizontal">
                  <i class='bx bx-dots-horizontal-rounded' ></i>
                </button>
              </div>
              <ul class="modal__comments comments flex-grow-1 list-unstyled">
                <li class="comments__item">
                <div class="d-flex align-items-center ">
                  <img class="modal__img" src="../imgs/img-najit.jpg" alt="img" width="32" height="32">
                  <span class="modal__title">najottalim</span>
                  <span>${item.title}</span>
                </div>
                <br>
                <div class="modal__desc">
                  <p>${item.desc}</p>
                </div>
                </li>
              </ul>

              <div class="modal-ikons d-flex align-items-center justify-content-between">
              <div class="modal__ikons">
                <button class="modal__btn" onclick="myFunction()">
                  <i id="like" class='bx bx-heart modal__ikon modal__heart' ></i>
                </button>
                <button class="modal__btn">
                  <i class='bx bx-message-rounded modal__ikon' ></i>
                </button>
                <button class="modal__btn">
                  <i class='bx bx-navigation modal__ikon' ></i>
                </button>
              </div>
              <div class="modal__bookmark">
                <button class="modal__book" onclick="func('${item.id}')">
                  <i id="save" class='bx bx-bookmark modal__ikon modal__save'></i>
                </button>
              </div>
            </div>

              <div class="modal__count">
                <img class="modal__user" src="imgs/img-najit.jpg" alt="img" width="20" height="20">
                <span class="modal__likes">Нравится</span>
                <span class="modal__name">User</span> 
                <span class="modal__likes">и</span>
                <span class="modal__name">ещё 100</span>
              </div>
              <div class="modal__times">
                <span class="modal__time">22 часов назад</span>
              </div>
              <div class="modal__feedbacks d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
               <i class='bx bx-smile'></i>
               <input class="modal__feedback" name="text" id="modal-place" placeholder="Добавьте комментарий..." ></input>
              </div>
              <button class="modal__send">Опубликовать</button>
            </div>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>

          </div>
        </div>
      </div>
    </div>
  
  `;
    item.imgs.forEach((item) =>{
      if(item.includes("mp4")){
        let elVideo = li.querySelector('.bxs-heart');
        elVideo.className = 'bx bx-play post__icon';

        let elVideoIcon = document.createElement("span");
        elVideoIcon.className = "post__play";
        elVideoIcon.innerHTML = `
        <i class='bx bx-play post__video'></i>
        `;
        li.appendChild(elVideoIcon);

        let elPlay = div.querySelector(".modal__imgbox");
        elPlay.innerHTML = `
        <video class="video__box" controls>
          <source class="video-source" src="${item}" type="video/mp4"></source>
        </video>
        `;
      }
    });

    let count = 0;

    modalBox.appendChild(div);
    idxs++;
    if(num == 1){      
      let elLike = div.querySelector(".bx-heart");
      elLike.addEventListener("click", () =>{
        elLike.className = "bx bxs-heart";
        elLike.style.color = 'red';
      });


      let elSaved = div.querySelector(".bx-bookmark");
      elSaved.addEventListener("click", () =>{
        elSaved.className = "bx bxs-bookmark";
        elSaved.style.color = 'black';
      });
      
      elList.appendChild(li);
    }
  });
}

const canvasList = document.getElementById("canvas-list");
const elSave = document.getElementById("save");
const elPosts = document.getElementById('posts');

elSave.addEventListener("click", () =>{
  elList.style.display = "none";
  canvasList.style.display = "flex";
});

elPosts.addEventListener("click", () =>{
  elList.style.display = "flex";
  canvasList.style.display = "none";
});

function func(send){
  object.forEach((item) => {
    if(send == item.id){
      let li = document.createElement("li");
      li.className = `post__item col-4`;
      li.setAttribute("data-bs-toggle","modal");
      li.setAttribute("data-bs-target",`#staticBackdrop${idxs}`);
      li.innerHTML = `
    <div class="post__box">
            <div class="post__imgbox">
              <img src="${item.imgs[0]}" alt="img">
            </div>
            <div class="post__hover"></div>
            <div class="post__icons d-flex">
              <div class="post__like d-flex align-items-center">
                <i class='bx bxs-heart post__icon'></i>
                <span class="post__text">${item.likes}</span>
              </div>
              <div class="post__comment d-flex align-items-center">
                <i class='bx bxs-message-rounded post__icon'></i>
                <span class="post__text">${item.comment}</span>
              </div>
            </div>
          </div>
  `;
  let div = document.createElement('div');
  div.innerHTML = `

  <!-- Modal -->
    <div class="modal fade" id="staticBackdrop${idxs}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="d-flex col-12">
              <div class="modal__imgbox col-6">
                <img class="modal-img" src="${item.imgs}" alt="img">
              </div>
              <div class="modal-info d-flex flex-column col-6">
              <div class="modal__wrapper d-flex align-items-center justify-content-between">
                <div>
                  <img class="modal__img" src="../imgs/img-najit.jpg" alt="img" width="32" height="32">
                  <span class="modal__title">najottalim</span>
                  <span class="modal__text">Подписки</span>
                </div>
                <button class="modal__horizontal">
                  <i class='bx bx-dots-horizontal-rounded' ></i>
                </button>
              </div>
              <ul class="modal__comments comments flex-grow-1 list-unstyled">
                <li class="comments__item">
                <div class="d-flex align-items-center ">
                  <img class="modal__img" src="../imgs/img-najit.jpg" alt="img" width="32" height="32">
                  <span class="modal__title">najottalim</span>
                  <span>${item.title}</span>
                </div>
                <br>
                <div class="modal__desc">
                  <p>${item.desc}</p>
                </div>
                </li>
              </ul>

              <div class="modal-ikons d-flex align-items-center justify-content-between">
              <div class="modal__ikons">
                <button class="modal__btn">
                  <i id="like" class='bx bx-heart modal__ikon modal__heart' ></i>
                </button>
                <button class="modal__btn">
                  <i class='bx bx-message-rounded modal__ikon' ></i>
                </button>
                <button class="modal__btn">
                  <i class='bx bx-navigation modal__ikon' ></i>
                </button>
              </div>
              <div class="modal__bookmark">
                <button class="modal__book">
                  <i id="save" class='bx bxs-bookmark modal__ikon modal__save'></i>
                </button>
              </div>
            </div>

              <div class="modal__count">
                <img class="modal__user" src="imgs/img-najit.jpg" alt="img" width="20" height="20">
                <span class="modal__likes">Нравится</span>
                <span class="modal__name">User</span> 
                <span class="modal__likes">и</span>
                <span class="modal__name">ещё 100</span>
              </div>
              <div class="modal__times">
                <span class="modal__time">22 часов назад</span>
              </div>
              <div class="modal__feedbacks d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
               <i class='bx bx-smile'></i>
               <input class="modal__feedback" name="text" id="modal-place" placeholder="Добавьте комментарий..." ></input>
              </div>
              <button class="modal__send">Опубликовать</button>
            </div>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>

          </div>
        </div>
      </div>
    </div>
  
  `;
      
  item.imgs.forEach((item) =>{
    if(item.includes("mp4")){
      let elVideo = li.querySelector('.bxs-heart');
      elVideo.className = 'bx bx-play post__icon';

      let elVideoIcon = document.createElement("span");
      elVideoIcon.className = "post__play";
      elVideoIcon.innerHTML = `
      <i class='bx bx-play post__video'></i>
      `;
      li.appendChild(elVideoIcon);

      let elPlay = div.querySelector(".modal__imgbox");
      elPlay.innerHTML = `
      <video class="video__box" controls>
        <source class="video-source" src="${item}" type="video/mp4"></source>
      </video>
      `;
    }
    });
    modalBox.appendChild(div);
    idxs++;
    canvasList.appendChild(li);
  }
  });
}

let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')
let slideList = document.querySelector('#slider-list')
let itemCard = document.querySelectorAll('#slider-list li')

let idx = 0;

function postSlider() {
    if(idx > itemCard.length-9){
      idx = 0;
    }
    else if(idx < 0) {
      idx = itemCard-9;
    }

    slideList.style.transform =`translateX(${-idx*160}px)`
}
rightBtn.addEventListener('click', ()=> {
    idx++;
    resetInter();
    postSlider();
})
leftBtn.addEventListener('click', ()=> {
    idx--;
    resetInter();
    postSlider();
})

let interval = setInterval(run, 3000);

function run() {
    idx++;
    postSlider();
}
function resetInter() {
    clearInterval(interval);
    interval = setInterval(run, 3000)
}
