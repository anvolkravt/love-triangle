/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  for (i=0, sum=0; i<preferences.length; i++)  {
    if (i+1 == preferences[i]) continue;
    else if (i+1 == preferences [preferences [preferences[i] - 1] - 1]) sum++;
  }
  
  return sum/3;
};
