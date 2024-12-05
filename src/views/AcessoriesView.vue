<script setup>
import { ref, onMounted } from "vue";
const acessoriesAPI = ref([]);
const acessories = ref([]);

async function getAcessories() {

    acessories.value.push([
        { description: 'Acessório 1', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dordjes.com.br%2Fblog%2Fporque-os-acessorios-fazem-a-diferencaporque-os-acessorios-fazem-a-diferenca-4601&psig=AOvVaw2OnAyhc8ZbZoHMr2NjNvyl&ust=1733492316273000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCN_6DgkIoDFQAAAAAdAAAAABAE', price: 10.00 },
        { description: 'Acessório 2', image: 'image2.jpg', price: 15.00 },
        { description: 'Acessório 3', image: 'image3.jpg', price: 20.00 },
    ])

    console.log(acessories.value)

  const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();

  data.forEach((item) => {
    acessoriesAPI.value.push({
      image: item.image,
      title: item.title,
      price: item.price.toLocaleString("pt-BR").replace("R$", "").trim(),
    });
  });
//   console.log(data);

}

onMounted(() => {
  getAcessories();
});
</script>

<template>
  <div class="release-jewelry">
    <h1>Acessórios</h1>
  </div>
  <div class="content-realeases">
    <div class="container-realease" v-for="item in acessoriesAPI">
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
</template>
