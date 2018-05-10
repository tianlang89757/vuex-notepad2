export const filterNote = (state) => {
    if (state.search != '' && state.notes.length > 0) {
        return state.notes.filter(note => note.content.indexOf(state.search) > -1) || {}
    } else {
        return state.notes || {}
    }
}

export const activeNote = (state) => {
    return state.activeNote
}

export const layout = state => state.layout

export const isCheck = state => state.isCheck

export const isTrashCheck = state => state.isTrashCheck