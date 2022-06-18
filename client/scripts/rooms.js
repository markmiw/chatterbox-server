// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  data: {},

  filter: function(data) {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
      let key = data[i].roomname;
      obj[key] = key;
    }
    return obj;
  },
  oldRooms: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  // 1. create methods that will
  // add rooms
  // addRoom: function() {
    // $addroom : $('#addRoom').click(function() {
    //   var str = $('#room').val();
    //   alert(str);
    // });



  // update the list


  // mark room as selected

};

