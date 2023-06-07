var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);

// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// var today = year + "-" + month + "-" + day;       
// document.getElementById("theDate").value = today;




{/* <div id="current_date"></p>
<input type=date id=e min=e>
<script>
document.getElementById('e').value = new Date().toISOString().substring(0, 10);
</script> */}