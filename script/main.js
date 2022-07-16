const imgPerfil = document.querySelector(".img1");
const TitlePerfil = document.querySelector(".title");
const TextPerfil = document.querySelector(".text");
let c = 0;

const sliderCliente = [
    {img: "../image/pessoa1.jpg", title: "bryan", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea delenit velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!"},
    {img: "../image/pessoa2.jpg", title: "claudio", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad! "},
    {img: "../image/pessoa3.jpg", title: "suzan", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!"},
    {img: "../image/pessoa4.jpg", title: "wanda", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, nisi nam est ea deleniti velit minus inventore blanditiis minima consectetur tempore repellendus quos officia, animi nesciunt sit ut voluptatem ad!"},

]


imgPerfil.src = `${sliderCliente[0].img}`
TitlePerfil.innerText = `${sliderCliente[c].title}`
TextPerfil.innerText =`${sliderCliente[c].text}`

document.addEventListener("click", e => {
 
    let el = e.target;
    if(el.classList.contains("right")){
        c = c + 1
        if(c  > 3){
            c =0
            imgPerfil.src = `${sliderCliente[c].img}`
            TitlePerfil.innerText = `${sliderCliente[c].title}`
            TextPerfil.innerText =`${sliderCliente[c].text}`
        }
        imgPerfil.src = `${sliderCliente[c].img}`
        TitlePerfil.innerText = `${sliderCliente[c].title}`
        TextPerfil.innerText =`${sliderCliente[c].text}`

    }else if(el.classList.contains("left")){
        c = c - 1;
        if(c <= 0){
            c = 3
            imgPerfil.src = `${sliderCliente[c].img}`
            TitlePerfil.innerText = `${sliderCliente[c].title}`
            TextPerfil.innerText =`${sliderCliente[c].text}`
        }
        imgPerfil.src = `${sliderCliente[c].img}`
        TitlePerfil.innerText = `${sliderCliente[c].title}`
        TextPerfil.innerText =`${sliderCliente[c].text}`
    }
})