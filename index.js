fetch("http://api.open-notify.zrg/astros.json")
      .then( resp => {
        console.log("== then ==");
        console.log("Yay")
      })
      .catch( error => {
        console.log("== catch ==");
        console.error(`Oh no! ${error}`)
      });
      