let btn = $(".btn");
let add_item = $(".add_item")
let input=$(".inputBox")

btn.on('click',remove_item);
add_item.on("click",add);

function new_item(){
  let text = input.val()
  return `<li> ${text} <button class="btn"> &#10004 </button></li>`
}
function remove_item(e){
  list = $('ul')[0];
  removeMe = $(this).parents('li')[0];
  list.removeChild(removeMe);
}

function add(e){
  e.preventDefault();
  new_item_el = $(new_item()).appendTo($(".list"));
  new_item_el.children('.btn').on("click",remove_item);
}
