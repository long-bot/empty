<template>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="forData.name" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <input type="text" class="form-control" v-model="forData.gender" id="exampleInputPassword1" placeholder="性别">
          </div>
          <!-- 因为点击button按钮要跳转  所以要加prevent -->
          <button class="btn btn-success" @click.prevent="add">添加</button>
        </form>
      </div>
</template>

<script>
export default {
    data(){
        return {
            forData:{
                name:'',
                gender:''
                }
        }
    },
    methods:{
        add(){
            // 点击add发送axios请求   成功后跳转到hero页面
            this.axios.post('http://localhost:3000/heroes',this.forData).then((response)=>{
                // 如果成功的话就跳转herolist
                this.$router.push('/hero')
            }).catch((err)=>{
                // 失败的话就打印出来
                console.log('添加失败',err)
            })
        }
    }
}
</script>

<style>

</style>
