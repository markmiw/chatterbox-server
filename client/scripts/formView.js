// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {
  $form: $('form'),

  initialize: function() {

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //$('#message').on('click', function() {
    $('#submitMessage').click(function() {
      let roomName = $('#dropDown option:selected').text();
      let text = $('#message').val();
      let username = window.location.search.substring(10, window.location.search.length);
      let message = {
        username: username,
        text: text,
        roomname: roomName
      };
      Parse.create(message);
      App.fetch(MessagesView.render);

    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};