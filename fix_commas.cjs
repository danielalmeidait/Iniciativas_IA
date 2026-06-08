const fs = require('fs');
let d = fs.readFileSync('src/data.ts', 'utf8');

// Fix missing commas before strategicObjectives block
d = d.replace(/(    category: '(?:agent|automation)')\n(    strategicObjectives)/g, '$1,\n$2');
d = d.replace(/(    monthlySavingsHours: \d+)\n(    strategicObjectives)/g, '$1,\n$2');
d = d.replace(/(    productivityHighlight: '[^']+')\n(    strategicObjectives)/g, '$1,\n$2');

fs.writeFileSync('src/data.ts', d);
console.log('Commas fixed!');
