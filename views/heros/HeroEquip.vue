<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="forData.name"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          type="text"
          class="form-control"
          v-model="forData.gender"
          id="exampleInputPassword1"
          placeholder="性别"
        />
      </div>
      <!-- 因为点击button按钮要跳转  所以要加prevent -->
      <button class="btn btn-success" @click.prevent="update">修改</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      forData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    props: ['id'],
    GetEquip() {
      // console.log(this.id)
      // 发送axios请求  get请求  id值为this.id
      this.axios.get("http://localhost:3000/heroes/" + this.id).then(response => {
        // 成功的话就拿到内容显示到页面上
        console.log(response)
        let { status, data } = response;
        if (status == 200) {
          this.forData = data
        }
      });
      // 失败打印
    },
    update(){
      // 点击修改的话   需要获取表单的内容  然后发送post请求
      this.axios.put(`/${this.id}`,this.forData)
      .then(response=>{
        console.log(response);
        let {status,data} = response
        if(status == 200){
          alert('修改成功');
          this.$router.push({name:'hero'})
        }
      })
    }
  },
  mounted() {
    console.log(this.forData)
    console.log(this.id)
    this.GetEquip();
  }
};
</script>

<style>
</style>
