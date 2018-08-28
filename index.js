    fetch("http://api.open-notify.zrg/astros.json")
      .then( resp => console.log("Yay"))
      .catch( error => console.error(`Oh no! ${error}`));
      