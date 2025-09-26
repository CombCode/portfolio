<template>
    <div ref="scene" class="-translate-x-28 scale-50 md:scale-100 -translate-y-20 md:-translate-y-0">
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Matter from 'matter-js'
  import moonImg from '../../assets/moon.svg'
  const props = defineProps({
    astro: {
      type: String,
      default: 'sun'
    }
  })
  
  const scene = ref(null)
  
  onMounted(() => {
    const { Engine, Render, World, Bodies, Runner, Composites, Composite, Constraint, Body, Svg } = Matter
  
    const engine = Engine.create()
    const world = engine.world
  
    const render = Render.create({
      element: scene.value,
      engine: engine,
      options: {
        width: 400,
        height: 300,
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
        astroObj = Bodies.circle(210, -100, 60, {
        density: 0.04,
        frictionAir: 0.005,
        render: { 
            sprite: {
                texture: moonImg,
                xScale: 0.5,
                yScale: 0.5
            }
        }
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
  