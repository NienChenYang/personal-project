//menu
function showMenu(){
    if(document.getElementById("menu").classList.contains("hidden") == true){
        document.getElementById("menu").classList.remove("hidden");
    }else{
        document.getElementById("menu").classList.add("hidden");
    }
}

//path
function changeBg(e) {
    e.preventDefault(); //阻止它不要超連結
    let onclick = document.querySelectorAll('.onclick');
    if (onclick.length !== 0) {
        onclick[0].classList.remove('onclick');
    }

    e.target.classList.add('onclick');
   
    
    let scrollTo = e.target.getAttribute('href'); // href = div ID
   
    let el = document.querySelectorAll(scrollTo)[0]; // 依id取得元素
    
    window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
    })
}

function init(){
    document.getElementById("hamburger_btn").onclick = showMenu;
    
    let path = document.querySelectorAll('.scoll');
    for (let i = 0; i < path.length; i++){
        path[i].addEventListener('click', changeBg);
        
    }
}
window.addEventListener("load", init, false);

$( document ).ready(function() {
    $(".list").click(function() {
        $(this).siblings("ul").slideToggle();
    });
});



$(document).ready(function(){
    // slide
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        loop:true,
        nav:true,
        navText: ["<img src='pic/homepage/left-arrow.png'>","<img src='pic/homepage/right-arrow.png'>"]
    });

    // //slot machine

    (function($){

        var slotMachine = function(){
        var spinning = 1,
            spin = [0],
    
            startSlot = function(){
    
                spinning = false;
    
                $('#slot-trigger').removeClass('slot-triggerDisabled');
    
                this.blur();
    
                return false;
    
            },
           
            spin = function(){
    
                this.blur();
    
                if(spinning == false){
                    $('#slot-machine .arm').animate({ top: '90px', height: '2%' });
                    $('#slot-machine .arm .knob').animate({ top: '-20px', height: '30px' });
                    $('#slot-machine .arm-shadow').animate({ top: '40px' }, 380);
                    $('#slot-machine .ring1 .shadow, #slot-machine .ring2 .shadow').animate({ top: '50%', opacity: 1 });
    
                    spinning = 1;
                    spin[0] = parseInt(Math.random() * 5);
    
                    $('#slot-trigger').addClass('slot-triggerDisabled');
    
                    $('img.slotSpinAnimation').show();
    
                    $('#wheel1 img:first').css('top', - (spin[0] * 44 + 16) + 'px');
    
                    setTimeout(function(){
                        $('#slot-machine .arm').animate({ top: '-20%', height: '45%', overflow: 'visible' });
                        $('#slot-machine .arm .knob').animate({ top: '-15px', height: '30px' });
                        $('#slot-machine .arm-shadow').animate({ top: '13px' });
                        $('#slot-machine .ring1 .shadow, #slot-machine .ring2 .shadow').animate({ top: '0', opacity: 0 });
                    }, 500);
    
                    setTimeout(function(){
                        stopSpin(1);
                        // location.reload();
                    }, 1500 + parseInt(1500 * Math.random()));
                }
    
                return false;
    
            },
            stopSpin = function(slot){
    
                $('#wheel' + slot)
                .find('img:last')
                .hide()
                .end()
                .find('img:first')
                .animate({
                    top: - spin[slot - 1] * 250
                },{
                    duration: 500,
                    easing: 'elasticOut',
                    complete: function() {

                        spinning --;

                        if(spinning <= 0){
                            endSpin();
                        }

                    }
                });
            },
            endSpin = function(){};
        return {
    
            init: function(){
    
                startSlot();
    
                $('#slot-trigger')
                    .bind('mousedown', function(){
                        $(this).addClass('slot-triggerDown');
                    })
                    .bind('click', spin);
    
                $(document).bind('mouseup', function(){
                    $('#slot-trigger').removeClass('slot-triggerDown');
                });
    
                $('#wheel1 img:first').css('top', - (parseInt(Math.random() * 5) * 44) + 'px');
            
            }
    
        };
    }();
    
    $.extend($.easing,{
        bounceOut: function (x, t, b, c, d){
            if((t/=d) < (1/2.75)){
                return c*(7.5625*t*t) + b;
            } else if(t < (2/2.75)){
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if(t < (2.5/2.75)){
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeOut: function (x, t, b, c, d){
            return -c *(t/=d)*(t-2) + b;
        },
        elasticOut: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        }
    });
    
    $(document).ready(slotMachine.init);
    
    })(jQuery);
    
    function blink(element){
    
    element.animate({ opacity: 0 }, 200, 'linear', function(){
        $(this).animate({ opacity: 1 }, 200);
    });
    
    }
})







	
