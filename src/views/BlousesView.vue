<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const blouses = ref([]);

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

async function getBlouses() {
  blouses.value.push(
    {
      id: 36,
      title: "Blusa Gola Alta",
      image:
        "https://s3-sa-east-1.amazonaws.com/paralelo21.img/produto/3697/blusa-feminina-de-algodao-gola-alta-e-manga-curta-gisele-3697-large.webp",
      price: 100.0 + ",00",
    },
    {
      id: 37,
      title: "Blusa com Decote V",
      image:
        "https://shoulder.vtexassets.com/arquivos/ids/2161223/232013920_0060_010-BLUSA-DECOTE-V-MANGA-FLARE.jpg?v=638260895056700000",
      price: 60.0 + ",00",
    },
    {
      id: 38,
      title: "Blusa Manga Bufante",
      image:
        "https://images.tcdn.com.br/img/img_prod/1173729/blusa_manga_bufante_em_linho_livia_259_1_e940b89eab48b611dc92b4aa3f2a3fa3.jpg",
      price: 95.0 + ",00",
    },
    {
      id: 30,
      title: "Blusa Básica Branca",
      image:
        "https://images2.marisa.com.br/medias/sys_master/images/images/hab/he5/16297255174174/Blusa-Basica-Feminina-Manga-Curta-Marisa-10049157413-C1.jpg",
      price: 50.0 + ",00",
    },
    {
      id: 31,
      title: "Blusa de Malha Estampada",
      image:
        "https://images.tcdn.com.br/img/img_prod/1224102/blusa_de_malha_estampada_manga_curta_627_1_3ac2d3ad2dd371b349086fb12f8b75cd.jpg",
      price: 70.0 + ",00",
    },
    {
      id: 32,
      title: "Blusa de Alça com Renda",
      image:
        "https://cdn.awsli.com.br/600x700/834/834073/produto/246747317/411833053_776842991127313_4919129350128979364_n-vwmwa1644b.jpg",
      price: 65.0 + ",00",
    },
    {
      id: 33,
      title: "Blusa Manga Longa Listrada",
      image:
        "https://torratorra.vtexassets.com/arquivos/ids/945192/16631000132138-4.jpg?v=638210473496700000",
      price: 90.0 + ",00",
    },
    {
      id: 34,
      title: "Blusa Cropped de Crochê",
      image: "https://i.pinimg.com/550x/d5/2b/67/d52b67bd9407bf2570470e9a9efefbc3.jpg",
      price: 80.0 + ",00",
    },
    {
      id: 35,
      title: "Blusa com Ombros de Fora",
      image:
        "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/blusas/blusa-ombros-de-fora-e-decote-nas-costas-marinho_186338_600_2.jpg",
      price: 75.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getBlouses();
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
    <h1>Blusas</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Já pensou como uma nova blusa pode transformar seu look e sua confiança?</h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in blouses">
      <div class="image-product">
        <img :src="item.image" alt="" width="400px" height="500px" />
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
  min-height: 700px;
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
