let arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(start, end);
  if (item === value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};


console.log(binarySearch(arr, 8));

/* 0 10
   0 4
   3 4
   3 */

// console.log(binarySearch(arr, 16));

/* 0 10
   6 10
   6 7
   7 7
  -1 */

  function deweySearching(dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? dewey.length : end;
  
    if (start > end) {
      return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = dewey[index];
  
    for (let i = 0; i < dewey.length; i++) {   
      if (dewey[i] === title) {
        return 'found book'
      } 
    }
    if (item < dewey) {
      return deweySearching(dewey, title, index + 1, end);
    }
    else if (item > dewey) {
      return deweySearching(dewey, title, start, index - 1);
    }
  }

  //4.
// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35


//            35
//        /      \
//       25       89
//     /    \     / \   
//    15    27   79  91 
//   /  \            /
// 14    19         90


//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11             

      //       8
      //   6      10
      // 5   7   9  11

      function maxProfit(arr){
        let max = 0;
        for(let i = 0; i< arr.length; i++){
          for(let j = i+1; j< arr.length; j++){
            if(arr[j] - arr[i] > max){
              max = arr[j] - arr[i];
            }
          }
        }
        return max;
      }
      
      console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));
      

      function commandStructure(){
        const bst = new BinarySearchTree(5, 'Captain Picard');
      
        bst.insert(3, 'Commander Riker');
        bst.insert(6, 'Data');
        bst.insert(2, 'Worf');
        bst.insert(4, 'Laforge');
        bst.insert(1, 'security-officer');
        bst.insert(8, 'Crusher');
        bst.insert(7, 'Selar');
      
        return bst.bfs();
      }
      
      // console.log(commandStructure());
      