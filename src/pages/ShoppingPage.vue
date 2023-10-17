<template>
  <main>
    <div>
      <search-box @onChange="updateSearchQuery" />
      <filters-box />
    </div>
    <div>
      <sort-form
        :itemsAmount="searchedItems.length"
        :sortBy="sortBy"
        @updateSortBy="updateSortBy"
      />
      <shopping-list :items="searchedItems" />
    </div>
  </main>
</template>

<script>
import ShoppingList from "@/components/ShoppingList";
import FiltersBox from "@/components/FiltersBox";
import SortForm from "@/components/SortForm";
import SearchBox from "@/components/SearchBox";

export default {
  components: {
    ShoppingList,
    FiltersBox,
    SortForm,
    SearchBox,
  },
  data() {
    return {
      sortBy: "rating-decline",
      searchQuery: "",
      items: [
        {
          id: 1,
          img_url: "https://u.makeup.com.ua/b/b9/b9z0y9qlhc2b.jpg",
          title: "Calvin Klein CK One",
          brand: "Calvin Klein",
          price: 22.08,
          rating: 4.9,
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
          rating: 4.5,
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
          title:
            "Ultra-nourishing and moisturizing scrub with coconut and chia seeds",
          brand: "LUF",
          price: 10.87,
          rating: 4.5,
          type: "Scrub",
          age: "any",
          purpose: [
            "Moisturizing",
            "Anti-cellulite",
            "Recovery",
            "From stretch marks",
            "For pregnant women",
            "For radiance",
            "Nutrition",
            "Lifting",
            "Softening",
          ],
          ingredients: ["Coconut", "Chia seeds"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Ukraine",
        },
        {
          id: 4,
          img_url: "https://u.makeup.com.ua/4/4a/4amkaayddbcz.jpg",
          title: 'Geyser bath bomb "Orange"',
          brand: "TINK",
          price: 2.8,
          rating: 4.1,
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
          rating: 4.5,
          type: "Shower gel",
          age: "any",
          purpose: ["Refreshing", "Moisturizing", "Nutrition"],
          ingredients: ["Cannabis seed oil"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Poland",
        },
        {
          id: 6,
          img_url: "https://u.makeup.com.ua/w/wi/witzumpjqtvj.jpg",
          title: "Professional kit for oral cavity care",
          brand: "DenTek",
          price: 11.43,
          rating: 4.9,
          type: "Professional kit",
          age: "18+",
          purpose: ["Treatment"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "Unique",
          country: "USA",
        },
        {
          id: 7,
          img_url: "https://u.makeup.com.ua/5/5z/5zsn14gm1ecb.jpg",
          title: "Perfect Cover BB Cream SPF42/PA++ Moisturized Complexion",
          brand: "Missha",
          price: 8.33,
          rating: 4.7,
          type: "Cream",
          age: "18+",
          purpose: ["Moisturizing", "Make-up", "Styling"],
          ingredients: ["Mineral Oil", "Rosa Oil"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Korea",
        },
        {
          id: 8,
          img_url: "https://u.makeup.com.ua/u/ug/ugcgpo1snshb.jpg",
          title: "Double Wear Stay-in-Place Makeup SPF10",
          brand: "Estee Lauder",
          price: 32.79,
          rating: 4.4,
          type: "Cream",
          age: "18+",
          purpose: ["Make-up"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Belgium",
        },
        {
          id: 9,
          img_url: "https://u.makeup.com.ua/w/wq/wqgpgtakpn0b.jpg",
          title: "Antiperspirant Treatment Normal Skin Armpits Roll-On",
          brand: "Etiaxil",
          price: 12.37,
          rating: 4.1,
          type: "Antiperspirant",
          age: "18+",
          purpose: ["Sweat protection"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "Unique",
          country: "Denmark",
        },
        {
          id: 10,
          img_url: "https://u.makeup.com.ua/v/vw/vw5xajovygnp.jpg",
          title: "Collagen Moisture Foundation",
          brand: "Enough",
          price: 5.25,
          rating: 4.0,
          type: "Cream",
          age: "18+",
          purpose: ["Make-up"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Korea",
        },
        {
          id: 11,
          img_url: "https://u.makeup.com.ua/x/xd/xd8dp4y1s7bs.jpg",
          title:
            "Soothing restorative balm for damaged or irritated skin of the face and body of babies, children and adults",
          brand: "La Roche-Posay",
          price: 8.25,
          rating: 4.7,
          type: "Balm",
          age: "0+",
          purpose: [
            "Antibacterial",
            "Recovery",
            "From irritations",
            "From cracks",
            "Nutrition",
            "Soothing",
            "Moisturizing",
            "Softening",
            "Anti-inflammation",
          ],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For children",
          country: "France",
        },
        {
          id: 12,
          img_url: "https://u.makeup.com.ua/p/pg/pgefqtth2neu.jpg",
          title: "Moisturizing cream for dry and very dry face and body skin",
          brand: "CeraVe",
          price: 10.53,
          rating: 4.3,
          type: "Cream",
          age: "3+",
          purpose: ["Moisturizing", "Recovery", "Nutrition"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For children",
          country: "USA",
        },
        {
          id: 13,
          img_url: "https://u.makeup.com.ua/0/0b/0bd2dd7amo6l.jpg",
          title: "Multifunctional fluoride toothpaste",
          brand: "Amway",
          price: 2.57,
          rating: 4.7,
          type: "Toothpaste",
          age: "6+",
          purpose: ["Cleaning"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "Unique",
          country: "USA",
        },
        {
          id: 14,
          img_url: "https://u.makeup.com.ua/g/gs/gsfitmyet8ij.jpg",
          title:
            "Hydrophilic facial cleansing oil with almond oil and bergamot extract",
          brand: "Relance",
          price: 5.44,
          rating: 3.8,
          type: "Hydrophilic Oil",
          age: "18+",
          purpose: [
            "Nourishing",
            "Soothing",
            "Moisturizing",
            "Cleansing",
            "Softening",
          ],
          ingredients: ["Orange", "Bergamot", "Grape", "Lavender"],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Ukraine",
        },
        {
          id: 15,
          img_url: "https://u.makeup.com.ua/g/gv/gvvf8yz28ocp.jpg",
          title: "CC Color Correcting Cream",
          brand: "Lumene",
          price: 11.24,
          rating: 3.9,
          type: "Cream",
          age: "18+",
          purpose: ["Make-up"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Finland",
        },
        {
          id: 16,
          img_url: "https://u.makeup.com.ua/d/dg/dgw7vnoodpij.png",
          title: "Moisturizing milk for dry and very dry face and body skin",
          brand: "CeraVe",
          price: 11.05,
          rating: 4.6,
          type: "Lotion",
          age: "3+",
          purpose: ["Recovery", "Nutrition", "Moisturizing"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For children",
          country: "USA",
        },
        {
          id: 17,
          img_url: "https://u.makeup.com.ua/s/s6/s6xp0ixnkssl.jpg",
          title: "Ultra-enriched cleansing gel for face and body",
          brand: "Topicrem",
          price: 13.85,
          rating: 4.5,
          type: "Cleansing Gel",
          age: "any",
          purpose: ["Moisturizing", "Cleansing"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For children",
          country: "France",
        },
        {
          id: 18,
          img_url: "https://u.makeup.com.ua/9/9h/9hqugeq5jjeg.jpg",
          title: "M Perfect Cover BB Cream EX SPF42/PA+++",
          brand: "Missha",
          price: 6.57,
          rating: 3.9,
          type: "Cream",
          age: "18+",
          purpose: ["Make-up"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "Korea",
        },
        {
          id: 19,
          img_url: "https://u.makeup.com.ua/b/bh/bhguqabefzhx.jpg",
          title: 'Geyser bath bomb "Orange"',
          brand: "TINK",
          price: 2.8,
          rating: 4.1,
          type: "Bath bomb",
          age: "any",
          purpose: ["Moisturizing", "Relaxing", "Cleansing"],
          ingredients: ["Orange"],
          timeOfApplication: "Unique",
          sex: "Unique",
          country: "Ukraine",
        },
        {
          id: 20,
          img_url: "https://u.makeup.com.ua/m/mp/mpqiarqk6zt3.jpg",
          title: "Facefinity Compact Foundation SPF 20",
          brand: "Max Factor",
          price: 8.63,
          rating: 4.5,
          type: "Facefinity",
          age: "18+",
          purpose: ["Make-up"],
          ingredients: [],
          timeOfApplication: "Unique",
          sex: "For women",
          country: "USA",
        },
      ],
    };
  },
  methods: {
    updateSortBy(new_value) {
      this.sortBy = new_value;
    },
    updateSearchQuery(new_value) {
      this.searchQuery = new_value;
    },
  },
  computed: {
    sortedItems() {
      switch (this.sortBy) {
        case "name-growth":
          return this.items.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
          });
        case "name-decline":
          return this.items.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) {
              return 1;
            }
            if (titleA > titleB) {
              return -1;
            }
            return 0;
          });
        case "price-growth":
          return this.items.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            if (priceA < priceB) {
              return -1;
            }
            if (priceA > priceB) {
              return 1;
            }
            return 0;
          });
        case "price-decline":
          return this.items.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            if (priceA < priceB) {
              return 1;
            }
            if (priceA > priceB) {
              return -1;
            }
            return 0;
          });
        case "rating-growth":
          return this.items.sort((a, b) => {
            const ratingA = a.rating;
            const ratingB = b.rating;

            if (ratingA < ratingB) {
              return -1;
            }
            if (ratingA > ratingB) {
              return 1;
            }
            return 0;
          });
        case "rating-decline":
          return this.items.sort((a, b) => {
            const ratingA = a.rating;
            const ratingB = b.rating;

            if (ratingA < ratingB) {
              return 1;
            }
            if (ratingA > ratingB) {
              return -1;
            }
            return 0;
          });
        default:
          return this.items;
      }
    },
    searchedItems() {
      return this.items.filter((item) =>
        item.title.toUpperCase().includes(this.searchQuery.toUpperCase())
      );
    },
  },
};
</script>

<style scoped>
main {
  padding-bottom: 240px;
}
</style>
