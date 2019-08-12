<template>
    <div class="z-10 ">
        <div class="menu" @click.self="show = !show">{{country[1]}}</div>
        <div class="container" id="test" v-show="show">
            <div v-for="el in setOfCountries">
                <div @click="selectCountry">{{el[0]}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'selectorOfCountries',
  props: {
    setOfCountries: Array,
  },
  data() {
    return {
      show: false,
      selected: '',
      country: [],
    };
  },
  beforeCreate() {
    document.addEventListener('click', (e) => {
      this.hideOutsideElem(e);
    });
  },
  watch: {
    selected(val) {
      for (const el of this.setOfCountries) {
        if (el[0].toLowerCase() === this.selected.toLowerCase()) {
          this.country = el;
          this.$emit('selectedCountry', this.country);
        }
      }
    },
  },
  methods: {
    selectCountry(e) {
      this.show = false;
      this.selected = e.target.textContent;
    },
    hideOutsideElem(e) {
      let line;
      const container = document.querySelector('.container');
      const menu = document.querySelector('.menu');
      if (menu.contains(e.target)) {
        return;
      }
      if (!container.contains(e.target)) {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped>
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 33px;
        margin-left: -1px;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
        height: 20px;
        background: aliceblue;
    }

    .container {
        width: 170px;
        margin-top: 2px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        margin-left: -140px;
        padding-left: 7px;
        padding-top: 4px;
        padding-bottom: 4px;
        z-index: 100;
        background: aliceblue;
        position: absolute;
    }

</style>
