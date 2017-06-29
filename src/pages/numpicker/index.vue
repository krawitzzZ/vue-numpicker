<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <h1 class="panel-title text-center" slot="heading">
        How many players?
        <span
          class="reset-numpicker"
          data-toggle="tooltip"
          title="Reset numpicker values"
          @click="resetNumPickerValues"
        >
          <i class="fa fa-close"></i>
        </span>
      </h1>
      <div slot="body">
        <v-num-picker v-model="selectedOption" :options="options" ref="numpicker"></v-num-picker>
      </div>
    </v-panel>
  </v-layout>
</template>

<style>
  .header {
    position: relative;
  }

  .reset-numpicker {
    position: absolute;
    top: 1px;
    right: 15px;
    padding: 10px;
    cursor: pointer;
  }
</style>

<script>
  import $ from 'jquery';

  const options = [2, 4, 6, 8, 10];

  export default {
    mounted() {
      $('[data-toggle="tooltip"]').tooltip();
    },

    data() {
      return {
        selectedOption: null,
        options,
      };
    },

    methods: {
      resetNumPickerValues() {
        this.selectedOption = null;
        this.options = options;
        this.$refs.numpicker.resetCustomInputValue();
      },
    },

    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VNumPicker: require('@/components/numpicker.vue'),
    },
  };
</script>
