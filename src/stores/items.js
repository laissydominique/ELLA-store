import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useItemsStore = defineStore("items", () => {
  const router = useRouter();
  const optionsClothes = ref([]);
  const optionsJewelry = ref([]);
  const jewelry = ref({});
  const clothing = ref({});
  const rates = ref({});
  const isLoading = ref(false);

  const showLoading = () => {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 3000);
  };

  const onCancel = () => {
    isLoading.value = false;
  };

  async function getWomensClothing() {
    optionsClothes.value = [];
    const response = await fetch(
      `https://fakestoreapi.com/products/category/women's clothing?limit=4`
    );
    if (!response.ok) {
      return;
    }
    const data = await response.json();

    data.forEach((item) => {
      optionsClothes.value.push({
        image: item.image,
        title: item.title,
        price: item.price.toLocaleString("pt-BR").replace("R$", "").trim(),
        clothingId: item.id,
      });
    });
  }

  async function getJewelry() {
    optionsJewelry.value = [];
    const response = await fetch(`https://fakestoreapi.com/products/category/jewelery?limit=4`);
    if (!response.ok) {
      return;
    }

    const data = await response.json();

    data.forEach((item) => {
      optionsJewelry.value.push({
        image: item.image,
        title: item.title,
        price: item.price.toLocaleString("pt-BR").replace("R$", "").trim(),
        jewelryId: item.id,
      });
    });
  }

  async function getThisJewelry(jewelryId) {
    const response = await fetch(`https://fakestoreapi.com/products/${jewelryId}`);
    if (!response.ok) {
      return;
    }
    const data = await response.json();

    jewelry.value = {
      image: data.image,
      title: data.title,
      price: data.price.toLocaleString("pt-BR").replace("R$", "").trim(),
    };

    router.push({ path: `/jewelry/${jewelryId}` });
  }

  async function getThisClothing(clothingId) {
    const response = await fetch(`https://fakestoreapi.com/products/${clothingId}`);
    if (!response.ok) {
      return;
    }
    const data = await response.json();

    clothing.value = {
      image: data.image,
      title: data.title,
      price: data.price.toLocaleString("pt-BR").replace("R$", "").trim(),
    };

    router.push({ path: `/clothes/${clothingId}` });
  }

  async function getRates() {
    rates.value = [];
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?limit=10`);
    if (!response.ok) {
      return;
    }
    const data = await response.json();

    const shuffled = data.sort(() => 0.5 - Math.random());

    const randomComments = shuffled.slice(0, 6);

    randomComments.forEach((item) => {
      rates.value.push({
        email: item.email,
        comment: item.body,
      });
    });
  }

  return {
    optionsClothes,
    optionsJewelry,
    jewelry,
    clothing,
    getWomensClothing,
    getJewelry,
    getThisJewelry,
    getThisClothing,
    rates,
    getRates,
  };
});
