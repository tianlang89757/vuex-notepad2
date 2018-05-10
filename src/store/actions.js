import * as types from './mutation-types';

//创建新便签
export const newNote = ({ commit }) => {
    commit(types.NEW_NOTE)
}

//编辑便签
export const editNote = ({ commit }, note) => {
    commit(types.EDIT_NOTE, note)
}

//勾选便签
export const toggleNote = ({ commit }, note) => {
    commit(types.TOGGLE_NOTE, note)
}

//取消勾选便签
export const cancelCheck = ({ commit }) => {
    commit(types.CANCEL_CHECK)
}

//全部勾选
export const allCheck = ({ commit }, done) => {
    commit(types.ALL_CHECK, done)
}

//删除便签
export const deleteNote = ({ commit }) => {
    commit(types.DELETE_NOTE)
}

//返回自动保存
export const backSave = ({ commit }, note) => {
    commit(types.BACK_SAVE, note)
}

//勾选废纸篓便签
export const toggleTrashNote = ({ commit }, note) => {
    commit(types.TOGGLE_TRASHNOTE, note)
}

//取消勾选废纸篓便签
export const cancelTrashCheck = ({ commit }) => {
    commit(types.CANCEL_TRASHCHECk)
}

//全选废纸篓便签
export const allTrashCheck = ({ commit }, done) => {
    commit(types.ALL_TRASHCHECK, done)
}

//删除废纸篓便签
export const deleteTrashNote = ({ commit }) => {
    commit(types.DELETE_TRASHNOTE)
}

//恢复便签
export const recoveryNote = ({ commit }) => {
    commit(types.RECOVERY_NOTE)
}