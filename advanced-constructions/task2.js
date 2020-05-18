const wordCount = text => {
    const textArr = text.split(' ');
  
    return textArr.map(word => {
      const arr = word.split('');
 
      const sum = arr.reduce((acc, curr) => {
        return acc + curr.charCodeAt(0);
      }, 0);
      
      return {
        word: word,
        sum: sum,
      }
    });
};