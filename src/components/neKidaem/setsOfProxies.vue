<template>
    <div class="flex flex-col pb-2">
        <div class="border-2 w-full flex border-solid rounded-lg">
            <input id="input" type="text" placeholder="Введите вашу страну" class="mr-2 ml-2 w-32 outline-none"
                   @input="debounceFilter">
            <selector-of-countries @selectedCountry="select"
                                   :set-of-countries="filter.countries"></selector-of-countries>
        </div>
        <div class="flex flex-col ml-3 mt-3">
            <div class=""> proxy type</div>
            <div class="flex flex-col justify-end" v-for="elem in filter.proxyType">
                <countries-checkbox class="mt-1" :match="elem.type" :value="elem.checked"
                    @input="toFilterCountry"></countries-checkbox>
                <label class="ml-5 mt-2">{{elem.type}}</label>
            </div>
        </div>
        <div class="ml-3 bg-grey-say rounded-lg pl-4 p-1 -ml-1 mt-2">
            <alive-checkbox :value="filter.alive" @input="checked"></alive-checkbox>
            <label class="ml-5">Alive</label>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import CountriesCheckbox from './countriesCheckbox';
import AliveCheckbox from './aliveCheckbox';
import SelectorOfCountries from './selectorOfCountries';

export default {
  name: 'aliveCheck',
  components: { SelectorOfCountries, AliveCheckbox, CountriesCheckbox },
  props: {
    proxyStore: Object,
  },
  data() {
    return {
      filter: {},
    };
  },
  created() {
    this.filter = this.proxyStore;
  },
  watch: {
    'filter.match': function (val) {
      this.$emit('matchedProxy', val);
    },


    'filter.country': function (val) {
      if (val === '') {
      }
      const match = val;
      for (const el of this.filter.countries) {
        if (el[0].toLowerCase() === match.toLowerCase()) {
          this.filter.match = { value: 'country' };
          this.filter.match.check = el[1];
        }
      }
    },
  },
  methods: {
    test() {

    },

    check() {
      this.filter.alive = !this.filter.alive;
    },

    debounceFilter: _.debounce(function (e) {
      this.filter.country = e.target.value;
    }, 500),
    toFilterCountry(value) {
      for (const el of this.filter.proxyType) {
        el.checked = false;
        if (el.type === value.type) {
          el.checked = true;
          this.filter.match = { value: 'proxy_type' };
          this.filter.match.check = el.index;
        }
      }
    },

    checked(value) {
      this.filter.match = { value: 'alive' };
      this.filter.match.check = value;
    },

    select(value) {
      this.filter.match = { value: 'country' };
      this.filter.match.check = value[1];
      const input = document.getElementById('input');
      input.value = value[0];
    },
  },
};
</script>

<style scoped>

</style>
