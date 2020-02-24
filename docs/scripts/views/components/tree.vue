<template>
  <div :class="[$tt('body1'), 'demo--tree']">
    <header class="hero component">
      <ui-file></ui-file>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Tree'
  },
  mixins: [snippets],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
