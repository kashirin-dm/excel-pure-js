const CODES = {
  A: 65,
  Z: 90
}
function toCell() {
  return `<div class="cell" contenteditable></div>`
}
function toColumn(col) {
  return `<div class="column">${col}</div>`
}
function createRow(content, rowNum = '') {
  return `
    <div class="row">
      <div class="row-info">${rowNum}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}
function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}
export function createTable(rowsCount = 40) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(cols))
  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}
