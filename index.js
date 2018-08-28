    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(json => document.write(`Holy cow! There are ${json["number"]} humans in space.`));