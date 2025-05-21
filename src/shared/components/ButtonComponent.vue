<script setup lang="ts">
const props = defineProps<{
  size?: 'small' |  'large',
  variant?: 'primary' | 'secondary' | 'terciario' | 'authWith',
  theme?: 'dark' | 'light' | 'of',
  disabled?: boolean
}>();
const emit = defineEmits<{
  (e: 'clicked'): void
}>()

function onClick() {
  if (!props.disabled) {
    emit('clicked')
  }
}

</script>

<template>
    <button class="btn"
    :class="[
      `btn--${props.size ?? 'large'}`,
      `btn--${props.variant ?? 'primary'}`,
      `btn--${props.theme ?? 'dark'}`,
      props.disabled ? 'btn--disabled' : ''
    ]"
    :disabled="props.disabled"
    @click="onClick"
    >
    <div class="btn__content">
      <span class="btn__label">
        <slot></slot>
      </span>
    </div>
    </button>
</template>

<style lang="scss">
@use '@/styles/variables' as *;
.btn{
    display: flex;
    border-radius: 20px;
    border: 1px solid ;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // color:$color-backgounts-white;
    @extend %botton-one;
    
    
    
    &--large{
        // width: 86px;
        // height: 41px;
        padding: 10px 15px 10px 15px;
    }
    &--small{
        // width: 71px;
        // height: 34px;
        padding: 10px 15px 10px 15px;
        @extend %botton-three;
    }
    &--primary{
        background-color: $color-text-buttom-blue;
        border: 1px solid $color-text-buttom-blue;
        // color: $color-backgounts-white;
    }
    &--secondary{
        background-color: transparent;
        border: solid 1.5px $color-backgounts-white; 
        // color: $color-backgounts-white; 
    }
    &--terciario{
        background-color: transparent;
        border: none ;
        // color: $color-backgounts-white;
    }

    &--light{
        background-color: $color-backgounts-white;
        color: $color-text-buttom-blue;
    }
    &--dark{
        color: $color-backgounts-white;
    }

}
</style>