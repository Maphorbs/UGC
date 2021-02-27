$('#ajform').ajaxForm({
    beforeSubmit: bfsub,
    success: afsub});
    function bfsub(){
    $('.ajnotice').html('Please wait, this will only take a moment...');
    $('.uppro').hide();
    }function afsub(data){
    if(data == 'Invalid file type, accepted formats is jpg'){return alert(data);}else{
    $('.ajnotice').html('<a href="download.php?file='+data+'" class="btn btn-success" style="margin-top:5px">DOWNLOAD YOUR DP</a>');
    $('.tm').html('<img src="'+data+'">');}
    $('.uppro').fadeIn();
    }