const elList = document.querySelector('#post-list');
let idxs = 0;
object.forEach((item, index) => {
  let li = document.createElement("li");
  let div = document.createElement('div');
  li.className = `post__item col-4 onclick="func('${item.id}')"`;
  li.setAttribute("data-bs-toggle","modal");
  li.setAttribute("data-bs-target","#staticBackdrop");
  if(item.imgs[0].includes('.mp4')){
    li.innerHTML = `
          <div class="post__box">
             <img src="${item.imgs[0]}" alt="img">
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
    div.innerHTML = `
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="d-flex col-12">
              <div class="modal__imgbox col-6">
                <video class="video__box" controls>
                  <source src="${item.imgs[0]}" type="video/mp4">
                </video>
              </div>
              <div class="modal-info d-flex flex-column justify-content-between col-6">
                <p>Lorem ipsum dolor sit amet.</p>
                <div class="d-flex align-items-center justify-content-between">
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
                    <button class="modal__book onclick="func('${item.id}')"">
                      <i id="save" class='bx bx-bookmark modal__ikon modal__save'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-header">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      </div>
    </div>
    
    `;
  } else {
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
    div.innerHTML = `
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="d-flex col-12">
                <div class="modal-imgbox col-6">
                  <img class="modal-img" src="${item.imgs[0]}" alt="img">
                </div>
                <div class="modal-info d-flex flex-column justify-content-between col-6">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div class="d-flex align-items-center justify-content-between">
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
                        <i id="save" class='bx bx-bookmark modal__ikon modal__save'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
      </div>
      
    `;
  }
  elList.appendChild(div);
  elList.appendChild(li);
});

// const canvasList = document.getElementById("canvas-list");
// const elSave = document.getElementById("save");


// object.forEach((item, index) => {
//   let li = document.createElement("li");
//   let div = document.createElement('div');
//   li.className = `post__item col-4`;
//   li.setAttribute("data-bs-toggle","modal");
//   li.setAttribute("data-bs-target","#staticBackdrop");
//   if(item.imgs[0].includes('.mp4')){
//     li.innerHTML = `
//           <div class="post__box">
//              <img src="${item.imgs[1]}" alt="img">
//             <div class="post__hover"></div> 
//             <div class="post__icons d-flex">
//               <div class="post__like d-flex align-items-center">
//                 <i class='bx bxs-heart post__icon'></i>
//                 <span class="post__text">${item.likes}</span>
//               </div>
//               <div class="post__comment d-flex align-items-center">
//                 <i class='bx bxs-message-rounded post__icon'></i>
//                 <span class="post__text">${item.comment}</span>
//               </div>
//             </div>
//           </div>
    
//   `;
//     div.innerHTML = `
//     <!-- Modal -->
//     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-body">
//             <div class="d-flex col-12">
//               <div class="modal__imgbox col-6">
//                 <video class="video__box" controls>
//                   <source src="${item.imgs[0]}" type="video/mp4">
//                 </video>
//               </div>
//               <div class="modal-info d-flex flex-column justify-content-between col-6">
//                 <p>Lorem ipsum dolor sit amet.</p>
//                 <div class="d-flex align-items-center justify-content-between">
//                   <div class="modal__ikons">
//                     <button class="modal__btn">
//                       <i id="like" class='bx bx-heart modal__ikon modal__heart' ></i>
//                     </button>
//                     <button class="modal__btn">
//                       <i class='bx bx-message-rounded modal__ikon' ></i>
//                     </button>
//                     <button class="modal__btn">
//                       <i class='bx bx-navigation modal__ikon' ></i>
//                     </button>
//                   </div>
//                   <div class="modal__bookmark">
//                     <button class="modal__book">
//                       <i id="save" class='bx bx-bookmark modal__ikon modal__save'></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-header">
//           <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//       </div>
//     </div>
    
//     `;
//   } else {
//     li.innerHTML = `
//     <div class="post__box">
//             <div class="post__imgbox">
//               <img src="${item.imgs[0]}" alt="img">
//             </div>
//             <div class="post__hover"></div>
//             <div class="post__icons d-flex">
//               <div class="post__like d-flex align-items-center">
//                 <i class='bx bxs-heart post__icon'></i>
//                 <span class="post__text">${item.likes}</span>
//               </div>
//               <div class="post__comment d-flex align-items-center">
//                 <i class='bx bxs-message-rounded post__icon'></i>
//                 <span class="post__text">${item.comment}</span>
//               </div>
//             </div>
//           </div>
          
          
//   `; 
//   div.innerHTML = `
//     <!-- Modal -->
//     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-body">
//             <div class="d-flex col-12">
//               <div class="modal-imgbox col-6">
//                 <img class="modal-img" src="${item.imgs[0]}" alt="img">
//               </div>
//               <div class="modal-info d-flex flex-column justify-content-between col-6">
//                 <p>Lorem ipsum dolor sit amet.</p>
//                 <div class="d-flex align-items-center justify-content-between">
//                   <div class="modal__ikons">
//                     <button class="modal__btn">
//                       <i id="like" class='bx bx-heart modal__ikon modal__heart' ></i>
//                     </button>
//                     <button class="modal__btn">
//                       <i class='bx bx-message-rounded modal__ikon' ></i>
//                     </button>
//                     <button class="modal__btn">
//                       <i class='bx bx-navigation modal__ikon' ></i>
//                     </button>
//                   </div>
//                   <div class="modal__bookmark">
//                     <button class="modal__book">
//                       <i id="save" class='bx bx-bookmark modal__ikon modal__save'></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-header">
//           <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//       </div>
//     </div>
    
//     `;
//   }
//   canvasList.appendChild(div);
//   canvasList.appendChild(li);
// });