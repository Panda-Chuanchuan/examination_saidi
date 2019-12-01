<template>
    <div class=" container-fluid">
      <ul class="list_page">
        <li v-for="(item, index) in list" :key="'item'+index" class="list_item">
          <button class="btn btn-info" @click="unfoldItem(index)">展开列表项{{item.id}}</button>
          <div class="list_content" v-show="item.isHidden">
            <p class="content_text">{{item.name}}</p>
            <div class="btn_group">
              <button class="btn btn-primary" @click="insertItem(index)">插入</button>
              <button class="btn btn-success" @click="cllapseItem(index)">折叠</button>
              <button class="btn btn-danger" @click="deleteItem(index)">删除</button>
            </div>
          </div>
          <div style="clear:both"></div>
        </li>
      </ul>
      <div class="footer_btn">
        <button class="btn btn-primary" @click="addItem()">新建</button>
        <button class="btn btn-primary" @click="randomSort()">随机排序</button>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'list_page',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.$http.get("./data/list.json").then((res)=> {
      this.list = res.data.list;
    }).then(()=> {
      this.setItemWidth();
    }); 
    let _this = this;
    window.onresize = function() {
      _this.setItemWidth() ;
    }
  },
  methods: {
    setItemWidth() {
      let width = document.getElementsByClassName("list_page")[0].offsetWidth;
      for(let i = 0; i < this.list.length; i++) {
        // window.console.log(document.getElementsByClassName("list_content")[i])
        document.getElementsByClassName("list_content")[i].style.width = `${width}px`;
      }
    },
    unfoldItem(index) { //展开列表项
      this.list[index].isHidden = true;
    },
    cllapseItem(index) { //折叠列表项
      this.list[index].isHidden = false;
    },
    deleteItem(index) { // 删除列表项
      this.list.splice(index, 1)
    },
    insertItem(index) { // 在列表项前插入元素
      this.list.splice(index, 0, {
        "id": this.list.length,
        "name": `(${this.list[index].name})插入元素${this.list.length}`,
        "isHidden": false
      });
      let _this = this;
      setTimeout(() => {
        _this.setItemWidth();
      }, 15);
    },
    addItem() { // 列表尾部插入列表项
      this.list.push({
        "id": this.list.length,
        "name": `测试元素${this.list.length}`,
        "isHidden": false
      });
      let _this = this;
      setTimeout(() => {
        _this.setItemWidth();
      }, 15);
    },
    randomSort() { // 随机排序
      let listArr = JSON.parse(JSON.stringify(this.list));
      let indexArr = [];
      for(let i = 0; i < this.list.length; i++) { // 随机产生不重复的数,用于表示索引
        indexArr.push(i)
      }
      let t;
      for(let j = 0; j < indexArr.length; j++) { // 索引随机排序
        let rand = parseInt(Math.random() * indexArr.length);
        t = indexArr[rand];
        indexArr[rand] =indexArr[j];
        indexArr[j] = t;
      }
      for(let k = 0; k < indexArr.length; k++) { // 列表数据随机排序
        let index = indexArr[k];
        for(let m = 0; m < listArr.length; m++) {
          if(listArr[m].id == index) {
            Vue.set(this.list, k, listArr[m])
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list_page {
    padding-top: 120px;
  }
  ul {
    padding-left: 0;
  }
  .list_item {
    margin-bottom: 24px;
    display: inline-block;
  }
  .list_item>button {
    margin:0 12px 6px 0;
  }
  .list_content {
    border: 1px solid #bbb;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .content_text {
    text-align: center;
    color: #eee;
    font: 18px bold;
    height: 132px;
    line-height: 132px;
    margin-bottom: 0;
  }
  .btn_group {
    width: 60px;
    position: absolute;
    right: 12px;
    top: 3px;
  }
  .btn_group button {
    margin-bottom: 6px;
  }
  .footer_btn {
    text-align: center;
    padding-bottom: 24px;
  }
  .footer_btn button {
    margin-right: 12px;
  }
</style>
