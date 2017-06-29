<template>
  <div v-if="allowCustomOptionInput" class="input-group numpicker-body">
    <div class="w-full">
      <span
        class="close-custom-option-input"
        data-toggle="tooltip"
        title="Save and close input"
        @click="onCustomOptionClose"
      >
        <i class="fa fa-close"></i>
      </span>
      <input
        autofocus
        type="text"
        class="form-control"
        placeholder="Input your own quantity of players"
        ref="customOption"
        :value="customOption"
        @input.prevent="onCustomOptionChange($event.target.value)"
      >
    </div>
  </div>
  <ul v-else class="nav nav-pills numpicker-body">
    <li
      role="presentation"
      class="option"
      v-for="(option, key) in options"
      :key="key"
      :class="{ selected: option === value }"
      @click="$emit('input', option)"
    >
      <a>{{ option }}</a>
    </li>
    <li
      role="presentation"
      class="option"
      :class="{ selected: customOption === value }"
      @click="onCustomOptionClick"
    >
      <a>{{ customOption || '...' }}</a>
    </li>
  </ul>
</template>

<style>
  .numpicker-body {
    display: flex !important;
    align-items: center !important;
    min-height: 200px !important;
  }

  .w-full {
    position: relative;
    width: 100%;
  }

  .close-custom-option-input {
    z-index: 5;
    position: absolute;
    top: -3px;
    right: 0;
    padding: 10px;
    color: #337ab7;
    cursor: pointer;
  }

  .option {
    min-width: 50px;
    text-align: center;
    margin: 5px;
  }

  .option a {
    color: white;
    background-color: #337ab7;
    cursor: pointer;
    transition: all .2s;
  }

  .nav > li.option > a:hover {
    color: white;
    background-color: #6598c4;
  }

  .nav > li.option.selected > a {
    background-color: #5cb85c;
  }
</style>

<script>
  export default {
    props: {
      value: {
        type: Number,
        required: false,
      },
      options: {
        type: Array,
        required: true,
        default: [],
      },
    },

    data() {
      return {
        allowCustomOptionInput: false,
        customOption: '',
      };
    },

    methods: {
      onCustomOptionChange(value) {
        const customOption = Number(value);

        if (isNaN(customOption) || value.includes(' ')) {
          this.$refs.customOption.value = this.customOption;
          return;
        }

        this.customOption = customOption;
      },
      onCustomOptionClick() {
        if (Number.isInteger(this.customOption)) {
          return this.$emit('input', this.customOption);
        }

        this.allowCustomOptionInput = true;
      },
      onCustomOptionClose() {
        this.allowCustomOptionInput = false;

        if (Number.isInteger(this.customOption)) {
          this.$emit('input', this.customOption);
        }
      },
      resetCustomInputValue() {
        this.customOption = '';
      },
    },
  };

</script>
