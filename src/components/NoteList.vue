<template>
    <ul class="noteList" :class="layout">
        <li v-for="note in filterNote" :key="note.id" @mousedown="gtouchstart(note)" @mouseup="gtouchend(note)" @touchstart="loopstart(note)" @touchend="clearLoop">
            <h4>{{note.date}}</h4>
            <p>{{note.content}}</p>
            <mu-checkbox label="" v-model="note.done" class="checkbox" v-show="isCheck"/>
        </li>
    </ul>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'NoteList',
    data(){
        return {
            timeOutEvent: 0,
            Loop:null
        }
    },
    computed:{
        ...mapGetters([
            'filterNote',
            'layout',
            'isCheck'
        ])
    },
    methods:{
        //编辑&选中
        editNote(note){
            if(this.isCheck){
                this.$store.dispatch('toggleNote',note);
            }else{
                this.$store.dispatch('editNote',note);
                this.$router.push({path:'/editor'})
            }
            
        },
        //鼠标按下，模拟长按事件
        gtouchstart(note){
            var _this = this;
            this.timeOutEvent = setTimeout(function(){
                _this.longPress(note)
            },500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
            return false;
        },
        //鼠标放开，模拟长按事件
        gtouchend(note){
            clearTimeout(this.timeOutEvent);//清除定时器
            if(this.timeOutEvent!=0){
                //这里写要执行的内容（尤如onclick事件）
                this.editNote(note);
            }
            return false;
        },
        longPress(note){
            this.timeOutEvent = 0;
            this.$store.state.isCheck = true;
            this.$store.dispatch('toggleNote',note);
        },
        //手按住开始，模拟长按事件
        loopstart(note){
            var _this = this;
            clearInterval(this.Loop);
　　　　　　 this.Loop = setTimeout(function(){
    　　　　     _this.$store.state.isCheck = true;
                _this.$store.dispatch('toggleNote',note);
　　　　　　},500);
        },
        //手放开结束，模拟长按事件
        clearLoop(){
            clearTimeout(this.Loop);
        }
    }
}
</script>

<style scoped>
.noteList{
    padding: 1rem 0;
}
.noteList li{
    position: relative;
    background: #fff;
    border: 1px solid #eee;
    cursor: pointer;
    overflow: hidden;
}
.noteList li p{
    margin-bottom: 0;
    height: 50px;
}
.noteList.list li{
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
}
.noteList.list li .checkbox{
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;
}
.noteList.grid li{
    width: 50%;
    padding: 1rem;
    display: inline-block;
}
.noteList.grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem;
}
.noteList.grid li{
    width: 48.7%;
    margin-bottom: 0.5rem;
    display: inline-block;
}
.noteList.grid li .checkbox{
    position: absolute;
    right: 0.5rem;
    top: 0.8rem;
}
.noteList li h4{
    margin: 0;
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid #eee;
    font-weight: normal;
    color: #ffca00;
}
.noteList.grid li h4{
    border: none;
    color: #aeaeae;
    padding: 0;
}
</style>

