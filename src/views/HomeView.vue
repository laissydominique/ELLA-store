<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useItemsStore } from '../stores/items';

const useItems = useItemsStore();
const router = useRouter();
const cont = ref();

function scrollToContactUs() {
  const section = document.getElementById('contact-us');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function getScroll(){
  const fadeIn = {
  duration: 800,       
  delay: 10,          
  easing: 'ease-in-out',
  reset:true,
  threshold: 0.5
};

  const slideUp = {
  origin: 'bottom',    
  distance: '50px',     
  duration: 800,       
  delay: 30,          
  easing: 'ease-in-out',
  threshold: 0.5
};

const slideDown = {
  origin: 'top',    
  distance: '50px',     
  duration: 800,       
  delay: 30,          
  easing: 'ease-in-out',
  reset:true
};

// ScrollReveal().reveal('.fadeIn', fadeIn);
ScrollReveal().reveal('.slideDown', slideDown);
ScrollReveal().reveal('.slideUp', slideUp);
}

function nextImage() {
  cont.value++;
  if (cont.value > 3) {
    cont.value = 1;
  }
}

onMounted(() => {
  useItems.getWomensClothing();
  useItems.getJewelry();
  getScroll();
  setInterval(() => {
    nextImage();
  }, 5000);
});
</script>

<template>
  <div class="color-header">
  </div>
  <header class="header">
    <div class="logo">
      <img src="/src/assets/imgs/modelo-logo-1.png" alt="" width="130px" height="130px" />
    </div>
    <div class="options slideDown ">
      <div class="option shorts" >
        <p>Shorts</p>
      </div>
      <div class="option blouses">
        <p>Blusas</p>
      </div>
      <div class="option pants" >
        <p>Calças</p>
      </div>
      <div class="option skirts">
        <p>Saias</p>
      </div>
      <div class="option dress" >
        <p>Vestidos</p>
      </div>
      <div class="option blazer" >
        <p>Blazers</p>
      </div>
      <div class="option accessories" >
        <p>Acessórios</p>
      </div>
      <div class="option bags" >
        <p>Bolsas</p>
      </div>
    </div>
    <div class="option contact" @click="scrollToContactUs" >
      <div> <img src="/src/assets/imgs/favicon-32x32.png" alt="" width="20px" height="20px"></div>
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
        <div class="auto-btn1 hidden"></div>
        <div class="auto-btn2 hidden"></div>
      </div>
    </div>
  </div>
  <div class="options-imgs slideDown">
    <div class="img-short  img-option" >
      <img src="/src/assets/imgs/short-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Shorts</p>
      </div>
    </div>
    <div class="img-blouse img-option" >
      <img src="/src/assets/imgs/blusa-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Blusas</p>
      </div>
    </div>
    <div class="img-pants img-option">
      <img src="/src/assets/imgs/calca-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Calças</p>
      </div>
    </div>
    <div class="img-skirts img-option">
      <img src="/src/assets/imgs/saia-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Saias</p>
      </div>
    </div>
    <div class="img-dress img-option" >
      <img src="/src/assets/imgs/vestido-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Vestidos</p>
      </div>
    </div>
    <div class="img-blazer img-option">
      <img src="/src/assets/imgs/blazer-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Blazers</p>
      </div>
    </div>
    <div class="img-acessories img-option" >
      <img src="/src/assets/imgs/joias-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Acessórios</p>
      </div>
    </div>
    <div class="img-bags img-option" >
      <img src="/src/assets/imgs/bolsas-ella.png" alt="" width="85px" height="85px" />
      <div class="caption">
        <p>Bolsas</p>
      </div>
    </div>
  </div>
  <div class="release-title slideDown ">
    <div class="line"></div>
    <h1>Lançamentos</h1>
    <div class="line"></div>
  </div>
  <div class="release-clothes fadeIn">
    <h1>Blusas</h1>
  </div>
  <div class="content-realeases ">
    <div class="container-realease" v-for="item in useItems.optionsClothes" :key="item.clothingId" @click="useItems.getThisClothing(item.clothingId)">
      <div class="image">
        <img :src="item.image" alt="" width="160px" height="160px" />
      </div class="realease-data">
      <div> 
      <div class="title">
        <p>{{ item.title }}</p>
      </div>
      <div class="price">
        <p>R$ {{ item.price }}</p>
      </div>
    </div>
    </div>
  </div>
  <div class="release-jewelry fadeIn ">
    <h1>Acessórios</h1>
  </div>
  <div class="content-realeases ">
    <div class="container-realease" v-for="item in useItems.optionsJewelry" :key="item.jewelryId" @click="useItems.getThisJewelry(item.jewelryId)">
      <div class="image">
        <img :src="item.image" alt="" width="160px" height="160px" />
      </div class="realease-data">
      <div> 
      <div class="title">
        <p translate="yes">{{ item.title }}</p>
      </div>
      <div class="price">
        <p>R$ {{ item.price }}</p>
      </div>
    </div>
    </div>
  </div>
  <div class="contact-us" id="contact-us">
    <div class="contact-us-title" >
      <div class="line"></div>
      <h1> Fale conosco</h1>
      <div class="line"></div>
    </div>
    <form action="#"> 
    <div class="name ">
      <label for="text">Seu nome</label>
      <input type="text">
    </div>
    <div class="subject ">
      <label for="text">Assunto</label>
      <input type="text">
    </div>
    <div class="textarea">
      <label for="text">Dúvida</label>
      <textarea></textarea>
    </div>
    <div class="submit ">
      <button type="submit" >Enviar</button>
    </div>
  </form>
  </div>
  <div class="footer">
    <p>Desenvolvido por: Laissy Dominique</p>
  </div>
</template> 
