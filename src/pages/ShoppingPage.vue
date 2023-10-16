<template>
    <main>
      <filters-box />
      <div>
        <sort-form :itemsAmount="items.length"/>
        <shopping-list :items="items" />
      </div>
    </main>
</template>

<script>
import ShoppingList from "@/components/ShoppingList";
import FiltersBox from "@/components/FiltersBox";
import SortForm from "@/components/SortForm";

export default {
  components: {
    ShoppingList,
    FiltersBox,
    SortForm,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          img_url: "https://u.makeup.com.ua/b/b9/b9z0y9qlhc2b.jpg",
          title: "Calvin Klein CK One",
          brand: "Calvin Klein",
          price: 22.08,
          rate: 4.9,
          type: "Shower gel",
          age: "14+",
          purpose: ["Refreshing"],
          ingredients: ["Ginger", "Orange", "Bamboo"],
          timeOfApplication: "Unique",
          sex: "For men",
          country: "USA",
        },
        {
          id: 2,
          img_url: "https://u.makeup.com.ua/s/s6/s6xp0ixnkssl.jpg",
          title: "Ultra-enriched cleansing gel for face and body",
          brand: "Topicrem",
          price: 13.85,
          rate: 4.5,
          type: "Cleansing Gel",
          age: "any",
          purpose: ["Moisturizing", "Cleansing"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For children",
          country: "France",
        },
        {
          id: 3,
          img_url: "https://u.makeup.com.ua/t/t0/t0o5ipb5azbi.jpg",
          title: "Ultra-nourishing and moisturizing scrub with coconut and chia seeds",
          brand: "LUF",
          price: 10.87,
          rate: 4.5,
          type: "Scrub",
          age: "any",
          purpose: ["Moisturizing", "Anti-cellulite", "Recovery", "From stretch marks", "For pregnant women", "For radiance", "Nutrition", "Lifting", "Softening"],
          ingredients: ["Coconut", "Chia seeds"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Ukraine",
        },
        {
          id: 4,
          img_url: "https://u.makeup.com.ua/4/4a/4amkaayddbcz.jpg",
          title: "Geyser bath bomb \"Orange\"",
          brand: "TINK",
          price: 2.80,
          rate: 4.1,
          type: "Bath bomb",
          age: "any",
          purpose: ["Moisturizing", "Relaxing", "Cleansing"],
          ingredients: ["Orange"],
          timeOfApplication: "Unique",
          sex: "Unique",
          country: "Ukraine",
        },
        {
          id: 5,
          img_url: "https://u.makeup.com.ua/t/ti/tigc3a01xolb.jpg",
          title: "Cream shower gel",
          brand: "Pharmaceris",
          price: 14.85,
          rate: 4.5,
          type: "Shower gel",
          age: "any",
          purpose: ["Refreshing", "Moisturizing", "Nutrition"],
          ingredients: ["Cannabis seed oil"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Poland",
        },
      ],
    };
  },
}
</script>

<style scoped></style>
