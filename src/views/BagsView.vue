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
      id: 28,
      title: "Bolsa de Couro Classic",
      image:
        "https://emmaleblanc.com.br/cdn/shop/files/S18d22671bbcf410398789d9217dd01489.webp?v=1714076463&width=1445",
      price: 180.0 + ",00",
    },
    {
      id: 29,
      title: "Bolsa Tote de Algodão",
      image: "https://down-br.img.susercontent.com/file/e18d1c6db17e158aa94d9d1009d967b5",
      price: 150.0 + ",00",
    },
    {
      id: 30,
      title: "Bolsa Crossbody em Camurça",
      image:
        "https://img1.shopcider.com/product/1724206995000-m4CjrW.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_60/interlace,1",
      price: 210.0 + ",00",
    },
    {
      id: 31,
      title: "Bolsa de Mão Estilo Clutch",
      image:
        "https://images.tcdn.com.br/img/img_prod/464874/bolsa_pequena_de_mao_de_couro_cinza_14593_1_43f6d7457df95327588304902d944341.jpg",
      price: 130.0 + ",00",
    },
    {
      id: 32,
      title: "Bolsa Shoulder Bag de Crochê",
      image:
        "https://ae01.alicdn.com/kf/S81004be45ccb4561bbb33a511b65ae1er/Est-tica-Bow-Pattern-Shoulder-Bag-para-mulheres-bolsa-de-croch-bolsa-de-praia-casual-de.jpg",
      price: 160.0 + ",00",
    },
    {
      id: 33,
      title: "Bolsa de Ombro Colorida",
      image: "https://ae01.alicdn.com/kf/Sb15353c79e0c451696edcfbb6df7a2a0Z.jpg_640x640.jpg_.webp",
      price: 120.0 + ",00",
    },
    {
      id: 34,
      title: "Bolsa Satchel de Couro",
      image:
        "https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h3f/ha9/h00/h00/9401321226270/5001803660009U-HO-BASEIMAGE-Midres.jpg",
      price: 220.0 + ",00",
    },
    {
      id: 35,
      title: "Bolsa Pochete Estilosa",
      image:
        "https://photos.enjoei.com.br/pochete-bolsa-feminina-super-espacosa-105845428/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83ODI5MDg2L2FhZDZlYTdmODI0ZWZkM2Q4NTVmMjJhZmU1Y2I2MTM3LmpwZw",
      price: 110.0 + ",00",
    },
    {
      id: 36,
      title: "Bolsa Carteiro Vintage",
      image:
        "https://images-americanas.b2w.io/produtos/7475015810/imagens/pasta-feminina-de-couro-legitimo-14-carteiro-com-ziper/7475015811_2_large.jpg",
      price: 200.0 + ",00",
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
    <h1>Bolsas</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Que bolsa vai ser a peça-chave para o seu look do dia?</h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in acessories">
      <div class="image-product">
        <img :src="item.image" alt="" width="400px" height="400px" />
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
