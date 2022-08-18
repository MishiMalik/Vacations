$(document).ready(function(){
    let selector=$('.all').attr('data-filter');
    $('.portfolio .grid').isotope({
      filter:selector,
  
    });
    return false;
  
  });
  $(document).ready(function(){
  let btn=$('.state__list');
  
    btn.click(function(e){
      $('.state__list button').removeClass("active-port");
      e.target.classList.add("active-port");
  
      let selector=$(e.target).attr('data-filter');
      $('.portfolio .grid').isotope({
        filter:selector
      });
      return false;
    });
    
  });