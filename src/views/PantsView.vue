<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const pants = ref([]);

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

async function getPants() {
  pants.value.push(
    {
      id: 42,
      title: "Calça de Couro Sintético",
      image:
        "https://rosaprosa.cdn.magazord.com.br/img/2023/02/produto/4213/calca-jogger-feminina-couro-sintetico-rosa-prosa-1.png?ims=630x945",
      price: 180.0 + ",00",
    },
    {
      id: 43,
      title: "Calça Cargo Feminina",
      image:
        "https://acdn.mitiendanube.com/stores/001/155/809/products/dsc_0239_21-609bfef35c44aa2a5e16759687205201-640-0.png",
      price: 130.0 + ",00",
    },
    {
      id: 39,
      title: "Calça Wide Leg Rasgada",
      image: "https://cdn.awsli.com.br/600x450/2459/2459342/produto/305787370/29-g4dbnb8wxo.jpg",
      price: 110.0 + ",00",
    },
    {
      id: 36,
      title: "Calça de Alfaiataria Beje",
      image:
        "https://s.bazara33.com.br/product/2023/12/alfaiataria-atemporal-versatil-roupas-classicas-58.jpg",
      price: 150.0 + ",00",
    },
    {
      id: 38,
      title: "Calça Pantalona Preta",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/calca-pantalona/calca-pantalona-preta-em-veludo-cotele_375062_301_1.webp",
      price: 160.0 + ",00",
    },
    {
      id: 40,
      title: "Calça Wide Leg Escura",
      image:
        "https://nossalojaoficial.com.br/media/catalog/product/cache/1/image/2000x2600/9df78eab33525d08d6e5fb8d27136e95/n/o/nossa_loja_-_studio_16-jeans_10_.jpg",
      price: 100.0 + ",00",
    },
    {
      id: 42,
      title: "Calça Cargo Camuflada",
      image:
        "https://streetverseapparel.com.br/cdn/shop/files/3C3BC79A-110B-4AAA-9392-39822D835AA3_800x.jpg?v=1721614900",
      price: 130.0 + ",00",
    },
    {
      id: 37,
      title: "Calça Flare Jeans Escura",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/calca-jeans/calca-jeans-escuro-flare-com-fenda_315508_301_1.webp",
      price: 140.0 + ",00",
    },
    {
      id: 41,
      title: "Calça de Couro Preta",
      image:
        "https://acdn.mitiendanube.com/stores/002/889/295/products/img_2299-e1622c9eaeddd9230d17151033944196-1024-1024.jpeg",
      price: 170.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getPants();
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
    <h1>Calças</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Você já encontrou a calça dos seus sonhos?</h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in pants">
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
