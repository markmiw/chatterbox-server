// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    let oldRooms = JSON.parse(JSON.stringify(Rooms.oldRooms)); //deep clone

    var obj = Rooms.filter(Rooms.data);
    Rooms.oldRooms = obj;
    // debugger;
    for (let key in obj) {
      if (!(key in oldRooms)) {
      RoomsView.renderRoom(key);
      }
      //var compiled = RoomsView.renderRoom(obj[key]);
    // RoomsView.$select.append(compiled);
    }
    for (let key in oldRooms) {
      if (!(key in obj)) {
        $('#' + key).remove();
      }
      //var compiled = RoomsView.renderRoom(obj[key]);
    // RoomsView.$select.append(compiled);
    }

  },

  renderRoom: function(roomname) {
    RoomsView.$select.append('<option class="roomItems" id="' + roomname + '"' + '>' + roomname + '</option>');

    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('#addRoom').click(function() {
      let roomName = $('#room').val();
      let text = $('#message').val();
      //let text = 'hello';
      let username = window.location.search.substring(10, window.location.search.length);
      let message = {
        username: username,
        text: text,
        roomname: roomName
      };
      Parse.create(message);
    });
  }

};
