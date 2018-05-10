<template>
    <div class="toolBar">
        <div class="toolBtn" v-if="isCheck">
            <span class="icon" @click="deleteNote"><icon name="trash-alt"></icon></span>
            <span class="icon"><icon name="dolly"></icon></span>
        </div>
        <div class="addNote" v-else>
            <div class="float-button mu-float-button" @click="addNote"><icon name="plus"></icon></div>
        </div>
        <mu-dialog :open="dialog" title="删除便签" @close="close">
            您确定删除所选便签吗？
            <mu-flat-button slot="actions" @click="close" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="deleteConfirm" label="确定"/>
        </mu-dialog>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'ToolBar',
    data(){
        return {
            dialog: false
        }
    },
    computed:{
        ...mapGetters([
            'isCheck'
        ])
    },
    methods:{
        //添加便签
        addNote(){
            this.$store.dispatch('newNote');
            this.$router.push({path:'editor'});
        },
        //删除便签
        deleteNote(){
            this.dialog = true;
        },
        //关闭窗口
        close () {
            this.dialog = false;
        },
        //确定删除
        deleteConfirm(){
            this.dialog = false;
            this.$store.dispatch('deleteNote');
        }
    }
}
</script>

<style scoped>
.toolBar{
    position: absolute;
    bottom: 0;
    width: 100%;
}
.addNote{
    padding: 1rem;
    text-align: right;
}
.float-button{
    text-align: center;
    height: 3rem;
    width: 3rem;
    line-height: 3rem;
    font-size: 20px;
}
.toolBtn{
    height: 3rem;
    line-height: 3rem;
    background: #fff;
    border-top:1px solid #ddd;
    text-align: center;
    color: #777
}
.toolBtn .icon{
    display: inline-block;
    margin: 0 2rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
}
</style>

