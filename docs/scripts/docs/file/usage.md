### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-file>` props with default value.
  UiFile: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/button/button.scss';
@use 'balm-ui/components/file/file.scss';
```

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// Optional. Overwrite `<ui-file>` props with default value.
Vue.use(UiFile, {
  // some props
});
```