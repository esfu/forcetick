## Import

```js
import Vue from "vue";
import forceTick from "forceTick";
Vue.use(forceTick);
```

## History

- [double requestanimationframe work](https://stackoverflow.com/questions/44145740/how-does-double-requestanimationframe-work)

- [Vue.nextTick doesn't seem to cover it.](https://github.com/vuejs/vue/issues/9200)

## Usage

### Global

```js
Vue.$forceTick(() => {
  // etc ...
});

// or

await Vue.$forceTick();
```

### js

```javascript
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
