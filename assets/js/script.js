function filter(){
   var filterValue, input, content, article, i;

   input = document.getElementById('searchInput').value;
   filterValue = input.toUpperCase();
   content = document.getElementById('content');
   article = content.getElementsByTagName('article');

   for(i=0;i<article.length;i++){
      var title = article[i].querySelector('.article-title');
      if(title.innerHTML.toUpperCase().indexOf(filterValue) > -1){
         article[i].style.display = "";
      }else{
         article[i].style.display = "none";
      }
   }
}
