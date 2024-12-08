<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { useItemsStore } from "../stores/items"; 

const route = useRoute(); 
const router = useRouter(); 
const clothingId = route.params.clothingId; 
const useItems = useItemsStore(); 

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

onMounted(() => {
  window.scrollTo(0, 0);
  useItems.getThisClothing(clothingId); 
  useItems.getRates();
  getScroll();
});
</script>

<template>
 <div class="color-header">
 </div>
  <header class="header">
    <div class="logo"  @click="router.push({ path: '/home'})">
      <img src="/src/assets/imgs/modelo-logo-1.png" alt="" width="130px" height="130px" />
    </div>
    <div class="options slideDown">
      <div class="option shorts" @click="router.push({path:'shorts'})" >
        <p>Shorts</p>
      </div>
      <div class="option blouses"  @click="router.push({path:'blouses'})">
        <p>Blusas</p>
      </div>
      <div class="option pants"  @click="router.push({path:'pants'})" >
        <p>Calças</p>
      </div>
      <div class="option skirts"  @click="router.push({path:'skirts'})">
        <p>Saias</p>
      </div>
      <div class="option dress"  @click="router.push({path:'dresses'})" >
        <p>Vestidos</p>
      </div>
      <div class="option blazer"  @click="router.push({path:'blazers'})" >
        <p>Blazers</p>
      </div>
      <div class="option accessories" @click="router.push({path:'acessories'});">
        <p>Acessórios</p>
      </div>
      <div class="option bags"  @click="router.push({path:'bags'})" >
        <p>Bolsas</p>
      </div>
    </div>
    <div class="option contact" @click="scrollToContactUs" >
      <div> <img src="/src/assets/imgs/favicon-32x32.png" alt="" width="20px" height="20px"></div>
      <p>Contato</p>
    </div>
  </header>   
  <div class="release-title slideDown ">
    <div class="line"></div>
    <h1>Acabou De Chegar!</h1>
    <div class="line"></div>
  </div>
   <div class="content-clothing ">
      <div class="container-clothing">
        <div class="clothing-image">
          <img :src="useItems.clothing.image" alt="" width="400px" height="400px" />
        </div class="clothing-data">
        <div class="details"> 
        <div class="clothing-title">
          <p translate="yes">{{ useItems.clothing.title }}</p>
        </div>
        <div class="data-price"> 
        <div class="clothing-price">
          <p>R$ {{ useItems.clothing.price }}</p>
        </div>
          <div class="cart">
          <p>Adicionar ao carrinho</p>
        </div>
    </div>
    </div>
      </div>
    </div>
     <div class="release-title slideDown ">
     <div class="line"></div>
     <h1>O que nossos clientes acharam</h1>
     <div class="line"></div>
   </div>
   <div class="rates">
         <div class="rate slideDown" v-for="(item, index) in useItems.rates" :class="{ 'rate-alt': index % 2 === 1 , 'rate-not-alt': index % 2 !==1}"> 
         <div class="user-email">
             <p>{{ item.email }}</p>
         </div>
         <div class="user-comment">
             <p>{{ item.comment }}</p>
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
   
 <style>
.content-clothing{
    margin-top: 4rem;
}

.content-clothing, .container-clothing{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.clothing-image{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid beige;
    padding: 4rem;
    width: 500px;
    cursor: zoom-in;
    overflow: hidden;
    position: relative;
}

.clothing-image img{
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.clothing-image img:hover{
  transform: scale(1.1);
}

.clothing-title{
    margin-top: rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.clothing-price{
    font-size: 1.5rem;
    font-weight: bold;
}

.rates{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 3.5rem;
}

.rate{
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 2.5rem 2rem;
}

.rate-alt {
    border: 1px solid #fddc5b;
    margin-left: 25rem ;
}

.rate-not-alt{
    border: 1px solid #bf7fff;
    margin-right: 25rem ;
}

.user-email{
    font-weight: bold;
}

.data-price{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #c8a2ed;
  border: 1px solid #fddc5b;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  padding: 2rem;
  gap: 10px;
  cursor: pointer;
}

.cart:hover{
  background-color: #d5b2fb;
}

.cart p{
  font-weight: bold;
  color: white;
}

.details{
  margin-top: 3rem;
}
</style>