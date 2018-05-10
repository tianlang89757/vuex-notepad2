<template>
    <div class="noteFolder">
        <div class="header">
            <span class="back-list" @click="backList"><icon name="angle-left"></icon></span>
            <span v-text="title"></span>    
        </div>
        <div class="folder-list">
            <ul class="folder-note">
                <li class="clearfix" @click="openNote">
                    <div class="pull-left">
                        <span class="icon"><icon name="ellipsis-h"></icon></span>
                        <span v-text="noteTaking"></span>
                    </div>
                    <div class="pull-right">
                        {{notes}}
                        <span class="icon"><icon name="angle-right"></icon></span>
                    </div>
                </li>
            </ul>
            <ul class="folder-trash">
                <li class="clearfix" @click="openTrash">
                    <div class="pull-left">
                        <span class="icon"><icon name="trash"></icon></span>
                        <span v-text="trash"></span>
                    </div>
                    <div class="pull-right">
                        {{deleteNote}}
                        <span class="icon"><icon name="angle-right"></icon></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'NoteFolder',
    data(){
        return {
            title: '便签夹',
            noteTaking: '随手记',
            trash: '废纸篓'
        }
    },
    computed:{
        deleteNote(){
            return this.$store.state.trashNotes.length;
        },
        notes(){
            return this.$store.state.notes.length;
        }
    },
    methods:{
        //返回便签列表
        backList(){
            this.$router.push({path:'/'})
        },
        //打开废纸篓中的便签列表
        openTrash(){
            this.$router.push({path:'trash'})
        },
        //打开随手记
        openNote(){
            this.$router.push({path:'/'})
        }
    }
} 
</script>
<style scoped>
.header{
    padding: 0 0.5rem;
    height: 40px;
    line-height: 36px;
    border: 1px solid #eee;
}
.header .back-list{
    vertical-align: sub;
    margin-right: 0.5rem;
    cursor: pointer;
}
.folder-list .icon{
    margin-right: 1rem;
    color: #aaa;
}
.folder-list li span{
    margin: 0.5rem 1rem;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
}

.folder-list ul{
    margin-top: 1rem;
}
.folder-list li{
    padding: 1rem;
    background: #fff;
    cursor: pointer;
}
.clearfix:after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.clearfix{
    zoom:1;
}
.pull-left{
    float: left;
}
.pull-right{
    float: right;
}
</style>

