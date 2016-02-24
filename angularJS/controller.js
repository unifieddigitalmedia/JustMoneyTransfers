var myApp = angular.module('LoginApp',['ngResource','senderlastnameFilters']);

myApp.factory('JMTRAX',function($http) {

var jmtransfers = {};


jmtransfers.add = function (date,amount,ref,bank,sales,transfers,comments,agent) {

return $http.post('../php/bankingdeposits.php',{para:date,para1:amount,para2:ref,para3:bank,para4:sales,para5:transfers,para6:comments,para7:agent});


}



jmtransfers.delete = function (para) {


return $http.post('../php/deletebanking.php',{parameter:para});


}


jmtransfers.ordercomment = function (para) {


return $http.post('../php/comment.php',{parameter:para});


}


return jmtransfers;



});


myApp.factory('JmTrax', ['$resource', function($resource) {



var resource = $resource('http://:url/php/:page',
{

url: "@url",
page:"@page",


});


resource.getsenderbymobile = function (para,para1) {

return this.get(

{

url:para,
mobile:para1,
page:"getsenderbymobile.php"


});


};


resource.getcustomersdetails = function (para,para1) {

return this.get(

{

url:para,
mobile:para1,
page:"getcustomersdetails.php"


});


};


resource.getcustomertransactions = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getcustomertransactions.php"



});


};

resource.getcustomerreceipients = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getcustomerreceipients.php"



});


};




resource.login = function (para,para1,para2) {

return this.get(

{

url:para,
username:para1,
password:para2,
page:"login.php"


});


};



resource.getfulltransactions = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"gettransactionsfull.php"



});


};


resource.getdailytransactions = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getdailytransactions.php"



});


};


resource.getdailytransactionsTOTALS = function (para,para1) {

return this.get(

{

url:para,
senderid:para1,
page:"getdailytransactionsTOTALS.php"



});


};


resource.getbankingdeposits = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getbanklist.php"



});


};


resource.getbankingTOTALS = function (para,para1) {

return this.get(

{

url:para,
senderid:para1,
page:"getbanklistTOTALS.php"



});


};



resource.getsendersreceipients = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getsendersrecipients.php"



});


};


resource.getsenderstransactions = function (para,para1) {

return this.query(

{

url:para,
senderid:para1,
page:"getsenderstransactions.php"



});


};


resource.values = function (para,para1) {

return this.query(

{

url:para,
page:para1


});


};


resource.searchsenderlastname = function (para,para1,para2) {

return this.query(

{

url:para,
senderlastname:para1,
page:para2,


});


};


resource.details = function (para,para1,para2) {

return this.get(

{

url:para,
id:para1,
page:para2,


});


};


resource.details1 = function (para,para1,para2,para3) {

return this.get(

{

url:para,
id:para1,
Email:para3,
page:para2,



});


};


resource.deletedetails = function (para,para1,para2) {

return this.query(

{

url:para,
id:para1,
page:para2,


});


};



resource.saveshop = function (para,para1,para2) {

return this.query(

{

url:para,
id:para1,
page:para2,


});


};

resource.deleteshop = function (para,para1,para2) {

return this.query(

{

url:para,
id:para1,
page:para2,


});


};





resource.saverecbank = function (para,para1) {

return this.query(

{

url:para,
name:para1,
page:'saverecbank.php',


});


};



resource.savePayeeBank = function (para,para1) {

return this.query(

{

url:para,
name:para1.name,
sortcode:para1.sortcode,
account:para1.accountnumber,
ref:para1.reference,
page:'savepayeebank.php',


});


};





resource.validatenewcustomer = function (para,para1) {

return get(

{

url:para,
USERNAME: para1.EMAIL,
MOBILE: para1.EMAIL,
EMAIL : para1.EMAIL,
page:'validatenewcustomer.php'

});


};




resource.validatecustomer = function (para,para1,para2,para3) {

return get(

{

url:para,
username: para1,
mobile: para2,
email : para3,
page:'validateCustomer.php'

});


};


resource.saveCustomer = function (para,para1) {

return this.get(

{

url:para,
CustomerID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.SendersPostcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'savecustomer.php'

});


};


resource.updateCustomer = function (para,para1) {

return this.query(

{

url:para,
CustomerID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.SendersPostcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'updatecustomer.php'

});


};



resource.updateSender = function (para,para1) {

return this.get(

{

url:para,
senderID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.Postcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'updatesender.php'

});


};

resource.updateSenderLIST = function (para,para1) {

return this.get(

{

url:para,
senderID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.SendersPostcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'updatesenderLIST.php'

});


};



resource.saveSender = function (para,para1) {

return this.get(

{

url:para,
senderID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.SendersPostcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'savesender.php'

});


};


resource.saveSenderLIST = function (para,para1) {

return this.get(

{

url:para,
senderID : para1.CustomerID,
FirstName : para1.FirstName,
LastName : para1.LastName,
MobilePhone : para1.MobilePhone,
Postcode : para1.Postcode,
line1 : para1.line1,
line2 : para1.line2,
line3 : para1.line3,
TOWN : para1.TOWN,
COUNTY : para1.COUNTY,
EMAIL : para1.EMAIL,
page:'savesenderLIST.php'

});


};

resource.savereceipient = function (para,para1) {


return this.get(

{

url:para,
recipientsID : para1.recipientsID,
recfname : para1.recfname,
reclname : para1.reclname,
recbank : para1.recbank,
recaccount : para1.recaccount,
recreasonfortransfer : para1.recreasonfortransfer,
recpaymentref : para1.recpaymentref,
recphone : para1.recphone,
sendersid:para1.sendersid,
paypal : para1.paypal,
shopacc : para1.shopacc,
page:'savereceipient.php'

});


};



resource.updatereceipient = function (para,para1) {

return this.get(

{

url:para,

recipientsID : para1.recipientsID,
recfname : para1.recfname,
reclname : para1.reclname,
recbank : para1.recbank,
recaccount : para1.recaccount,
recreasonfortransfer : para1.recreasonfortransfer,
recpaymentref : para1.recpaymentref,
recphone : para1.recphone,
paypal :para1.paypal,
shopacc : para1.shopacc,
page:'updatereceipient.php'

});


};





resource.saveUser = function (para,para1) {

return this.get(

{

url:para,
userID : para1.USERID,
FirstName : para1.FirstName,
LastName : para1.LastName,
Username : para1.Username,
Answer : para1.Answer,
Email : para1.Email,
Password : para1.Password,
Access : para1.Access,
Shop : para1.Shop,
question : para1.question,
ExRights : para1.xrights,
update:para1.update,
limit:para1.limit,
page:'saveuser.php'

});


};



resource.updateuserDETAILS = function (para,para1) {

return this.get(

{

url:para,
userID : para1.USERID,
FirstName : para1.FirstName,
LastName : para1.LastName,
Username : para1.Username,
Answer : para1.Answer,
Email : para1.Email,
Password : para1.Password,
Access : para1.Access,
Shop : para1.Shop,
question : para1.question,
ExRights : para1.xrights,
page:'updateuser.php'




});


};




resource.updateRates = function (para,para1) {

return this.query(

{

url:para,
ngn : para1.ngn,
gbp : para1.gbp,
page:'updateRates.php'

});


};



resource.getcusttransactionsbysearch = function (para,para1,para2,para3,para4) {

return this.query(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:para4



});


};


resource.getcusttransactionsbysearchTOTAL = function (para,para1,para2,para3,para4) {



return this.get(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:para4



});


};



resource.gettransactionsbysearch = function (para,para1,para2,para3) {

return this.query(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:"gettransactionsbysearch.php"



});


};


resource.gettransactionsbysearchTOTAL = function (para,para1,para2,para3) {

return this.get(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:"gettransactionsbysearchTOTAL.php"



});


};




resource.getbankingbysearch = function (para,para1,para2,para3) {

return this.query(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:"getbankingbysearch.php"



});


};


resource.getbankingbysearchTOTAL = function (para,para1,para2,para3) {

return this.get(

{

url:para,
agent:para1,
start:para2,
end:para3,
page:"getbankingbysearchTOTAL.php"



});


};



resource.showactivityreport = function (para,para1,para2,para3,para4) {

return this.query(

{

url:para,
agent:para1,
start:para2,
end:para3,
shop:para4,
page:"getreport.php"



});

};


resource.payorder = function (para,para1,para2,para3,para4) {

return this.get(

{

url:para,
Id:para1,
bank:para2,
ref:para3,
date:para4,
page:"payorder.php"



});

};


resource.validateEmail = function (para,para1) {

return this.get(

{

url:para,
email:para1,
page:"validateemail.php"



});

};


resource.validateToken = function (para,para1,para2) {

return this.get(

{

url:para,
email:para1,
token:para2,
page:"validateToken.php"



});

};

resource.validatePassword = function (para,para1,para2) {

return this.get(

{

url:para,
email:para1,
password:para2,
page:"validatePassword.php"



});

};


resource.autofillOrder = function (para,para1,para2) {

return this.get(

{

url:para2,
sendersID:para,
receipeintsID:para1,
page:"autofillOrder.php"



});

};


return resource;



}]);



myApp.controller("PostsCtrl",['$scope','JmTrax','JMTRAX',function($scope,JmTrax,JMTRAX) {

$scope.options = [


{ "description":"http://www.jmtrax.net/","name":"www.jmtrax.net"},
{ "description":"http://www.jmtrax.com/","name":"www.jmtrax.com"},
{ "description":"http://jmtransfer.co.uk/","name":"www.jmtransfer.co.uk"},
{ "description":"http://justcomputersparts.co.uk/","name":"www.justcomputersparts.co.uk"}

];

$scope.columns = ['A', 'B', 'C', 'D'];
    $scope.rows = [1, 2, 3, 4];
    $scope.cells = {};

$scope.website = 'www.jmtrax.net';
$scope.senderdetails = true;
$scope.senderform = true;
$scope.dashboard = false;
$scope.recform = true;


var counter = 0;

setInterval(function(){ counter = counter + 1 ;


window.addEventListener("mousemove",function getcoords() {


counter = 0;

});

if (counter == '1800')

{

if(location.href == 'http://www.jmtrax.net/'){}else{window.open('http://jmtrax.net/','_self');}



} },1000);


$scope.confirmpassword = true;
$scope.tokenbutton = false;
$scope.passwordconfirmbutton = true;


$scope.websiteID = function(para,para1,para2) { 


if($scope.website === 'www.jmtrax.com')

{

$scope.websitedatabase = 0;

}
else if($scope.website === 'www.jmtrax.net' )
{


$scope.websitedatabase = 1;

}
else if($scope.website === 'www.jmtransfer.co.uk')
{


$scope.websitedatabase = 2;

}
else
{

$scope.websitedatabase = 3;
}



}


$scope.autofillOrder = function(para,para1,para2) { 



if(para2 === 0)

{

$scope.website = 'www.jmtrax.com';

}
else if(para2 === 1 )
{


$scope.website = 'www.jmtrax.net';

}
else if(para2 === 2)
{


$scope.website = 'www.jmtransfer.co.uk';

}
else 
{

$scope.website = 'www.justcomputersparts.co.uk';

}


JmTrax.autofillOrder(para,para1,$scope.website).$promise.then(function(data) {


document.getElementById("senderfirstname").value = data.FIRSTNAME;
document.getElementById("senderlastname").value = data.LASTNAME;
document.getElementById("sendermobile").value = data.MOBILE;
document.getElementById("senderpostcode").value = data.POSTCODE;
document.getElementById("town").value = data.TOWN;
document.getElementById("line1").value = data.LINE1;
document.getElementById("recipientfirstname").value = data.RECFIRSTNAME;
document.getElementById("recipientsurname").value = data.RECLASTNAME;
document.getElementById("recbank").value = data.BANK;
document.getElementById("bankac").value = data.ACCOUNTNUMBER;
document.getElementById("reasonfortransfer").value = data.REASONFORTRANSFER;
document.getElementById("paymentref").value = data.PAYMENTREFERENCE;
document.getElementById("recipientphone").value = data.RECPHONE;


}, function(error) {

alert(error.status);

});


}





$scope.passwordconfirm = function () {

var email = document.getElementById("email").value;
var password = document.getElementById("pwd").value;
var cpassword = document.getElementById("confirmpwd").value;

if(password.length < 8)

{


document.getElementById("forgotemailerror").innerHTML = 'Password must be 8 characters in length';

}else if(password != cpassword)
{



document.getElementById("forgotemailerror").innerHTML = 'Password do not match';


}
else {


JmTrax.validatePassword($scope.website,email,password).$promise.then(function(data) {

if(data.error === undefined || data.error === ' ')
{

alert('Your password has been updated.');


window.open("http://www.jmtrax.net",'_self');

}
else
{

document.getElementById("forgotemailerror").innerHTML = data.error;


}


}, function(error) {

alert('f');

});

}


}

$scope.printallben = function () {

var x = document.getElementsByClassName("printallben");

alert(x.length);
x.submit();

}

$scope.passwordreset = function () {

var email = document.getElementById("email").value;
var token = document.getElementById("token").value;

JmTrax.validateToken($scope.website,email,token).$promise.then(function(data) {

if(data.error === 'submit')

{

$scope.password = false;
$scope.confirmpassword = false;
$scope.tokenbutton = true;
$scope.passwordconfirmbutton = false;
document.getElementById("forgotemailerror").innerHTML = 'Please enter you new password';


}
else
{

document.getElementById("forgotemailerror").innerHTML = data.error;


}




}, function(error) {

alert('f');

});




}

$scope.validateforgotpasword = function () {

var email = document.getElementById("email").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");


if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{




JmTrax.validateEmail($scope.website, email).$promise.then(function(data) {



if(data.error === 'submit')

{


document.getElementById("forgotpassword").submit();


}
else
{

alert(data.error);

}

}, function(error) {

alert('f');

});


}
else
{

document.getElementById("forgotemailerror").innerHTML = 'Please enter a valid email';
}






}


$scope.checkuser = function () {


var username = document.getElementById("username").value;



if(username == ' ')
{


window.open("http://www.jmtrax.net",'_self');

}



}


$scope.chooseben = function () {


$scope.receipients_ID = this.rec.RECID;



}

$scope.getcustomerBEN = function () {

var username = document.getElementById("username").innerHTML;

if(username == ' ')
{


window.open("http://www.jmtrax.net",'_self');

}

var RECID = document.getElementById("RECID").value;



JmTrax.details($scope.website,RECID,'getrecdetails.php').$promise.then(function(data) {


$scope.recipientsID = data.RECID;
$scope.recfname = data.RECFIRSTNAME;
$scope.reclname = data.RECLASTNAME;
$scope.recbank = data.BANK;
$scope.recaccount = data.ACCOUNTNUMBER;
$scope.recreasonfortransfer = data.REASONFORTRANSFER;
$scope.recpaymentref = data.PAYMENTREFERENCE;
$scope.recphone = data.RECPHONE;



} , function(error) {


alert(error.status);

});


JmTrax.getcustomersdetails($scope.website,username).$promise.then(function(data) {


$scope.senderdetails = data;

$scope.sendersid = data.senders_ID;


}, function(error) {

alert('f');

});



}




$scope.getcustomerrec = function () {

var username = document.getElementById("username").innerHTML;
if(username == ' ')
{


window.open("http://www.jmtrax.net",'_self');

}

JmTrax.getcustomerreceipients($scope.website,username).$promise.then(function(data) { $scope.receipentlist = data;



} , function(error) {

alert(error.status);


});


JmTrax.getcustomersdetails($scope.website,username).$promise.then(function(data) {


$scope.senderdetails = data;

$scope.sendersid = data.senders_ID;


}, function(error) {

alert('f');

});



}





$scope.getcustomertrans = function () {


var username = document.getElementById("username").innerHTML;


JmTrax.getcustomertransactions($scope.website,username).$promise.then(function(data) { 


$scope.dailytransactionlist = data; 



} , function(error) {



});



JmTrax.getcusttransactionsbysearchTOTAL($scope.website,username,$scope.startdate,$scope.enddate,'getcusttransactionsbysearchTOTAL.php').$promise.then(function(data) {


$scope.dailytransactionlistTOTAL = data;


} , function(error) {

alert(error.status);

});





}


$scope.getcustomerdetails = function () {

var username = document.getElementById("username").innerHTML;

if(username == ' ')
{


window.open("http://www.jmtrax.net",'_self');

}
else{JmTrax.getcustomersdetails($scope.website,username).$promise.then(function(data) {



$scope.sendersid = data.senders_ID;
$scope.senders_ID = data.senders_ID;
$scope.FIRSTNAME = data.FIRSTNAME;
$scope.LASTNAME = data.LASTNAME;
$scope.MOBILE = data.MOBILE;
$scope.EMAIL = data.EMAIL;

$scope.TYPEOFID =data.TYPEOFID;
$scope.IDNUM=data.IDNUM;
$scope.COUNTRYOFISSUE=data.COUNTRYOFISSUE;
$scope.EXPIRYDATE=data.EXPIRYDATE;
$scope.INCOME=data.INCOME;
$scope.ID=data.ID;
$scope.ADDRESS=data.ADDRESS;



JmTrax.details($scope.website,$scope.sendersid,'getsenderdetails.php').$promise.then(function(data) {



$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.SenderPostcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email,
$scope.sendersid= data.CustomerID;




} , function(error) {


alert(error.status);

});



JmTrax.getcustomerreceipients($scope.website,username).$promise.then(function(data) { $scope.receipentlist = data; } , function(error) {

alert(error.status);


});






}, function(error) {

alert('f');

});

}




};


$scope.validateUploadAddressForm = function ()

{
if(document.getElementById("userfile").value() != '')
{

document.getElementById("uploadaddress").submit();

}else{document.getElementById("addresserror").innerHTML ='Please upload proof';}


}

$scope.validateUploadIncomeForm = function ()

{

if(document.getElementById("userfile").value() != '')
{

document.getElementById("uploadincomeform").submit();

}else{document.getElementById("addresserror").innerHTML ='Please upload proof';}





}

$scope.completetransfer = function (para)


{



JMTRAX.ordercomment(para).then(

function(product) {



},

function(result) {




});







}


$scope.login = function ()


{


var username = $scope.username; 

var password = $scope.password;


$scope.custusername = username;

JmTrax.login($scope.website, username, password).$promise.then(function(data) {


if(data.error === undefined) { 

if(data.url === 'dashboard') {


if(data.question === undefined) {  


if(data.bank === undefined) {


document.getElementById("homepagelogin").submit(); }else { alert('You have reach you credit limit of'+ data.limit +'.Please do banking'); document.getElementById("homepagelogin").submit();
}



} else {

var answer = prompt(data.question);

if (answer === data.answer) {

document.getElementById("homepagelogin").submit();

}


}  } else {

document.getElementById("customerusername").value = username;

document.getElementById("customerapplogin").submit(); } } else { $scope.loginerror =  data.error;   }



} , function(error) {

alert(error.status);

});



}


$scope.showsenderform = function ()


{

$scope.senderdetails = true;

$scope.dashboard = false;

$scope.recform = true;

$scope.senderform = false;

$scope.recbutton = true;



}

$scope.searchmobilenumber = function ()


{

$scope.senderdetails = true;



var mobilenumber = document.getElementById("sendersmobile").value;

$scope.returned = {};



JmTrax.getsenderbymobile($scope.website,mobilenumber).$promise.then(function(data) {

if(data.error === undefined) { $scope.senderdetail = data;


var sID = data.senders_ID;

$scope.sendersid = data.senders_ID;



JmTrax.getsendersreceipients($scope.website,sID).$promise.then(function(data) { $scope.receipentlist = data; } , function(error) {



});


JmTrax.getsenderstransactions($scope.website,sID).$promise.then(function(data) { $scope.transactionlist = data; } , function(error) {



});

$scope.senderdetails = false;

$scope.recbutton = false;

$scope.dashboard = true;

$scope.recform = true;

$scope.senderform = true;



} else { $scope.sendererror = data.error;  }



}, function(error) {



});





}


$scope.getbanklist = function ()

{



JmTrax.values($scope.website,'getpayeebanks.php').$promise.then(function(data) { $scope.payeebanklist = data; } , function(error) {



});


JmTrax.values($scope.website,'getreceipientbanks.php').$promise.then(function(data) { $scope.sendingbanklist = data; } , function(error) {



});




}


$scope.selectbanks = function ()

{



JmTrax.details($scope.website,this.bank.bank_ID,'getbankdetails.php').$promise.then(function(data) {



$scope.recbank = data.banklist;  $scope.recbankID = data.bank_ID;


} , function(error) {


alert(error.status);

});



}

$scope.addrecbank = function ()

{



JmTrax.saverecbank($scope.website,$scope.recbank).$promise.then(function(data) { $scope.sendingbanklist = data; } , function(error) {
$scope.recbank = '';
alert(error.status);

});






}

$scope.payorder = function ()


{



var sendingbank = document.getElementById("recbank").value ;

var paymentmethod = document.getElementById("paymenttextfeild").value ;

var date = document.getElementById("datepicker").value ;


if(sendingbank == '' || paymentmethod == '' || date == '')

{


$scope.editordererror = "Sending bank , Payment method and Payment Date is needed";



}
else

{



var d = document.getElementById("TransactionorderID").value;



JmTrax.payorder($scope.website,d,document.getElementById("recbank").value,document.getElementById("paymenttextfeild").value,document.getElementById("datepicker").value).$promise.then(function(data) {


window.open('../dailytransactions','_self');



} , function(error) {


alert(error.status);

});


}


}

$scope.deleteorder = function ()


{




var txt;
var r = confirm("You are about to delete this order");


if (r == true) {



var d = document.getElementById("TransactionorderID").value;


JmTrax.deletedetails($scope.website,d,'deleteorder.php').$promise.then(function(data) {


window.open('../dailytransactions','_self');

$scope.sendingbanklist = data;


} , function(error) {


alert(error.status);

});
} else {


var d = document.getElementById("orderID").value;

alert(d);

}



}


$scope.deleterecbank = function ()

{




var r = confirm("You are about to delete this bank");
if (r == true) {
JmTrax.deletedetails($scope.website,$scope.recbankID,'deletebankdetails.php').$promise.then(function(data) {

$scope.recbank = '';
$scope.recbankID = '';

$scope.sendingbanklist = data;


} , function(error) {


alert(error.status);

});
} else {

}







}




var PayeeBank = function (name,sortcode,accountnumber,reference)

{
this.name = name;
this.sortcode = sortcode;
this.accountnumber = accountnumber;
this.reference = reference;

};



$scope.addpayeebank = function ()

{



var payeebank = new PayeeBank($scope.payeebankname,$scope.payeebanksortcode,$scope.payeebankaccountnumber,$scope.payeebankreference);



JmTrax.savePayeeBank($scope.website,payeebank).$promise.then(function(data) { $scope.payeebanklist = data; $scope.payeebankname ='';
$scope.payeebanksortcode ='';
$scope.payeebankaccountnumber='';
$scope.payeebankreference =''; } , function(error) {



});


}

$scope.selectpayeebank = function ()

{



JmTrax.details($scope.website,this.bank.BankId,'getbankdetailspayee.php').$promise.then(function(data) {


$scope.payeebankID = data.BankId ;
$scope.payeebankname = data.bankholdername;
$scope.payeebanksortcode = data.sortcode;
$scope.payeebankaccountnumber= data.accountnumber;
$scope.payeebankreference =data.ref;


} , function(error) {


alert(error.status);

});


}


$scope.deletepayeebank = function ()

{



var r = confirm("You are about to delete this bank");
if (r == true) {
JmTrax.deletedetails($scope.website,$scope.payeebankID,'deletebankdetailspayee.php').$promise.then(function(data) {


$scope.payeebankID = "" ;
$scope.payeebankname = "" ;
$scope.payeebanksortcode = "" ;
$scope.payeebankaccountnumber= "" ;
$scope.payeebankreference = "" ;

$scope.payeebanklist = data;


} , function(error) {


alert(error.status);

});

} else {

}






}


$scope.getcommissiontable = function ()

{ JmTrax.values($scope.website,'getcommisssionfees.php').$promise.then(function(data) { $scope.commissionfees = data; } , function(error) {



}); }




var Customer = function (ID,FirstName,LastName,MobilePhone,Postcode,line1,line2,line3,TOWN,COUNTY,EMAIL)

{
this.CustomerID = ID;
this.FirstName = FirstName;
this.LastName = LastName;
this.MobilePhone = MobilePhone;
this.Postcode = Postcode;
this.line1 = line1;
this.line2 = line2;
this.line3 = line3;
this.TOWN = TOWN;
this.COUNTY = COUNTY;
this.EMAIL = EMAIL;

};


$scope.getcustomerslist = function ()

{ JmTrax.values($scope.website,'getcustomerslist.php').$promise.then(function(data) { $scope.customerlist = data; } , function(error) {


}); }



$scope.selectcustomer = function ()
{


JmTrax.details($scope.website,this.cust.CustomerID,'getcustomerdetails.php').$promise.then(function(data) {


$scope.CustomerID = data.CustomerID,
$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.Postcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email


} , function(error) {


alert(error.status);

});







}



$scope.deletecustomer = function ()

{


var r = confirm("You are about to delete this customer");

if (r == true) {


JmTrax.deletedetails($scope.website,$scope.CustomerID,'deletecustomer.php').$promise.then(function(data) {


$scope.CustomerID ="";
$scope.FirstName ="";
$scope.LastName="";
$scope.MobilePhone="";
$scope.SenderPostcode ="";
$scope.line1 ="";
$scope.line2 ="";
$scope.line3 ="";
$scope.TOWN ="";
$scope.COUNTRY ="";
$scope.EMAIL = "";

$scope.customerlist = data;



} , function(error) {


alert(error.status);

});


} else {

}




}

$scope.addnewcustomer = function ()


{


var EmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var email = document.getElementById("customeremail").value;

if(EmailRegex.test(email))
{


var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;


var postcode = document.getElementById("postcode").value;

var customer = new Customer($scope.CustomerID,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode ,line1, line2,line3, town, county,email);

JmTrax.saveCustomer($scope.website,customer).$promise.then(function(data) {


if(data.error === undefined)

{

JmTrax.values($scope.website,'getcustomerslist.php').$promise.then(function(data) { $scope.customerlist = data; $scope.customerlist = data;
$scope.CustomerID ="";
$scope.FirstName ="";
$scope.LastName="";
$scope.MobilePhone="";
$scope.SenderPostcode ="";
$scope.line1 ="";
$scope.line2 ="";
$scope.line3 ="";
$scope.TOWN ="";
$scope.COUNTRY ="";
$scope.EMAIL = "";

} , function(error) {



});




}
else

{

$scope.customererror = data.error;

}


} , function(error) {


});



}
else
{

$scope.customererror = 'Not a valid email';

}








}

$scope.updatecustomer = function ()


{


var EmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var email = document.getElementById("customeremail").value;

if(EmailRegex.test(email))
{


var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;

var postcode = document.getElementById("postcode").value;

var customer = new Customer($scope.CustomerID,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode ,line1, line2,line3, town, county,email);

JmTrax.updateCustomer($scope.website,customer).$promise.then(function(data) {

$scope.customerlist = data;

JmTrax.details($scope.website,$scope.CustomerID,'getcustomerdetails.php').$promise.then(function(data) {


$scope.CustomerID = data.CustomerID,
$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.Postcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email


} , function(error) {


alert(error.status);

});








} , function(error) {


});



}
else
{

$scope.customererror = 'Not a valid email';


}





}


$scope.popform = function ()

{



var sendermobile = document.forms["senderform"]["building"].value ;

PostcodeAnywhere_Interactive_RetrieveById_v1_30Begin ('JJ14-GM21-XW16-FU78',sendermobile,'');


}

$scope.searchpostcode = function ()

{

var sendermobile = document.forms["senderform"]["postcode"].value ;



PostcodeAnywhere_Interactive_Find_v1_10Begin('JJ14-GM21-XW16-FU78',sendermobile);



}




var Rate = function (gbp,ngn)

{

this.gbp = gbp;
this.ngn = ngn;


};

$scope.getrates = function ()

{



{ JmTrax.values($scope.website,'getexchangerates.php').$promise.then(function(data) { $scope.exchangerates = data; } , function(error) {


}); }


}


$scope.updateRates = function ()

{


var customer = new Rate($scope.gbp,$scope.ngn);

{ JmTrax.updateRates($scope.website,customer).$promise.then(function(data) { $scope.exchangerates = data; } , function(error) {


}); }


}


$scope.getsenderslists = function ()
{



JmTrax.values($scope.website,'getsenderslist.php').$promise.then(function(data) { $scope.senderslist = data; } , function(error) {


}); }




$scope.searchsenderlastname = function ()

{


$scope.senderLName =  document.getElementById("senderlastname").value;


JmTrax.deletedetails($scope.website,document.getElementById("senderlastname").value,'getsenderlistbyname.php').$promise.then(function(data) {


$scope.senderslist = data;


} , function(error) {


alert(error.status);

});





}



$scope.getreceipientsandtransactions = function ()
{


{ JmTrax.values($scope.website,'getreceipients.php').$promise.then(function(data) { $scope.reclists = data; } , function(error) {



}); }


{ JmTrax.values($scope.website,'gettransactions.php').$promise.then(function(data) { $scope.transactions = data; } , function(error) {


}); }


}

$scope.benreport = true;

$scope.beneficiarysearch = function ()
{


$scope.recfname  = document.getElementById("recfirstname").value;

$scope.reclname  = document.getElementById("reclastname").value;

$scope.benreport = false;

}






$scope.getusers = function ()
{


JmTrax.values($scope.website,'getuserslist.php').$promise.then(function(data) { $scope.userlist = data; } , function(error) {

alert(error.status);

});


}


$scope.getbanking = function ()


{
var username = document.getElementById("username").value;



JmTrax.getbankingdeposits($scope.website,username).$promise.then(function(data) { $scope.bankinglists = data; } , function(error) {

alert(error.status);

});


JmTrax.getbankingTOTALS($scope.website,username).$promise.then(function(data) { $scope.bankinglistsTOTAL = data; } , function(error) {


alert(error.status);

});





}


$scope.bankingdates = function ()

{


$scope.startdate = document.getElementById("datepicker").value;

$scope.enddate = document.getElementById("datepicker1").value;

var username = document.getElementById("username").value;


JmTrax.getbankingbysearch($scope.website,username,$scope.startdate,$scope.enddate).$promise.then(function(data) { $scope.bankinglists = data; } , function(error) {

alert(error.status);

});



JmTrax.getbankingbysearchTOTAL($scope.website,username,$scope.startdate,$scope.enddate).$promise.then(function(data) { $scope.bankinglistsTOTAL = data; } , function(error) {

alert(error.status);

});




}


$scope.getfulltransactionlist = function ()

{

var username = document.getElementById("username").value;


JmTrax.getfulltransactions($scope.website,username).$promise.then(function(data) { $scope.dailytransactionlist = data; } , function(error) {

alert(error.status);

});



}


$scope.gettransactionsearch = function ()

{





}



$scope.getdaily = function ()
{


var username = document.getElementById("username").value;

JmTrax.getdailytransactions($scope.website,username).$promise.then(function(data) { $scope.dailytransactionlist = data; } , function(error) {
alert('f');
alert(error.status);

});


JmTrax.getdailytransactionsTOTALS($scope.website,username).$promise.then(function(data) { $scope.dailytransactionlistTOTAL = data; } , function(error) {
alert('f');
alert(error.status);

});





}

$scope.getfulllist = function ()
{



JmTrax.values($scope.website,'gettransactionsfull.php').$promise.then(function(data) { $scope.fulllist = data; } , function(error) {

alert(error.status);

});



}


$scope.getcusttransactionsbysearch = function ()


{



$scope.startdate = document.getElementById("datepicker").value;

$scope.enddate = document.getElementById("datepicker1").value;

var username = document.getElementById("username").innerHTML;





JmTrax.getcusttransactionsbysearch($scope.website,username,$scope.startdate,$scope.enddate,'getcusttransactionsbysearch.php').$promise.then(function(data) {



$scope.dailytransactionlist = data; 


} , function(error) {

alert(error.status);

});



JmTrax.getcusttransactionsbysearchTOTAL($scope.website,username,$scope.startdate,$scope.enddate,'getcusttransactionsbysearchTOTAL.php').$promise.then(function(data) {


$scope.dailytransactionlistTOTAL = data;


} , function(error) {

alert(error.status);

});




}

$scope.gettransactionsbysearch = function ()



{

$scope.startdate = document.getElementById("datepicker").value;

$scope.enddate = document.getElementById("datepicker1").value;

var username = document.getElementById("username").value;

JmTrax.gettransactionsbysearch($scope.website,username,$scope.startdate,$scope.enddate).$promise.then(function(data) {
 
$scope.dailytransactionlist = data; 


} , function(error) {

alert(error.status);

});


JmTrax.gettransactionsbysearchTOTAL($scope.website,username,$scope.startdate,$scope.enddate).$promise.then(function(data) { $scope.dailytransactionlistTOTAL = data; } , function(error) {

alert(error.status);

});




}


$scope.showshopreport = function ()

{

$scope.start = document.getElementById("datepicker").value;

$scope.end = document.getElementById("datepicker1").value;

$scope.shop = document.getElementById("selectedshop").value;


if($scope.start === ""  || $scope.end === "" || $scope.shop === "") {$scope.shoperror ='Choose you dates and shop'; }


else {

$scope.shoperror = "";


JmTrax.showactivityreport($scope.website,username,$scope.start,$scope.end,$scope.shop).$promise.then(function(data) {


$scope.activity = data;


} , function(error) {


alert(error.status);


});




}


}

$scope.addnewshop = function () {$scope.shop = document.getElementById("selectedshop").value;

if($scope.shop == "")

{

$scope.shoperror = 'Enter shop name' ;

}
else

{


JmTrax.saveshop($scope.website,$scope.shop,'saveshop.php').$promise.then(function(data) {



$scope.shop = '';


location.reload();
$scope.shoplist = data;


} , function(error) {


alert(error.status);


});




}


}

$scope.getshoplist = function () {



JmTrax.values($scope.website,'getshoplist.php').$promise.then(function(data) { $scope.shops = data; } , function(error) {

alert(error.status);

});




}



$scope.deleteshop = function () {

$scope.shop = document.getElementById("selectedshop").value;

if($scope.shop == "")

{

$scope.shoperror = 'Select a shop to delete' ;

}
else

{

var txt;
var r = confirm("You are about to delete this shop");
if (r == true) {

JmTrax.deleteshop($scope.website,$scope.shop,'deleteshop.php').$promise.then(function(data) {



$scope.shoplist = data;
$scope.shop = '';

location.reload();

} , function(error) {


alert(error.status);

});
} else {

}



}




}




$scope.updatecustsender = function() {


var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");



if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{


var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;


var postcode = document.getElementById("postcode").value;

if(postcode == "" || line1 =="" || town == "")

{

 $scope.sendererror = 'Your address is needed to continue';

}

else {


var customer = new Sender($scope.sendersid,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode,document.getElementById("line1").value,document.getElementById("line2").value,document.getElementById("line3").value,document.getElementById("town").value,document.getElementById("county").value,email);

JmTrax.updateSender($scope.website,customer).$promise.then(function(data) { $scope.senderdetails = false;

document.getElementById("senderform").submit();


} , function(error) {



});



}


}

else { $scope.sendererror = 'This is not a valid email'; }





}


$scope.convertcustomer = function() {


if($scope.sendersid === undefined)
{


alert('Senders must be selected');

}
else

{

var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");


if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{

JmTrax.details1($scope.website,$scope.sendersid,'convertsender.php',email).$promise.then(function(data) {


JmTrax.details($scope.website,$scope.sendersid,'getsenderdetails.php','').$promise.then(function(data) {

$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.SenderPostcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email,
$scope.USERNAME= data.USERNAME,
$scope.PASSWORD= data.PASSWORD,
$scope.SECRETQUESTION = data.SECRETQUESTION,
$scope.ANSWER= data.ANSWER,
$scope.USERID= data.USERID,

$scope.senderdetail.TYPEOFID =data.TYPEOFID;
$scope.senderdetail.IDNUM=data.IDNUM;
$scope.senderdetail.COUNTRYOFISSUE=data.COUNTRYOFISSUE;
$scope.senderdetail.EXPIRYDATE=data.EXPIRYDATE;
$scope.senderdetail.INCOME=data.INCOME;
$scope.senderdetail.ID=data.ID;
$scope.senderdetail.ADDRESS = data.ADDRESS;
$scope.sendersid = data.CustomerID;
$scope.senders_ID = data.CustomerID;


$scope.senderdetail.FIRSTNAME = data.FirstName;
$scope.senderdetail.LASTNAME = data.LastName;
$scope.senderdetail.MOBILE = data.MobilePhone;
$scope.senderdetail.EMAIL = data.Email;


$scope.senderdetails = false;
$scope.senderform = true;


} , function(error) {


alert(error.status);

});


} , function(error) {


alert(error.status);

});



}else {


alert('An email must be used');


}


}



}


$scope.updatesender = function() {


var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");

if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{


var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;


var postcode = document.getElementById("postcode").value;

if(line1 == '' || line2 =='' || line3 =='' || town=='' || county =='' || postcode =='')
{

$scope.sendererror = 'All fields are required'; 

var customer = new Sender($scope.sendersid,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode,document.getElementById("line1").value,document.getElementById("line2").value,document.getElementById("line3").value,document.getElementById("town").value,document.getElementById("county").value,email);

JmTrax.updateSender($scope.website,customer).$promise.then(function(data) { $scope.senderdetails = false;

$scope.senderform = true;


JmTrax.details($scope.website,$scope.sendersid,'getsenderdetails.php').$promise.then(function(data) {

$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.SenderPostcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email,

$scope.senderdetail.TYPEOFID =data.TYPEOFID;
$scope.senderdetail.IDNUM=data.IDNUM;
$scope.senderdetail.COUNTRYOFISSUE=data.COUNTRYOFISSUE;
$scope.senderdetail.EXPIRYDATE=data.EXPIRYDATE;
$scope.senderdetail.INCOME=data.INCOME;
$scope.senderdetail.ID=data.ID;
$scope.senderdetail.ADDRESS = data.ADDRESS;
$scope.sendersid = data.CustomerID;
$scope.senders_ID = data.CustomerID;


$scope.senderdetail.FIRSTNAME = data.FirstName;
$scope.senderdetail.LASTNAME = data.LastName;
$scope.senderdetail.MOBILE = data.MobilePhone;
$scope.senderdetail.EMAIL = data.Email;

$scope.senderdetail.USERNAME = data.USERNAME;
$scope.senderdetail.PASSWORD = data.PASSWORD;
$scope.senderdetail.SECRETQUESTION = data.SECRETQUESTION;
$scope.senderdetail.ANSWER = data.ANSWER;


} , function(error) {


alert(error.status);

});







} , function(error) {


});

}else
{




}

}

else { $scope.sendererror = 'This is not a valid email'; }





}




$scope.updatesenderLIST = function() {

var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");

if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{



var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;


var postcode = document.getElementById("postcode").value;


var customer = new Sender($scope.sendersid,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode,document.getElementById("line1").value,document.getElementById("line2").value,document.getElementById("line3").value,document.getElementById("town").value,document.getElementById("county").value,email);

JmTrax.updateSenderLIST($scope.website,customer).$promise.then(function(data) {

JmTrax.values($scope.website,'getsenderslist.php').$promise.then(function(data) { $scope.senderslist = data;


JmTrax.details($scope.website,$scope.sendersid,'getsenderdetails.php').$promise.then(function(data) {



$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.SenderPostcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email,
$scope.sendersid= data.CustomerID;


$scope.senderdetails = true;
$scope.senderform = false;


} , function(error) {


alert(error.status);

});





} , function(error) {



});


} , function(error) {



});



}

else { $scope.sendererror = 'This is not a valid email'; }


}



$scope.addnewsender = function() {


var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");

if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{



var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;

var postcode = document.getElementById("postcode").value;

if($scope.MobilePhone.length < 10  ) 

{


$scope.sendererror = 'This is not a valid UK number. Must be 10 digits without the leading zero';


}
else

{



var customer = new Sender($scope.sendersid,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode,document.getElementById("line1").value,document.getElementById("line2").value,document.getElementById("line3").value,document.getElementById("town").value,document.getElementById("county").value, email);

JmTrax.saveSender($scope.website,customer).$promise.then(function(data) {  $scope.senderdetail = data;


if(data.error === undefined)

{

$scope.FirstName = "",
$scope.LastName = "",
$scope.MobilePhone = "",
$scope.SenderPostcode= "",
$scope.line1= "",
$scope.line2= "",
$scope.line3= "",
$scope.TOWN= "",
$scope.COUNTY= "",
$scope.EMAIL= "",
$scope.sendersid = data.senders_ID,
$scope.senderdetails = false;
$scope.senderform = true;
$scope.dashboard = true;
$scope.recbutton = false;


}
else { $scope.sendererror = data.error; }





} , function(error) {

alert(error.status);

});


}



}
else
{

$scope.sendererror = 'This is not a valid email';

}





}



$scope.addnewsenderLIST = function() {


var email = document.getElementById("customeremail").value;

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");

if(atpos > 1 || dotpos > atpos+2 || dotpos+2 <= email.length)
{


var line1 = document.getElementById("line1").value;

var line2 = document.getElementById("line2").value;

var line3 = document.getElementById("line3").value;

var town = document.getElementById("town").value;

var county = document.getElementById("county").value;

var postcode = document.getElementById("postcode").value;



var customer = new Sender($scope.sendersid,$scope.FirstName,$scope.LastName,$scope.MobilePhone, postcode,document.getElementById("line1").value,document.getElementById("line2").value,document.getElementById("line3").value,document.getElementById("town").value,document.getElementById("county").value, email);

JmTrax.saveSenderLIST($scope.website,customer).$promise.then(function(data) {



if(data.error === undefined)

{

$scope.FirstName = "",
$scope.LastName = "",
$scope.MobilePhone = "",
$scope.SenderPostcode= "",
$scope.line1= "",
$scope.line2= "",
$scope.line3= "",
$scope.TOWN= "",
$scope.COUNTY= "",
$scope.EMAIL= "",
$scope.sendersid = "",

JmTrax.values($scope.website,'getsenderslist.php').$promise.then(function(data) { $scope.senderslist = data; } , function(error) {



});



}
else { $scope.sendererror = data.error; }




} , function(error) {

alert(error.status);

});

}
else
{

$scope.sendererror = 'This is not a valid email';

}




}



var User = function (USERNAME,MOBILE,EMAIL)

{

this.username = USERNAME;
this.mobile = MOBILE;
this.email = EMAIL;


};


$scope.signup = function() {

var password = document.getElementById("password").value;


var confirmedpassword = document.getElementById("confirmedpassword").value;

var username = document.getElementById("username").value;

var mobile = document.getElementById("mobile").value;

var email = document.getElementById("email").value;


if(password.length < 8 )

{

$scope.passworderror = 'Password must be 8 characters in length.';}

else

{

if(password != confirmedpassword)

{$scope.passworderror = 'Passwords do not match';}

else {

$scope.passworderror ='';

if(mobile[0] == 0){$scope.mobileerror='Phone must be UK format without the zero';}

else{

if(mobile.length != 10)

{$scope.mobileerror='Phone must be UK format without the zero';}else{ $scope.mobileerror= '';

var atpos= email.indexOf("@");

var dotpos= email.lastIndexOf(".");

if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length)
{

$scope.emailerror='Not a valid email';

}
else
{

$scope.emailerror='';

var comp = document.getElementById("agreement").checked;



if(comp == true)

{

$scope.agreement='';

JmTrax.values($scope.website,'getusername.php').$promise.then(function(data) {  $scope.usernames = data;


var users = [];


angular.forEach($scope.usernames, function(value, key) {


this.push(value.username);


}, users);



var pid = users.indexOf(username);



if (pid != -1)

{


$scope.usernameerror = 'Username already registered' ;

return false;

}
else
{

JmTrax.values($scope.website,'getemails.php').$promise.then(function(data) {  

$scope.emails= data;

$scope.Emails = [];

var emails = [];

angular.forEach($scope.emails, function(value, key) {

this.push(value.username);

}, emails);

var pid = emails.indexOf(document.getElementById("email").value);


if (pid != -1)

{

$scope.emailerror = 'Email already registered' ;

return false;

}
else
{

JmTrax.values($scope.website,'getmobilenumbers.php').$promise.then(function(data) {  $scope.mobiles = data;

var Mobiles = [];

angular.forEach($scope.mobiles, function(value, key) {

this.push(value.SendersMobile);

}, Mobiles);


var pid = Mobiles.indexOf(document.getElementById("mobile").value);


if (pid != -1)

{

$scope.mobileerror = 'Mobile number already registered' ;

return false;

}
else
{

document.forms["customerregistration"].submit();

//document.getElementById("customerregistration").submit();

}



} , function(error) {

alert(error.status);

});




}






});




}




});

}
else
{

$scope.agreement='You must agree to the terms and conditions';

return false;

}








}






}

}


}


}












}



var Sender = function (ID,FirstName,LastName,MobilePhone,Postcode,line1,line2,line3,TOWN,COUNTY,EMAIL)

{
this.CustomerID = ID;
this.FirstName = FirstName;
this.LastName = LastName;
this.MobilePhone = MobilePhone;
this.Postcode = Postcode;
this.line1 = line1;
this.line2 = line2;
this.line3 = line3;
this.TOWN = TOWN;
this.COUNTY = COUNTY;
this.EMAIL = EMAIL;

};


$scope.selectsender = function()

{



if($scope.sendersid === undefined)

{

$scope.sendersid =this.sender.sendersID;

}




JmTrax.details($scope.website,$scope.sendersid,'getsenderdetails.php').$promise.then(function(data) {



$scope.FirstName = data.FirstName,
$scope.LastName = data.LastName,
$scope.MobilePhone = data.MobilePhone,
$scope.SenderPostcode= data.SendersPostcode ,
$scope.line1= data.Line1,
$scope.line2= data.Line2,
$scope.line3= data.Line3,
$scope.TOWN= data.SenderTown,
$scope.COUNTY= data.County,
$scope.EMAIL= data.Email,
$scope.sendersid= data.CustomerID;


$scope.senderdetails = true;
$scope.senderform = false;


} , function(error) {


alert(error.status);

});


$scope.senderdetails = true;
$scope.senderform = false;






}




$scope.deletesender = function() {



var r = confirm("You are about to delete this sender");
if (r == true) {

JmTrax.deletedetails($scope.website,$scope.sendersid,'deletesender.php').$promise.then(function(data) {


$scope.FirstName = "",
$scope.LastName = "",
$scope.MobilePhone = "",
$scope.SenderPostcode= "",
$scope.line1= "",
$scope.line2= "",
$scope.line3= "",
$scope.TOWN= "",
$scope.COUNTY= "",
$scope.EMAIL= "",
$scope.sendersid = "",

$scope.senderdetails = true;

$scope.senderform = true;

$scope.sendersid = '';

JmTrax.values($scope.website,'getsenderslist.php').$promise.then(function(data) { $scope.senderslist = data; } , function(error) {



});



} , function(error) {


alert(error.status);

});


} else {

}



}




$scope.selectedrec = function() {



if($scope.recipientsID === undefined)

{

alert('You need to add or select a beneficiary');

}
else
{

document.getElementById("selectedrec").submit();

}



}




$scope.submitmoney = function() {


$scope.psender = document.getElementById('sendersid').value;



$scope.preferredsenders = [];

$scope.actual = document.getElementById('paymentsterling').value ;

JmTrax.values($scope.website,'getpreferredsender.php').$promise.then(function(data) {

$scope.psenders = data;

angular.forEach($scope.psenders, function(pvalue) {

$scope.preferredsenders.push(pvalue.sender_ID);


});


$scope.pid = $scope.preferredsenders.indexOf($scope.psender);


var comma = $scope.actual.indexOf(",");

if(comma == -1)

{


}
else

{

$scope.actual = $scope.actual.replace(',','');


}




if ( $scope.actual >= 700 && $scope.actual <= 3000.00 && $scope.pid == -1 )

{



var x = document.getElementById("pID").checked;

if(x != true)

{


document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
return false;

}

document.getElementById("psendererror").innerHTML = "";

var  h = document.getElementById("typeodID").value ;



if (h==null || h=="")

{

document.getElementById("psendererror").innerHTML = "Please choose the type of ID!";
return false;

}


var i= document.getElementById("IDnumber").value;


if (i==null || i=="")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID number!";
return false;


}


var j = document.getElementById("issuecountry").value ;



if (j==null || j=="")
{



document.getElementById("psendererror").innerHTML = "Please fill in country of issue!";
return false;

}

var expirydate = document.getElementById("expirydate").value ;



if (expirydate == null || expirydate  == "")

{



document.getElementById("psendererror").innerHTML = "What is the expiry date!";
return false;


}


var  picture = document.getElementById("userfile").value ;

if (picture == " " )

{

document.getElementById("psendererror").innerHTML = "Please upload proof of ID";
return false;

}


document.getElementById("myForm").submit();


}
else if($scope.actual >= 3000.01 && $scope.pid == -1)
{


var x = document.getElementById("pID").checked;

if(x != true)

{


document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
return false;

}

document.getElementById("psendererror").innerHTML = "";

var  h = document.getElementById("typeodID").value ;



if (h==null || h=="")

{

document.getElementById("psendererror").innerHTML = "Please choose the type of ID!";
return false;

}


var i= document.getElementById("IDnumber").value;


if (i==null || i=="")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID number!";
return false;


}


var j = document.getElementById("issuecountry").value ;



if (j==null || j=="")
{



document.getElementById("psendererror").innerHTML = "Please fill in country of issue!";
return false;

}


var expirydate = document.getElementById("expirydate").value ;



if (expirydate == null || expirydate  == "")

{



document.getElementById("psendererror").innerHTML = "What is the expiry date!";
return false;


}


var  picture = document.getElementById("userfile").value ;

if (picture == " " )

{

document.getElementById("psendererror").innerHTML = "Please upload proof of ID";
return false;

}


JmTrax.values($scope.website,'getsendersamounts.php').$promise.then(function(data) { $scope.amounts = data;

$scope.complianceamount = 0 ;

angular.forEach($scope.amounts, function(value) {


if(value.senders_ID === $scope.psender)

{
$scope.complianceamount = value.Amount;


if ((Number(value.Amount) + Number($scope.actual) >= 3000 )|| $scope.actual >= 3000)


{
var comp = document.getElementById("complianceformcheck").checked;

if(comp == true)

{


var compfile = document.getElementById("complianceform").value ;



if(compfile == '')

{

document.getElementById("paymenterror").innerHTML = "Please upload the Compliance form";
return false;

}
else
{


var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }


}



}

else
{

var deleteconfirmation = confirm('Youve reached your threshold limit of £3000 within the past 90 days. You will need to complete a compliance form to continue. Click cancel to upload your form now or ok to download form.');

if (deleteconfirmation == true)

{



$scope.complianceamount = Number(value.Amount) + Number($scope.actual);

document.getElementById("complianceform").submit();


return false;

}

else if (deleteconfirmation == false)

{


$scope.compliancediv = false;

return false;

}



}


}
else

{


var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }


}



}


});



} , function(error) {



});



}
else if ($scope.actual >= 3000.01 && $scope.pid != -1 )
{


JmTrax.values($scope.website,'getsendersamounts.php').$promise.then(function(data) { $scope.amounts = data;

$scope.complianceamount = 0 ;

angular.forEach($scope.amounts, function(value) {


if(value.senders_ID === $scope.psender)

{
$scope.complianceamount = value.Amount;


if ((Number(value.Amount) + Number($scope.actual) >= 3000 )|| $scope.actual >= 3000)


{
var comp = document.getElementById("complianceformcheck").checked;

if(comp == true)

{


var compfile = document.getElementById("complianceform").value ;



if(compfile == '')

{

document.getElementById("paymenterror").innerHTML = "Please upload the Compliance form";
return false;

}
else
{

var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }



}



}

else
{

var deleteconfirmation = confirm('Youve reached your threshold limit of £3000 within the past 90 days. You will need to complete a compliance form to continue. Click cancel to upload your form now or ok to download form.');

if (deleteconfirmation == true)

{



$scope.complianceamount = Number(value.Amount) + Number($scope.actual);

document.getElementById("complianceform").submit();


return false;

}

else if (deleteconfirmation == false)

{


$scope.compliancediv = false;

return false;

}



}


}
else

{

var laundering = document.getElementById("laundering").checked;

if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }




}



}


});



} , function(error) {



});


}

else if( $scope.actual < 700 &&  $scope.pid != -1)
{

var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }



}
else if( $scope.actual < 700 &&  $scope.pid == -1)
{

var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }



}
else if( $scope.actual >= 700 &&  $scope.pid != -1)
{

var laundering = document.getElementById("laundering").checked;


if(laundering == true)
{

document.getElementById("myForm").submit();

}else { alert('You must agree to our money laundering statement'); }




}







} , function(error) {



});



//document.getElementById("transferform").submit();


}

$scope.selectreceipient = function() {

$scope.senderdetails = true;

$scope.senderform = true;

$scope.recform = false;

$scope.dashboard = true;



JmTrax.details($scope.website,this.rec.RECID,'getrecdetails.php').$promise.then(function(data) {



$scope.recipientsID = data.RECID;
$scope.recfname = data.RECFIRSTNAME;
$scope.reclname = data.RECLASTNAME;
$scope.recbank = data.BANK;
$scope.recaccount = data.ACCOUNTNUMBER;
$scope.recreasonfortransfer = data.REASONFORTRANSFER;
$scope.recpaymentref = data.PAYMENTREFERENCE;
$scope.recphone = data.RECPHONE;



} , function(error) {


alert(error.status);

});




}


var Recipient = function (RECID, RECFIRSTNAME, RECLASTNAME, BANK, ACCOUNTNUMBER, REASONFORTRANSFER, PAYMENTREFERENCE, RECPHONE, SENDERSID,PAYPAL,SHOPACC)

{


this.recipientsID = RECID;
this.recfname = RECFIRSTNAME;
this.reclname = RECLASTNAME;
this.recbank =BANK;
this.recaccount = ACCOUNTNUMBER;
this.recreasonfortransfer = REASONFORTRANSFER;
this.recpaymentref = PAYMENTREFERENCE;
this.recphone = RECPHONE;
this.sendersid = SENDERSID;
this.paypal = PAYPAL;
this.shopacc = SHOPACC;

};

$scope.recbutton = true;

$scope.showrecform = function() {

document.getElementById("recerror").innerHTML = 'If details have changed please save before submitting.';
document.getElementById("recfirstnamepop").value == ''; 
document.getElementById("reclastnamepop").value == '' ;
document.getElementById("recmobile").value == '' ; 
document.getElementById("recbank").value =='' ; 
document.getElementById("recnumber").value == '';
document.getElementById("reasonfortransfer").value =='' ;
document.getElementById("paymenttextfeild").value == '' ;
$scope.recipientsID ='';


$scope.senderdetails = true;

$scope.senderform = true;

$scope.recform = false;

$scope.dashboard = true;



}

$scope.addreceipient = function() {


if(document.getElementById("recfirstnamepop").value == '' || document.getElementById("reclastnamepop").value == '' || document.getElementById("recmobile").value == '' || document.getElementById("recbank").value =='' || document.getElementById("recnumber").value == '' ||document.getElementById("reasonfortransfer").value =='' || document.getElementById("paymenttextfeild").value == '' )

{

document.getElementById("recerror").innerHTML = 'All field are required';

}

else

{


var customer = new Recipient('',$scope.recfname,$scope.reclname,document.getElementById("recbank").value,document.getElementById("recnumber").value,document.getElementById("reasonfortransfer").value,document.getElementById("paymenttextfeild").value,$scope.recphone,$scope.sendersid,$scope.paypal,$scope.shopacc);


JmTrax.savereceipient($scope.website,customer).$promise.then(function(data) {


document.getElementById("recfirstnamepop").value='';

document.getElementById("reclastnamepop").value='';

document.getElementById("recmobile").value='';

document.getElementById("recbank").value='';

document.getElementById("recnumber").value='';

document.getElementById("reasonfortransfer").value='';

document.getElementById("paymenttextfeild").value ='';

$scope.recipientsID = '';


JmTrax.getsendersreceipients($scope.website,$scope.sendersid).$promise.then(function(data) { $scope.receipentlist = data; } , function(error) {



});


JmTrax.getsenderstransactions($scope.website,$scope.sendersid).$promise.then(function(data) { $scope.transactionlist = data; } , function(error) {



});

/*document.getElementById("moneyorder").submit();*/
$scope.senderdetails = false;
$scope.senderform = true;
$scope.recform = 'true';


} , function(error) {





});


}



}


$scope.bankref= true;

$scope.updatereceipient = function() {


if(document.getElementById("paymenttextfeild").value == 'Bank' && $scope.shopacc == undefined)

{



$scope.bankref= false;





document.getElementById("recerror").innerHTML = 'Select a bank account to make your payment.This will be used to pay your beneficiary.';





}

else if(document.getElementById("recfirstnamepop").value == '' || document.getElementById("reclastnamepop").value == '' || document.getElementById("recmobile").value == '' || document.getElementById("recbank").value =='' || document.getElementById("recnumber").value == '' ||document.getElementById("reasonfortransfer").value =='' || document.getElementById("paymenttextfeild").value == '' )

{

document.getElementById("recerror").innerHTML = 'All field are required';

}

else if(document.getElementById("recnumber").value.length < 8 )
{
document.getElementById("recerror").innerHTML = 'Bank account must be 8 characters in length';


}

else

{


var customer = new Recipient($scope.recipientsID,$scope.recfname,$scope.reclname,document.getElementById("recbank").value,document.getElementById("recnumber").value,document.getElementById("reasonfortransfer").value,document.getElementById("paymenttextfeild").value,$scope.recphone,$scope.sendersid,$scope.paypal,$scope.shopacc);


JmTrax.updatereceipient($scope.website,customer).$promise.then(function(data) {



document.getElementById("moneyorder").submit();


} , function(error) {



});





}



}



$scope.ConfirmupdateCustreceipient = function() {



if(document.getElementById("recfirstnamepop").value == '' || document.getElementById("reclastnamepop").value == '' || document.getElementById("recmobile").value == '' || document.getElementById("recbank").value =='' || document.getElementById("recnumber").value == '' ||document.getElementById("reasonfortransfer").value =='' || document.getElementById("paymenttextfeild").value == '' )

{

document.getElementById("recerror").innerHTML = 'All field are required';

}

else

{


document.getElementById("moneyorder").submit();



}

}
$scope.updateCustreceipient = function() {



var customer = new Recipient($scope.recipientsID,$scope.recfname,$scope.reclname,document.getElementById("recbank").value,document.getElementById("recnumber").value,document.getElementById("reasonfortransfer").value,document.getElementById("paymenttextfeild").value,$scope.recphone,$scope.sendersid,$scope.paypal,$scope.shopacc);


JmTrax.updatereceipient($scope.website,customer).$promise.then(function(data) {

if($scope.recipientsID == undefined)
{

alert('You must select a beneficiary to update');


}
else
{

document.getElementById("selectedrec").submit();

}

/*location.reload();*/



} , function(error) {



});



}



$scope.deletereceipient = function() {


var r = confirm("You are about to delete this receipient");
if (r == true) {


JmTrax.deletedetails($scope.website,$scope.recipientsID,'deletereceipient.php').$promise.then(function(data) {


$scope.senderdetails = false;
$scope.senderform = true;
$scope.recform = 'true';




JmTrax.getsendersreceipients($scope.website,$scope.sendersid).$promise.then(function(data) { $scope.receipentlist = data; } , function(error) {



});


JmTrax.getsenderstransactions($scope.website,$scope.sendersid).$promise.then(function(data) { $scope.transactionlist = data; } , function(error) {


});



} , function(error) {


alert(error.status);

});



} else {
txt = "You pressed Cancel!";
}


}



$scope.getbanks = function() {

var agent = document.getElementById("agent").value;

var date = document.getElementById("datepicker2").value;






if(date == "" ||
$scope.amount == undefined || $scope.payment == undefined || $scope.sales == undefined ||  $scope.transfers == undefined || $scope.comments == undefined || agent == "")

{

$scope.bankingerrors = 'Fields with an asterisk are mandatory';

}
else
{


JMTRAX.add(date,$scope.amount,$scope.payment,$scope.bank,$scope.sales,$scope.transfers,$scope.comments,agent).then(

function(product) {


$scope.date ='';
$scope.amount =''; $scope.payment =''; $scope.bank =''; $scope.sales=''; $scope.transfers =''; $scope.comments ='';

var username = document.getElementById("username").value;

JmTrax.getbankingdeposits($scope.website,username).$promise.then(function(data) { $scope.bankinglists = data; } , function(error) {

alert(error.status);

});


JmTrax.getbankingTOTALS($scope.website,username).$promise.then(function(data) { $scope.bankinglistsTOTAL = data; } , function(error) {

alert(error.status);

});




},

function(result) {

alert(result.status);


});



}





}


$scope.deletebanking =  function() {


var d = this.bank.id;



JMTRAX.delete(d).then(

function(product) {



var username = document.getElementById("username").value;

JmTrax.getbankingdeposits($scope.website,username).$promise.then(function(data) { $scope.bankinglists = data; } , function(error) {

alert(error.status);

});


JmTrax.getbankingTOTALS($scope.website,username).$promise.then(function(data) { $scope.bankinglistsTOTAL = data; } , function(error) {

alert(error.status);

});



},

function(result) {

alert(result.status);


});




}



$scope.selectuser = function() {


JmTrax.details($scope.website,this.user.user_ID,'getuserdetails.php').$promise.then(function(data) {


$scope.user_ID = data.user_ID;
$scope.userfirstname =data.FirstName;
$scope.userlastname =data.LastName;
$scope.userusername =data.Username;
$scope.useranswer =data.Answer;
$scope.useremail =data.Email;
$scope.userpassword =data.Password;


$scope.exrights =data.Access;


$scope.usershop =data.Shop;
$scope.limit = data.Limit;



} , function(error) {


alert(error.status);

});


}


$scope.updateCustomerUser = function() {




var atpos= $scope.useremail.indexOf("@");

var dotpos= $scope.useremail.lastIndexOf(".");


if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= $scope.useremail.length)
{

$scope.usererror = 'Please check you email';

}
else if ($scope.userpassword != $scope.userpasswordconfirm){

$scope.usererror = 'Passwords must match';

}
else if ($scope.userpassword.length  < 8 )
{


$scope.usererror = 'Passwords must 8 characters in length';

}
else
{



var customer = new UserDETAILS($scope.user_ID,$scope.userfirstname,$scope.userlastname,$scope.userusername,$scope.useranswer ,$scope.useremail,$scope.userpassword,'Customer','Customer',$scope.question,'Customer','yes',$scope.limit);



JmTrax.saveUser($scope.website,customer).$promise.then(function(data) {


$scope.usererror = data.success;


} , function(error) {

alert('error'+ error.status);

});







}



}

$scope.selectCustUser = function() {



var username = document.getElementById("username").innerHTML;

if(username == ' ')
{


window.open("http://www.jmtrax.net",'_self');

}

JmTrax.details($scope.website,username,'getCustuserdetails.php').$promise.then(function(data) {


$scope.user_ID = data.user_ID;
$scope.userfirstname =data.FirstName;

$scope.userlastname =data.LastName;

$scope.userusername =data.Username;

$scope.useranswer =data.Answer;

$scope.useremail =data.Email;

$scope.userpassword =data.Password;





} , function(error) {


alert(error.status);

});


}





var UserDETAILS = function (USERID,FirstName,LastName,Username,Answer,Email,Password,Access,Shop,Question,Exrights,update,limit)

{

this.USERID = USERID;
this.FirstName = FirstName;
this.LastName = LastName;
this.Username = Username;
this.Answer = Answer ;
this.Email = Email;
this.Password = Password;
this.Access = Access;
this.Shop = Shop;
this.question = Question;
this.xrights = Exrights;
this.update = update;
this.limit = limit;

};




$scope.addnewuser = function() {



var EmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var email = document.getElementById("email").value;



if(EmailRegex.test(email))
{

if($scope.userpassword === $scope.userpasswordconfirm  )

{


if($scope.userpassword === undefined || $scope.userpasswordconfirm === undefined )

{

$scope.usererror = 'Password is needed';

}
else
{
if ($scope.useraccess === undefined )

{


$scope.usererror = 'Select users access rights';

}
else
{


var customer = new UserDETAILS($scope.user_ID,$scope.userfirstname,$scope.userlastname,$scope.userusername,$scope.useranswer ,email,$scope.userpassword,$scope.useraccess,document.getElementById("selectedshop").value,$scope.question,$scope.exrights,'no',$scope.limit);


JmTrax.saveUser($scope.website,customer).$promise.then(function(data) {


$scope.usererror = "";
if(data.error === undefined)

{


$scope.user_ID = "";
$scope.userfirstname ="";
$scope.userlastname ="";
$scope.userusername ="";
$scope.useranswer ="";
$scope.useremail ="";
$scope.userpassword ="";
$scope.exrights ="";
$scope.usershop ="";
$scope.userpasswordconfirm ="";
$scope.limit ="";


JmTrax.values($scope.website,'getuserslist.php').$promise.then(function(data) { $scope.userlist = data; } , function(error) {



});


}
else
{

$scope.usererror = data.error;

}



} , function(error) {

alert(error.status);

});




}

}

}
else {  $scope.usererror = 'Passwords do not match'; }




}
else
{

$scope.usererror = 'Not a valid email';



}




}

$scope.updateuser = function() {

var EmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var email = document.getElementById("email").value;



if(EmailRegex.test(email))
{




if($scope.userpassword === $scope.userpasswordconfirm)

{

if($scope.userpassword.length < 8)

{

$scope.usererror = 'Passwords must be 8 characters in length';


}
else
{


var customer = new UserDETAILS($scope.user_ID,$scope.userfirstname,$scope.userlastname,$scope.userusername,$scope.useranswer ,email,$scope.userpassword,$scope.useraccess,document.getElementById("selectedshop").value,$scope.question,$scope.exrights,'yes',$scope.limit);



JmTrax.saveUser($scope.website,customer).$promise.then(function(data) {



$scope.usererror = "";


JmTrax.values($scope.website,'getuserslist.php').$promise.then(function(data) { $scope.user_ID ='';
$scope.userpasswordconfirm ='';
$scope.userfirstname='';
$scope.userlastname='';
$scope.userusername='';
$scope.useranswer='';
document.getElementById("email").value ='';
$scope.userpassword ='';
$scope.useraccess ='';
document.getElementById("selectedshop").value ='';
$scope.question ='';
$scope.exrights='';
$scope.userlist = data; $scope.limit ="";} , function(error)
{

alert(error.status);

});




} , function(error) {

alert('cert'+error.status);

});



}




}

else

{

$scope.usererror = 'Passwords do not match';


}


}

else

{
$scope.usererror = 'Not a valid email.';


}

}

$scope.deleteuser = function() {

var r = confirm("You are about to delete this order");


if (r == true) {

JmTrax.deletedetails($scope.website,$scope.user_ID,'deleteuser.php').$promise.then(function(data) {

JmTrax.values($scope.website,'getuserslist.php').$promise.then(function(data) { $scope.userlist = data; $scope.user_ID = "";
$scope.userfirstname ="";
$scope.userlastname ="";
$scope.userusername ="";
$scope.useranswer ="";
$scope.useremail ="";
$scope.userpassword ="";
$scope.exrights ="";
$scope.usershop ="";
$scope.userpasswordconfirm ="";
$scope.user_ID = '';


} , function(error)

{



});


} , function(error) {


alert(error.status);

});

}
else
{

}




}




$scope.validateOrders = function() {



var sendingbank = document.forms["orderbookform"]["ordersendingbank"].value ;

var paymentmethod = document.forms["orderbookform"]["orderpaymentmethod"].value ;

if(sendingbank == '' || paymentmethod == '')

{


document.getElementById("ordersendingbankerror").innerHTML = "Sending bank and Payment method is needed";

return false;

}
else

{

document.getElementById('orderbookform').submit();



}




}

$scope.deleteOrder = function() {

var deleteconfirmation = confirm('Your about to delete this transaction');

if (deleteconfirmation == true)

{



document.getElementById('orderdeleteform').submit();

}

else if (deleteconfirmation == false)

{

return false;

}


}


$scope.compliancediv = true;


$scope.validateNGNorder = function() {






var b=document.forms["NGNmyForm"]["senderfirstname"].value;


if (b==null || b=="")

{

window.open("#senderfirstname","_self");
document.getElementById("sendererror").innerHTML = "Sender first name must be filled out";
return false;





}



var a= document.forms["NGNmyForm"]["senderlastname"].value;


if (a==null || a=="")

{



document.getElementById("sendererror").innerHTML = "Sender last name must be filled out";
window.open('#senderfirstname','_self');
return false;



}




var e=document.forms["NGNmyForm"]["sendermobile"].value;


if (e==null || e=="")
{


document.getElementById("sendererror").innerHTML = "Sender mobile must be filled out";
window.open('#senderfirstname','_self');
return false;


}


var c=document.forms["NGNmyForm"]["recipientfirstname"].value;


if (c==null || c=="")
{


document.getElementById("recipienterror").innerHTML = "Beneficiary first name must be filled out";
window.open('#senderfirstname','_self');
return false;


}

var d=document.forms["NGNmyForm"]["recipientsurname"].value;


if (d==null || d=="")
{

document.getElementById("recipienterror").innerHTML = "Beneficiary last name must be filled out";
window.open('#senderfirstname','_self');
return false;


}


var recipientphone = document.forms["NGNmyForm"]["recipientphone"].value;



if (recipientphone ==null || recipientphone =="")
{

document.getElementById("recipienterror").innerHTML = "Beneficiary phone number must be filled out";
window.open('#senderfirstname','_self');
return false;


}

var f=document.forms["NGNmyForm"]["bankac"].value;


if (f==null || f=="")
{


document.getElementById("paymenterror").innerHTML = "Beneficiary bank account must be filled out";
window.open('#recbankdetails','_self');
return false;


}


var g=document.forms["NGNmyForm"]["bankac"].value.length;

if ( g > 10 || g < 10 )

{



document.getElementById("paymenterror").innerHTML = "Bank account must be 10 characters in length";
window.open('#recbankdetails','_self');
return false;


}





$scope.psender = document.forms["NGNmyForm"]["sendersid"].value ;



$scope.preferredsenders = [];

$scope.actual = document.forms["NGNmyForm"]["paymentsterling"].value ;


JmTrax.values($scope.website,'getpreferredsender.php').$promise.then(function(data) {  $scope.psenders = data;




angular.forEach($scope.psenders, function(pvalue) {


$scope.preferredsenders.push(pvalue.sender_ID);



});


$scope.pid = $scope.preferredsenders.indexOf($scope.psender);



var comma = $scope.actual.indexOf(",");

if(comma == -1)

{


}
else

{

$scope.actual = $scope.actual.replace(',','');


}



if ( $scope.actual >= 700 && $scope.pid == -1 )

{


var x = document.getElementById("pID").checked;

if(x == true)

{


var picture = document.forms["NGNmyForm"]["userfile"].value ;


if (picture == null || picture =="" )

{

document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;

}


}

else
{


document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;





}



var  h = document.forms["NGNmyForm"]["typeodID"].value ;

if (h==null || h=="")

{


document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;

}


var i= document.forms["NGNmyForm"]["IDnumber"].value;

if (i==null || i=="")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;


}


var j = document.forms["NGNmyForm"]["issuecountry"].value ;



if (j==null || j=="")
{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;

}


var expirydate = document.forms["NGNmyForm"]["expirydate"].value ;



if (expirydate == null || expirydate  == "")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;


}


var  picture = document.forms["NGNmyForm"]["userfile"].value ;

if (picture == " " )

{

document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;

}


document.getElementById("NGNmyForm").submit();


}
else if ($scope.actual >= 3000.01)
{


JmTrax.values($scope.website,'getsendersamounts.php').$promise.then(function(data) { $scope.amounts = data;

$scope.complianceamount = 0 ;

angular.forEach($scope.amounts, function(value) {




if(value.senders_ID === $scope.psender)

{
$scope.complianceamount = value.Amount;


if ((Number(value.Amount) + Number($scope.actual) >= 3000 )|| $scope.actual >= 3000)


{
var comp = document.getElementById("complianceformcheck").checked;

if(comp == true)

{


var compfile = document.forms["NGNmyForm"]["complianceform"].value ;



if(compfile == '')

{

document.getElementById("paymenterror").innerHTML = "Please upload the Compliance form";
window.open('#recbankdetails','_self');
return false;

}
else
{


document.getElementById("NGNmyForm").submit();


}



}

else
{

var deleteconfirmation = confirm('Youve reached your threshold limit of £3000 within the past 90 days. You will need to complete a compliance form to continue. Click cancel to upload your form now or ok to download form.');

if (deleteconfirmation == true)

{



$scope.complianceamount = Number(value.Amount) + Number($scope.actual);

document.getElementById("complianceform").submit();


return false;

}

else if (deleteconfirmation == false)

{


$scope.compliancediv = false;

return false;

}



}


}
else

{


document.getElementById("NGNmyForm").submit();


}



}


});



} , function(error) {



});





}

else {

document.getElementById("NGNmyForm").submit();

}



} , function(error) {



});
















}



$scope.validateorder = function ()

{




var b=document.forms["myForm"]["senderfirstname"].value;


if (b==null || b=="")

{

window.open("#senderfirstname","_self");
document.getElementById("sendererror").innerHTML = "Sender first name must be filled out";
return false;





}



var a= document.forms["myForm"]["senderlastname"].value;


if (a==null || a=="")

{



document.getElementById("sendererror").innerHTML = "Sender last name must be filled out";
window.open('#senderfirstname','_self');
return false;



}




var e=document.forms["myForm"]["sendermobile"].value;


if (e==null || e=="")
{


document.getElementById("sendererror").innerHTML = "Sender mobile must be filled out";
window.open('#senderfirstname','_self');
return false;


}


var c=document.forms["myForm"]["recipientfirstname"].value;


if (c==null || c=="")
{


document.getElementById("recipienterror").innerHTML = "Beneficiary first name must be filled out";
window.open('#senderfirstname','_self');
return false;


}

var d=document.forms["myForm"]["recipientsurname"].value;


if (d==null || d=="")
{

document.getElementById("recipienterror").innerHTML = "Beneficiary last name must be filled out";
window.open('#senderfirstname','_self');
return false;


}


var recipientphone = document.forms["myForm"]["recipientphone"].value;



if (recipientphone ==null || recipientphone =="")
{

document.getElementById("recipienterror").innerHTML = "Beneficiary phone number must be filled out";
window.open('#senderfirstname','_self');
return false;


}

var f=document.forms["myForm"]["bankac"].value;


if (f==null || f=="")
{


document.getElementById("paymenterror").innerHTML = "Beneficiary bank account must be filled out";
window.open('#recbankdetails','_self');
return false;


}


var g=document.forms["myForm"]["bankac"].value.length;

if ( g > 10 || g < 10 )

{



document.getElementById("paymenterror").innerHTML = "Bank account must be 10 characters in length";
window.open('#recbankdetails','_self');
return false;


}





$scope.psender = document.forms["myForm"]["sendersid"].value ;



$scope.preferredsenders = [];

$scope.actual = document.forms["myForm"]["paymentsterling"].value ;


JmTrax.values($scope.website,'getpreferredsender.php').$promise.then(function(data) {  $scope.psenders = data;




angular.forEach($scope.psenders, function(pvalue) {


$scope.preferredsenders.push(pvalue.sender_ID);



});


$scope.pid = $scope.preferredsenders.indexOf($scope.psender);





var comma = $scope.actual.indexOf(",");

if(comma == -1)

{


}
else

{

$scope.actual = $scope.actual.replace(',','');


}



if ( $scope.actual >= 700 && $scope.pid == -1 )

{


var x = document.getElementById("pID").checked;

if(x == true)

{


var picture = document.forms["myForm"]["userfile"].value ;


if (picture == null || picture =="" )

{

document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;

}


}

else
{


document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;





}



var  h = document.forms["myForm"]["typeodID"].value ;

if (h==null || h=="")

{


document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;

}


var i= document.forms["myForm"]["IDnumber"].value;

if (i==null || i=="")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;


}


var j = document.forms["myForm"]["issuecountry"].value ;



if (j==null || j=="")
{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;

}


var expirydate = document.forms["myForm"]["expirydate"].value ;



if (expirydate == null || expirydate  == "")

{



document.getElementById("psendererror").innerHTML = "Please fill in all ID details!";
window.open('#senderfirstname','_self');
return false;


}


var  picture = document.forms["myForm"]["userfile"].value ;

if (picture == " " )

{

document.getElementById("psendererror").innerHTML = "Please upload the senders ID";
window.open('#senderfirstname','_self');
return false;

}


document.getElementById("myForm").submit();


}
else if ($scope.actual >= 3000.01)
{





JmTrax.values($scope.website,'getsendersamounts.php').$promise.then(function(data) { $scope.amounts = data;

$scope.complianceamount = 0 ;

angular.forEach($scope.amounts, function(value) {


if(value.senders_ID === $scope.psender)

{
$scope.complianceamount = value.Amount;


if ((Number(value.Amount) + Number($scope.actual) >= 3000 )|| $scope.actual >= 3000)


{
var comp = document.getElementById("complianceformcheck").checked;

if(comp == true)

{


var compfile = document.forms["myForm"]["complianceform"].value ;



if(compfile == '')

{

document.getElementById("paymenterror").innerHTML = "Please upload the Compliance form";
window.open('#recbankdetails','_self');
return false;

}
else
{


document.getElementById("myForm").submit();


}



}

else
{

var deleteconfirmation = confirm('Youve reached your threshold limit of £3000 within the past 90 days. You will need to complete a compliance form to continue. Click cancel to upload your form now or ok to download form.');

if (deleteconfirmation == true)

{



$scope.complianceamount = Number(value.Amount) + Number($scope.actual);

document.getElementById("complianceform").submit();


return false;

}

else if (deleteconfirmation == false)

{


$scope.compliancediv = false;

return false;

}



}


}
else

{


document.getElementById("myForm").submit();


}



}


});



} , function(error) {



});





}

else {

document.getElementById("myForm").submit();

}



} , function(error) {



});
















}



$scope.gohome = function ()

{


window.open('../dailytransactions','_self');



}





}]);






angular.module('senderlastnameFilters', []).filter('recnamesearch', function() {

return function(input,parameter,parameter1) {

var log = [];

if(parameter === undefined && parameter1 === undefined)
{



}
else if (parameter != undefined && parameter1 != undefined)
{


var log = [];


angular.forEach(input, function(value, key) {

if (value.RECFIRSTNAME === parameter  &&  value.RECLASTNAME === parameter1) { this.push(value); }


}, log);


}
else if (parameter != undefined && parameter1 === undefined)
{


var log = [];


angular.forEach(input, function(value, key) {

if (value.RECFIRSTNAME === parameter ) { this.push(value); }


}, log);


}
else if (parameter === undefined && parameter1 != undefined)
{


var log = [];


angular.forEach(input, function(value, key) {

if (value.RECLASTNAME === parameter1 ) { this.push(value); }


}, log);


}


return log;


}

});










function PostcodeAnywhere_Interactive_Find_v1_10Begin(Key,Postcode)
{


var scriptTag = document.getElementById("PCAe4b2e7e1d8a241dead6229b29fb22327");
var headTag = document.getElementsByTagName("head").item(0);
var strUrl = "";

strUrl = "http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/Find/v1.10/json.ws?";
strUrl += "&Key=" + encodeURI(Key);
strUrl += "&SearchTerm=" + encodeURI(Postcode);
strUrl += "&CallbackFunction=PostcodeAnywhere_Interactive_Find_v1_10End";

if (scriptTag)
{
try
{
headTag.removeChild(scriptTag);
}
catch (e)
{
//Ignore
}
}
scriptTag = document.createElement("script");
scriptTag.src = strUrl
scriptTag.type = "text/javascript";
scriptTag.id = "PCAe4b2e7e1d8a241dead6229b29fb22327";
headTag.appendChild(scriptTag);

}



function PostcodeAnywhere_Interactive_Find_v1_10End(response)
{
var i = 0;


//Test for an error
if (response.length==1 && typeof(response[0].Error) != 'undefined')
{
//Show the error message
alert(response[0].Description);
}
else
{
//Check if there were any items found
if (response.length==0)
{
alert("Sorry, no matching items found");
}
else
{
document.getElementById('building').options.length= response.length;
while (i < response.length)
{
document.getElementById('building').options[i].label= response[i].StreetAddress;
document.getElementById('building').options[i].value= response[i].Id;
i++;                }
}
}
}


function PostcodeAnywhere_Interactive_RetrieveById_v1_30Begin(Key,Id, UserName)
{

var scriptTag = document.getElementById("PCAb9b445072c50417b82ad4204c2ec66c1");
var headTag = document.getElementsByTagName("head").item(0);
var strUrl = "";
//Build the url
strUrl = "http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveById/v1.30/json.ws?";
strUrl += "&Key=" + encodeURI(Key);
strUrl += "&Id=" + encodeURI(Id);
strUrl += "&UserName=" + encodeURI(UserName);
strUrl += "&CallbackFunction=PostcodeAnywhere_Interactive_RetrieveById_v1_30End";
//Make the request
if (scriptTag)
{
try
{
headTag.removeChild(scriptTag);
}
catch (e)
{
//Ignore
}
}
scriptTag = document.createElement("script");
scriptTag.src = strUrl
scriptTag.type = "text/javascript";
scriptTag.id = "PCAb9b445072c50417b82ad4204c2ec66c1";
headTag.appendChild(scriptTag);
}

function PostcodeAnywhere_Interactive_RetrieveById_v1_30End(response)
{
//Test for an error
if (response.length==1 && typeof(response[0].Error) != 'undefined')
{
//Show the error message
alert(response[0].Description);
}
else
{
//Check if there were any items found
if (response.length==0)
{
alert("Sorry, no matching items found");
}
else
{

document.getElementById("line1").value= response[0].Line1;
document.getElementById("line2").value= response[0].Line2;
document.getElementById("line3").value= response[0].Line3;
document.getElementById("town").value= response[0].PostTown;
document.getElementById("county").value= response[0].County;
document.getElementById("postcode").value= response[0].Postcode;
}
}
}