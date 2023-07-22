let appForm = document.querySelector('#app-form')
let app = document.querySelector('#todo-app')
let list = document.createElement('ul')
app.appendChild(list)

appForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // check value of the input
  let newItemText = document.querySelector('#new-item').value
  // if theres nothing dont let them add give an alert
  if (newItemText.length === 0) {
    alert('please enter a value')
    return
  }

  // Create a new 'list item' (li) to house the Value and Buttons 
  let newItem = document.createElement('li')
  newItem.classList.add('list-item')

  // Create an input for the new value
  let newItemContent = document.createElement('input')
  newItemContent.setAttribute('readonly', 'readonly')
  newItemContent.value = newItemText
  // Option 2 - Make element editable 
  // let newItemContent = document.createElement('div')
  // newItemContent.setAttribute('contenteditable', 'false')
  // newItemContent.innerText = newItemText

  let itemModifiers = createItemModifiers(newItemContent, list, newItem)

  // Add Value and Buttons to list item
  newItem.appendChild(newItemContent)
  newItem.appendChild(itemModifiers)
  // Append list item to list
  list.appendChild(newItem)
})

function createItemModifiers(newItemContent, list, newItem) {
  // container for Edit and Delete buttons 
  let itemModifiers = document.createElement('div')
  itemModifiers.classList.add('list-modifiers')

  // create Edit button / assign attributes & value
  let editButton = document.createElement('button')
  editButton.setAttribute('type', 'button')
  editButton.id = 'edit-item'
  editButton.innerText = 'Edit'

  // create Delete button / assign attributes & value
  let deleteButton = document.createElement('button')
  deleteButton.setAttribute('type', 'button')
  deleteButton.id = 'delete-item'
  deleteButton.innerText = 'Delete'

  // Add both buttons to container
  itemModifiers.appendChild(editButton)
  itemModifiers.appendChild(deleteButton)

  // EVENTS
  // Tell JS to watch out for clicks on our Edit button
  editButton.addEventListener('click', () => {
    if (editButton.innerText == 'Edit') {
      newItemContent.removeAttribute('readonly')
      newItemContent.focus()
      // newItemContent.setAttribute('contenteditable', 'true') // Option 2
      editButton.innerText = 'Save'
    }
    // The user clicked 'Save' and so we should
    // set the input to READ ONLY
    // toggle the button to say 'Edit'
    else {
      newItemContent.setAttribute('readonly', 'readonly')
      // newItemContent.setAttribute('contenteditable', 'false') // Option 2
      editButton.innerText = 'Edit'
    }
  })

  // Tell JS to watch out for clicks on our Delete button
  deleteButton.addEventListener('click', () => {
    list.removeChild(newItem)
  })

  return itemModifiers
}