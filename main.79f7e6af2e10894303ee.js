(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(o,e,t){},QfWi:function(o,e,t){"use strict";t.r(e);t("OPH6"),t("iPZ8"),t("kypl"),t("8cZI"),t("lmye");var a=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];console.log(a);var i={gallery:document.querySelector(".js-gallery"),modal:document.querySelector(".js-lightbox"),modalImg:document.querySelector(".lightbox__image"),button:document.querySelector(".lightbox__button"),overlay:document.querySelector(".lightbox__overlay")},n=a.map((function(o){var e=o.preview,t=o.original;return'<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="'+t+'"\n  >\n    <img\n      class="gallery__image"\n      src="'+e+'"\n      data-source="'+t+'"\n      alt="'+o.description+'"\n    />\n  </a>\n</li>'}));function p(o,e){i.modalImg.alt=o,i.modalImg.src=e}function c(){i.modal.classList.remove("is-open"),p("","")}console.log(n),i.gallery.insertAdjacentHTML("beforeend",n.join("")),i.gallery.addEventListener("click",(function(o){if(o.preventDefault(),console.log(o.target.nodeName),"IMG"!==o.target.nodeName)return;i.modal.classList.add("is-open"),p(o.target.src,o.target.dataset.source)})),i.button.addEventListener("click",c),i.overlay.addEventListener("click",c),window.addEventListener("keydown",(function(o){"Escape"===o.key&&c()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.79f7e6af2e10894303ee.js.map