<template>
  <div class="row">
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 class="sub-header">英雄列表</h2>
      <!-- <a class="btn btn-success" href="add.html">添加</a> -->
      <router-link :to="{name:'hero/add'}" class="btn btn-success">
        <a href>添加</a>
      </router-link>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list" :key="item.id">
              <td>{{index + 1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.gender}}</td>
              <td>
                <!-- <a href="">编辑</a>   点击编辑按钮跳转  把当前点击的id传过去 -->   
                <router-link :to="{name:'hero/equip',params:{id:item.id}}">编辑</router-link>&nbsp;&nbsp;
                <!-- 传入形参   -->
                <a href @click.prevent="del(item.id)">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  // 在methods里写入   在mounted中调用
  methods: {
    getaxios() {
      // 发送请求
      this.axios
        .get("http://localhost:3000/heroes")
        .then(response => {
          // 获取全部渲染到页面上
          console.log(response);
          let { status, data } = response;
          if (status == 200) {
            this.list = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    del(id) {
      console.log(id);
      if (!confirm("你确定删除吗")) {
        return;
      }
      this.axios
        .delete("http://localhost:3000/heroes/" + id)
        .then(response => {
          // 成功的话重新发送获取请求
          this.getaxios();
        })
        .catch(err => {
          // 失败打印出来
          console.log(err);
        });
    },
    // 编辑按钮
    equip(id) {}
  },

  mounted() {
    // 调用获取的数据
    this.getaxios();
  }
};
</script>

<style>
</style>
