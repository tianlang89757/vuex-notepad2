// 搜索过滤便签
export const filterNote = (state) => {
    if (state.search != '' && state.notes.length > 0) {
        return state.notes.filter(note => note.content.indexOf(state.search) > -1) || {}
    } else {
        return state.notes || {}
    }
};
// 当前编辑的便签
export const activeNote = (state) => {
    return state.activeNote
};
// 便签列表布局
export const layout = state => state.layout;
// 便签选中状态
export const isCheck = state => state.isCheck;
// 废纸篓便签选中状态
export const isTrashCheck = state => state.isTrashCheck;