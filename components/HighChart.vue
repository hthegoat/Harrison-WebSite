<template>
    <figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
        A polar chart showing different series types on a radial axis. Polar
        charts, also known as a radar charts, are often used to compare
        multivariate data sets. A polar chart in Highcharts is simply a
        cartesian chart where the X axis is wrapped around the perimeter. It
        can render common cartesian series types like line, column, area or
        arearange.
    </p>
</figure>
</template>
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
    min-width: 320px;
    max-width: 660px;
    margin: 1em auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

</style>

<script>

</script>