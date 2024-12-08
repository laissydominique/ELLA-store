<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const dresses = ref([]);

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

async function getDresses() {
  dresses.value.push(
    {
      id: 19,
      title: "Vestido Midi Floral",
      image:
        "https://static.zara.net/assets/public/908f/6753/3c084eea9e12/5367727ddbc6/06962026330-p/06962026330-p.jpg?ts=1713889361340&w=824",
      price: 0.0 + ",00",
    },
    {
      id: 26,
      title: "Vestido de Malha Listrado",
      image:
        "https://images.tcdn.com.br/img/img_prod/882133/vestido_longo_em_malha_2869_1_9553e2ab29ad8be50588730e01712c4d.jpg",
      price: 140.0 + ",00",
    },
    {
      id: 21,
      title: "Vestido Tubinho Preto",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/vestido-midi/vestido-tubinho-preto-moda-evangelica_214046_600_1.webp",
      price: 110.0 + ",00",
    },
    {
      id: 22,
      title: "Vestido Curto Rodado",
      image:
        "https://cdn.awsli.com.br/600x700/402/402845/produto/184531811/design-sem-nome---2024-03-19t113716-477-h0ckrftbdv.png",
      price: 195.0 + ",00",
    },
    {
      id: 23,
      title: "Vestido de Alça Estampado",
      image:
        "https://cdn.awsli.com.br/1538/1538522/produto/208358230/whatsapp-image-2023-03-10-at-15-34-06-1-aawrpj.jpg",
      price: 190.0 + ",00",
    },
    {
      id: 24,
      title: "Vestido Casual de Linho",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/vestido-midi/vestido-areia-em-linho_369183_600_1.webp",
      price: 300.0 + ",00",
    },
    {
      id: 27,
      title: "Vestido de Festa com Renda",
      image:
        "https://cdn0.casamentos.com.br/article-vendor/0296/original/1280/jpeg/122ce7d5-ece2-4dd1-9326-cb69b22218a4_13_360296-165414239555123.jpeg",
      price: 550.0 + ",00",
    },
    {
      id: 28,
      title: "Vestido Envelope Estampado",
      image:
        "https://a-static.mlcdn.com.br/1500x1500/vestido-feminino-envelope-longo-estampado-mira-luxo-modas/miramodas/1559p/ed6e571b820b4852ad37d4086cc08d40.jpeg",
      price: 135.0 + ",00",
    },
    {
      id: 29,
      title: "Vestido Minimalista Branco",
      image:
        "https://cdn.dooca.store/153665/products/j9liao8qz2on8ougjgruemigugkncnw2hutw.jpg?v=1717544370",
      price: 180.0 + ",00",
    }
  );
}

onMounted(() => {
  window.scrollTo(0, 0);
  getDresses();
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
    <h1>Vestidos</h1>
    <div class="line"></div>
  </div>
  <div class="inspiration slideLeft">
    <h2>
      Não seria maravilhoso ter um vestido que te faça sentir poderosa e confortável ao mesmo tempo?
    </h2>
  </div>
  <div class="content-products">
    <div class="container-products" v-for="item in dresses">
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
  min-height: 600px;
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
  margin-top: 10rem;
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
