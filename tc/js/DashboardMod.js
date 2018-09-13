(function(){
    'use strict';
    angular.module('dashboardModule', ['ngRoute']);

    angular.module('dashboardModule').controller('dashboardCtrl', [
        '$scope', dashboardCtrlFn
    ]);
    function dashboardCtrlFn ($scope) {
        $scope.macAddress ='';
        $scope.contractId ='';
        $scope.searchIsOver = false;

        $scope.startDate = '';
        $scope.endDate = '';

        $scope.tablesScreen = false;
        $scope.graphsScreen = false;

        $scope.autofill = function(name) {
            autocomplete(document.getElementById(name), name);
        };

        $scope.setFormat = function(macAddress) {
            document.getElementById("macAddress").value = macAddress.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1 ').trim().replace(/ /g,'-');
        };

        $scope.doSearch = function() {
            $scope.macAddress = document.getElementById("macAddress").value;
            $scope.contractId = document.getElementById("contractId").value;
            $scope.tablesScreen = true;
            $scope.graphsScreen = false;
            $scope.searchIsOver = true;

        };
        $scope.restartSearch = function() {
            $scope.macAddress = "";
            $scope.contractId = "";
            $scope.tablesScreen = false;
            $scope.graphsScreen = false;
            $scope.searchIsOver = false;

        };

        $scope.setScreen = function (value) {
            $scope.tablesScreen = value=='tables';
            $scope.graphsScreen = value=='graphs';
        };
        $scope.pickDate = function (value) {

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1;

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            var endDate = dd+'.'+mm+'.'+yyyy;
            $scope.endDate = endDate;

            var startDay = new Date();
            startDay.setDate(today.getDate()-value);
            dd = startDay.getDate();
            mm = startDay.getMonth()+1;

            yyyy = startDay.getFullYear();
            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            startDay = dd+'.'+mm+'.'+yyyy;
            $scope.startDate = startDay;

            if (document.getElementsByName("daterange").length>0){
                document.getElementsByName("daterange")[0].value = startDay+" - "+endDate;
            }

        };
        $scope.pickDate(1);
    }

    function autocomplete(inp, arr) {
        var macAddress = [
            '58-90-77-22-75-5C',
            '5A-3D-30-13-8F-15',
            'A3-43-AE-41-2E-D7',
            'B6-06-F6-C7-D5-04',
            '9D-01-4A-A4-CB-91',
            'D7-C4-71-4A-47-35',
            '0D-D3-6B-05-86-59'
        ];
        var contractId = [
            '54867972',
            '31495080',
            '31452503',
            '79238775',
            '39531833',
            '33992438',
            '93603004'
        ];
        if(arr=='macAddress'){
            arr=macAddress;
        }
        else {
            arr=contractId;
        }
        var currentFocus;

        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                        checkContractId();
                    });
                    a.appendChild(b);
                }
            }
        });

        inp.addEventListener("keyup", function(e) {

            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });

        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
            checkContractId();
        }
        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        function checkContractId() {
            var contractIdValue = document.getElementById("contractId").value;
            for (var i = 0; i < macAddress.length; i++) {
                if (contractId[i]== contractIdValue) {
                    document.getElementById("macAddress").value = macAddress[i];
                }
            }
        }
    }

})();

$('input[name="dates"]').daterangepicker();
