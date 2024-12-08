import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useItemsStore = defineStore('itens', () => {
  const router = useRouter();
  
  const optionsClothes = ref([]);
  const optionsJewelry = ref([]);
  const jewelry = ref({});
  const clothing = ref({});
  const item = ref({});
  const rates = ref([]);
  const isLoading = ref(false);
  
  const showLoading = () => {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 3000);
  };
  
  const onCancel = () => {
    isLoading.value = false;
  };

  const getWomensClothing = async () => {
    optionsClothes.value = [];
    const response = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");
    
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
  };

  const getJewelry = async () => {
    optionsJewelry.value = [];
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4");
    
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
  };

  const getThisJewelry = async (jewelryId) => {
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
    
    router.push(`/jewelry/${jewelryId}`);
  };

  const getThisClothing = async (clothingId) => {
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
    
    router.push(`/clothes/${clothingId}`);
  };

  const getRates = async () => {
    rates.value = [];
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?limit=10");
    
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
  };

  function getThisItem(itemId) {

    const allItems = [
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
        id: 9,
        title: "Óculos de Sol Futurista",
        image: "https://cdn.awsli.com.br/2456/2456695/produto/232454245/img_6761-wfpj6ixc8i.jpg",
        price: 300.0 + ",00",
      },
      {
        id: 10,
        title: "Bolsa de Couro Classic",
        image:
          "https://emmaleblanc.com.br/cdn/shop/files/S18d22671bbcf410398789d9217dd01489.webp?v=1714076463&width=1445",
        price: 180.0 + ",00",
      },
      {
        id: 11,
        title: "Bolsa Tote de Algodão",
        image: "https://down-br.img.susercontent.com/file/e18d1c6db17e158aa94d9d1009d967b5",
        price: 150.0 + ",00",
      },
      {
        id: 12,
        title: "Bolsa Crossbody em Camurça",
        image:
          "https://img1.shopcider.com/product/1724206995000-m4CjrW.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_60/interlace,1",
        price: 210.0 + ",00",
      },
      {
        id: 13,
        title: "Bolsa de Mão Estilo Clutch",
        image:
          "https://images.tcdn.com.br/img/img_prod/464874/bolsa_pequena_de_mao_de_couro_cinza_14593_1_43f6d7457df95327588304902d944341.jpg",
        price: 130.0 + ",00",
      },
      {
        id: 14,
        title: "Bolsa Shoulder Bag de Crochê",
        image:
          "https://ae01.alicdn.com/kf/S81004be45ccb4561bbb33a511b65ae1er/Est-tica-Bow-Pattern-Shoulder-Bag-para-mulheres-bolsa-de-croch-bolsa-de-praia-casual-de.jpg",
        price: 160.0 + ",00",
      },
      {
        id: 15,
        title: "Bolsa de Ombro Colorida",
        image: "https://ae01.alicdn.com/kf/Sb15353c79e0c451696edcfbb6df7a2a0Z.jpg_640x640.jpg_.webp",
        price: 120.0 + ",00",
      },
      {
        id: 16,
        title: "Bolsa Satchel de Couro",
        image:
          "https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h3f/ha9/h00/h00/9401321226270/5001803660009U-HO-BASEIMAGE-Midres.jpg",
        price: 220.0 + ",00",
      },
      {
        id: 17,
        title: "Bolsa Pochete Estilosa",
        image:
          "https://photos.enjoei.com.br/pochete-bolsa-feminina-super-espacosa-105845428/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83ODI5MDg2L2FhZDZlYTdmODI0ZWZkM2Q4NTVmMjJhZmU1Y2I2MTM3LmpwZw",
        price: 110.0 + ",00",
      },
      {
        id: 18,
        title: "Bolsa Carteiro Vintage",
        image:
          "https://images-americanas.b2w.io/produtos/7475015810/imagens/pasta-feminina-de-couro-legitimo-14-carteiro-com-ziper/7475015811_2_large.jpg",
        price: 200.0 + ",00",
      },
      {
        id: 19,
        title: "Blazer Xadrez",
        image:
          "https://static.ecosweb.com.br/public/produtos/moda-feminina/blazer/blazer-xadrez-grid-em-tecido-de-alfaiataria_375053_600_1.webp",
        price: 270.0 + ",00",
      },
      {
        id: 20,
        title: "Blazer de Couro Verde",
        image:
          "https://lojavivavida.vteximg.com.br/arquivos/ids/223516-1000-1500/Blazer-de-couro-verde-Animale.png?v=637995600361800000",
        price: 330.0 + ",00",
      },
      {
        id: 21,
        title: "Blazer Casual Cinza Claro",
        image:
          "https://images.tcdn.com.br/img/img_prod/1076440/blazer_alongado_maria_cinza_787_2_62de4e19039f254ff7101a0965178acb.jpg",
        price: 230.0 + ",00",
      },
      {
        id: 22,
        title: "Blazer Com Ombreira",
        image:
          "https://static.riachuelo.com.br/RCHLO/14592185007/portrait/6726a30822bef8a6ac30bf4f1215f76970b39c40.jpg",
        price: 250.0 + ",00",
      },
      {
        id: 23,
        title: "Blazer de Linho Off-White",
        image:
          "https://lojaanimale.vtexassets.com/arquivos/ids/1805981/03040465_0024_1-BLAZER-DE-LINHO-OVERSIZED-OFF-WHITE.jpg?v=638584821506500000",
        price: 280.0 + ",00",
     
      },
      {
      id: 24,
      title: "Blazer de Veludo Preto",
      image:
        "https://gregory.vtexassets.com/arquivos/ids/447128/blazer-veludo-transpassado-botoes---41865-01.jpg?v=638217659148870000",
      price: 320.0 + ",00",
    },
    {
      id: 25,
      title: "Blazer Clássico",
      image:
        "https://ecoms1.com/47445/imgs/big/@v3/1681406970308-whatsappimage2023-04-13at14.25.183.jpeg.avif",
      price: 220.0 + ",00",
    },
    {
      id: 26,
      title: "Blazer Slim Fit Preto",
      image:
        "https://triangulo.cdn.magazord.com.br/img/2023/02/produto/2899/blazer-preto-alongado-rafaela-frente-novo.jpg?ims=fit-in/635x865/filters:fill(white)",
      price: 270.0 + ",00",
    },
    {
      id: 27,
      title: "Blazer Longo Estilo Terno",
      image:
        "https://static.deluccaclassico.com.br/public/deluccaclassico/imagens/produtos/blazer-feminino-tere-curto-de-alfaiataria-azul-marinho-66475edcacc65.jpg",
      price: 350.0 + ",00",
    },
    {
      id: 28,
      title: "Blusa Gola Alta",
      image:
        "https://s3-sa-east-1.amazonaws.com/paralelo21.img/produto/3697/blusa-feminina-de-algodao-gola-alta-e-manga-curta-gisele-3697-large.webp",
      price: 100.0 + ",00",
    },
    {
      id: 29,
      title: "Blusa com Decote V",
      image:
        "https://shoulder.vtexassets.com/arquivos/ids/2161223/232013920_0060_010-BLUSA-DECOTE-V-MANGA-FLARE.jpg?v=638260895056700000",
      price: 60.0 + ",00",
    },
    {
      id: 30,
      title: "Blusa Manga Bufante",
      image:
        "https://images.tcdn.com.br/img/img_prod/1173729/blusa_manga_bufante_em_linho_livia_259_1_e940b89eab48b611dc92b4aa3f2a3fa3.jpg",
      price: 95.0 + ",00",
    },
    {
      id: 31,
      title: "Blusa Básica Branca",
      image:
        "https://images2.marisa.com.br/medias/sys_master/images/images/hab/he5/16297255174174/Blusa-Basica-Feminina-Manga-Curta-Marisa-10049157413-C1.jpg",
      price: 50.0 + ",00",
    },
    {
      id: 32,
      title: "Blusa de Malha Estampada",
      image:
        "https://images.tcdn.com.br/img/img_prod/1224102/blusa_de_malha_estampada_manga_curta_627_1_3ac2d3ad2dd371b349086fb12f8b75cd.jpg",
      price: 70.0 + ",00",
    },
    {
      id: 33,
      title: "Blusa de Alça com Renda",
      image:
        "https://cdn.awsli.com.br/600x700/834/834073/produto/246747317/411833053_776842991127313_4919129350128979364_n-vwmwa1644b.jpg",
      price: 65.0 + ",00",
    },
    {
      id: 34,
      title: "Blusa Manga Longa Listrada",
      image:
        "https://torratorra.vtexassets.com/arquivos/ids/945192/16631000132138-4.jpg?v=638210473496700000",
      price: 90.0 + ",00",
    },
    {
      id: 35,
      title: "Blusa Cropped de Crochê",
      image: "https://i.pinimg.com/550x/d5/2b/67/d52b67bd9407bf2570470e9a9efefbc3.jpg",
      price: 80.0 + ",00",
    },
    {
      id: 36,
      title: "Blusa com Ombros de Fora",
      image:
        "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/blusas/blusa-ombros-de-fora-e-decote-nas-costas-marinho_186338_600_2.jpg",
      price: 75.0 + ",00",
    },
    {
      id: 37,
      title: "Vestido Midi Floral",
      image:
        "https://static.zara.net/assets/public/908f/6753/3c084eea9e12/5367727ddbc6/06962026330-p/06962026330-p.jpg?ts=1713889361340&w=824",
      price: 0.0 + ",00",
    },
    {
      id: 38,
      title: "Vestido de Malha Listrado",
      image:
        "https://images.tcdn.com.br/img/img_prod/882133/vestido_longo_em_malha_2869_1_9553e2ab29ad8be50588730e01712c4d.jpg",
      price: 140.0 + ",00",
    },
    {
      id: 39,
      title: "Vestido Tubinho Preto",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/vestido-midi/vestido-tubinho-preto-moda-evangelica_214046_600_1.webp",
      price: 110.0 + ",00",
    },
    {
      id: 40,
      title: "Vestido Curto Rodado",
      image:
        "https://cdn.awsli.com.br/600x700/402/402845/produto/184531811/design-sem-nome---2024-03-19t113716-477-h0ckrftbdv.png",
      price: 195.0 + ",00",
    },
    {
      id: 41,
      title: "Vestido de Alça Estampado",
      image:
        "https://cdn.awsli.com.br/1538/1538522/produto/208358230/whatsapp-image-2023-03-10-at-15-34-06-1-aawrpj.jpg",
      price: 190.0 + ",00",
    },
    {
      id: 42,
      title: "Vestido Casual de Linho",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/vestido-midi/vestido-areia-em-linho_369183_600_1.webp",
      price: 300.0 + ",00",
    },
    {
      id: 43,
      title: "Vestido de Festa com Renda",
      image:
        "https://cdn0.casamentos.com.br/article-vendor/0296/original/1280/jpeg/122ce7d5-ece2-4dd1-9326-cb69b22218a4_13_360296-165414239555123.jpeg",
      price: 550.0 + ",00",
    },
    {
      id: 44,
      title: "Vestido Envelope Estampado",
      image:
        "https://a-static.mlcdn.com.br/1500x1500/vestido-feminino-envelope-longo-estampado-mira-luxo-modas/miramodas/1559p/ed6e571b820b4852ad37d4086cc08d40.jpeg",
      price: 135.0 + ",00",
    },
    {
      id: 45,
      title: "Vestido Minimalista Branco",
      image:
        "https://cdn.dooca.store/153665/products/j9liao8qz2on8ougjgruemigugkncnw2hutw.jpg?v=1717544370",
      price: 180.0 + ",00",
    },
    {
      id: 46,
      title: "Calça de Couro Sintético",
      image:
        "https://rosaprosa.cdn.magazord.com.br/img/2023/02/produto/4213/calca-jogger-feminina-couro-sintetico-rosa-prosa-1.png?ims=630x945",
      price: 180.0 + ",00",
    },
    {
      id: 47,
      title: "Calça Cargo Feminina",
      image:
        "https://acdn.mitiendanube.com/stores/001/155/809/products/dsc_0239_21-609bfef35c44aa2a5e16759687205201-640-0.png",
      price: 130.0 + ",00",
    },
    {
      id: 48,
      title: "Calça Wide Leg Rasgada",
      image: "https://cdn.awsli.com.br/600x450/2459/2459342/produto/305787370/29-g4dbnb8wxo.jpg",
      price: 110.0 + ",00",
    },
    {
      id: 49,
      title: "Calça de Alfaiataria Beje",
      image:
        "https://s.bazara33.com.br/product/2023/12/alfaiataria-atemporal-versatil-roupas-classicas-58.jpg",
      price: 150.0 + ",00",
    },
    {
      id: 50,
      title: "Calça Pantalona Preta",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/calca-pantalona/calca-pantalona-preta-em-veludo-cotele_375062_301_1.webp",
      price: 160.0 + ",00",
    },
    {
      id: 51,
      title: "Calça Wide Leg Escura",
      image:
        "https://nossalojaoficial.com.br/media/catalog/product/cache/1/image/2000x2600/9df78eab33525d08d6e5fb8d27136e95/n/o/nossa_loja_-_studio_16-jeans_10_.jpg",
      price: 100.0 + ",00",
    },
    {
      id: 52,
      title: "Calça Cargo Camuflada",
      image:
        "https://streetverseapparel.com.br/cdn/shop/files/3C3BC79A-110B-4AAA-9392-39822D835AA3_800x.jpg?v=1721614900",
      price: 130.0 + ",00",
    },
    {
      id: 53,
      title: "Calça Flare Jeans Escura",
      image:
        "https://static.ecosweb.com.br/public/produtos/moda-feminina/calca-jeans/calca-jeans-escuro-flare-com-fenda_315508_301_1.webp",
      price: 140.0 + ",00",
    },
    {
      id: 54,
      title: "Calça de Couro Preta",
      image:
        "https://acdn.mitiendanube.com/stores/002/889/295/products/img_2299-e1622c9eaeddd9230d17151033944196-1024-1024.jpeg",
      price: 170.0 + ",00",
    },
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
    },
    ];

  const thisItem = allItems.find(item => item.id === itemId);

  if (thisItem) {
    item.value = { 
      title: thisItem.title, 
      price: thisItem.price ,
      image: thisItem.image
    }
  } else {
    console.error("Item não encontrado");
  }

    router.push({ path: `/items/${itemId}` });
  }

  return {
    optionsClothes,
    optionsJewelry,
    jewelry,
    clothing,
    item,
    rates,
    isLoading,
    showLoading,
    onCancel,
    getWomensClothing,
    getJewelry,
    getThisJewelry,
    getThisClothing,
    getRates,
    getThisItem,
  };
});
