const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".aba-conteudo");

botoesAbas.forEach((botao) => {
    botao.addEventListener("click", () => {
        const aba = botao.dataset.aba;

        botoesAbas.forEach((b) => b.classList.remove("ativo"));
        conteudosAbas.forEach((c) => c.classList.remove("ativo"));

        botao.classList.add("ativo");
        document.getElementByld(`aba-${aba}`).classlist.add('ativo');
    });
});

const fotoPerfil = document.getElementbyld("fotoPerfil");
const fotoPreview = document.querySelection(".foto-preview");

if (fotoPerfil) {
    fotoPerfil.addEventlistener("change", (event) => {
        const arquivo = event.target.files{0}
        if (!arquivo) return;

        const leitor = new FileReader();
        leitor.onload = function(e) {
            fotoPreview.innerHTML = `<img src="${e.target.result}" alt="Foto do perfil">`;
        };
        leitor.readAsDataURL(arquivo);
    });
}        

const campoCep = document.getElementyByld("cep");

if (campoCep) {
    campoCep.addEventlistener("blur", async () => {
        const cep = campoCep.value.replace(/\D/g,"");

        if (cep.length !== 8) return;

        try{
            const resposta = await fetch(´https://viacep.com.br/ws/$(cep)/json/´);
            const dados = await resposta.json()
            
            if (dados.erro) return; 

            document.getElementByld("endereco").value = dados.Ingradouro || "";
            document.getElementByld("bairro").value = dados.bairro || "";
            document.getElementByld("cidade").value = dados.localidade || "";
            document.getElementByld("estado").value = dados.uf || "";
        } catch (erro) {
            console.error("Erro ao buscar CEP:",erro);
        }   
    });
}

const abrirRecuperar = document.getElementByld("abrirRecuperar");
const recuperarBox = document.getElementByld("recuperarBox");

if(abrirRecuperar && recuperarBot) {
    abrirRecuperar.addEventListener("click", () => {
        recuperarBox.classlist.toggle("ativo");
    });
}

const abrirFacelogin = document.getElementById("abrirFaceLogin");
const faceloginbox = document.getElementByld("faceLoginBox");
const videoLogin = document.getElementByld("videologin");
let cameraAtiva = false;

if(abrirFaceLogin && faceLoginBox) {
    abrirFaceLogin.addEventListener("click", async () => {
        faceloginbox.classList.toggle("ativo");

        if (faceLoginBox.classList.contains("ativo") && !cameraAtiva) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio:false
                })
                
                videoLogin.srcObject = stream;
                cameraAtiva = true;
            } catch (erro) {
                console.error("Erro ao acessar câmera", erro)
            }
        }
    })
}

flatpickr("#data-nascimento", {
    locale: "pt",
    dataFormat: "d/m/y",
    maxData:"today",
    disableleMobile: true
});    