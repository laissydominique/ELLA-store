<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const acessories = ref([]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function scrollToContactUs() {
  const section = document.getElementById("contact-us");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function getScroll() {
  const slideUp = {
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 30,
    easing: "ease-in-out",
    threshold: 0.5,
  };

  const slideDown = {
    origin: "top",
    distance: "50px",
    duration: 800,
    delay: 30,
    easing: "ease-in-out",
    reset: true,
    threshold: 0.5,
  };

  const slideLeft = {
    origin: "left",
    distance: "50px",
    duration: 800,
    delay: 30,
    easing: "ease-in-out",
    reset: true,
    threshold: 0.5,
  };

  ScrollReveal().reveal(".slideDown", slideDown);
  ScrollReveal().reveal(".slideUp", slideUp);
  ScrollReveal().reveal(".slideLeft", slideLeft);
}

async function getAcessories() {
  acessories.value.push(
    {
      id: 22,
      title: "Blazer Xadrez",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/blazer/blazer-xadrez-grid-em-tecido-de-alfaiataria_375053_600_1.webp",
      price: 270.0 + ",00",
    },
    {
      id: 27,
      title: "Blazer de Couro Verde",
      image:
        "https://lojavivavida.vteximg.com.br/arquivos/ids/223516-1000-1500/Blazer-de-couro-verde-Animale.png?v=637995600361800000",
      price: 330.0 + ",00",
    },
    {
      id: 25,
      title: "Blazer Casual Cinza Claro",
      image:
        "https://images.tcdn.com.br/img/img_prod/1076440/blazer_alongado_maria_cinza_787_2_62de4e19039f254ff7101a0965178acb.jpg",
      price: 230.0 + ",00",
    },
    {
      id: 20,
      title: "Blazer Com Ombreira",
      image:
        "https://static.riachuelo.com.br/RCHLO/14592185007/portrait/6726a30822bef8a6ac30bf4f1215f76970b39c40.jpg",
      price: 250.0 + ",00",
    },
    {
      id: 21,
      title: "Blazer de Linho Off-White",
      image:
        "https://lojaanimale.vtexassets.com/arquivos/ids/1805981/03040465_0024_1-BLAZER-DE-LINHO-OVERSIZED-OFF-WHITE.jpg?v=638584821506500000",
      price: 280.0 + ",00",
    },
    {
      id: 23,
      title: "Blazer de Veludo Preto",
      image:
        "https://gregory.vtexassets.com/arquivos/ids/447128/blazer-veludo-transpassado-botoes---41865-01.jpg?v=638217659148870000",
      price: 320.0 + ",00",
    },
    {
      id: 19,
      title: "Blazer Clássico",
      image:
        "https://ecoms1.com/47445/imgs/big/@v3/1681406970308-whatsappimage2023-04-13at14.25.183.jpeg.avif",
      price: 220.0 + ",00",
    },
    {
      id: 26,
      title: "Blazer Slim Fit Preto",
      image:
        "https://triangulo.cdn.magazord.com.br/img/2023/02/produto/2899/blazer-preto-alongado-rafaela-frente-novo.jpg?ims=fit-in/635x865/filters:fill(white)",
      price: 270.0 + ",00",
    },

    {
      id: 24,
      title: "Blazer Longo Estilo Terno",
      image:
        "https://static.deluccaclassico.com.br/public/deluccaclassico/imagens/produtos/blazer-feminino-tere-curto-de-alfaiataria-azul-marinho-66475edcacc65.jpg",
      price: 350.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getAcessories();
  getScroll();
});
</script>

<template>
  <div class="color-header"></div>
  <header class="header">
    <div class="logo" @click="router.push({ path: '/home' })">
      <img src="/src/assets/imgs/modelo-logo-1.png" alt="" width="130px" height="130px" />
    </div>
    <div class="options slideDown">
      <div class="option shorts" @click="router.push({ path: 'shorts' })">
        <p>Shorts</p>
      </div>
      <div class="option blouses" @click="router.push({ path: 'blouses' })">
        <p>Blusas</p>
      </div>
      <div class="option pants" @click="router.push({ path: 'pants' })">
        <p>Calças</p>
      </div>
      <div class="option skirts" @click="router.push({ path: 'skirts' })">
        <p>Saias</p>
      </div>
      <div class="option dress" @click="router.push({ path: 'dresses' })">
        <p>Vestidos</p>
      </div>
      <div class="option blazer" @click="router.push({ path: 'blazers' })">
        <p>Blazers</p>
      </div>
      <div class="option accessories" @click="router.push({ path: 'acessories' })">
        <p>Acessórios</p>
      </div>
      <div class="option bags" @click="router.push({ path: 'bags' })">
        <p>Bolsas</p>
      </div>
    </div>
    <div class="option contact" @click="scrollToContactUs">
      <div><img src="/src/assets/imgs/favicon-32x32.png" alt="" width="20px" height="20px" /></div>
      <p>Contato</p>
    </div>
  </header>
  <div class="product-title slideLeft">
    <div class="line"></div>
    <h1>Blazers</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Você não acha que um blazer pode ser o destaque do seu próximo evento?</h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in acessories">
      <div class="image-product">
        <img :src="item.image" alt="" width="400px" height="520px" />
      </div>
      <div class="description-product">
        <div class="title-product">
          <p translate="yes">{{ item.title }}</p>
        </div>
        <div class="price-product">
          <p>R$ {{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="contact-us slideDown" id="contact-us">
    <div class="contact-us-title">
      <div class="line"></div>
      <h1>Fale conosco</h1>
      <div class="line"></div>
    </div>
    <form action="#">
      <div class="name slideLeft">
        <label for="text">Seu nome</label>
        <input type="text" />
      </div>
      <div class="subject slideLeft">
        <label for="text">Assunto</label>
        <input type="text" />
      </div>
      <div class="textarea slideLeft">
        <label for="text">Dúvida</label>
        <textarea></textarea>
      </div>
      <div class="submit">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
  <div class="footer">
    <p class="top" @click="scrollToTop"><a>Voltar ao topo </a></p>
    <p>
      <a target="_blank" href="https://www.linkedin.com/in/laissydominique/"
        >Desenvolvido por: Laissy Dominique</a
      >
    </p>
  </div>
</template>

<style>
.product-title {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-title h1 {
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  color: #fddc5b;
}

.inspiration {
  display: flex;
  justify-content: center;
  align-items: center;
}

.inspiration h2 {
  font-family: "Assistant", sans-serif;
  font-weight: 300;
  color: #bf7fff;
}

.content-products {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 5rem;
  row-gap: 3rem;
}

.container-products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.image-product {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-product img {
  border-radius: 10px;
}
.image-product img:hover {
  border-radius: 10px;
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
.description-product {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 380px;
}

.price-product,
.title-product {
  height: 30px;
  cursor: pointer;
}

.price-product {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
