<template>
    <div class="notepad">
        <Header />
        <NoteList />
        <ToolBar />
    </div>
</template>

<script>
import Header from './Header'
import NoteList from './NoteList'
import ToolBar from './ToolBar'
export default {
    name: 'Notepad',
    data () {
        return {
        }
    },
    components:{
        Header,
        NoteList,
        ToolBar,
    }
}
</script>

<style scoped>
.notepad{
    position: relative;
    height: 100%;
}
</style>
