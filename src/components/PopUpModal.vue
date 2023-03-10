<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" :initialFocus="initFocus" @close="$emit('close')">
      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 transform transition-all bg-gray-500 bg-opacity-75" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full space-y-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md"
              :class="maxWidthClass"
            >
              <DialogTitle
                v-if="$slots.title"
                as="h3"
                class="px-6 pt-6 text-lg font-medium leading-6 text-gray-900"
              >
                <slot name="title" />
              </DialogTitle>

              <div v-if="$slots.content" class="px-6 pt-6">
                <slot name="content" />
              </div>
              <div v-if="$slots.footer" class="px-6 py-3 bg-gray-100">
                <slot name="footer" />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed } from 'vue'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: String,
      default: 'md',
    },
    initFocus: {
      type: Object,
      default: () => {},
    },
  },

  emits: ['close'],

  setup (props) {
    const maxWidthClass = computed(() => {
      return {
        'xs': 'sm:max-w-xs',
        'sm': 'sm:max-w-sm',
        'md': 'sm:max-w-md',
        'lg': 'sm:max-w-lg',
        'xl': 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
      }[props.maxWidth]
    })

    return {
      maxWidthClass
    }
  }
}
</script>
