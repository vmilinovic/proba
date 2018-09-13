(function() {
    'use strict';

    angular.module('graphsModule', ['ngRoute']);

    angular.module('graphsModule').controller('graphsCtrl', ['$scope', graphsModuleFn]);


    function graphsModuleFn($scope) {

        $scope.graphsData = 0;
        $scope.drawGraphs = function (data) {
            var label1 = ["06:00","08:00","10:00","12:00","14:00","16:00","20:00","22:00","00:00","02:00","04:00"];
            var label2 = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];

            var datasets1 = [
                {
                    label: "Data Transfered",
                    type: 'line',
                    borderColor: "rgb(15,101,137)",
                    backgroundColor: "rgba(15,101,137,0.7)",
                    data: [0,20,50+data,15,33+data,147,223,180+data,120,50-data,15,233],
                    fill: false
                }, {
                    label: "Total No.",
                    type: 'line',
                    borderColor: "rgb(195,250,254)",
                    backgroundColor: "rgba(195,250,254,0.7)",
                    data: [0,30,70+data,25,83+data,127,213,200+data,140,70-data,55,150],
                    fill: true
                }];
            var datasets2 = [
                {
                    label: "A",
                    type: 'bar',
                    borderColor: "rgb(142,248,252)",
                    backgroundColor: "rgba(142,248,252,0.7)",
                    data: [20,30,70+2*data,25,83,127+2*data,213,200,140,70,55,150,32],
                    fill: false
                }, {
                    label: "B",
                    type: 'bar',
                    borderColor: "rgb(0,194,226)",
                    backgroundColor: "rgba(0,194,226,0.7)",
                    data: [10,30,213-2*data,200,140,70+2*data,25,83,127+2*data,70,55,150,41],
                    fill: true
                }, {
                    label: "C",
                    type: 'bar',
                    borderColor: "rgb(0,103,153)",
                    backgroundColor: "rgba(0,103,153,0.7)",
                    data: [20,30,127-2*data,70,55,150+2*data,213,200,140+2*data,70,25,83,78],
                    fill: true
                }, {
                    label: "D",
                    type: 'bar',
                    borderColor: "rgb(0,136,188)",
                    backgroundColor: "rgba(0,136,188,0.7)",
                    data: [10,70,55-2*data,127,213,200,150+2*data,30,140,70,25,83+2*data,90],
                    fill: true
                }];
            var datasets3 = [
                {
                    label: "Maximum",
                    type: 'line',
                    borderColor: "rgb(32, 252, 143)",
                    backgroundColor: "rgba(32, 252, 143, 0.7)",
                    data: [0,230+data,270,255-data,283,250-data,213,200,240+data,270,255,0],
                    fill: false
                }, {
                    label: "Average",
                    type: 'line',
                    borderColor: "rgb(255, 161, 0)",
                    backgroundColor: "rgba(255, 161, 0, 0.7)",
                    data: [0,120+data,150,145-data,120,141-data,125,183,127+data,170,155,0],
                    fill: false
                }, {
                    label: "Minimum",
                    type: 'line',
                    borderColor: "rgb(255, 91, 89)",
                    backgroundColor: "rgba(255, 91, 89 ,0.7)",
                    data: [0,60+data,86,55-data,100,80-data,70,111,80+data,90,50,0],
                    fill: false
                }];
            var datasets4 = [
                {
                    label: "Bytes",
                    type: 'line',
                    borderColor: "rgb(15,101,137)",
                    backgroundColor: "rgba(15,101,137,0.7)",
                    tension: 0,
                    data: [0,0,3*data,0,50,100,50,0,25,50,25,0],
                    fill: false
                }, {
                    label: "Retransmitted Bytes",
                    type: 'line',
                    borderColor: "rgb(0,194,226)",
                    backgroundColor: "rgba(0,194,226,0.7)",
                    tension: 0,
                    data: [0,0,2*data,0,0,75,0,0,0,35,0,0],
                    fill: false
                }];

            var datasets5 = [
                {
                    label: "Good",
                    type: 'line',
                    borderColor: "rgb(32, 252, 143)",
                    backgroundColor: "rgba(32, 252, 143, 1)",
                    data: [0,10,15+data,25,50,50+data,180,100,85-data,56,40,0],
                    fill: true
                }, {
                    label: "Medium",
                    type: 'line',
                    borderColor: "rgb(255, 161, 0)",
                    backgroundColor: "rgba(255, 161, 0, 1)",
                    data: [0,20,60+data,15,140,70+data,210,150,127-data,70,20,0],
                    fill: true
                }, {
                    label: "Bad",
                    type: 'line',
                    borderColor: "rgb(255, 91, 89)",
                    backgroundColor: "rgba(255, 91, 89 , 1)",
                    data: [0,30,70+data,25,150,99+data,213,200,140-data,70,5,0],
                    fill: true
                }];
            var datasets6 = [
                {
                    label: "A",
                    type: 'bar',
                    borderColor: "rgb(142,248,252)",
                    backgroundColor: "rgba(142,248,252,0.7)",
                    data: [10,30,213,200,140-data,70,25,83,127-data,70,55,150,41],
                    fill: false
                }, {
                    label: "B",
                    type: 'bar',
                    borderColor: "rgb(0,194,226)",
                    backgroundColor: "rgba(0,194,226,0.7)",
                    data: [20,30,70-data,25,83,127,213,200-data,140,70,55,150,32],
                    fill: true
                }, {
                    label: "C",
                    type: 'bar',
                    borderColor: "rgb(0,103,153)",
                    backgroundColor: "rgba(0,103,153,0.7)",
                    data: [10,70,55-data,127,213,200,150,30,140-data,70,25,83,90],
                    fill: true
                }, {
                    label: "D",
                    type: 'bar',
                    borderColor: "rgb(0,136,188)",
                    backgroundColor: "rgba(0,136,188,0.7)",
                    data: [20,30,127,70,55,150-data,213-data,200,140,70,25,83,78],
                    fill: true
                }];
            var datasets7 = [
                {
                    label: "Max",
                    type: 'line',
                    borderColor: "rgb(32, 252, 143)",
                    backgroundColor: "rgba(32, 252, 143, 0.7)",
                    data: [0,30,70,25+data,150,99,213-data,200,140,70+3*data,55,0],
                    fill: false
                }, {
                    label: "Average",
                    type: 'line',
                    borderColor: "rgb(255, 161, 0)",
                    backgroundColor: "rgba(255, 161, 0, 0.7)",
                    data: [0,20,60,15+data,140,70,210-data,150,127,70+2*data,55,0],
                    fill: false
                }, {
                    label: "Min",
                    type: 'line',
                    borderColor: "rgb(255, 91, 89)",
                    backgroundColor: "rgba(255, 91, 89 ,0.7)",
                    data: [0,10,50,10+data,100,20,200-data,100,100,70+data,55,0],
                    fill: false
                }];
            var datasets8 = [
                {
                    label: "Total No.",
                    type: 'line',
                    borderColor: "rgb(195,250,254)",
                    backgroundColor: "rgba(195,250,254,0.7)",
                    data: [0,30,70,25+data,83,127-data,213-data,200,140+data,70,55,0],
                    fill: true
                }];

            drawGraph('chartContainer1','line',label1,datasets1,"HGs status",true,'GB');
            drawGraph('chartContainer2','bar',label2,datasets2,"HGW Interterence",true,'No. of clients');
            drawGraph('chartContainer3','line',label1,datasets3,"HGw - RSS",true,'dBm');
            drawGraph('chartContainer4','line',label1,datasets4,"HGW - Number of retransmisssion",true,'');

            drawGraph('chartContainer5','line',label1,datasets5,"HGW data",true,'');
            drawGraph('chartContainer6','bar',label2,datasets6,"Total No. Of interference Network",true,'No. of clients');
            drawGraph('chartContainer7','line',label1,datasets7,"HGw - RSS",true,'Mbps');
            drawGraph('chartContainer8','line',label1,datasets8,"Number of clients",false,'');
        };
        $scope.drawGraphs($scope.graphsData);
    }


    function drawGraph(id,type,labels,datasets,text,legendDisplay,yString) {

        var ctx = document.getElementById(id).getContext('2d');

        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                title: {
                    display: true,
                    text: text
                },
                legend: {
                    display: legendDisplay,
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: yString
                        }
                    }]
                },
                elements: { point: { radius: 0 } }

            }
        });

    }

})();
