// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $message: $('.chats'),

  initialize: function() {

    // TODO: Perform any work which needs to be done
    // when this view loads.
    //MesssagesView.renderMessage();
   $('.username').on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    let roomName = $('#dropDown option:selected').text();
    $('.chats').remove();
    for (let i = 0; i < Messages.data.length; i++) {
      // Messages.data[i].username;
      // Messages.data[i].text;
      if (Messages.data[i].roomname === roomName) {
        MessagesView.renderMessage(Messages.data[i]);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // invoke the messageView.js
    var compiled = MessageView.render(message);
    MessagesView.$chats.append(compiled);
  },

  handleClick: function(event) {
    // $(".username").on('click','label',function (){
    //   alert('hello');
    //   console.log('hello');
    // });
  //   $(".username").on('click', function(event){
  //     alert('hello');
  //     //(... rest of your JS code)
  // });
    //{
      //tooggle
      //$('.username').toggle('.debug');
      // alert("The paragraph was clicked.");
    //});
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};