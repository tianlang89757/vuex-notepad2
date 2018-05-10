<template>
    <div class="toolBar">
        <div class="toolBtn" v-if="isTrashCheck">
            <span class="icon" @click="recoveryNote"><icon name="dolly"></icon></span>
            <span class="icon" @click="deleteNote"><icon name="trash-alt"></icon></span>
        </div>
        <mu-dialog :open="dialog" title="删除便签" @close="close">
            您确定删除所选便签吗？
            <mu-flat-button slot="actions" @click="close" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="deleteConfirm" label="确定"/>
        </mu-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            dialog: false
        }
    },
    computed:{
        ...mapGetters([
            'isTrashCheck'
        ])
    },
    methods:{
        //删除废纸篓便签
        deleteNote(){
            this.dialog = true;
        },
        //确定永久删除
        deleteConfirm(){
            this.dialog = false;
            this.$store.dispatch('deleteTrashNote')
        },
        //取消删除
        close(){
            this.dialog = false;
        },
        //恢复便签
        recoveryNote(){
            this.$store.dispatch('recoveryNote')
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
    line-height: 56px;
    font-size: 22px;
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