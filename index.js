$(()=>{
  $("#user_text").keydown((e)=>{
    if(e.keyCode !== 13) return;
    submit();
  })
});

function submit(){
  let text = $("#user_text").val();
  let todolist = $("#list");
  if(text.trim().length === 0) {
    alert("請勿輸入空白");
    return;
  }
  let li_item = `<li>${text}</li>`;
  todolist.append(li_item)
}
