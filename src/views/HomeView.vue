<script setup>
import { ref, onMounted } from "vue";
const cont = ref(1);

const options = ref({});

async function getMainContent() {
  const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();

  data.forEach((item) => {
    options.value = {
      image: item.image,
      title: item.title,
      price: item.price,
    };

    console.log(item);
  });
}

function nextImage() {
  cont.value++;
  if (cont.value > 3) {
    cont.value = 1;
  }
}

onMounted(() => {
  getMainContent();

  setInterval(() => {
    nextImage();
  }, 5000);
});
</script>

<template>
  <div class="color-header"></div>
  <header class="header">
    <div class="logo">
      <img src="/src/assets/imgs/modelo-logo-1.png" alt="" width="130px" height="130px" />
    </div>
    <div class="options">
      <div class="shorts">
        <p>Shorts</p>
      </div>
      <div class="blouses">
        <p>Blusas</p>
      </div>
      <div class="pants">
        <p>Calças</p>
      </div>
      <div class="skirts">
        <p>Saias</p>
      </div>
      <div class="dress">
        <p>Vestidos</p>
      </div>
      <div class="blazer">
        <p>Blazers</p>
      </div>
      <div class="accessories">
        <p>Acessórios</p>
      </div>
      <div class="bags">
        <p>Bolsas</p>
      </div>
    </div>
    <div class="contact">
      <p>Contato</p>
    </div>
  </header>
  <div class="banners">
    <div class="slider-content">
      <input type="radio" name="btn-radio" id="radio1" value="1" v-model="cont" />
      <input type="radio" name="btn-radio" id="radio2" value="2" v-model="cont" />
      <div class="main-image first">
        <img src="/src/assets/imgs/ella-img-principal-2.jpg" alt="" width="100%" />
      </div>
      <div class="main-image">
        <img src="/src/assets/imgs/banner-secundario.jpg" alt="" width="100%" />
      </div>
      <div class="nav-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
      </div>
    </div>
  </div>
  <div class="options-imgs">
    <div class="img-short">
      <img src="/src/assets/imgs/short-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Shorts</p>
      </div>
    </div>
    <div class="img-blouse">
      <img src="/src/assets/imgs/blusa-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Blusas</p>
      </div>
    </div>
    <div class="img-pants">
      <img src="/src/assets/imgs/calca-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Calças</p>
      </div>
    </div>
    <div class="img-skirts">
      <img src="/src/assets/imgs/saia-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Saias</p>
      </div>
    </div>
    <div class="img-dress">
      <img src="/src/assets/imgs/vestido-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Vestidos</p>
      </div>
    </div>
    <div class="img-blazer">
      <img src="/src/assets/imgs/blazer-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Blazers</p>
      </div>
    </div>
    <div class="img-acessories">
      <img src="/src/assets/imgs/joias-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Acessórios</p>
      </div>
    </div>
    <div class="img-bags">
      <img src="/src/assets/imgs/bolsas-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Bolsas</p>
      </div>
    </div>
  </div>
  <div class="releases">
    <div class="release-title">
      <h1>Lançamentos</h1>
    </div>
    <div class="container-realease">
      <div class="image">
        <img :src="options.image" alt="" />
      </div>
    </div>
  </div>
</template>
