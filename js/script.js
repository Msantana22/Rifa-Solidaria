let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// CURSOS
// const carousel = document.getElementById("carousel");
// const nextBtn = document.getElementById("next");
// const prevBtn = document.getElementById("prev");

// nextBtn.addEventListener("click", () => {
// carousel.scrollBy({ left: 400, behavior: "smooth" });
// });

// prevBtn.addEventListener("click", () => {
// carousel.scrollBy({ left: -400, behavior: "smooth" });
// });

// // Auto-scroll infinito
// setInterval(() => {
// const maxScroll = carousel.scrollWidth - carousel.clientWidth;

// if (carousel.scrollLeft >= maxScroll - 5) {
// carousel.scrollTo({ left: 0, behavior: "smooth" });
// } else {
// carousel.scrollBy({ left: 400, behavior: "smooth" });
// }
// }, 8000);

// CONTATO
// document.addEventListener("DOMContentLoaded", function () {

//     // 🔑 Inicializa EmailJS
//     emailjs.init("BielbK2LQiATKDFe-");

//     const form = document.getElementById("contatoForm");
//     const status = document.getElementById("status");

//     // MASCARA TELEFONE
//     document.getElementById("telefone").addEventListener("input", function (e) {
//         let valor = e.target.value.replace(/\D/g, "");
    
//         if (valor.length > 11) {
//             valor = valor.slice(0, 11);
//         }
    
//         if (valor.length >= 1) {
//             valor = "(" + valor;
//         }
    
//         if (valor.length >= 3) {
//             valor = valor.replace(/^(\(\d{2})(\d)/, "$1) $2");
//         }
    
//         if (valor.length >= 10) {
//             valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
//         }
    
//         e.target.value = valor;
//     });
    

//     let timeoutStatus; // controla o tempo

//     function esconderStatus() {
//         clearTimeout(timeoutStatus); // evita conflito
//         timeoutStatus = setTimeout(() => {
//             status.textContent = "";
//             status.style.display = "none";
//         }, 8000); // 10 segundos
//     }

//     function mostrarStatus(texto, cor) {
//         status.style.display = "block";
//         status.style.color = cor;
//         status.textContent = texto;
//         esconderStatus();
//     }

//     function validarTelefone(telefone) {
//         telefone = telefone.replace(/\D/g, '');
//         return /^[1-9]{2}9[0-9]{8}$/.test(telefone);
//     }

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // 🚫 NÃO recarrega a página

//         const telefone = document.getElementById("telefone").value;

//         // ❌ Validação
//         if (!validarTelefone(telefone)) {
//             mostrarStatus("Telefone inválido. Ex: (14) 99623-5678", "red");
//             return;
//         }

//         // ⏳ Feedback visual
//         mostrarStatus("Enviando mensagem...", "#555");

//         // 📧 Envio EmailJS
//         emailjs.sendForm(
//             "service_k0y3thb",
//             "template_sobot7o",
//             form
//         )
//         .then(() => {
//             mostrarStatus("Mensagem enviada com sucesso!", "green");
//             form.reset();
//         })
//         .catch((error) => {
//             console.error(error);
//             mostrarStatus("Erro ao enviar mensagem. Tente novamente.", "red");
//         });
//     });
// });


// EXPERIENCIA PROFISSIONAL
// const cards = document.querySelectorAll('.exp-card');

// cards.forEach(card => {
//   const intensity = 10; // quanto inclina (quanto menor, mais premium)

//   card.addEventListener('mousemove', e => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * -intensity;
//     const rotateY = ((x - centerX) / centerX) * intensity;

//     card.style.transform = `
//       perspective(800px)
//       rotateX(${rotateX}deg)
//       rotateY(${rotateY}deg)
//       translateY(-12px)
//       scale(1.02)
//     `;

//     card.style.boxShadow = `
//       0 35px 80px rgba(0, 0, 0, 0.7),
//       0 0 45px rgba(255, 140, 0, 2)
//     `;
//   });

//   card.addEventListener('mouseleave', () => {
//     card.style.transform = `
//       perspective(800px)
//       rotateX(0deg)
//       rotateY(0deg)
//       translateY(0)
//       scale(1)
//     `;

//     card.style.boxShadow =
//       '0 20px 50px rgba(0, 0, 0, 0.6)';
//   });
// });


// RIFA
const rifaGrid = document.getElementById("rifaGrid");

const numerosSelecionados = [];

const numerosVendidos = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
    "012",
    "013",
    "014",
    "015",
    "016",
    "017",
    "018",
    "019",
    "020",
    "021",
    "022",
    "023",
    "024",
    "025",
    "026",
    "027",
    "028",
    "029",
    "030",
    "033",
    "036",
    "039",
    "040",
    "045",
    "046",
    "054",
    "055",
    "063",
    "064",
    "066",
    "067",
    "068",
    "073",
    "074",
    "077",
    "079",
    "084",
    "087",
    "088",
    "089",
    "105",
    "106",
    "107",
    "111",
    "114",
    "116",
    "117",
    "119",
    "122",
    "128",
    "133",
    "135",
    "162",
    "164",
    "180",
    "188",
    "189",
    "190",
    "191",
    "192",
    "193",
    "194",
    "195",
    "196",
    "197",
    "198",
    "199",
    "200"
];

for(let i = 1; i <= 200; i++){

    const numero = document.createElement("div");

    numero.classList.add("numero-rifa");

    const valor = i.toString().padStart(3,"0");

    numero.innerText = valor;

    if(numerosVendidos.includes(valor)){

        numero.classList.add("vendido");

    }else{

        numero.addEventListener("click", () => {

            numero.classList.toggle("selecionado");

            if(numerosSelecionados.includes(valor)){

                const index = numerosSelecionados.indexOf(valor);

                numerosSelecionados.splice(index,1);

            }else{

                numerosSelecionados.push(valor);

            }

            atualizarNumeros();
        });
    }

    rifaGrid.appendChild(numero);
}

function atualizarNumeros(){

    const div = document.getElementById("numerosSelecionados");

    div.innerHTML = numerosSelecionados.join(", ");

    atualizarSelecionados();
}

function copiarPix(){

    const chave =
        document.getElementById("pixKey").innerText;

    navigator.clipboard.writeText(chave);

    alert("PIX copiado!");
}

function enviarWhatsapp() {

    const telefone = "5514996171756";

    if(numerosSelecionados.length === 0){

        alert("Selecione pelo menos um número.");

        return;
    }

    const nome = document.getElementById("nome").value;

    if(nome === ''){

        alert("Informe seu nome e sobrenome.");
        focoCampoNome();
        return;
    }

    const total = numerosSelecionados.length * 20;

    const mensagem = `🥋 RIFA SOLIDÁRIA - MAX E PEDRO

Nome: ${nome}

Números escolhidos:
${numerosSelecionados.join(", ")}

Quantidade:
${numerosSelecionados.length}

Valor Total:
R$ ${total.toFixed(2).replace('.', ',')}

Já realizei o pagamento e vou enviar o comprovante nesta conversa.
`;

    const url =
        `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

function irParaPagamento(){

    if(numerosSelecionados.length === 0){

        alert("Selecione pelo menos um número.");

        return;
    }

    document.getElementById("pagamento")
        .style.display = "block";

    document.getElementById("pagamento")
        .scrollIntoView({
            behavior:"smooth"
        });

        focoCampoNome();
}

function focoCampoNome(){
    setTimeout(() => {

        document.getElementById("nome").focus();

    }, 800);
}

function atualizarSelecionados(){

    const campo = document.getElementById("numerosSelecionados");
    const valorTotal = document.getElementById("valorTotal");
    const resumoValor = document.getElementById("resumoValor");
    const resumoNumeros = document.getElementById("resumoNumeros");

    if(numerosSelecionados.length === 0){

        campo.innerHTML =
            "Nenhum número selecionado";

        valorTotal.innerHTML =
            "Total: R$ 0,00";

        resumoNumeros.innerHTML =
            "Nenhum número selecionado";

        resumoValor.innerHTML =
            "Total: R$ 0,00";

        return;
    }

    campo.innerHTML =
        "Números: " + numerosSelecionados.join(", ");

    resumoNumeros.innerHTML =
        "Números: " + numerosSelecionados.join(", ");

    const total =
    numerosSelecionados.length * 20;

    valorTotal.innerHTML =
        `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

    resumoValor.innerHTML =
        `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}