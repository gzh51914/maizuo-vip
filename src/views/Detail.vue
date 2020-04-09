<template>
    <div class="detail">
        详情页面.... {{$route.params.id}}
    </div>
</template>

<script>
export default {
  created () {
    // 需要获取nowplaying这边传递来的每个电影的id  /detail/:id
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>
