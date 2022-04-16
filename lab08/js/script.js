$(document).ready(function(){
  let btnConvert = $('#btnConvert');
  let txtFrom = $('#from');
  let txtTo = $('#to');

  btnConvert.click(function(){
    if(txtFrom.val().length === 0)
      return;

    let valueFrom = txtFrom.val();

    let access_key = '6d4f7fe0d785df50a1989e43aaf57a43';
    let api_function = 'latest';
    let api = `http://data.fixer.io/api/${api_function}?access_key=${access_key}`;
    $.ajax({
      url: api,
      dataType: 'json',
      success: function(data) {
        let value = parseFloat(data.rates['USD']) * parseFloat(valueFrom);
        txtTo.val(value)
      }
    });
  });
});