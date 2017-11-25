export function getSelection(el) {
    return {
        type: 'GET_CONTENT',
        payload: {
            content_id: el
        }
    }
}