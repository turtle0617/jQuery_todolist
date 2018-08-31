$(()=>{
  $("#user_text").keydown((e)=>{
    if(e.keyCode !== 13) return;
    submit();
  })
});

function submit(){
  let text = $("#user_text").val();
  let todolist = $("#list");
  console.log(this);
  // let li_item = $.add("li")
  if(text.trim().length === 0) {
    alert("請勿輸入空白");
    return;
  }
  // li_item.append(text)
  let li_item = `
  <li>
  <span>${text}
  <input type="text" class="modify_text" value=${text}>
  </span>
  <button class="html_modify_btn">修改</button>
  <span class="html_delete_btn"><i class="fas fa-times"></i></span>
  </li>
  `;
  todolist.append(li_item)
  $('.html_delete_btn').click(delte);
  $('.html_modify_btn').click(modify);
  $('.modify_text').keydown(modifyCheck);
}


function delte() {
  $(this).parent().remove()
}

function modify() {
  console.log($(this).parent());
  // $(this).parent().hide();
}
function modifyCheck() {
  if(e.keyCode !== 13) return;
  console.log('hi')
}
