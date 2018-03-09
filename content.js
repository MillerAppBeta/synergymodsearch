window.addEventListener("load", loaded);

function loaded() {

document.body.innerHTML=document.body.innerHTML+("<div id='checkif' style='display:none;'>-1</div>");
if(getCookie("0").length<5){document.getElementById("checkif").innerHTML=(parseInt(document.getElementById("checkif").innerHTML)+1).toString();}
if(location.hash.indexOf("scan")!=-1){

document.body.innerHTML=document.body.innerHTML+('<img  z-index="100" style="position:fixed;top:0;left:0;height: 100vh; width: 100vw;"  src="http://freefrontend.com/assets/img/css-loaders/flexbox-loader.gif">');
/*var h=0;
while(h<document.getElementsByTagName("iframe").length){
document.getElementsByTagName("iframe")[h].addEventListener("load", alert);
h++;
}*/
//setTimeout(analyzegrades, 20000);
}
if(location.hash.indexOf("calculator")!==-1){
var bb=0;
var cc=0;
while(cc<7){
	var aa=getCookie(cc).replace(/ out of /g, "%OF%").replace(/~/g, ",").split(",");
	while(bb<aa.length){
		if(aa[bb].length>4){
		aa[bb].replace(/,/g, "");
		console.log(aa[bb])
		bb++;
		}else{bb++;}
	}
	cc++;bb=0;
	}
//INSERT_ANALYSIS_CODE_HERE
}else{
    if (window.location.href.indexOf("PXP_Gradebook")!== -1 && window.location.href.indexOf("CID=") == -1 && window.location.hash.indexOf("scan")!==-1) {
        //alert(document.getElementsByClassName("info_tbl")[0].innerHTML);
        var zero = true;
        var i = 0;
while(i<7){
//alert(getCookie(i));
setCookie(i, "", 60000);
//alert(getCookie(i));
i++;
}i=0;
        var u = [];
        var c = 0;
        var write;
        var t = 0;
        while (i < document.querySelectorAll('a').length) {
            if (document.getElementsByTagName("a")[i].href.indexOf("PXP") !== -1 && document.getElementsByTagName("a")[i].innerHTML.length == 1) {
                u[c] = document.getElementsByTagName("a")[i].href;
                if (u[c] !== u[c - 1]) {
                    c += 1;
                }
            }
            //alert(document.getElementsByTagName("a")[i].innerHTML);
            i++;
        }
        i = 0;
        if (u.length == 6) {
            u.unshift("");
            i = 1;
        }
        while (i < u.length) {
            console.log("\n" + "Period " + i + ": " + "\n" + u[i]);
            if (u.length == 6) {
                u.unshift("");
                i = 1;
            }
		var nm="";
//	if(location.hash.toLowerCase().indexOf("scan")!=-1){nm="onload='' src='";}
if(location.hash.toLowerCase().indexOf("scan")!==-1){
nm='document.getElementById("checkif").innerHTML=(parseInt(document.getElementById("checkif").innerHTML)+1).toString();if(parseInt(document.getElementById("checkif").innerHTML)==6){setTimeout(gotonewurl,30000);}function gotonewurl(){ window.location="https://parentvue.cusdk8.org/#calculator"; }';
}
            write = ("<iframe onload='"+nm+"' src='"+u[i].toString() + "#" + i + "' style='display:none'></iframe>"+"<script>//document.getElementsByTagName('iframe')[0].addEventListener('load', launch);function launch(){alert();</scr"+"ipt>"+'<script></scr'+"ipt>"); //alert(i);
            document.body.innerHTML = document.body.innerHTML + (write); //alert(i);
            i++;
        }
    } else {
	var string="";
        var g = [];
        i = 0;
        //alert(document.querySelectorAll('td').length);
//alert(document.body.innerHTML.toLowerCase().indexOf("grade book assignment detail"));
//alert(document.body.innerHTML.toLowerCase().indexOf("performance indicator")!==-1);
if(document.body.innerHTML.toLowerCase().indexOf("performance indicator")!==-1){//alert();
            while (i < document.querySelectorAll('td').length) {
	if(document.querySelectorAll('td')[i].innerHTML.length<200&&document.querySelectorAll('td')[i].innerHTML.toLowerCase().indexOf("assignment")!==-1){var z=i;
}
	if(document.querySelectorAll('td')[i].innerHTML.length<200&&document.querySelectorAll('td')[i].innerHTML.toLowerCase().indexOf("period")!==-1){var p=i;}

	if(document.querySelectorAll('td')[i].innerHTML.length<200&&document.querySelectorAll('td')[i].innerHTML.toLowerCase().indexOf("out of")!==-1){
	//alert(window.location.hash);//getCookie(document.querySelectorAll('td')[p].innerHTML.replace('<span class="tbl_label">Period', "").replace('</span><br>', ""))
console.log(document.querySelectorAll('td')[p].innerHTML.replace('<span class="tbl_label">Period', "").replace('</span><br>', "")+"-"+document.querySelectorAll('td')[z].innerHTML.replace('<span class="tbl_label">Assignment</span><br>', "")+": "+document.querySelectorAll('td')[i].innerHTML.replace('<span class="tbl_label">Score</span><br>', ""));
setCookie(document.querySelectorAll('td')[p].innerHTML.replace('<span class="tbl_label">Period', "").replace('</span><br>', ""),(getCookie(document.querySelectorAll('td')[p].innerHTML.replace('<span class="tbl_label">Period', "").replace('</span><br>', ""))+"~"+document.querySelectorAll('td')[z].innerHTML.replace('<span class="tbl_label">Assignment</span><br>', "")+": "+document.querySelectorAll('td')[i].innerHTML.replace('<span class="tbl_label">Score</span><br>', "")).replace(/,/g, ""), 6000000000);

}
        i++;}

        }
        if (document.body.innerHTML.toLowerCase().indexOf("score highlight legend") !== -1 && window.location.href.indexOf("Gradebook") !== -1) {
            i = 0;
            t = 0;

            while (i < document.querySelectorAll('a').length) {
                if ((document.getElementsByTagName("a")[i].outerHTML.toLowerCase().indexOf("cid") !== -1 /* || document.getElementsByTagName("a")[i].innerHTML.toLowerCase().indexOf("quiz") !== -1 */) && document.getElementsByTagName("a")[i].href.toLowerCase().indexOf("testhistory") == -1) { //g.unshift("");
                    //alert(document.getElementsByTagName("a")[i].innerHTML+g.length);
                    if (document.getElementsByTagName("a")[i].href !== g[t - 1]) {
                        g[t] = document.getElementsByTagName("a")[i].href;
                        //alert(g[t]);
//                        i = 0;
            write = ("<iframe src='" + g[t].toString() + "#" + t + "' style='display:none'></iframe>"); //alert(i);
            document.body.innerHTML = document.body.innerHTML + (write);
                        t++;
                    }

                }

                i++;
            }

}

    }
}
}

function leave() {
    window.location = ( /* "http://output.jsbin.com/tepeqir/*/ "#" + window.location.hash.replace("#", "") + "&-&" + "N%2FA" + "&-&" + window.location.hash.replace("#", ""));
    save();
}

function save() {
    //alert();
    setCookie(window.location.hash.replace("#", "").split("&-&")[0], window.location.hash.replace("#", "").split("&-&")[1], 600000);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
	if(c.substring(name.length, c.length)!=""){
            return c.substring(name.length, c.length);
}
        }
    }
return "";
}
function analyzegrades(){
//top.location="https://parentvue.cusdk8.org/#calculator";
}
var a=0;
function check(){
if(a>document.getElementsByTagName("iframe").length){analyzegrades();break;}
if(document.getElementsByTagName("iframe")[a].onload!=true){}else{a=a+1;}

}
function redirect(){
//top.location="https://parentvue.cusdk8.org/#calculator";
}
function gotonewurl(){
//window.location="window.location="https://parentvue.cusdk8.org/#calculator";
}