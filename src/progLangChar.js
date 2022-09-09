import React,{useRef, useEffect} from "react";
import { select,scaleBand,scaleLinear, max } from "d3";
import {useResizeObserver} from "./useResizeObserver";

export const Chart = ({data}) => {
    console.log(data);
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(()=>{
        // console.log(data);
        const svg = select(svgRef.current);
        if(!dimensions) return;

        const yScale = scaleBand()
                        .paddingInner(0.1)
                        .domain(data.map((value,index)=>index))
                        .range([0, dimensions.height]);

        const xScale = scaleLinear()
                        .domain([0,100])
                        .range([0, dimensions.width]);

        svg
            .selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("fill","#6082B6")
            .attr("class","bar")
            .attr("x",0)
            .attr("height",yScale.bandwidth())
            .attr("y",(entry,index)=>yScale(index))
            .transition()
            .duration(500)
            .attr("width", entry=>xScale(entry.value));

        svg
            .selectAll(".label")
            .data(data, entry => entry.name)
            .join(enter => 
                    enter
                        .append("text")
                        .attr("y",(entry,index)=> yScale(index) + yScale.bandwidth()/2 + 5)
            )
            .text(entry=> `${entry.name} - ${entry.value}%`)
            .attr("class","label")
            .transition()
            .duration(500)
            .attr("x",10)
            .attr("y",(entry,index)=> yScale(index) + yScale.bandwidth()/2 + 5);

    },[data,dimensions]);
    return(
        <div ref={wrapperRef} style={{marginBottom : "2rem"}}>
            <svg ref={svgRef}></svg>
        </div>
    )
}