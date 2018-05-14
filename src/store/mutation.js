import Format from '../libs/dateFormat'
import * as types from './mutation-types';

const mutations = {
    [types.NEW_NOTE](state) {
        let newNote = {
            id: +new Date(),
            date: new Date().Format('yyyy-MM-dd hh:mm'),
            content: '',
            done: false
        }
        state.notes.push(newNote)
    },
    [types.EDIT_NOTE](state, note) {
        state.activeNote = note;
    },
    [types.TOGGLE_NOTE](state, note) {
        state.notes.map((item, i) => {
            if (item.id == note.id) {
                item.done = !note.done;
            }
        })
        if (note.done) {
            state.deleteNotes.push(note);
        } else {
            state.deleteNotes.splice(state.deleteNotes.indexOf(note), 1);
        }
    },
    [types.CANCEL_CHECK](state) {
        state.notes.map((item, i) => {
            item.done = false;
        })
        state.deleteNotes = [];
        state.isCheck = false;
    },
    [types.ALL_CHECK](state, done) {
        state.deleteNotes = [];
        state.notes.map((item, i) => {
            item.done = done;
            if (done) {
                state.deleteNotes.push(item);
            } else {
                state.deleteNotes = [];
            }
        })
    },
    [types.DELETE_NOTE](state) {
        state.deleteNotes.map((item, i) => {
            item.done = false;
            state.notes.splice(state.notes.indexOf(item), 1);
            state.trashNotes.push(item)
        })
        state.isCheck = false;
        state.deleteNotes = [];
    },
    [types.BACK_SAVE](state, note) {
        if (note.content != '') return;
        state.notes.splice(state.notes.indexOf(note), 1);
    },
    [types.TOGGLE_TRASHNOTE](state, note) {
        state.trashNotes.map((item, i) => {
            if (item.id == note.id) {
                item.done = !note.done;
            }
        })
        if (note.done) {
            state.deleteTrashNotes.push(note);
        } else {
            state.deleteTrashNotes.splice(state.deleteTrashNotes.indexOf(note), 1);
        }
    },
    [types.CANCEL_TRASHCHECk](state) {
        state.trashNotes.map((item, i) => {
            item.done = false;
        })
        state.deleteTrashNotes = [];
        state.isTrashCheck = false;
    },
    [types.ALL_TRASHCHECK](state, done) {
        state.deleteTrashNotes = [];
        state.trashNotes.map((item, i) => {
            item.done = done;
            if (done) {
                state.deleteTrashNotes.push(item);
            } else {
                state.deleteTrashNotes = [];
            }
        })
    },
    [types.DELETE_TRASHNOTE](state) {
        state.deleteTrashNotes.map((item, i) => {
            state.trashNotes.splice(state.trashNotes.indexOf(item), 1);
        })
        state.deleteTrashNotes = [];
        state.isTrashCheck = false;
    },
    [types.RECOVERY_NOTE](state) {
        state.deleteTrashNotes.map((item, i) => {
            item.done = false;
            state.notes.unshift(item)
            state.trashNotes.splice(state.trashNotes.indexOf(item), 1);
        })
        state.deleteTrashNotes = [];
        state.isTrashCheck = false;
    }
}

export default mutations;