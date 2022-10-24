export const cost = (books) => {
  const bookList = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  const discount = [1, 0.95, 0.9, 0.8, 0.75];
  let combination = [0, 0, 0, 0, 0];
  let combination1 = [0, 0, 0, 0, 0];
  const arr1 = [ 2, 2, 2, 1, 1 ];
  let sum = 0;
  
  if (!books.length) return 0
  books.map(book => bookList[book] += 1)
  let filteredList = Object.values(bookList).filter(book => book > 0);
   function filtered(sortList){
      if(sortList.every(item => item < 2)){
      combination[sortList.length -1] += 1 
      return;
      }else{
      combination[sortList.length -1] += 1
      sortList = sortList.filter(item => item > 1)
      sortList = sortList.map(item => item = item - 1)  
      return  sortList == arr1.toString() ? filtered1(sortList) : filtered(sortList)
      }
    }
   function filtered1(filteredList){
    let sortList = filteredList.sort(function (a, b) {  return b - a;  }); 
     if(sortList.every(item => item > 1)){
       sum += 5120
       sortList = sortList.map((item, idx) => item = item - arr1[idx])
       console.log(sortList, 'includes') 
       return filtered1(sortList)
     }else{
       sum += 5120;
       return
     }
  }

  if([...new Set(books)] == books.toString()){
     combination[books.length -1] += 1
  }else{
    let sortList = filteredList.sort(function (a, b) {  return b - a;  });
    if(sortList == arr1.toString() || sortList == arr1.map(item => item = item * 2).toString()){   
      filtered1(sortList);
    }else{
      filtered(sortList);// from max length count      
    }
  }

  function final(){
    combination.map((item, idx) => {
      sum += 800 * (idx + 1) * item * discount[idx];
    })
  }
  final()
  return sum;
};