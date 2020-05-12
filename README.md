## Import

```js
import Vue from "vue";
import forceTick from "forceTick";
Vue.use(forceTick);
```

### Global

```js
Vue.$forceTick(() => {
  // etc ...
});

// or

await Vue.$forceTick();
```

```js
methods: {
  func () {
    this.$forceTick(() => {
      // etc ...
    })
  }

  // or

  async func () {
    await this.$forceTick()
    // etc ...
  }
}
```

### Example

```js
<template>
  <button
    @click="fun"
  >
    Count It!
  </button>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      done: false
    }
  },
  methods: {
    fun () {
      this.loading = true
      this.$forceTick(() => {
        for (var i = 1; i<1000; ++i){
          this.done = !i
        }
        this.done = true
        this.loading = false
      })
    }
  }
}
</script>
```
