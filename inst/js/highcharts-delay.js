/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.4
 */
(function (H) {
    function deferRender (proceed) {
        var series = this,
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared')) {
            proceed.call(series);

        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };

    H.wrap(H.Series.prototype, 'render', deferRender);

}(Highcharts));
