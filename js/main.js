<<<<<<< HEAD
import { parseGedcom } from './gedcomParser.js';
import { buildDescendantsTree } from './treeBuilder.js';
import { renderTree } from './treeRenderer.js';

fetch('./3.ged')
  .then(r => r.text())
  .then(text => {
    const data = parseGedcom(text);
    const rootId = "I36"; // временно
    const treeData = buildDescendantsTree(rootId, data);
    renderTree(treeData);
  });
=======
import { parseGedcom } from './gedcomParser.js';
import { buildDescendantsTree } from './treeBuilder.js';
import { renderTree } from './treeRenderer.js';

fetch('./3.ged')
  .then(r => r.text())
  .then(text => {
    const data = parseGedcom(text);
    const rootId = "I36"; // временно
    const treeData = buildDescendantsTree(rootId, data);
    renderTree(treeData);
  });
>>>>>>> 5bd2c9a43160ac9887d568ed67f000bb761d87c9
