(function(){
    'use strict';

    angular.module('tablesModule', ['ngRoute']);

    angular.module('tablesModule').controller('tablesCtrl', ['$scope', tablesModuleFn]);

    function tablesModuleFn ($scope) {
        $scope.showInfo = true;
        $scope.columnNumber = 4;

        $scope.showInfoFn = function () {
            if($scope.showInfo){
                $scope.showInfo = false;
                $scope.columnNumber = 6;
            }
            else {
                $scope.showInfo = true;
                $scope.columnNumber = 4;
            }
        }

        $scope.statusData = [
            {text: "Overall Status", value: "Medium"},
            {text: "RSS Status", value: "Bad"},
            {text: "Client RSS Status", value: "Medium"},
            {text: "Sticky Client Status", value: "Good"},
        ];
        $scope.interferenceStatusData = [
            {text: "Interference Status - overall", value: "Medium"},
            {text: "Interference Status Co - Channel", value: "Good"},
            {text: "Interference Status - Adjacent", value: "Bad"}
        ];
        $scope.interferenceHGw = {
            text: "HGw Interference",
            value: {
                unifi: {
                    text: "UniFi",
                    value: "Good"
                },
                home: {
                    text: "Home",
                    value: "Medium"
                }
            }
        };
        $scope.retransmissionStatus = {
            text: "Retransmission Status",
            value: "Bad",
            status: {
                text: "HGw Number of retransmission",
                value: 5515
            }
        };
        $scope.clientsNmb = {
            totalNumberOfClients: 120,
            maxNumberOfConcurentClients: 10
        };
        $scope.combinedStatusHGw = {
            text: "HGw Combined status",
            value: [
                {text: "HGw Number of clients", value: 15},
                {text: "HGw Number of sticky clients", value: 2},
                {text: "Data transfered [GB]", value: 5.7}
            ]
        };

        $scope.bitrate = {
            min: 15,
            avg: 15,
            max: 15,
            last: 15
        };
        $scope.totaltrafficHGW = 5.7;
        $scope.rss = {
            min: -40,
            avg: -35,
            max: -30,
            last: -32
        };
        $scope.interferanceNetworkRSS = {
            avg: -42,
            max: -35,
            last: -40
        };
        $scope.doughnutData = [
            {id:"wifiConectedTime", value: [30,70], labels: ["yes", "no"]},
            {id:"usage", value: [60,35,5], labels: ["low", "medium", "high"]},
            {id:"interface", value: [40,40,20], labels: ["low", "medium", "high"]},
            {id:"interfaceHome", value: [40,40,20], labels: ["low", "medium", "high"]},

            {id:"HGwChannel", value: [40,60], labels: ["yes", "no"]},
            {id:"HGwPercentOfTime", value: [70,30], labels: ["yes", "no"]},
            {id:"HGwClientsRssStatus", value: [40,40,20],labels: ["low", "medium", "high"]},
            {id:"HGwRssStatus", value: [40,40,20], labels: ["low", "medium", "high"]}
        ];
        $scope.drawDoughnut = function (data) {
            for (var i = 0; i < data.length; i++){
                drawDoughnut(data[i].id,data[i].value,data[i].labels)
            }
        };
        $scope.drawDoughnut($scope.doughnutData);

        $scope.dataInfo = {
            wifi: 'Yes',
            standard: '802.11b',
            ip: '192.168.1.1',
            mac: 'AA:BB:XX:DD:GG',
            contractNo: 22010101010,
            chanelEnabled: 'Yes',
            ssid: 'ibis-wifi',
            chanel: 6,
            security: 'WPA/WPA2-PSK',
            band: '2,4 GHz',
            hiddenSsid: 'No',
            bandwith: '22 MHZ',
            time: '(35369) 2 days, 19:04:10',
            equipment: 'ABC',
            description: 'modem',
            cmts: 'BG-C-1-IBIS',
            firmware: '2.2.1004.76'
        };
    }

    function drawDoughnut(id,data,labels) {

        var myChart = document.getElementById(id).getContext('2d');
        var backgroundColor = [
            'rgba(32, 252, 143, 1)',
            'rgba(255, 161, 0, 1)',
            'rgba(255, 91, 89, 1)'
        ];

        if( id == "wifiConectedTime"){
            backgroundColor = [
                'rgba(32, 252, 143, 1)',
                'rgba(211, 211, 211, 1)'
            ];
        }
        if( id == "HGwChannel"){
            backgroundColor = [
                'rgba(142, 248, 255, 1)',
                'rgba(39, 170, 225, 1)'
            ];
        }
        if( id == "HGwPercentOfTime"){
            backgroundColor = [
                'rgba(142, 248, 255, 1)',
                'rgba(211, 211, 211, 1)'
            ];
        }


        var massPopChart = new Chart(myChart, {
            type:'doughnut',
            data:{
                labels: labels,
                datasets:[{
                    data:data,
                    backgroundColor:backgroundColor,
                    borderWidth: 0
                }]
            },
            options:{
                tooltips:{
                    enabled:true
                },
                legend: {
                    display: false
                }
            }
        });


    }

})();

