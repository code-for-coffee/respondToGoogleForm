 $('#input-form').one('submit',function(){
        var inputq1 = encodeURIComponent($('#input-q1').val());
        var inputq2 = encodeURIComponent($('#input-q2').val());
     	var inputq3 = encodeURIComponent($('#input-q3').val());

        var q1ID = "entry.2099813541";
        var q2ID = "entry.691828744";
    	var q3ID = "entry.1593172006";
        var baseURL = 'https://docs.google.com/forms/d/1uCGBqPfQKyn9UQJLYdmWwUhi3ANGDTyyffopS1WoK7Y/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 +  "&" + q3ID + "=" + inputq3 + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
     	$('button').prop('disabled');
    });
