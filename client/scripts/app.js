// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    RoomsView.handleClick();
    FormView.handleSubmit();
    MessagesView.handleClick();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    // setTimeout(scheduleNextTweet, 250 + (Math.random() * 1250))

    var scheduleNextMessage = function() {
      // if (streams.home.length < 100) {
      // MessagesView.initialize();
      // FormView.initialize();
      // RoomsView.initialize();
      App.fetch();
      // MessagesView.initialize();
      setTimeout(scheduleNextMessage, 5000);
      //}
    };
    App.stopSpinner();
    scheduleNextMessage();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      MessagesView.$message.remove();
      Messages.data = data;
      Rooms.data = data;
      MessagesView.render();
      RoomsView.render();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
