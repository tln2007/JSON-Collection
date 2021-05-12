let contentGridElement = document.getElementById('characterGrid');

let jsonDatabase = [
  {
    "name" : "Aang",
    "color" : "rgb(67,118,186)",
    "borderColor" : "rgb(206,45,0)",
    "ethnicity" : "Air Nomad",
    "age" : "112 (12)",
    "skills" : ["Airbending", "Waterbending", "Earthbending", "Firebending", "Energybending"],
    "image" : "aang.jpg"
  },
  {
    "name" : "Katara",
    "color" : "rgb(108,126,186)",
    "borderColor" : "rgb(178,184,183)",
    "ethnicity" : "Water Tribe",
    "age" : "14",
    "skills" : ["Waterbending", "Bloodbending"],
    "image" : "katara.png"
  },
  {
    "name" : "Sokka",
    "color" : "rgb(73,101,133)",
    "borderColor" : "rgb(140,204,229)",
    "ethnicity" : "Water Tribe",
    "age" : "15",
    "skills" : ["Boomerang", "Swordsmanship"],
    "image" : "sokka.jpg"
  },
  {
    "name" : "Toph",
    "color" : "rgb(212,225,117)",
    "borderColor" : "rgb(93,195,207)",
    "ethnicity" : "Earth Kingdom",
    "age" : "12",
    "skills" : ["Earthbending", "Metalbending"],
    "image" : "toph.png"
  },
  {
    "name" : "Zuko",
    "color" : "rgb(135,58,0)",
    "borderColor" : "rgb(40,13,0)",
    "ethnicity" : "Fire Nation",
    "age" : "16",
    "skills" : ["Firebending"],
    "image" : "zuko.jpg"
  },
  {
    "name" : "Azula",
    "color" : "rgb(110,45,6)",
    "borderColor" : "rgb(54,3,0)",
    "ethnicity" : "Fire Nation",
    "age" : "14",
    "skills" : ["Firebending", "Lightning Generation"],
    "image" : "azula.jpg"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createGridElement(jsonDatabase[i]);
}

function createGridElement(incomingJSON){
  let newContentElement = document.createElement("div");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.style.borderColor = incomingJSON['borderColor'];
  newContentElement.classList.add('gridContentItem');

  let charName = document.createElement("h2");
  charName.innerText = incomingJSON['name'];
  newContentElement.appendChild(charName);

  let charImg = document.createElement("img");
  charImg.classList.add("characterImage");
  charImg.src = incomingJSON['image'];
  charImg.style.borderColor = incomingJSON['borderColor'];
  newContentElement.appendChild(charImg);

  let charHome = document.createElement("p");
  charHome.innerText = incomingJSON['ethnicity'];
  newContentElement.appendChild(charHome);

  let charAge = document.createElement("p");
  charAge.innerText = incomingJSON['age'];
  newContentElement.appendChild(charAge);

  let charSkills = document.createElement("ul");
  newContentElement.appendChild(charSkills);

  for(var i = 0; i < incomingJSON['skills'].length; i++){
    var newSkill = document.createElement("li");
    newSkill.innerText = incomingJSON['skills'][i];
    charSkills.appendChild(newSkill);
  }

  contentGridElement.appendChild(newContentElement);
