function studentsMarks(){

    const studentsMarks = prompt('Enter you marks here')

    if(studentsMarks > 79) {
      //use .innerHTML to print what you want to be printed 
       document.getElementById('results').innerHTML = "A";
        
    }else if(studentsMarks >= 60 && studentsMarks <= 79 ) {
      document.getElementById('results').innerHTML = "B";
          
    }else if(studentsMarks >= 49 && studentsMarks <= 59 ) {
      document.getElementById('results').innerHTML = "C";
  
    
    }else if(studentsMarks >= 40 && studentsMarks <= 49 ) {
      document.getElementById('results').innerHTML = "D";
          
    }else{
      document.getElementById('results').innerHTML = "E";
}
}

