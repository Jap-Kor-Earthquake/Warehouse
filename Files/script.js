(function ($) {
  
  $(function () {
    
    
      
    /*
     * 연속파형자료 관측소 목록 toggle
     */
      var wrapper = $('.continuouswave').find('.toggle_wrapper'),
          wrapperDefaultHeight = wrapper.data('default_height'),
          lessBtn = wrapper.next('.list_toggle').find('a');
          
      wrapper.height(wrapperDefaultHeight);
      
      $('#allSearchBtn').on('click', function () {
    	  wrapper.height('auto');
    	  lessBtn.removeClass('hidden');
      });
      
      lessBtn.on('click', function () {
    	 wrapper.height(wrapperDefaultHeight);
    	 lessBtn.addClass('hidden');
      });
      
      
      
      /*
       * 관측소 썸네일 mouseover
       */
      
        $('div.image_container').find('ul').on('mouseenter click', 'a', function (e) {
          e.preventDefault();
          var currentImage = $('div.image_container').find('.current_image'),
              imgSrc = $(this).find('img').attr('src');
          
          if ( ! imgSrc.match('no_image.png')) {
            currentImage.attr('src', imgSrc);
          }
        });
       
        $('div.image_container2').find('ul').on('mouseenter click', 'a', function (e) {
            e.preventDefault();
            var currentImage = $('div.image_container2').find('.current_image'),
                imgSrc = $(this).find('img').attr('src');
            
            if ( ! imgSrc.match('no_image.png')) {
              currentImage.attr('src', imgSrc);
            }
          });
        
        /*
         * 관측소 썸네일 click  
         */
      
       /* 
        	$('div.image_container').find('ul').on('click', 'a', function (e) {
            e.preventDefault();
            
            var currentImage = $('div.image_container').find('.current_image');
            var imgSrc = $(this).find('img').attr('src');
            
            if ( ! imgSrc.match('no_image.png')) {
              currentImage.attr('src', imgSrc);
            }
          });
    */
      
    /*
     * 사이트맵 메뉴 높이 맞춤
     */
      var mainMenuLis = $('div.sitemap').find('li.main_menu'),
          liHeight = 0;
          
      mainMenuLis.each(function (i) {
        var li = $(this);
        
        if (i % 4 == 0 && i != 0) {
          liHeight = li.height();
        }
        
        if (liHeight < li.height()) {
          liHeight = li.height();
          mainMenuLis.eq(i - 1).height(liHeight);
        }
        
        li.height(liHeight);
        
        if (i % 4 == 3) {
          li.css('margin-right', 0);
        }
        
      });
        
  });
  
})(jQuery);
