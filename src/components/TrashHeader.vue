<template>
    <mu-flexbox class="trash-header">
        <mu-flexbox-item order="0" class="flex">
            <mu-raised-button v-if="isTrashCheck" label="取消" @click="cancelCheck" class="raised-button"/>
            <span v-else>
                <span class="back-list" @click="backList"><icon name="angle-left"></icon></span>
                <span v-text="title"></span>
            </span>
        </mu-flexbox-item>
        <mu-flexbox-item order="1" class="flex" style="text-align:center">
            <span v-if="isTrashCheck">{{checkTitle}}</span>
        </mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex" style="text-align:right">
            <mu-raised-button v-if="isTrashCheck" :label="checkBtnTxt" @click="allTrashCheck(!allChecked)" class="raised-button"/>
            <span v-else>
                <span class="icon" v-if="layout=='grid'" @click="changeLayout"><icon name="list"></icon></span>
                <span class="icon" v-else @click="changeLayout"><icon name="th-large"></icon></span>
            </span>
        </mu-flexbox-item>
    </mu-flexbox>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            title: '便签',
            checkBtnTxt: '全选'
        }
    },
    computed:{
        ...mapGetters([
            'layout',
            'isTrashCheck'
        ]),
        checkTitle(){
            return `已选择${this.$store.state.deleteTrashNotes.length}项`
        },
        allChecked(){
            return this.$store.state.trashNotes.every(note => note.done)
        },
    },
    methods:{
        //全部勾选
        allTrashCheck(done){
            this.checkBtnTxt = done ? '取消全选' : '全选';
            this.$store.dispatch('allTrashCheck',done)
        },
        //取消勾选
        cancelCheck(){
            this.$store.dispatch('cancelTrashCheck')
        },
        //返回上一级
        backList(){
            this.$router.push({ path:'/NoteFolder' });
        },
        //切换布局
        changeLayout(){
            if(this.$store.state.layout == 'list'){
                this.$store.state.layout = 'grid'
            }else{
                this.$store.state.layout = 'list'
            }
        }
    }
}
</script>
<style scoped>
.trash-header .flex {
    padding: 0 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
}
.trash-header .flex .icon{
    font-size: 12px;
    color: #aaa;
    vertical-align: middle;
    cursor: pointer;
}
.trash-header .back-list{
    vertical-align: sub;
    margin-right: 0.5rem;
    cursor: pointer;
}
.trash-header .raised-button{
    height: 1.5rem;
    min-width: 0.5rem;
}
</style>


