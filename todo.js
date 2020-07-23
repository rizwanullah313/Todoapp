// JavaScript Document
// Rizwan Ullah

var list = document.getElementById("list");
function addTodo()
{
	var todo_item = document.getElementById("todo-item");
	
	// create li withy text node
	var li = document.createElement('li')
	var liText = document.createTextNode(todo_item.value)
	li.appendChild(liText)
	
	// create delete button
	var delBtn = document.createElement("button")
	var delText = document.createTextNode("DELETE")
	delBtn.setAttribute("class","btn")
	delBtn.setAttribute("onclick","deleteItem(this)")
	delBtn.appendChild(delText)
	
	li.appendChild(delBtn)
	
	//create edit button
	var editBtn = document.createElement("button")
	var editText = document.createTextNode("EDIT")
	editBtn.setAttribute("class","btn")
	editBtn.appendChild(editText)
	editBtn.setAttribute("onclick","editItem(this)")
	
	
	li.appendChild(editBtn)
	list.appendChild(li)
	todo_item.value = ""
}
function deleteItem(e)
{
	e.parentNode.remove()
}
function deleteAll()
{
	list.innerHTML = ""
}
function editItem(e)
{
	var val = prompt("Enter Updated value",e.parentNode.firstChild.nodeValue)
	e.parentNode.firstChild.nodeValue = val
}
