import React, {useState} from "react";
import "./App.css";
// import { select,line,curveCardinal,axisBottom,scaleLinear, axisRight, scaleBand, } from "d3";
// import {BarChart} from "./barChart";
import {Chart} from './progLangChar';

const data = [[
  {
    name:"JavaScript",
    value:58.3
  },
  {
    name:"HTML/CSS",
    value:67.3
  },
  {
    name:"SQL",
    value:60.2
  },
  {
    name:"Python",
    value:35.4
  },
  {
    name:"Java",
    value:48.2
  },
  {
    name:"Bash/Shell/PowerShell",
    value:55.3
  },
  {
    name:"PHP",
    value:53
  },
  {
    name:"TypeScript",
    value:13
  },
],
[
  {
    name:"JavaScript",
    value:75.2
  },
  {
    name:"HTML/CSS",
    value:63.8
  },
  {
    name:"SQL",
    value:55.8
  },
  {
    name:"Python",
    value:35.2
  },
  {
    name:"Java",
    value:48.2
  },
  {
    name:"Bash/Shell/PowerShell",
    value:43.5
  },
  {
    name:"PHP",
    value:50
  },
  {
    name:"TypeScript",
    value:19
  },
],
[
  {
    name:"JavaScript",
    value:67.7
  },
  {
    name:"HTML/CSS",
    value:63.1
  },
  {
    name:"SQL",
    value:54.7
  },
  {
    name:"Python",
    value:44.1
  },
  {
    name:"Java",
    value:40.2
  },
  {
    name:"Bash/Shell/PowerShell",
    value:33.1
  },
  {
    name:"PHP",
    value:26.2
  },
  {
    name:"TypeScript",
    value:25.4
  },
]];


function App() {

  const [year,setYear] = useState(2020);
  const selectYear = (e) => {
    setYear(e.target.value);
    console.log(e.target.value === "2021");
    if(e.target.value === "2020") setChartData(data[0]);
    if(e.target.value === "2021") setChartData(data[1]);
    if(e.target.value === "2022") setChartData(data[2]);
  }

  const [chartData,setChartData] = useState(data[0]);

  
  return (
    <React.Fragment>
      <h3>Most Used programming language in {year}</h3>
      <Chart data={chartData}></Chart>
      <form>  
        <label>2020 :</label>
        <input type="radio" name="year" value={2020} onChange={selectYear} checked={year==2020}></input>
        &emsp;
        <label>2021 :</label>
        <input type="radio" name="year" value={2021} onChange={selectYear} checked={year==2021}></input>
        &emsp;
        <label>2022 :</label>
        <input type="radio" name="year" value={2022} onChange={selectYear} checked={year==2022}></input>
      </form>
    </React.Fragment>
  );
}

export default App;
