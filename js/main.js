!function(){
    let duration = 20
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0 
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.slice(0, n)
            styleTag.innerHTML = code.slice(0, n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
               setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        }, duration)
    }
let code = `/*
*让我们先准备皮卡丘的皮
*/
.preview{
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #FFE600;
    border:1px solid green;
}
.code-wrapper{
    flex:1;
    height:50%;
}
.preview-wrapper{
    flex:1;
    height:50%;
}
.wrapper{
    width:420px;
    height:238px;
    position:relative;
}
/*
*这是他的鼻子
*/
.nose{
    width:0px;
    height:0px;
    border:13px solid black;
    border-radius:13px;
    border-color:black transparent transparent;
    position:absolute;
    left:50%;
    top:35px;
    margin-left:-13px;
}
/*
*这是眼睛
*/
.eye{
    width:64px;
    height:64px;
    background:#2E2E2E;
    position:absolute;
    border:2px solid #000;
    border-radius:50%;
}
.eye::before{
    content:'';
    display:block;
    width:26px;
    height:26px;
    background:white;
    border-radius:50%;
    border:1px silid #030303;
    position:absolute;
    left:10px;
    top:2px;
}
.eye.left{
    right:50%;
    margin-right:88px;
}
.eye.right{
    left:50%;
    margin-left:88px;
}
/*
*加点红的
*/
.face{
    width:88px;
    height:88px;
    background:#FF0000;
    border:2px solid #000;
    border-radius:50%;
    position:absolute;
    top:112px;
}
.face.left{
    right:50%;
    margin-right:122px;
}
.face.right{
    left:50%;
    margin-left:122px;
}
/*
*这是上嘴唇
*/
.UpperLip{
    width:100px;
    height:30px;
    border:3px solid #000;
    position:absolute;
    top:65px;
    background: #FFE600;
}

/*
*这是下嘴唇
*/
.LowerLip{
    width:220px;
    height:1400px;
    border:2px solid black;
    border-radius:60%;
    background:#9B000A;
    position:absolute;
    bottom:0;
    overflow: hidden;
}
.LowerLip::after{
    content: '';
    position: absolute;
    bottom:0;
    width:140px;
    height:140px;
    background:#FF485F;
    left:50%;
    margin-left:-70px;
    border-radius:50%;
}
/*
*做好啦,是不是很可爱呀!!!
*/`
    writeCode('',code)
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()