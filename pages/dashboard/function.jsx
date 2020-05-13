import React from 'react';
import axios from 'axios';

let chart_1_2_3_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.jsx
  // #########################################
  export let chartExample1 = {
    data1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      console.log("Prueba");
      let dataX = getData(1);
      console.log(dataX,"xxx");
      getData(1);
      return {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31",],
        datasets: [
          {
            label: "Visitas en el día",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            //data: dataX
            data: ["0", "1263", "1221", "1344", "1247", "1227", "1273", "1232", "1299","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
          }
        ]
      };
    },
    data2: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      getData(2);
      return {
        labels: [
          "ENE",
          "FEB",
          "MAR",
          "ABR",
          "MAY",
          "JUN",
          "JUL",
          "AGO",
          "SEP",
          "OCT",
          "NOV",
          "DIC"
        ],
        datasets: [
          {
            label: "Visitas en el mes",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [0, 0, 0, 0, 10106, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };

export const getData = async (props) => {
  if (props == 1){
    axios.post("/auth/Kpi/GetSearchs", ).then((response) => {
        if (response.status) {
            let count = [];
                console.log(response.data);
                response.data.data.Search.map((e) => {
                     count.push(e.count);
                })
                console.log(count);
                return count;
        } else {
            return [];
        }
    })
  } else if (props == 2){
    axios.post("/auth/Kpi/GetSearchsYearly", ).then((response) => {
        if (response.status) {
            let count = [];
                console.log(response.data);
                response.data.data.Search.map((e) => {
                     count.push(e.count);
                })
                console.log(count);
                return count;
        } else {
            return [];
        }
    })
  }
}

export let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    getData2();
    return {
      labels: ["02-05-2020", "03-05-2020", "04-05-2020", "05-05-2020", "06-05-2020", "07-05-2020", "08-05-2020", "09-05-2020"],
      datasets: [
        {
          label: "Tiempo promedio de atencion diaria",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [89, 90, 91, 91, 89, 89, 89, 90]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

export const getData2 = async (props) => {
  axios.post("/auth/Kpi/GetAtention", ).then((response) => {
      if (response.status) {
          let average = [];
              console.log(response.data);
              response.data.data.atention.map((e) => {
                average.push(e.average);
              })
              console.log(average);
              return average;
      } else {
          return [];
      }
  })
}

export let chartExample4 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    getData3();
    return {
      labels: ["AFGANISTÁN","ALEMANIA","ARGENTINA","BOLIVIA","BRASIL","CAMBOYA","CANADÁ","CHILE","CHINA","COLOMBIANO(A)","COREA","COSTA RICA","CUBA","ECUADOR","ESPAÑA","ESTADOS UNIDOS","FRANCIA","HOLANDA","INDONESIA","ISRAEL","ITALIA","JORDANIA","LAOS","MÉXICO","PANAMÁ","PERÚ","POLONIA","RUSIA","SUECIA","VENEZUELA"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [3,2,4,1,1,15,3,1,3,4915,1,1,3,2,5,6,3,3,1,2,5,1,3,1,1,1,1,1,2,5]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

export const getData3 = async (props) => {
  axios.post("/auth/Kpi/GetAffiliationByNationality", ).then((response) => {
      if (response.status) {
          let average = [];
              console.log(response.data);
              response.data.data.affiliation.map((e) => {
                average.push(e.average);
              })
              console.log(average);
              return average;
      } else {
          return [];
      }
  })
}

const Data = () =>{
    return(
        "Data"
    )
}

export default Data;

