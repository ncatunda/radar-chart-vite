import Chart from "chart.js/auto";
 
import "./style.css";
 
const data = {
  labels: [
    "Ausnutzungsziffer (AZ)",
    "Effizienz",
    "Kosten",
    "Ertrag",
    "Rendite",
    "CO2 Erstellung",
    "CO2 Betrieb",
    "Tageslicht",
    "Photovoltaik Ertrag Total",
    "Photovoltaik Ertrag pro m2",
  ],
  datasets: [
    {
      label: "Variante 1",
      data: [89,	100, 86,	100,	100,	31,	91, 58, 70, 100],
      fill: true,
      // backgroundColor: "rgba(255, 99, 132, 0.2)",
      // borderColor: "rgb(255, 99, 132)",
      // pointBackgroundColor: "rgb(255, 99, 132)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Variante 2",
      data: [89,	98,	100,	88,	100,	100,	100,	69,	80,	95],
      fill: true,
      // backgroundColor: "rgba(54, 162, 235, 0.2)",
      // borderColor: "rgb(54, 162, 235)",
      // pointBackgroundColor: "rgb(54, 162, 235)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      label: "Variante 3",
      data: [100,	89,	86,	86,	86,	48,	92,	47,	100, 85],
      fill: true,
      // backgroundColor: "rgba(54, 162, 235, 0.2)",
      // borderColor: "rgb(54, 162, 235)",
      // pointBackgroundColor: "rgb(54, 162, 235)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      label: "Variante 4",
      data: [89,	95,	84,	100,	99,	65,	63,	100,	82,	100],
      fill: true,
      // backgroundColor: "rgba(54, 162, 235, 0.2)",
      // borderColor: "rgb(54, 162, 235)",
      // pointBackgroundColor: "rgb(54, 162, 235)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
 
const ctx = document.getElementById("radar-chart") as HTMLCanvasElement;
new Chart(ctx, {
  type: "radar",
  data: data,
});