```js
// `/path/to/app/scripts/store/index.js`
import demo from './demo';

export default {
  mixins: [demo]
};
```

```js
// `/path/to/app/scripts/store/demo.js`
export default {
  data() {
    return {
      demoMenu: []
    };
  },
  methods: {
    async getDemoMenu() {
      this.demoMenu = await this.$http.get('/api/get-menu');
    }
  }
};
```

```js
// `/path/to/app.vue`
export default {
  async mounted() {
    await this.$store.getDemoMenu();
    console.log(this.$store.demoMenu);
  }
};
```
