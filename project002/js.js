$(document).ready(function(){

    // 스크롤값을 찾아서 로고에 대입한다

    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        var sct = $('.title').height()

        // $('.title_t').stop().animate({'left':-700+sc})
        $('.title_t').css({'left':-300+sc})

    })


    // 아티스트 li를 마우스 호버했을 때, p가 나온다
    $('figure li').mouseenter(function(){

        var po = $(this).index()
        $('figure p').removeClass('pop')
        $('figure p').eq(po).addClass('pop')
        
    })


    $('figure li').mouseleave(function(){

        $('figure p').removeClass('pop')
        
    })


    // 연혁 버튼에 마우스가 들어가면, onn 값을 받는다
    $('.history_btn ul li').mouseenter(function(){
        
        $(this).removeClass('onn')
        $(this).addClass('onn')
        
    })

    $('.history_btn ul li').mouseleave(function(){
        
        $(this).removeClass('onn')
        
    })

    // 연혁 버튼을 클릭하면, 해당 디브가 left:0 으로 이동한다.
    $('.history_btn ul li').click(function(){
        var his = $(this).index()
        var leftt = (-100 * his) + '%'
        $('.history_txt').stop().animate({'left':leftt},1000)

        //  연혁 버튼을 클릭했을 때, 백그라운드사진의 위치가 바뀐다
        $('.history').stop().animate({'background-position-y': (his * 15) + '%'},1000)
    })
//background-position-y: 0%;
// 서브페이지 설정

    // 서브페이지 메뉴li 를 클릭하면, under 값을 받는다
    $('.ss').click(function(){
        $(this).addClass('under')
        $('.mm').removeClass('under')
        $('.cc').removeClass('under')
    })
    $('.mm').click(function(){
        $(this).addClass('under')
        $('.ss').removeClass('under')
        $('.cc').removeClass('under')
    })
    $('.cc').click(function(){
        $(this).addClass('under')
        $('.mm').removeClass('under')
        $('.ss').removeClass('under')
    })

   

    // 서브페이지 색상 클릭시, sel 값을 받는다
    // $('.txt_color .txt_color_in>div').click(function(){   
    //     $(this).removeClass('sel')
    //     $(this).addClass('sel')
    // })
    $('.txt_bl').click(function(){ 
        $(this).addClass('sel')
        $('.txt_wh').removeClass('sel');
        $('.pic_bl').css({'z-index':'0', 'opacity':'0'}).stop().animate({'z-index':'10', 'opacity':'1'},300)
        $('.pic_wh').css({'z-index':'0', 'opacity':'0'}).stop().animate({'z-index':'0', 'opacity':'0'},300)
        $('.txt_box_col').text('Black')

            // 블랙박스를 선택했을 때, 흰색텍스트는 up값을 없앤다
        $('.bl').css({'top':'100%'}).stop().animate({'top':0},500)
        $('.wh').css({'top':'0'}).stop().animate({'top':'100%'},500)

        //.txt_bl을 클릭했을 때, pic_bl에 class = go 값을 받는다
        $('.pic_product>div').removeClass('go')
        $('.pic_bl').addClass('go')
        
    })



    $('.txt_wh').click(function(){
        $(this).addClass('sel')
        $('.txt_bl').removeClass('sel')
        $('.pic_bl').css({'z-index':'0', 'opacity':'0'}).stop().animate({'z-index':'0', 'opacity':'0'},300)
        $('.pic_wh').css({'z-index':'0', 'opacity':'0'}).stop().animate({'z-index':'10', 'opacity':'1'},300)      
        $('.txt_box_col').text('White')

        // 박스를 선택했을 때, 흰색텍스트는 up값을 없앤다
        $('.wh').css({'top':'100%'}).stop().animate({'top':0},500)
        $('.bl').css({'top':'0'}).stop().animate({'top':'100%'},500)

        //.txt_wh을 클릭했을 때, pic_wh에 class = go 값을 받는다
        $('.pic_product>div').removeClass('go')
        $('.pic_wh').addClass('go')
    })




    // 이름을 클릭하면, 해당 박스가 나온다.
    $('.ss').click(function(){
        $('.txt_s').css({'left':'-100%'}).stop().animate({'left':0},1000)
        $('.txt_m').css({'left':'-100%'}).stop().animate({'left':'-100%'},1000)
        $('.txt_c').css({'left':0}).stop().animate({'left':'-100%'},1000)

        $('.pic_s').css({'top':0}).stop().animate({'top':'50%'},1000)
        $('.pic_m').css({'top':'200%'}).stop().animate({'top':'150%'},1000)
        $('.pic_c').css({'top':'200%'}).stop().animate({'top':'150%'},1000)

        // 해당 상품의 onnn 값을 받는다 -> 장바구니에 해당하는 사진을 넣기 위해 클래스 이름만 부여
        $('.sub_txt>div').removeClass('onnn')
        $('.sub_txt .txt_s').addClass('onnn')

        $('.sub_pic>div').removeClass('onnnn')
        $('.sub_pic .pic_s').addClass('onnnn')

        
        
    })

    $('.mm').click(function(){
        $('.txt_s').css({'left':0}).stop().animate({'left':'-100%'},1000)
        $('.txt_m').css({'left':'-100%'}).stop().animate({'left':0},1000)
        $('.txt_c').css({'left':'-100%'}).stop().animate({'left':'-100%'},1000)

        $('.pic_s').css({'top':0}).stop().animate({'top':'150%'},1000)
        $('.pic_m').css({'top':'150%'}).stop().animate({'top':'50%'},1000)
        $('.pic_c').css({'top':'150%'}).stop().animate({'top':'150%'},1000)

         // 해당 디스플레이 onnn 값을 받는다 -> 장바구니에 해당하는 사진을 넣기 위해 클래스 이름만 부여
        $('.sub_txt>div').removeClass('onnn')
        $('.sub_txt .txt_m').addClass('onnn')

        $('.sub_pic>div').removeClass('onnnn')
        $('.sub_pic .pic_m').addClass('onnnn')
    })

    $('.cc').click(function(){
        $('.txt_s').css({'left':'-100%'}).stop().animate({'left':'-100%'},1000)
        $('.txt_m').css({'left':0}).stop().animate({'left':'-100%'},1000)
        $('.txt_c').css({'left':'-100%'}).stop().animate({'left':0},1000)
        
        $('.pic_s').css({'top':0}).stop().animate({'top':'150%'},1000)
        $('.pic_m').css({'top':'150%'}).stop().animate({'top':'150%'},1000)
        $('.pic_c').css({'top':'150%'}).stop().animate({'top':'50%'},1000)

         // 해당 디스플레이 block 인 onnn 값을 받는다
         $('.sub_txt>div').removeClass('onnn')
         $('.sub_txt .txt_c').addClass('onnn')

         $('.sub_pic>div').removeClass('onnnn')
         $('.sub_pic .pic_c').addClass('onnnn')
    })


    //  타이핑효과내기
    // const content = "Where Passion in Everything";
    // const text = document.querySelector(".text");
    // let i = 0;

    // function typing(){
    //     if (i < content.length) {
    //     let txt = content.charAt(i);
    //     text.innerHTML += txt;
    //     i++;
    //     }}

    // function time(){
    
    //     setInterval(typing, 200)}
    //     setInterval(time,1000)

    //     new TypeIt("#asyncExec", {waitUntilVisible: true,})
    //         .type("Hold up!")
    //         .exec(async() => {
    //             //-- Return a promise that resolves after something happens.
    //             await new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 return resolve();
    //             }, 2000);
    //             });
    //         })
    //         .type(" OK, now go.")
    //         .go();



    // 수량 올리고 내리기
    var count = 0;
    $('.txt_box_num i.fa-plus').click(function(e){
        e.preventDefault();
        
        count++
        console.log(count);
        count = count > 3 ? 3 : count;
        
        $('.input_div p').text(count)
        $('.txt_s .price p').text('$ '+(count*10)+'0,000')
        $('.txt_m .price p').text('$ '+(count*15)+'0,000')
        $('.txt_c .price p').text('$ '+(count*20)+'0,000')
    })

    $('.txt_box_num i.fa-minus').click(function(e){
        e.preventDefault();
        
        count--
        console.log(count);

         // result변수가 0보다 작으면 0을 대입 아니면 기존 result변수값 대입
        count = count < 1 ? 1 : count;
        
        $('.input_div p').text(count)
        $('.txt_s .price p').text('$ '+(count*10)+'0,000')
        $('.txt_m .price p').text('$ '+(count*15)+'0,000')
        $('.txt_c .price p').text('$ '+(count*20)+'0,000')
    })




    // 연혁섹션에서 스크롤 했을 때, 스크롤을 내릴때 오른쪽/스크롤을 올릴때 왼쪽으로 움직인다.
    // 생략







    // 장바구니.basket 을 누르면, 장바구니 팝업 .popup이 보여라
    $('.basketpop').click(function(e){
        e.preventDefault()

        $('.popup').css({'display':'flex'})
        
    })

    // .popup에 있는 reset을 클릭하면 popup이 사라져라 
    $('.reset').click(function(){
               

        $('.popup').css({'display':'none'})
    });






    // cart를 클릭했을때 숫자(변수)가 증가하게 만들고 
    // 그 숫자를 shopcart의 span에 출력해라 

    let i = 0;
    $('.cart').click(function(e){
        e.preventDefault();
        i++
        console.log(i);
    $('.basket').find('span').text(i)
    $('.popup_pro').find('span').text(i)

    // price를 찾아서 금액을 출력해라 
    // p안에 있는 img태그를 출력해라 

    // let txt = $('.price').text()
    // let timg = $('.pic_product').html()
    // console.log(timg)

    // popup에 list에 txt를 계속 누적되게 출력해라 
    // $('.popup').find('.list').append('<div>'+(timg+txt)+'</div>')


    //.pic_bl의 이미지를 출력해라
    let picture = $('.sub_pic>div.onnnn>div.go').html()
    let pri = $('.sub_txt>div.onnn .txt_box_pri .price').text()
    // 해당하는 수량을 같이 넣기
    let number = $('.sub_txt>div.onnn .txt_box_num .input_div p').html()

    console.log(pri)
    $('.popup').find('.list').append('<div class="listde"><div class="cbox"><i class="fa-solid fa-check"></i></div>'+ (picture+number) + '<em></em>' + pri +'</div>')
    })

    // empty 를 클릭했을때, 장바구니의 숫자가 0이 되어라. 
    // shop의 list 를 비워라.

    $('.empty').click(function(){

        i=0;
        $('.basket').find('span').text(i)
    $('.popup_pro').find('span').text(i);
    $('.popup').find('.list').empty()

    })



    
    // 팝업리스트 체크박스를 클릭하면, .check 값을 받는다.
    $(document).on('click', '.popup_pro .list .cbox', function(e) {
        e.preventDefault()

        $(this).find('i').toggleClass('che');
    })




    // $('.popup_pro .list .cbox i').click(function(e){
    //     e.preventDefault()
       
    //     $(this).addClass('che')
        
    // })
    // $('.popup_pro .list .cbox').click(function(){
       
    //     $('.popup_pro .list .cbox i').css({'z-index':'1'})
        
    // })
    






})