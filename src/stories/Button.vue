<template>
<div class="grid  mt-20  justify-center items-center">
  <a-button class=" bg-red-500 grid place-content-center grid-flow-col py-6 p-8 text-white">submit</a-button>

  <a-button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</a-button>
</div>

</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
