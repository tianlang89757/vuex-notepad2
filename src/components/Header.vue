<template>
    <header class="header" :class="{visible:isVisible}">
        <mu-flexbox class="headerTool" :class="{visible:isVisible}">
            <mu-flexbox-item order="0" class="flex">
                <mu-raised-button v-if="isCheck" label="取消" @click="cancelCheck" class="raised-button"/>
                <span v-else class="icon" @click="openFolder"><icon name="folder-open"></icon></span>
            </mu-flexbox-item>
            <mu-flexbox-item order="1" class="flex" style="text-align:center">
                <span v-if="isCheck">{{checkTitle}}</span>
                <span v-else>{{title}}</span>
            </mu-flexbox-item>
            <mu-flexbox-item order="2" class="flex" style="text-align:right">
                <mu-raised-button v-if="isCheck" :label="checkBtnTxt" @click="allCheck(!allChecked)" class="raised-button"/>
                <span v-else>
                    <span class="icon" v-if="layout=='grid'" @click="changeLayout"><icon name="list"></icon></span>
                    <span class="icon" v-else @click="changeLayout"><icon name="th-large"></icon></span>
                </span>
            </mu-flexbox-item>
        </mu-flexbox>
        <div class="search">
            <div class="icon"><icon name="search"></icon></div>
            <input type="text" v-model="searchTxt" @keyup="search" @focus="searchFocus" @blur="searchBlur"/>
        </div>
    </header>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'Header',
    data(){
        return {
            title:'便签',
            checkBtnTxt:'全选',
            searchTxt:'',
            isVisible:false
        }
    },
    computed:{
        ...mapGetters([
            'layout',
            'isCheck'
        ]),
        //获取便签勾选状态
        allChecked(){
            return this.$store.state.notes.every(note => note.done)
        },
        //便签选中数量提示
        checkTitle(){
            return `已选择${this.$store.state.deleteNotes.length}项`
        }
    },
    methods:{
        //显示搜索框
        searchFocus(){
            this.isVisible = true;
        },
        //隐藏搜索框
        searchBlur(){
            this.isVisible = false;
        },
        //搜索
        search(){
            this.$store.state.search = this.searchTxt
        },
        //切换布局
        changeLayout(){
            if(this.$store.state.layout == 'list'){
                this.$store.state.layout = 'grid'
            }else{
                this.$store.state.layout = 'list'
            }
            
        },
        //取消勾选
        cancelCheck(){
            this.$store.dispatch('cancelCheck')
        },
        //全选切换
        allCheck(done){
            this.checkBtnTxt = done?'取消全选':'全选'
            this.$store.dispatch('allCheck',done)
        },
        //打开便签夹
        openFolder(){
            this.$router.push({path:'noteFolder'})
        }
    }
}
</script>

<style scoped>
.header .flex {
    padding: 0 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
}
.header .flex .icon{
    font-size: 12px;
    color: #aaa;
    vertical-align: middle;
    cursor: pointer;
}
.header.visible{
    padding-top: 0.5rem;
}
.header .visible{
    display: none;
}
.raised-button{
    height: 1.5rem;
    min-width: 0.5rem;
}
.search{
    position: relative;
    margin: 0 0.5rem;
    border: 1px solid #eee;
    background: #fff;
}
.search .icon{
    position: absolute;
    top: 0.3rem;
    left:0.2rem;
    color: #ccc;
    vertical-align: middle;
    cursor: pointer;
}
.search input{
    height: 1.8rem;
    border: 0;
    width: 100%;
    padding-left: 1.5rem;
    outline: none
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>




