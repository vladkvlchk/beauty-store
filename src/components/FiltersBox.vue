<template>
  <form class="filters">
    <div v-for="filter in filters">
      <div class="itemTitle" @click="onOpenFilter(filter.title)">
        <h2>{{ filter.title }}</h2>
        <h2>{{ openedFilters.includes(filter.title) ? "-" : "+" }}</h2>
      </div>
      <ul v-if="openedFilters?.includes(filter.title)" class="options">
        <li v-for="option in filter.options" :key="option">
          <input
            type="checkbox"
            @change="onActiveFilter(filter.title, option)"
          />
          <p>{{ option }}</p>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          title: "Brand",
          options: [
            "Calvin Klein",
            "Topicrem",
            "LUF",
            "TINK",
            "Pharmaceris",
            "DenTek",
            "Missha",
            "Estee Lauder",
            "Etiaxil",
            "Enough",
            "La Roche-Posay",
            "CeraVe",
            "Amway",
            "Relance",
            "Lumene",
            "Max Factor",
          ],
        },
        {
          title: "Type",
          options: [
            "Bath bomb",
            "Shampoo",
            "Cream",
            "Cleansing Gel",
            "Shower gel",
            "Soap",
            "Scrub",
            "Professional kit",
            "Antiperspirant",
            "Toothpaste",
            "Hydrophilic Oil",
            "Lotion",
          ],
        },
        {
          title: "Age",
          options: [
            "0+",
            "1+",
            "2+",
            "3+",
            "4+",
            "5+",
            "6+",
            "7+",
            "8+",
            "10+",
            "12+",
            "13+",
            "14+",
            "15+",
            "16+",
            "18+",
            "20+",
            "25+",
            "30+",
            "35+",
            "40+",
            "45+",
            "50+",
            "any",
          ],
        },
        {
          title: "Purpose",
          options: [
            "Refreshing",
            "Detoxing",
            "Styling",
            "Relaxing",
            "Against humidity",
            "Cleansing",
            "For teenagers",
            "Moisturizing",
            "Nutrition",
            "Anti-cellulite",
            "Recovery",
            "From stretch marks",
            "For pregnant women",
            "For radiance",
            "Lifting",
            "Softening",
            "Treatment",
            "Make-up",
            "Antibacterial",
            "From irritations",
            "From cracks",
            "Soothing",
            "Anti-inflammation",
            "Nourishing",
          ],
        },
        {
          title: "Ingredients",
          options: [
            "Cannabis seed oil",
            "Coconut",
            "Chia seeds",
            "Orange",
            "Bamboo",
            "Aloe vera",
            "Pineapple",
            "Banana",
            "Beet",
            "Amber",
            "Mineral Oil",
            "Rosa Oil",
            "Bergamot",
            "Grape",
            "Lavender",
          ],
        },
        {
          title: "Time of application",
          options: ["Day", "Night", "Unique"],
        },
        {
          title: "Sex",
          options: [
            "For men",
            "For women",
            "For boys",
            "For girls",
            "For children",
            "Unique",
          ],
        },
        {
          title: "Brand's country",
          options: [
            "India",
            "Ireland",
            "Italy",
            "Belgium",
            "Austria",
            "Spain",
            "Indonesia",
            "Vietnam",
            "Great Britain",
            "Canada",
            "China",
            "Monaco",
            "Amsterdam",
            "Poland",
            "German",
            "USA",
            "Turkey",
            "Ukraine",
            "France",
            "Finland",
            "Japan",
            "Korea",
            "Denmark",
          ],
        },
      ],
      openedFilters: ["Brand"],
      activeFilters: [],
    };
  },
  methods: {
    onOpenFilter(title) {
      if (this.openedFilters.includes(title))
        this.openedFilters = this.openedFilters.filter(
          (opened) => opened !== title
        );
      else this.openedFilters.push(title);
    },

    onActiveFilter(title, value) {
      if (
        this.activeFilters.find(
          (filter) => filter.title === title && filter.values?.includes(value)
        )
      ) {
        //deleting from filters
        this.activeFilters.forEach((filter) => {
          if (filter.title === title)
            filter.values = filter.values.filter((v) => v !== value);
        });
        this.activeFilters = this.activeFilters.filter((f) => f.values.length);
      } else if (this.activeFilters.find((filter) => filter.title === title)) {
        //adding value in title that list already has
        this.activeFilters.forEach((filter) => {
          if (filter.title === title) filter.values.push(value);
        });
      } else {
        //adding title, value
        this.activeFilters.push({ title, values: [value] });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 312px;
  margin: 40px;
  padding: 0 64px 0 0;
  font-size: 14px;
  line-height: 24px;
}
.itemTitle {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 4px;
  cursor: pointer;
}
.options {
  list-style: none;
  max-height: 400px;
  overflow: scroll; /* Make a custom scroller */
}
.options li {
  margin: 4px 12px;
  display: flex;
}
.options li input {
  margin: 0 8px;
}
</style>
