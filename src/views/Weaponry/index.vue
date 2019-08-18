<template>
  <main id="weaponry" class="weaponry-shell">
    <div class="weaponry-shell-header">
      <button>All</button>
      <h1>云顶之弈 - 装备速查</h1>
      <button>Help</button>
    </div>
    <div class="weaponry-shell-content">

      <div class="shuaiguo">随着版本更新，部分数值可能会有所变化。</div>

      <div class="material-card">
        <div class="material">
          <div class="slot">
            <img v-if="apple" :src="apple.icon" :alt="apple.name">
          </div>
          <div class="desc">
            <p>{{apple ? apple.desc : '-'}}</p>
          </div>
        </div>
        <span class="add-icon">+</span>
        <div class="material">
          <div class="slot">
            <img v-if="pen" :src="pen.icon" :alt="pen.name">
          </div>
          <div class="desc">
            <p>{{pen ? pen.desc : '-'}}</p>
          </div>
        </div>
      </div>

      <!-- result -->
      <div class="result-card" v-if="applePen">
        <div class="slot">
          <img :src="applePen.icon" />
        </div>
        <div class="name">
          <h2>{{applePen.name}}</h2>
        </div>
        <div class="desc">
          {{applePen.desc.join(',')}}
        </div>
        <div class="effects">
          <p v-html="beautify(applePen.effects)"></p>
        </div>
      </div>

    </div>
    <div class="weaponry-shell-footer">
      <ul class="weaponry-control">
        <template v-for="item in baseWeaponry">
          <li class="weaponry-control-item" :key="item.key">
            <img :src="item.icon" :alt="item.name" @click="addItem(item.key)">
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script>
import baseWeaponry from '@/static/base'
import dataMap from '@/static/weaponryMap'

export default {
  name: 'weaponry',
  data () {
    return {
      dataMap,
      baseWeaponry,
      selected: []
    }
  },
  computed: {
    apple () {
      if (typeof this.selected[0] !== 'undefined') {
        return dataMap[this.selected[0]]
      }
      return undefined
    },
    pen () {
      if (typeof this.selected[1] !== 'undefined') {
        return dataMap[this.selected[1]]
      }
      return undefined
    },
    applePen () {
      if (this.selected.length === 2) {
        return this.dataMap[this.selected.slice().sort((a, b) => a - b).join('')]
      }
      return undefined
    }
  },
  methods: {
    addItem (key) {
      if (this.selected.length === 2) {
        this.selected = []
        return
      }
      this.selected.push(key)
    },
    beautify (effects) {
      return effects.replace(/([+\-%0-9])+/g, e => `<span>${e}</span>`)
    }
  }
}
</script>

<style lang="scss">
.weaponry-shell {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);

  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .weaponry-shell-header {
    background-color: #fff;
    height: 42px;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    h1 {
      flex: 1;
      font-size: 17px;
      font-weight: 500;
      text-align: center;
    }
    button {
      height: 22px;
      width: 42px;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 2px;
      color: #999;
      font-size: 12px;
    }
  }
  .weaponry-shell-content {
    flex: 1;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    .shuaiguo {
      font-size: 12px;
      color: #999;
      line-height: 16px;
      margin: 12px 12px 4px 12px;
      font-weight: 300;
    }
    .material-card {
      margin: 0 12px 12px 12px;
      padding: 18px 12px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      .add-icon {
        font-size: 24px;
        color: #666;
        line-height: 42px;
      }
      .material {
        width: 40%;
        text-align: center;
        .slot {
          position: relative;
          width: 48px;
          height: 48px;
          margin: 0 auto;
          border: 1px solid blue;
          margin-bottom: 12px;
          border-radius: 2px;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 3;
          }
        }
        .desc {
          height: 24px;
          line-height: 24px;
        }
      }
    }
    .result-card {
      text-align: center;
      margin-top: 36px;
      font-size: 15px;
      .name {
        margin-top: 12px;
        h2 {
          display: inline-block;
          font-size: 17px;
          // border: 1px solid #666;
          color: orange;
          border-radius: 2px;
          font-weight: 400;
          line-height: 1;
          padding: 2px 12px;
        }
      }
      .slot {
        height: 60px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .desc {
        line-height: 32px;
      }
      .effects {
        span {
          color: red;
          margin: 0 2px;
        }
      }
    }
  }
  .weaponry-shell-footer {
    padding-bottom: var(--safe-area-inset-bottom);
    background-color: #fff;
    border-top: 1px solid #eee;
    .weaponry-control {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 6px 12px;
      margin-bottom: 12px;
      .weaponry-control-item {
        width: 20vw;
        height: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 48px;
          height: 48px;
          max-width: 90%;
          max-height: 90%;
          border: 1px solid #999;
          border-radius: 6px;
          padding: 2px;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
