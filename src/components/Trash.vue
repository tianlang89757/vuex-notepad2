<template>
    <div class="trash-notepad">
        <TrashHeader />
        <TrashNoteList />
        <TrashToolBar />
    </div>
</template>
<script>
import TrashHeader from './TrashHeader'
import TrashNoteList from './TrashNoteList'
import TrashToolBar from './TrashToolBar'
export default {
    data(){
        return {

        }
    },
    components:{
        TrashHeader,
        TrashNoteList,
        TrashToolBar
    }
}
</script>
<style scoped>

</style>

