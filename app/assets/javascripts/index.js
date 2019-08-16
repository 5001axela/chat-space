$(function() {
  var user_list = $(".chat-group-form__search.clearfix");
  function appendUser(user) {
    var html =  `<div class="user-search-result">
                  <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
                  </div>
                </div>`
    user_list.append(html);
  }

  var addition_group = $(".chat-group-user__name__list");
  function addtionUser(user_id,user_name) {
    var addtion_name = `<div class='chat-group-user'>
                          <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                          <p class='chat-group-user__name'>${user_name}</p>
                          <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                        </div>`
    addition_group.append(addtion_name);
  }

  $(".chat-group-form__search.clearfix").on("keyup", function() {
    var search_name = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: search_name},
      dataType: 'json'
    })
    .done(function(users){
      $(".user-search-result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
        appendUser(user);
        });
      } 
    })
    .fail(function(users){
      alert('該当する名前はありません');
    })
  });
  $(document).on('click', ".user-search-add", function(){
    var user_id = $(this).data('user-id');
    var user_name = $(this).data('user-name');
    $(".user-search-result").empty();
    addtionUser(user_id,user_name);
  });
  $(document).on('click', ".user-search-remove", function(){
    $(this).parent().remove();
  });
});