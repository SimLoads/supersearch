window.onload = bgCh()
function bgCh() {
  var today = new Date();
  var time = today.getHours();
  console.log(time)
  if (18 <= time) {
    document.getElementById("particles-js").style.backgroundColor = "#001b4e";
    document.getElementById("wTag").innerHTML = "Good Evening.";
  }
  else if (time < 7) {
    document.getElementById("particles-js").style.backgroundColor = "black";
    document.getElementById("wTag").innerHTML = "Good Morning.";
  }
  else {
    document.getElementById("particles-js").style.backgroundColor = "lightBlue";
    document.getElementById("wTag").innerHTML = "Good Day.";
  }
}
const buttonRun = async() => {
    let search = document.getElementById('usernmIn').value
    let url = "https://bonkspace.com/FILELIST.txt"
    let response = await fetch (url);
    const txt = await response.text().then(( str ) => {
        return str.split('\n');
    });
let result = txt;
const matches = result.filter(s => s.includes(search.toUpperCase()));
if ( matches.length == 0 || search.length == 0) {
    document.getElementById('timTag').innerHTML = "No match found"
}
else if( matches.length > 0) {
    document.getElementById('timTag').innerHTML = matches[0]
}
}
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble,grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 140,
        "size": 5,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 300,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
});