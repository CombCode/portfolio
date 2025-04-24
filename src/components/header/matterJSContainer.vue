<template>
    <div ref="scene" class=" h-96 w-96 -translate-x-28">
      <!-- Matter.js verrà montato qui -->
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Matter from 'matter-js'
  
  const scene = ref(null)
  
  onMounted(() => {
    const { Engine, Render, World, Bodies, Runner, Composites, Composite, Constraint } = Matter
  
    const engine = Engine.create()
    const world = engine.world
  
    const render = Render.create({
      element: scene.value,
      engine: engine,
      options: {
        width: 400,
        height: 384,
        wireframes: false,
        background: 'transparent'
      }
    })
  
    const ball = Bodies.circle(100, 0, 50, {
      density: 0.04,
      frictionAir: 0.005,
      render: {
        fillStyle: 'yellow',
        lineWidth: 0
      }
    })
  
    Composite.add(world, [
        ball,
      // vincolo
      Constraint.create({
        pointA: { x: 200, y: -20 },
        bodyB: ball,
        stiffness: 0.0005,
        damping: 0.01,
      }),
      
    ])
  
    const runner = Runner.create()
    Runner.run(runner, engine)
    Render.run(render)
  })
  </script>
  