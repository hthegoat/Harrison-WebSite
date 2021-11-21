<template>
    <div id="hero">
        <vue-particles
          color="#1b1e34"
          
          
          :particleOpacity="0.7"

          :particlesNumber="100"
          shapeType="circle"
          :particleSize="6"
          linesColor="#1919eb"
          :linesWidth="1"
          :lineLinked="false"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          
        >
        </vue-particles>
    </div>
</template>