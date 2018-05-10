<template>
    <div class="edit-panel">
        <div class="edit-tool">
            <span class="back-list" @click="backList"><icon name="angle-left"></icon></span>          
            <span class="date" v-text="activeNote.date"></span>
            <span class="saveNote" v-show="isShow" @click="backList">完成</span>
        </div>
        <textarea v-focus class="edit-area" v-model="activeNote.content" @keyup="editorNote"></textarea>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Editor',
    data(){
        return {
            content:'',
            isShow:false
        }
    },
    created(){
        this.content = this.activeNote.content
    },
    computed:{
        //获取正在操作的便签
        ...mapGetters([
            'activeNote'
        ])
    },
    directives:{
        focus:{
            inserted(el){
                el.focus();
            }
        }
    },
    methods:{
        //返回便签列表
        backList(){
            this.$router.push({path:'/'})
            this.$store.dispatch('backSave',this.activeNote)
        },
        //完成按钮显示&隐藏
        editorNote(){
            if(this.content != this.activeNote.content){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        }
    }
}
</script>

<style scoped>
.edit-panel{
    position: relative;
    height: 100%;
}
.edit-panel .edit-tool{
    padding: 0.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
}
.edit-panel .back-list{
    vertical-align: text-bottom;
    margin-right: .5rem;
    cursor: pointer;
    vertical-align: sub;
}
.edit-panel .saveNote{
    float: right;
    color: #ffca00;
    cursor: pointer;
}
.edit-panel .edit-area{
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    padding: 5px 15px;
    width: 100%;
    border: 0;
    resize: none;
    outline: none;
    background: #fbfbfb;
}
</style>