jQuery(document).ready(function(){const toggleSearchFunction=element=>{let searchBtn=element,searchArea=searchBtn.nextElementSibling,searchField=searchArea.getElementsByTagName('input')[0],goToBtn=searchArea.getElementsByTagName('button')[0],goToField=searchBtn.previousElementSibling,searchCont=element.parentElement
if(searchBtn.classList.contains('is-toggled')){searchBtn.focus()
searchArea.style.height='0'
searchArea.style.opacity='0'
searchBtn.classList.remove('is-toggled')
goToBtn.tabIndex='-1'
searchField.tabIndex='-1'
goToField.tabIndex='-1'
searchBtn.style.transform='scale(1)'}else{searchField.focus()
searchArea.style.height='60px'
searchArea.style.opacity='1'
searchBtn.classList.add('is-toggled')
goToBtn.tabIndex='0'
searchField.tabIndex='0'
goToField.tabIndex='0'
searchBtn.style.transform='scale(1.2)'}
goToBtn.addEventListener('focus',()=>{searchBtn.focus()})
goToField.addEventListener('focus',()=>{searchField.focus()})}
if(document.querySelector('.search-btn-main')!==null){document.querySelector('.search-btn-main').addEventListener('click',function(){toggleSearchFunction(this)})}
if(document.querySelector('.search-btn-sticky')!==null){document.querySelector('.search-btn-sticky').addEventListener('click',function(){toggleSearchFunction(this)})}
var clickedBtn;jQuery('.menu-link').bigSlide({easyClose:true,width:'25em',side:'left',beforeOpen:function(){jQuery('.menu-overlay').show();},afterOpen:function(e){jQuery('#close-menu').focus();clickedBtn=jQuery(e.target).parent();},afterClose:function(e){clickedBtn.focus()}});jQuery('.go-to-top').on('focus',function(){jQuery('#close-menu').focus();jQuery('.menu-overlay').hide();});jQuery('.go-to-bottom').on('focus',function(){jQuery('ul#menu-main > li:last-child > a').focus();});var parentElement=jQuery('.panel li.menu-item-has-children'),dropdown=jQuery('.panel li.menu-item-has-children span');parentElement.children('ul').hide();dropdown.on({'click':function(e){e.target.style.transform=='rotate(0deg)'?'rotate(180deg)':'rotate(0deg)';jQuery(this).siblings('ul').slideToggle().toggleClass('expanded');e.stopPropagation();},'keydown':function(e){if(e.keyCode==32||e.keyCode==13){e.preventDefault();jQuery(this).siblings('ul').slideToggle().toggleClass('expanded');e.stopPropagation();}}});if(itng.toTopEnable!==""){const topBtn=jQuery('#itng-back-to-top');jQuery(window).scroll(function(){if(jQuery(window).scrollTop()>300){topBtn.addClass('show');}else{topBtn.removeClass('show');}});topBtn.on('click',function(e){e.preventDefault();jQuery('html, body').animate({scrollTop:0},'300');});}
jQuery('.blocks-gallery-grid, .gallery').magnificPopup({delegate:'a',type:'image',gallery:{enabled:true}})
var catSliders=[];for(catSlider in window){if(catSlider.indexOf("cat_slider")!=-1){catSliders.push(window[catSlider]);}};catSliders.forEach(function(item){var slider=jQuery("#"+item.id).find('.cat-slider');slider.owlCarousel({items:1,loop:true,autoplay:true,dots:false,nav:true});});jQuery('.itng-featured-news-slider').owlCarousel({items:1,dots:false,nav:false,loop:true,autoplay:true});if(itng.stickyNav!==""){var stickyNav=jQuery('#sticky-navigation');stickyNav.css("opacity","0");function itngStickyMenu(){var scrollHeight=jQuery(window).scrollTop(),navHeight=jQuery('.nav-wrapper').height()+jQuery('.nav-wrapper').offset().top
if(scrollHeight>navHeight){jQuery('body').addClass('has-sticky-menu');stickyNav.css({"transform":"translateY(0)","opacity":"1"});}else{stickyNav.css({"transform":"translateY(-100%)","opacity":"0"});}}
jQuery(window).scroll(function(){itngStickyMenu()})
itngStickyMenu()}});