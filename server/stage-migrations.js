import { Stages } from '../imports/api/collections/Stages';

function generateEmptyMatrix(width, height) {
  const matrix = [];
  for (let r = 0; r < height; r++) {
    matrix[r] = [];
    for (let c = 0; c < width; c++) {
      matrix[r].push(0);
    }
  }

  return matrix;
}

Migrations.add({
  version: 1,
  name: 'Adds stage 1',
  up: function() {
    Stages.insert({
      id: 1,
      width: 15,
      height: 30,
      matrix: generateEmptyMatrix(15, 30)
    });
  },
  down: function() {
    // Why would I want it?
  }
});