import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(require('@fortawesome/free-solid-svg-icons/faUser').definition);
library.add(require('@fortawesome/pro-solid-svg-icons/faLockAlt').definition);
library.add(require('@fortawesome/pro-regular-svg-icons/faSpinnerThird').definition);
