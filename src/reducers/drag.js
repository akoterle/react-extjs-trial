
/*global Ext*/
const initialState = {
    dragText: 'Drag Me!'
}

const drag = (state = initialState, action) => {
    switch (action.type) {
        case 'DRAG_MOVE':
            const pos = action.info.element.current,
                html = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
            return ({
                dragText: html
            })
            
        case 'DRAG_END':
            return initialState

        default:
            return state
    }
}

export default drag