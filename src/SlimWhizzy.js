function SlimWhizzy(config) {
  const {btnClass, editorSelector} = config;

  var editor = document.querySelector(editorSelector || '.editor');

  document.querySelectorAll(btnClass || '.toolbar-button')
    .forEach(function (item) {
      item.addEventListener('click', function () {
        processCommand(this.getAttribute("data-command"));
      });
    });

  function processCommand(action) {
    var blockCommands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
    var contentCommands = ['createlink', 'insertimage'];

    var execParamOne = action;
    var execParamTwo = false;
    var execParamThree = undefined;

    if (blockCommands.indexOf(action) !== -1) {
      execParamOne = "formatBlock";
      execParamThree = action;
    }

    if (contentCommands.indexOf(action) !== -1) {
      execParamThree = prompt("Enter URL: ", "http://");
    }

    document.execCommand(execParamOne, execParamTwo, execParamThree);
  }
}