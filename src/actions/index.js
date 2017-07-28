export const dragMove = (source, info) => ({
  type: 'DRAG_MOVE',
  source: source,
  info: info
})

export const dragEnd = (source) => ({
  type: 'DRAG_END',
  source: source
})