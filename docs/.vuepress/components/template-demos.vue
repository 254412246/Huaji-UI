<template>
  <div class="templateDemo">
    <!-- <h2>{{title}}</h2> -->
    <p v-if="desc">{{desc}}</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo" ref="componentWrapper">
        <slot></slot>
      </div>
      <div class="code-content" v-show="showCode && codeStr" v-highlight>
        <div class="code-content-height">
          <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "templateDemo",
  props: {
    title: String,
    desc: String,
    code: String,
  },
  data() {
    return {
      showCode: true,
      codeStr: this.code.trim(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>