(function(window){
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {
    if (names[name].charAt(0).toLowerCase()=='j') {
      window.byeSpeaker.speak(names[name]);
    } else {
      window.helloSpeaker.speak(names[name]);
    }
  };

  window.names = names;

})(window);


