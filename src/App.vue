

<template>
<Button/>
<router-view/>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Button from "./stories/Button.vue"
export default defineComponent({
  name:"app",
  components:{Button}
})
</script>
<style>

</style>
