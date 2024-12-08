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
      id: 1,
      title: "Colar de Ouro 18K",
      image:
        "https://cdn.awsli.com.br/1260/1260107/produto/156665457/cord-o-baiano-varios-tamanhos-banho-de-ouro-18k-5klxnjms78.jpg",
      price: 620.0 + ",00",
    },
    {
      id: 2,
      title: "Pulseira de Prata",
      image:
        "https://cdn.awsli.com.br/2500x2500/1293/1293561/produto/198273554/pu03759c2-25c24e47dc.jpg",
      price: 140.0 + ",00",
    },
    {
      id: 3,
      title: "Anel de Pedras Preciosas",
      image:
        "https://cdn.awsli.com.br/2500x2500/1148/1148879/produto/241896174/img_9897-zhfa4gqaua.jpeg",
      price: 200.0 + ",00",
    },
    {
      id: 4,
      title: "Brinco de Ouro com Diamante",
      image:
        "https://www.madrejoy.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/193443_1.jpg",
      price: 790.0 + ",00",
    },
    {
      id: 5,
      title: "Relógio de Pulso de Aço Inoxidável",
      image:
        "https://a-static.mlcdn.com.br/450x450/relogio-feminino-prata-quartz-entrega-rapida/olistplus/opmlewmg01cq1ddc/61e0b36219e78b90de0705f5afd1c70e.jpeg",
      price: 250.0 + ",00",
    },
    {
      id: 6,
      title: "Brincos de cristal",
      image:
        "https://acdn.mitiendanube.com/stores/002/758/782/products/whatsapp-image-2023-01-25-at-09-13-541-83c4363358c1dbf3e816746635086549-640-0.jpeg",
      price: 480.0 + ",00",
    },
    {
      id: 7,
      title: "Óculos de Sol Aviador",
      image:
        "https://acdn.mitiendanube.com/stores/001/289/197/products/741-2f66adbfc1fe60e04816929915803691-1024-1024.png",
      price: 220.0 + ",00",
    },
    {
      id: 8,
      title: "Óculos de Sol Redondo",
      image:
        "https://acdn.mitiendanube.com/stores/925/127/products/photo-output_2-342f38879b646135f817040221758849-640-0.jpeg",
      price: 280.0 + ",00",
    },
    {
      id: 8,
      title: "Óculos de Sol Futurista",
      image: "https://cdn.awsli.com.br/2456/2456695/produto/232454245/img_6761-wfpj6ixc8i.jpg",
      price: 300.0 + ",00",
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
    <h1>Acessórios</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>Que tal brilhar ainda mais com um acessório exclusivo? Escolha o seu favorito!</h2>
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
