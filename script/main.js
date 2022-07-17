const imgPerfil = document.querySelector(".img1");
const TitlePerfil = document.querySelector(".title");
const TextPerfil = document.querySelector(".text");
let curretentItem = 0;

const sliderCliente = [
  {
    img: "image/pessoa1.jpg",
    title: "bryan",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea delenit velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!",
  },
  {
    img: "image/pessoa2.jpg",
    title: "claudio",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad! ",
  },
  {
    img: "image/pessoa3.jpg",
    title: "suzan",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!",
  },
  {
    img: "image/pessoa4.jpg",
    title: "wanda",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!",
  },
];

imgPerfil.src = `${sliderCliente[curretentItem].img}`;
TitlePerfil.innerText = `${sliderCliente[curretentItem].title}`;
TextPerfil.innerText = `${sliderCliente[curretentItem].text}`;

document.addEventListener("click", (e) => {
  let el = e.target;
  if (el.classList.contains("right")) {
    curretentItem++;
    if (curretentItem > 3) {
        curretentItem = 0;
        imgPerfil.src = `${sliderCliente[curretentItem].img}`;
        TitlePerfil.innerText = `${sliderCliente[curretentItem].title}`;
        TextPerfil.innerText = `${sliderCliente[curretentItem].text}`;
    }
    imgPerfil.src = `${sliderCliente[curretentItem].img}`;
    TitlePerfil.innerText = `${sliderCliente[curretentItem].title}`;
    TextPerfil.innerText = `${sliderCliente[curretentItem].text}`;
  } else if (el.classList.contains("left")) {
        curretentItem--;
        if (curretentItem < 0) {
        curretentItem = 3;
        imgPerfil.src = `${sliderCliente[curretentItem].img}`;
        TitlePerfil.innerText = `${sliderCliente[curretentItem].title}`;
        TextPerfil.innerText = `${sliderCliente[curretentItem].text}`;
    }
    imgPerfil.src = `${sliderCliente[curretentItem].img}`;
    TitlePerfil.innerText = `${sliderCliente[curretentItem].title}`;
    TextPerfil.innerText = `${sliderCliente[curretentItem].text}`;
  }
});
