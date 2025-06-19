<template>
<div :id=id></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
export default {
    props: ["index"],
    
    setup(props) {

        const id = ref("skillTree" + props.index)
        
            const skillsData = {
                name: "Web Development",
                children: [
                    {
                        name: "Frontend",
                        children: [
                            { name: "HTML" },
                            { name: "CSS" },
                            { name: "JavaScript" },
                            { name: "Vue.js" },
                        ],
                    },
                    {
                        name: "Backend",
                        children: [
                            { name: "Node.js" },
                            { name: "MongoDB" },
                            { name: "MySQL" },
                        ],
                    },
                ]
            }

            onMounted(() => {

               


                const w = 800; const h = 600;

                const svg = d3.select("#" + id.value)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h)
                    .append("g")

                //layout
                const tree = d3.hierarchy(skillsData)
                const layout = d3.tree().size([h, w-100])
                layout(tree)

                //links drawing
                svg.selectAll("line")
                    .data(tree.links())
                    .enter()
                    .append("line")
                    .attr("x1", d => d.source.y)
                    .attr("y1", d => d.source.x)
                    .attr("x2", d => d.target.y)
                    .attr("y2", d => d.target.x)
                    .attr("stroke", "blue")
                
                //node drawing
                svg.selectAll("circle")
                    .data(tree.descendants())
                    .enter()
                    .append("circle")
                    .attr("cx", d => d.y)
                    .attr("cy", d => d.x)
                    .attr("r", 5)
                    .attr("fill", "green")

                //labels
                svg.selectAll("text")
                    .data(tree.descendants())
                    .enter()
                    .append("text")
                    .attr("x", d => d.y)
                    .attr("y", d => d.x)
                    .text(d => d.data.name)
                    .attr("font-size", "12px")
                    .attr("fill", "black")
            })

            return { skillsData, id }
        
        }
}
</script>