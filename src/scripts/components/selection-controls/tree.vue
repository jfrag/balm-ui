<template>
  <div :class="className.outer">
    <div
      :class="className.item"
      v-for="(item, index) in tree"
      :key="`${item.treeLevel}-${index}`"
    >
      <div :class="className.itemSurface">
        <ui-checkbox
          v-if="checkbox"
          v-model="item.checked"
          :indeterminate="item.indeterminate"
          :value="item[checkboxValueField]"
          @change="$_onChange($event, item)"
        ></ui-checkbox>
        <div :class="className.itemContent">
          <ui-icon
            slot="icon"
            @click="$_toggle(item)"
            v-if="icon && $_hasChild(item)"
            :class="className.itemIcon"
            >{{ $_iconText(item) }}</ui-icon
          >
          <span
            :class="[
              className.itemName,
              { selected: this.root.curItem === item }
            ]"
            @click="$_onItemSelected(item)"
            >{{ item[nameField] }}</span
          >
        </div>
      </div>
      <ui-tree
        v-if="$_hasChild(item)"
        v-show="item.isSpread"
        :parent="item"
        :root="root"
        :list="item.children"
        :icon="icon"
        :spreadIcon="spreadIcon"
        :retractIcon="retractIcon"
        :checkbox="checkbox"
        :checkboxValueField="checkboxValueField"
        @all-selected="$_onAllChecked"
        @all-deselected="$_onAllUnchecked"
        @indeterminate="$_onIndeterminate"
      />
    </div>
  </div>
</template>
<script>
const UI_TREE = {};
const _createExtraProps = function(list, childrenField, isCheckbox, level = 0) {
  level++;
  return list.map(item => {
    let o = {
      ...item,
      treeLevel: level,
      isSpread: false,
      indeterminate: false,
      loading: false,
      selected: false,
      level
    };
    item[childrenField] &&
      (o.children = _createExtraProps(
        item[childrenField],
        childrenField,
        level
      ));
    isCheckbox && (o.checked = false);
    return o;
  });
};

export default {
  name: 'ui-tree',
  props: {
    list: {
      // 原始数组
      type: Array,
      default() {
        return [];
      }
    },
    childrenField: {
      // 子数组字段名称，默认children
      type: String,
      default: 'children'
    },
    nameField: {
      // 名字字段名称，默认name
      type: String,
      default: 'name'
    },
    icon: {
      // 是否显示icon
      type: Boolean,
      default: true
    },
    spreadIcon: {
      // 展开时的icon名称
      type: String,
      default: 'remove_circle_outlined'
    },
    retractIcon: {
      // 关闭时的icon名称
      type: String,
      default: 'add_circle_outlined'
    },
    checkbox: {
      // 是否开启checkbox
      type: Boolean,
      default: false
    },
    // checkbox 值对应的字段名
    checkboxValueField: String
  },
  data() {
    return {
      root: this.$attrs.root || this,
      selected: [],
      curItem: {},
      tree: this.$attrs.parent
        ? this.list
        : _createExtraProps(this.list, this.childrenField, this.checkbox)
    };
  },
  computed: {
    className() {
      return {
        outer: 'mdc-tree',
        item: 'mdc-tree--item',
        itemSurface: 'mdc-tree--item-surface',
        itemContent: 'mdc-tree--item-content',
        itemIcon: 'mdc-tree--item-icon',
        itemName: 'mdc-tree--item-name'
      };
    }
  },
  methods: {
    $_iconText(item) {
      return item.isSpread ? this.spreadIcon : this.retractIcon;
    },
    $_hasChild(item) {
      return item.children && item.children.length;
    },
    $_onAllChecked(item) {
      item.checked = true;
      item.indeterminate = false;
      this.$parent.$attrs.parent && this.$parent.$_parentHandler();
    },
    $_onAllUnchecked(item) {
      item.checked = false;
      item.indeterminate = false;
      this.$parent.$attrs.parent && this.$parent.$_parentHandler();
    },
    $_onIndeterminate(item) {
      item.checked = false;
      item.indeterminate = true;
      this.$parent.$attrs.parent && this.$parent.$_parentHandler();
    },
    $_childHandler(checked, item) {
      let children = item.children;
      checked && (item.indeterminate = false);
      children &&
        children.forEach(child => {
          child.checked = checked;
          child.children && this.$_childHandler(checked, child);
          this.$_checkedHandler(checked, child);
        });
    },
    $_parentHandler() {
      if (this.$attrs.parent) {
        let indeterminate = this.tree.some(
          item => item.checked || item.indeterminate
        );
        let allSelected = this.tree.every(item => item.checked);
        let eventName =
          indeterminate && !allSelected
            ? 'indeterminate'
            : allSelected
            ? 'all-checked'
            : 'all-unchecked';
        this.$emit(eventName, this.$attrs.parent);
        this.$_checkedHandler(allSelected, this.$attrs.parent);
      }
    },
    $_onChange(checked, item) {
      this.$_childHandler(checked, item);
      this.$_parentHandler();
      this.$_checkedHandler(checked, item);
    },
    $_checkedHandler(checked, item) {
      let value = item[this.checkboxValueField];
      let vm = this.root;
      if (checked) {
        vm.selected.indexOf(value) < 0 && vm.selected.push(value);
        vm.$emit('checked', vm.selected);
      } else {
        let index = vm.selected.indexOf(value);
        if (index > -1) {
          vm.selected.splice(index, 1);
          vm.root.$emit('unchecked', value);
        }
      }
    },
    $_toggle(item) {
      item.isSpread = !item.isSpread;
      this.$emit('toggle', item.isSpread, item);
      this.$emit(item.isSpread ? 'spreaded' : 'retracted', item);
    },
    $_onItemSelected(item) {
      if (this.root.curItem === item) {
        this.root.curItem = {};
        this.root.$emit('deselected', item);
      } else {
        this.root.curItem = item;
        this.root.$emit('selected', item);
      }
    }
  },
  created() {
    this.$on('all-checked', this.$_onAllChecked);
    this.$on('all-unchecked', this.$_onAllUnchecked);
    this.$on('indeterminate', this.$_onIndeterminate);
  }
};
</script>
