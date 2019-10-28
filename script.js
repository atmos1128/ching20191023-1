function sound(note,volume,when){
 setTimeout(function(){
    var synth = new Tone.Synth().toMaster();     
    synth.volume.value= volume || -12;
    synth.triggerAttackRelease(note, "8n");
  },when || 0)
}
//; 英文 密碼
// | 分隔
var morseCode = "A;K|B;Q|C;G|D;M|E;T|F;I|G;O|H;W|I;A|J;S|K;E|L;Y|M;P|N;V|O;H|P;Z|Q;B|R;U|S;L|T;D|U;X|V;C|W;R|X;J|Y;F|Z;N|1;5|2;0|3;2|4;6|5;1|6;9|7;8|8;4|9;7|0;3"

var morseList = morseCode.split("|")
for(var i=0;i<morseList.length;i++){
  morseList[i] = morseList[i].split(";")  
  $("ul.translist").append("<li>"+morseList[i][0]+"  "+": "+morseList[i][1]+"</li>")
}

//文章翻譯 > 字翻譯

function findCode(letter){
   for(var i=0;i<morseList.length;i++){
    if (morseList[i][0]==letter){
      return morseList[i][1]
    }
  }
  return letter;
}

function findLetter(code){
  for(var i=0;i<morseList.length;i++){
    if (morseList[i][1]==code){
      return morseList[i][0]
    }
  }
  return code;
}

//翻譯整段
function translateToMorse(text){
  text=text.toUpperCase();
  var result = ""
  for(var i=0;i<text.length;i++){
    // console.log(text[i])
    result+=findCode(text[i])+" "
    // console.log(findCode(text[i]))
  }
  return result;
}

function translateToEng(text){
  text = text.split(" ")
  var result = ""
  for(var i =0;i<text.length;i++){
    // console.log(text[i])
    result += findLetter(text[i])
  }
  return result
}

//轉成密碼
$("#btnMorse").click(function(){
  var input = $("#input").val()
  var result = translateToMorse(input)
  $("#output").val(result)  
  //一些聲音及動畫
  sound("E2",10)
  sound("F2",10,300)
  $("#output").css({
    backgroundColor: "#59A5D8"
  }).animate({
    backgroundColor: "transparent"
  },500)
  $(".symbol").velocity({
    rotateZ: ["0deg","360deg"],
    scale: 5
  },500).velocity({
    rotateZ: ["0deg","360deg"],
    scale: 1
  },500)
})
//密碼轉成文字
$("#btnEng").click(function(){
  var input = $("#output").val()
  var result = translateToEng(input)
  $("#input").val(result)
  //一些聲音及動畫
  sound("A2",10)
  sound("D2",10,300)
  $("#input").css({
    backgroundColor: "#59A5D8",
  }).animate({
    backgroundColor: "transparent",
  },500)
  $(".symbol").velocity({
    rotateZ: ["0deg","360deg"],
    scale: 5
  },500).velocity({
    rotateZ: ["0deg","360deg"],
    scale: 1
  },500)
})
//密碼轉回文字時刪除空格
$("#input").keyup(function(){
  let origina = $("#input").val()
  let newtext = origina.toUpperCase().split(" ").join("")
  $("#input").val(newtext)
})



//A~Z聲音
function play(texts, nowindex){
  var word = texts[nowindex]
  var lasttime = 300
  switch(word) {
    case 'A':
        A_sound.play()
        break;
    case 'B':
        B_sound.play()        
        break;
    case 'C':
        C_sound.play()        
        break;
    case 'D':
        D_sound.play()        
        break;
    case 'E':
        E_sound.play()        
        break;
    case 'F':
        F_sound.play()        
        break;
    case 'G':
        G_sound.play()        
        break;
    case 'H':
        H_sound.play()        
        break;
    case 'I':
        I_sound.play()        
        break;
    case 'J':
        J_sound.play()        
        break;
    case 'K':
        K_sound.play()        
        break;
    case 'L':
        L_sound.play()        
        break;
    case 'M':
        M_sound.play()        
        break;
    case 'N':
        N_sound.play()        
        break;
    case 'O':
        O_sound.play()        
        break;
    case 'P':
        P_sound.play()        
        break;
    case 'Q':
        Q_sound.play()        
        break;
    case 'R':
        R_sound.play()        
        break;
    case 'S':
        S_sound.play()        
        break;
    case 'T':
        T_sound.play()        
        break;
    case 'U':
        U_sound.play()        
        break;
    case 'V':
        V_sound.play()        
        break;
    case 'W':
        W_sound.play()        
        break;
    case 'X':
        X_sound.play()        
        break;
    case 'Y':
        Y_sound.play()        
        break;
    case 'Z':
        Z_sound.play()
        break;
    default:
        lasttime = 1000
}
  
  $(".playlist span").removeClass("playing")
  $(".playlist span").eq(nowindex).addClass("playing")

  if(texts.length >nowindex){
    setTimeout(function(){
      play(texts,nowindex+1)
    },lasttime)
  }else{
    $(".playlist").html("")
  }
}

$("#btnPlay").click(function(){
  var texts = $("#output").val()
  $(".playlist").html("")
  for(var i=0;i<texts.length;i++){
    $(".playlist").append("<span>"+texts[i]+"</spen>")
  }
  play(texts,0)
})
//聲音A~Z
var A_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/ffa87c5b4ffe32e569ffd7747c926b23.mp3")
var B_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/2554fc8181af9ff0bd23b1468048bc2a.mp3")
var C_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/35048a33ad843b8710af8e48d45ec177.mp3")
var D_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/13dc11b7247d58e4da680a8a74b24758.mp3")
var E_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/81b3e20fa3439304078446e6c91d1227.mp3")
var F_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/8ddc2b84a200fa504298e4c97209dd02.mp3")
var G_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/0c1783e9373b9045f0c2ba38db6c0d5d.mp3")
var H_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/b5e43e0f5c5c2a164adda38fdc7745a5.mp3")
var I_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/3325c7ca6512f3f9464825c155a935c5.mp3")
var J_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/4b1572a3ac6c099cded149f2f33044a0.mp3")
var K_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/451f1136bb516a76ca6cad80399bb660.mp3")
var L_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/bb2f68da0344ef85bdc7d942edecbfed.mp3")
var M_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/d7001b6da693ddc52e28fb1ea85966fc.mp3")
var N_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/0900411a0031a44361c0562d9894da57.mp3")
var O_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/7916bca197f257f6b41ea49e22d1c490.mp3")
var P_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/acd6f30d31c7b8c1633f7924f1da9130.mp3")
var Q_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/74f857709a7cc202d13b5fc2ba848e68.mp3")
var R_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/fd48dfcf6a733d0b313133fd7fd56e74.mp3")
var S_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/7127eee520828b13e58b1a2bf437bdb2.mp3")
var T_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/9cd050e74103c9b84d3ac3f1e7ff446c.mp3")
var U_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/137497c3d984a5fc8487111adc653fce.mp3")
var V_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/88e388be700c396cf12b0b5fad60446a.mp3")
var W_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/5d7126b631ad076128a77f554fbda656.mp3")
var X_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/1db7c6b9350908023d94530debf124b0.mp3")
var Y_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/a2d6df66010936d6d368c31d7a332089.mp3")
var Z_sound = new Audio("http://www.ab126.com/d/file/goju/2010-04-12/cdd74ff2f4f680dc71746104ad1da455.mp3")