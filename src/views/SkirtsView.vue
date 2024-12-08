<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const skirts = ref([]);

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

async function getSkirtss() {
  skirts.value.push(
    {
      id: 10,
      title: "Saia Midi Plissada",
      image:
        "https://static.zara.net/assets/public/52eb/1009/51814dfb95b4/70a4d8fdf65b/05109600620-p/05109600620-p.jpg?ts=1724923179031&w=824",
      price: 120.0 + ",00",
    },
    {
      id: 12,
      title: "Saia Longa Estampada",
      image: "https://www.equus.com.br/images/thumbs/0007153_saia-longa-estampada-equus_600.jpeg",
      price: 140.0 + ",00",
    },
    {
      id: 14,
      title: "Saia Evase Floral",
      image:
        "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/saia-midi/saia-evase-floral-azul-moda-evangelica_347339_600_1.jpg",
      price: 130.0 + ",00",
    },
    {
      id: 15,
      title: "Saia Lápis Preta",
      image: "https://www.polemodas.com.br/images/Produtos/1300/63322.jpg",
      price: 110.0 + ",00",
    },
    {
      id: 16,
      title: "Saia Curta de Tecido Leve",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/saia-curta/saia-curta-em-tecido-rosa_377125_600_1.webp",
      price: 95.0 + ",00",
    },
    {
      id: 17,
      title: "Saia Midi de Linho",
      image:
        "https://cdn.awsli.com.br/600x1000/1141/1141205/produto/269171002/04013-xl-tyoll31okw.png",
      price: 135.0 + ",00",
    },
    {
      id: 18,
      title: "Saia Rodada Estampada",
      image:
        "https://www.chicprincess.com.br/wp-content/uploads/2023/03/saia-rodada-curta-estampa-de-bolinhas-1.jpg",
      price: 125.0 + ",00",
    },
    {
      id: 11,
      title: "Saia Jeans Curta",
      image: "https://i.pinimg.com/564x/77/55/b9/7755b9dd48f89e0ca371ed54f77f9fe3.jpg",
      price: 90.0 + ",00",
    },
    {
      id: 13,
      title: "Saia de Couro Preta",
      image:
        "https://cdn.awsli.com.br/600x700/1952/1952461/produto/213960842/img_4218-5kr7w22r5h.jpg",
      price: 160.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getSkirtss();
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
    <h1>Acessórios</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Quem não ama uma saia que combina com qualquer ocasião?</h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in skirts">
      <div class="image-product">
        <img :src="item.image" alt="" width="400px" height="510px" />
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
