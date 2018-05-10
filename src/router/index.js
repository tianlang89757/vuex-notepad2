import Vue from 'vue'
import Router from 'vue-router'
import Notepad from '@/components/Notepad'
import Editor from '@/components/Editor'
import NoteFolder from '@/components/NoteFolder'
import Trash from '@/components/Trash'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'notepad',
        component: Notepad
    }, {
        path: '/editor',
        name: 'editor',
        component: Editor
    }, {
        path: '/noteFolder',
        name: 'NoteFolder',
        component: NoteFolder
    }, {
        path: '/trash',
        name: 'Trash',
        component: Trash
    }]
})