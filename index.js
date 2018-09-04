$(() => {
  const EnterKey = 13;
  $("#user_text").keydown((e) => {
    if (e.keyCode !== EnterKey) return;
    create();
  })
  // $('ul').on({
  //   'click': listListener,
  //   'keydown': modifyCheck
  // })
});

function create() {
  let user_text = $("#user_text");
  let get_val = user_text.val();
  let todolist_menu = $("#list");
  // let todolist_item = $.add("li")
  if (get_val.trim().length === 0) {
    alert("請勿輸入空白");
    return;
  }
  // li_item.append(text)
  let todolist_item = $(`
  <li class="task">
    <span class="task_content">${get_val}</span>
    <input type="text" class="task_input" value=${get_val}>
    <button class="modifyItem">修改</button>
    <i class="fas fa-times deleteItem"></i>
  </li>
  `);

  todolist_item
    .on('click', deleteClick)
    .on('click', modifyStatus)
    .on('click', completeCheck)
    .on('keydown',modifyCheck)

  user_text.val("")
  todolist_menu.append(todolist_item);
}

function deleteClick(e) {
  let target_Name = e.target.className;
  if(! target_Name.includes("deleteItem")) return;
  this.remove()
}



function modifyStatus(e) {
  let target_Name = e.target.className;
  if(! target_Name.includes("modifyItem")) return;
  console.log('modifyStatus');
  let task_input = $($(this).find('.task_input').first());
  let task_content = $($(this).find('.task_content').first());
  let task_modify = $($(this).find(".modifyItem").first());
  let task_delete = $($(this).find(".deleteItem").first());
  task_modify.css("background", "gray");
  task_modify.attr("disabled",true);
  task_delete.hide();
  task_input.show();
  task_content.hide();

}

function modifyCheck(e) {
  let target_Name = e.target.className;
  if(! target_Name.includes("task_input")) return;

  const EnterKey = 13;
  let task_input = $(e.target);
  let task_content = $($(this).find('.task_content').first());
  let task_modify = $($(this).find(".modifyItem").first());
  let task_delete = $($(this).find(".deleteItem").first());

  if (e.keyCode !== EnterKey) return;

  $(task_content).text(task_input.val());
  task_input.hide();
  task_content.show();
  task_modify.css("background", "#FFC200");
  task_modify.attr("disabled",false);
  task_delete.show();


}

function completeCheck(e) {
  let target_Name = e.target.className;
  if(! target_Name.includes("task_content")) return;

  let task_content = $(e.target);
  let check = $(this).hasClass('complete');
  // console.log(e,this);
  if (!check) {
    task_content.toggleClass("complete");
  } else {
    task_content.toggleClass("complete");
  }
}
