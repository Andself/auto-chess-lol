<template>
  <van-popup
    :value="visible"
    position="right"
    :style="{ width: '220px', height: '100%' }"
    @input="$emit('update:visible', $event)"
  >
    <div class="all-advanced-list">
      <div class="advanced-list-title">合成列表</div>
      <div class="flex-1 vertical-scroll">
        <ul class="advanced-list-warp">
          <template v-for="item in list">
            <li class="advanced-list-item" tabindex="1" :key="item.id" @click="$emit('select', item)">
              <img class="icon" :src="item.icon">
              <p class="name">{{item.name}}</p>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'advanced-list',
  props: {
    visible: Boolean,
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.all-advanced-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  .advanced-list-title {
    border-bottom: 1px solid #f4f4f4;
    padding: 0 12px 0 12px;
    line-height: 52px;
    font-size: 17px;
    color: #444;
    font-weight: 500;
  }
  .advanced-list-warp {
    padding: 24px 0;
    .advanced-list-item {
      user-select: none;
      display: flex;
      overflow: hidden;
      height: 48px;
      padding: 8px 12px;
      line-height: 32px;
      transition: all 0.3s;
      .icon {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        padding: 1px;
        border: 1px solid #FF9800;
        margin-right: 12px;
      }
      .name {
        color: #FF9800;
      }
      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
