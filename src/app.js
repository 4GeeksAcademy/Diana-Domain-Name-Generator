let pronoun = ['the','our', 'my'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger','racoon', 'cat'];
let extensionDom = ['.com','.ru', 'io'];


for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let b = 0; b < noun.length; b++) {
      for (let c = 0; c < extensionDom.length; c++) {
      console.log (pronoun[i] + adj[a] + noun[b] + extensionDom[c]);
      }
    }
  }
}


