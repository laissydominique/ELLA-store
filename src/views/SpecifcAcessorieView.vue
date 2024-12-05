<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { useItemsStore } from "../stores/items"; 

const router = useRouter(); 
const route = useRoute();
const jeweleryId = route.params.jeweleryId; 
const useItems = useItemsStore(); 

onMounted(() => {
  window.scrollTo(0, 0);
  useItems.getThisJewelry(jeweleryId); 
  useItems.getRates();
});
</script>

<template>
  <div class="color-header">
  </div>
   <header class="header">
     <div class="logo"  @click="router.push({ path: '/home'})">
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
   <div class="release-title slideDown ">
     <div class="line"></div>
     <h1>Acabou De Chegar!</h1>
     <div class="line"></div>
   </div>
    <div class="content-clothing ">
       <div class="container-clothing">
         <div class="clothing-image">
           <img :src="useItems.jewelry.image" alt="" width="400px" height="400px" />
         </div class="clothing-data">
         <div> 
         <div class="clothing-title">
           <p translate="yes">{{ useItems.jewelry.title }}</p>
         </div>
         <div class="clothing-price">
           <p>R$ {{ useItems.jewelry.price }}</p>
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
 
 
 </style>
