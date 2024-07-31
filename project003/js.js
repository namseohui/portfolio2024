$(document).ready(function(){

    // wrap의 디브를 클릭했을때 
    // 1. 순번을 찾는다
    // 2. 클릭한 순번에 맞춰 on값을 주기
    $('.wrap>div').click(function(){

        // 1번
        var i = $(this).index()
        if(i==0)i=5
        console.log(i)

        // 2번
        $('article').removeClass('on')
        $('article').eq(i-1).addClass('on')
        
        
       

        $('.member_inner2').removeClass('up')
        $('.member_inner1').removeClass('up')
        

       
    })


    // 앨범 cd li를 클릭했을 때, 
    $('.album_cd li').click(function(){

        $('.album_cd li').removeClass()
        $(this).addClass('on')
        var ii= $(this).index()

        $('.popup'+(ii+1)).css({'display':'block'})


        $('.album_btn_cd').css({'left':33.3333*ii+'%'})

    })

    $('.album_cd li').mouseenter(function(){
        $('.album_cd li').removeClass('on')
        $(this).addClass('on')
        
        var iii= $(this).index()
        $('.album_btn_cd').css({'left':33.3333*iii+'%'})
    })

    $('.album_cd li').mouseleave(function(){
        $('.album_cd li').removeClass('on')
        
    })


    $('.xx').click(function(){
        $('.popup1').css({'display':'none'})
    })
    $('.xx').click(function(){
        $('.popup2').css({'display':'none'})
    }) 
    $('.xx').click(function(){
        $('.popup3').css({'display':'none'})
    }) 
    $('.xx').click(function(){
        $('.popup4').css({'display':'none'})
    }) 




    // 마우스가 움직일 때,
    // .mouse 가 따라다녀라
        $(window).mousemove(function(e){

            var x = e.pageX;
            var y = e.pageY;

            $('.mouse').css({'left':x, 'top':y})
                

        })



    // 인트로를 클릭하면, 
    //.intro_inner
    $('.intro_inner').click(function(){

        $(this).css({'height':'100%', 'top':'90px'})
        $('.intro_inner h2').css({'font-size':'120px'}).stop().animate({'font-size':'40px'},1100)
        $(this).css({'display':'block'}).stop().animate({'display':'none'},1100)
        $('.intro').css({'z-index':'999999', 'opacity':'1'}).stop().animate({'z-index':'-999', 'opacity':'0.5'},1000)
    })




    // 멤버소개!!
    // 클릭을 누르면 개인멤버소개창으로 넘어감 .member_all_clickk
    $('.member_all_clickk').click(function(){
        
        $('.member_inner2').addClass('up')
        $('.member_inner1').addClass('up')

    })


    // 멤버별소개
    // 각 클릭박스 누르면 해당 페이지가 넘어오게 하기 .clickBox .click1~4
    $('.clickBox>div').click(function(){

        // 1번
        var m = $(this).index()
        console.log(m)

        // 2번
        $('.member_txt>div').removeClass('pp')
        $('.member_txt>div').eq(m).addClass('pp')

    })


    // 메뉴1번을 누르면 모든 class 이름을 지우고 z-index 올리기
    $('.menu1').click(function(){

        $('html,body').removeClass()
        $('.intro_inner').css({'height':'180px', 'top':'50%'})
        $('.intro_inner h2').css({'font-size':'120px'})
        $('.intro_inner').css({'display':'block'})
        $('.intro').css({'z-index':'999999', 'opacity':'1'})

        

    })

    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Star {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.flickerInterval = Math.floor(Math.random() * 50) + 50;
            this.flickerCounter = 0;
        }
    
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    
        update() {
            this.flickerCounter++;
    
            if (this.flickerCounter === this.flickerInterval) {
                this.radius = getRandom(0.5, 2);
                this.color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
                this.flickerCounter = 0;
                this.flickerInterval = Math.floor(Math.random() * 50) + 50;
            }
    
            this.draw();
        }
    }
    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function spawnStars() {
        const x = getRandom(0, canvas.width);
        const y = getRandom(0, canvas.height);
        const radius = getRandom(0.5, 2);
        const color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
        return new Star(x, y, radius, color);
    }
    
    let stars;
    function init() {
        stars = [];
    
        for (let i = 0; i < 200; i++) {
            stars.push(spawnStars());
        }
    }
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        stars.forEach(star => {
            star.update();
        });
    }
    
    init();
    animate();
    
    



})