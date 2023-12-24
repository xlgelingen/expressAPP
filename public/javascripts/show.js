const indexPage = {
    init:function(){
      this.bind();
    },
    bind:function(){
      $('#new-submit').on('click',this.newUser);
      $('.update-user').on('click',this.update);
      $('.delete-user').on('click',this.delete);
    },
    delete: function(){
      let id = $(this).data('id');
      let csrf = $('#csrf').val();
      $.ajax({
          url: '/api/user',
          data: { id, csrf },
          type: 'DELETE',
          success: function(data) {
            if(data.code === 200){
              alert('删除成功！')
              location.reload()
            }else{
              console.log(data)
            }
          },
          error: function(err) {
            console.log(err)
          }
      })
    },
    update:function(){
      let id = $(this).data('id');
      let name = $(this).parent().find('.user-name').val();
      let csrf = $('#csrf').val();
      if(!name || !id){
        alert('缺少参数')
        return
      }

      $.ajax({
          url: '/api/user',
          data: { name, id, csrf },
          type: 'PUT',
          success: function(data) {
            if(data.code === 200){
              alert('修改成功！')
              location.reload()
            }else{
              console.log(data)
            }
          },
          error: function(err) {
            console.log(err)
          }
      })
    },
    newUser:function(){
      let name = $('#new-name').val();
      let email = $('#new-email').val();
      let password = $('#new-password').val();
      let csrf = $('#csrf').val();
      if(!name || !email || !password){
        alert('缺少参数')
        return
      }

      $.ajax({
          url: '/api/user',
          data: { name, email, password, csrf },
          type: 'POST',
          success: function(data) {
            if(data.code === 200){
              alert('新增成功！')
              location.reload()
            }else{
              console.log(data)
            }
          },
          error: function(err) {
            console.log(err)
          }
      })
    }
  }
  $(function(){
    indexPage.init();
  })