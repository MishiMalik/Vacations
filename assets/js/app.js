
$(document).ready(function () {
    $('.js-example-basic-single').select2({
        placeholder: "Select Destination (country, region or city)",
        allowClear: true,
        tags:true
    });
    var wrapper = $(".plan-select"); 
    var add_button = $(".add-destination"); 
    $(add_button).click(function (e) { 
        e.preventDefault();
        var el = $(wrapper).append('<div class="mt-2"><select id="select-custom" class=" signle-input js-example-basic-single js-states form-control mt-2" data-placeholder="Select Destination (country, region or city)"><option></option><option value="UK">United Kingdom</option><option value="US">United States</option><option value="AS">Austrailia</option><option value="CA">Caneda</option><option value="PK">Pakistan</option><option value="IN">India</option><option value="AM">America</option><option value="CH">China</option><option value="JP">Japan</option><option value="SL">SriLanka</option> </select></div>'); //add input box
        var selectCustom = el.find('select:last-child');
        selectCustom.select2({
            placeholder: "Select Destination (country, region or city)",
            allowClear: true,
            tags:true
        });
        selectCustom.css('margin-top', '0.5rem');
    });
});
// $(document).ready(function () {
//     $('.js-example-basic-single').select2({
//         // theme: "classic",
//         placeholder: "Select Destination (country, region or city)",
//         allowClear: true
//     });
// });



$('.select2-search__field').css('width', '100%');

var backgrounds = ["plan-header1", "plan-header2", "plan-header3", "plan-header4", "plan-header5"];

// Multi-Step Form
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "flex";

    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Next";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)
}

// Multi form next bt
var count = 1;
function nextPrev(n) {
    $('#top').addClass(backgrounds[count++])

    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

// Multform vaidation
function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input,select");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

// multiform step indicatora
function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}



// open and close side bar
function openNav() {
    document.getElementById("mySidepanel").style.width = "308px";
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}





// Tabs changes

$('.tabcontent2').eq(0).css('display', 'block')

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

// document.getElementById("defaultOpen").click();

// clear date
function clearDate() {
    document.getElementById('date-input1').value = "";
    document.getElementById('date-input2').value = "";
}
