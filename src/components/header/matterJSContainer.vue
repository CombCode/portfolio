<template>
    <div ref="scene" class=" h-96 w-96 -translate-x-28">
      <!-- Matter.js verrà montato qui -->
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Matter from 'matter-js'

  const props = defineProps({
    astro: {
      type: String,
      default: 'sun'
    }
  })
  
  const scene = ref(null)
  
  onMounted(() => {
    const { Engine, Render, World, Bodies, Runner, Composites, Composite, Constraint, Body} = Matter
  
    const engine = Engine.create()
    const world = engine.world
  
    const render = Render.create({
      element: scene.value,
      engine: engine,
      options: {
        width: 400,
        height: 500,
        wireframes: false,
        background: 'transparent'
      }
    })
    
    let astroObj = null
    if(props.astro == "sun"){
        astroObj = Bodies.circle(210, -100, 60, {
            density: 0.04,
            frictionAir: 0.005,
            render: {
                fillStyle: 'yellow',
                lineWidth: 0
            }
        })
    }
    else if(props.astro == "moon"){
        console.log("moon")
        const fullMoon = Bodies.circle(200, -100, 60, {
        render: { fillStyle: 'white' }
        })

        const boolSubtractionMoon = Bodies.circle(240, -100, 60, {
        render: { fillStyle: 'oklch(95.6% 0.045 203.388)' }
        })

        // Unione dei due cerchi come un unico corpo statico
        astroObj = Body.create({ 
        position: { x: 200, y: -100 },   
        density: 0.04,
        frictionAir: 0.005,
        parts: [fullMoon, boolSubtractionMoon],
        })
    }
    
    
    Composite.add(world, [
        astroObj,
        // vincolo
        Constraint.create({
            pointA: { x: 200, y: -20 },
            bodyB: astroObj,
            render: {
            anchors: false,
            lineWidth: 0,
            type: 'line',
            strokeStyle: 'cyan'
            },
            stiffness: 0.0005,
            damping: 0.005,
        }),
    ])
  
    const runner = Runner.create()
    Runner.run(runner, engine)
    Render.run(render)
  })
  </script>
  