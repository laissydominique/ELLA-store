<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useItemsStore } from "@/stores/items";

const useItems = useItemsStore();
const router = useRouter();
const shorts = ref([]);

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

async function getShorts() {
  shorts.value.push(
    {
      id: 55,
      title: "Short Jeans Casual",
      image:
        "https://a-static.mlcdn.com.br/450x450/short-jeans-fashion-casual-confortavel-fortaleza-jeans/mlmodasvariedades/29199-0001-3/07f073ab5079538837be601a55fe8583.jpeg",
      price: 90.0 + ",00",
    },
    {
      id: 56,
      title: "Short de Sarja Branca",
      image:
        "https://a-static.mlcdn.com.br/450x450/short-jeans-feminino-branco-desfiado-cintura-alta-casual-zafina/zafina/mxd2878br44/9c038e9b4b7b2e6c914f60b5d38757fe.jpeg",
      price: 110.0 + ",00",
    },
    {
      id: 57,
      title: "Short Jeans com Pérolas",
      image: "https://down-br.img.susercontent.com/file/03b8a3fce9b0c861055b08688a59ee9e",
      price: 150.0 + ",00",
    },
    {
      id: 58,
      title: "Short de Linho Bege",
      image:
        "https://a-static.mlcdn.com.br/1500x1500/shorts-feminino-lunender-linho-bege-impala-39139/estrelacalcadoseconfeccoes/978751-m/bcfc86dfcbb475a9be8335c24df21ea2.jpeg",
      price: 120.0 + ",00",
    },
    {
      id: 59,
      title: "Short Listrado com Amarração",
      image:
        "https://images-americanas.b2w.io/produtos/6014124047/imagens/short-cintura-alta-feminino-listrado-amarracao/6014124063_1_large.jpg",
      price: 100.0 + ",00",
    },
    {
      id: 60,
      title: "Short Esportivo Preto",
      image: "https://imgcentauro-a.akamaihd.net/1366x1366/M0Q5BU50.jpg",
      price: 99 + ",99",
    },
    {
      id: 61,
      title: "Short Saia Jeans",
      image: "https://atacado.stillgerjeans.com.br/wp-content/uploads/2024/07/unnamed-file-5.png",
      price: 170.0 + ",00",
    }, 
    {
      id: 62,
      title: "Short Listrado",
      image: "https://m.media-amazon.com/images/I/41eXtz33ebL._AC_.jpg",
      price: 110.0 + ",00",
    },    
    {
      id: 63,
      title: "Short Cerejas",
      image: "https://torratorra.vtexassets.com/arquivos/ids/2000484/13111001536509.jpg?v=638681575681270000",
      price: 120.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getShorts();
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
    <h1>Shorts</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>
      Você está pronta para renovar o seu guarda-roupa com um short que combina estilo e conforto?
    </h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in shorts">
      <div @click="useItems.getThisItem(item.id)" class="image-product" >
        <img :src="item.image" alt="" width="320px" height="320px" />
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;  
  justify-items: center; 
  margin-top: 5rem;
}

.container-products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  max-width: 400px;
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
  margin-left: 2rem;
  height: 30px;
  cursor: pointer;
}

.price-product {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
