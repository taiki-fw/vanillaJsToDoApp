document.getElementById('js-submit').addEventListener('click', function() {
  var listWrapper = document.getElementById('todo-list')
  var list = document.createElement('li')
  var inputText = document.getElementById('js-input').value

  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  var listName = document.createElement('p')
  listName.className ='list-name'
  listName.textContent = inputText

  var edit = document.createElement('button')
  edit.textContent = "編集"
  edit.addEventListener('click', function() {
    this.previousSibling.innerHTML = `<input value=${this.previousSibling.textContent}>`
    // 要素を変更してイベントを分けないといけない
  })

  var destroy = document.createElement('button')
  destroy.textContent = "削除"
  destroy.addEventListener('click', function() {
    var parentElement = this.parentElement
    listWrapper.removeChild(parentElement)
  })

  list.appendChild(checkbox)
  list.appendChild(listName)
  list.appendChild(edit)
  list.appendChild(destroy)

  document.getElementById('js-input').value = ""

  listWrapper.appendChild(list)
})