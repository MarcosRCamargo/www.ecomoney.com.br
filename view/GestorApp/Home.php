<script src="js/animationCounter.js" charset="utf-8"></script>
<!-- TAB PANE PAINEL-->
<div class="bg-light py-5" id="tabpainel">
    <h1 class="">
        <i class="fas fa-tachometer-alt"></i>Painel</h1>
    <hr>
    <table class="columns w-100 col-xs-4">
        <tbody>
        <tr>
            <td class="w-50">
                <div class="row my-4">
                    <div class="col-7 col-md-12">
                        <h4 class="text-primary">Pontos Totais </h4>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i>Resgataveis <span class="points badge-primary badge-pill">98421</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i>Recentes <span class="newpoints badge-warning badge-pill">1547</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i>A receber <span class="atualpoints badge-secondary badge-pill">1455</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
            <td class="w-50">
                <div>
                    <div class="col-7 col-md-12">
                        <h4 class="text-primary">Hanking Regional </h4>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i></i>Taguatinga <span class="globalpoints2 badge-warning badge-pill">132.6549</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i>Taguatinga <span class="globalpoints2 badge-warning badge-pill">120.015</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                <i class="far fa-gem"></i>Samambaia <span class="globalpoints3 badge-secondary badge-pill">96.325</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    <!--Table and divs that hold the pie charts-->
    <table class="columns w-100 col-xs-4">
        <tbody>
        <tr>
            <td class="w-50">
                <div id="piechart_div">
                    <div style="position: relative;">
                        <div dir="ltr" style="position: relative; width: 410px; height: 300px;">
                            <div aria-label="A chart." style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"><svg width="410" height="300" aria-label="A chart." style="overflow: hidden;">
                                <defs id="_ABSTRACT_RENDERER_ID_78"></defs>
                                <g><text text-anchor="start" x="79" y="38.35" font-family="Arial" font-size="11" font-weight="bold" stroke="none" stroke-width="0" fill="#000000">Quantidade de material entrege</text>
                                    <rect x="79" y="29" width="253" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                </g>
                                <g>
                                    <rect x="253" y="58" width="79" height="83" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                    <g column-id="Plastico">
                                        <rect x="253" y="58" width="79" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                        <g><text text-anchor="start" x="268" y="67.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Plastico</text></g>
                                        <circle cx="258.5" cy="63.5" r="5.5" stroke="none" stroke-width="0" fill="#3366cc"></circle>
                                    </g>
                                    <g column-id="Cobre">
                                        <rect x="253" y="76" width="79" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                        <g><text text-anchor="start" x="268" y="85.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Cobre</text></g>
                                        <circle cx="258.5" cy="81.5" r="5.5" stroke="none" stroke-width="0" fill="#dc3912"></circle>
                                    </g>
                                    <g column-id="Alumínio">
                                        <rect x="253" y="94" width="79" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                        <g><text text-anchor="start" x="268" y="103.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Alumínio</text></g>
                                        <circle cx="258.5" cy="99.5" r="5.5" stroke="none" stroke-width="0" fill="#ff9900"></circle>
                                    </g>
                                    <g column-id="Papelão">
                                        <rect x="253" y="112" width="79" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                        <g><text text-anchor="start" x="268" y="121.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Papelão</text></g>
                                        <circle cx="258.5" cy="117.5" r="5.5" stroke="none" stroke-width="0" fill="#109618"></circle>
                                    </g>
                                    <g column-id="Organicos">
                                        <rect x="253" y="130" width="79" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                        <g><text text-anchor="start" x="268" y="139.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Organicos</text></g>
                                        <circle cx="258.5" cy="135.5" r="5.5" stroke="none" stroke-width="0" fill="#990099"></circle>
                                    </g>
                                </g>
                                <g>
                                    <path d="M157,151L137.2149424550584,75.5510006829557A78,78,0,0,1,157,73L157,151A0,0,0,0,0,157,151" stroke="#ffffff" stroke-width="1" fill="#990099"></path><text text-anchor="start" x="149.13025234844184" y="93.81379127196385" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#ffffff">4.1%</text>
                                </g>
                                <g>
                                    <path d="M157,151L127.72917361940878,78.70049292701032A78,78,0,0,1,137.2149424550585,75.55100068295569L157,151A0,0,0,0,0,157,151" stroke="#ffffff" stroke-width="1" fill="#109618"></path>
                                </g>
                                <g>
                                    <path d="M157,151L90.298864485583,110.56537967177906A78,78,0,0,1,127.72917361940878,78.70049292701032L157,151A0,0,0,0,0,157,151" stroke="#ffffff" stroke-width="1" fill="#ff9900"></path><text text-anchor="start" x="116.34498104342687" y="107.09430139749664" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#ffffff">10.2%</text>
                                </g>
                                <g>
                                    <path d="M157,151L106.43818516599252,210.3927847527925A78,78,0,0,1,90.298864485583,110.56537967177906L157,151A0,0,0,0,0,157,151" stroke="#ffffff" stroke-width="1" fill="#dc3912"></path><text text-anchor="start" x="91.94290191204081" y="165.36792709353045" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#ffffff">22.4%</text>
                                </g>
                                <g>
                                    <path d="M157,151L157,73A78,78,0,1,1,106.43818516599252,210.3927847527925L157,151A0,0,0,1,0,157,151" stroke="#ffffff" stroke-width="1" fill="#3366cc"></path><text text-anchor="start" x="217.90789229945082" y="177.26466739258234" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#ffffff">61.2%</text>
                                </g>
                                <g></g>
                            </svg>
                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Topping</th>
                                            <th>Slices</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Plastico</td>
                                            <td>300</td>
                                        </tr>
                                        <tr>
                                            <td>Cobre</td>
                                            <td>110</td>
                                        </tr>
                                        <tr>
                                            <td>Alumínio</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td>Papelão</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Organicos</td>
                                            <td>20</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" style="display: none; position: absolute; top: 310px; left: 420px; white-space: nowrap; font-family: Arial; font-size: 11px;">Organicos</div>
                        <div></div>
                    </div>
                </div>
            </td>
            <td class="w-50">
                <div id="barchart_div">
                    <div style="position: relative;">
                        <div dir="ltr" style="position: relative; width: 410px; height: 300px;">
                            <div aria-label="A chart." style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"><svg width="410" height="300" aria-label="A chart." style="overflow: hidden;">
                                <defs id="_ABSTRACT_RENDERER_ID_79">
                                    <clipPath id="_ABSTRACT_RENDERER_ID_80">
                                        <rect x="79" y="58" width="253" height="185"></rect>
                                    </clipPath>
                                </defs>
                                <g><text text-anchor="start" x="79" y="38.35" font-family="Arial" font-size="11" font-weight="bold" stroke="none" stroke-width="0" fill="#000000">Pontuação por Material</text>
                                    <rect x="79" y="29" width="253" height="11" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                </g>
                                <g>
                                    <rect x="79" y="58" width="253" height="185" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                    <g clip-path="url(about:blank#_ABSTRACT_RENDERER_ID_80)">
                                        <g>
                                            <rect x="79" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="121" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="163" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="205" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="247" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="289" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                            <rect x="331" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#cccccc"></rect>
                                        </g>
                                        <g>
                                            <rect x="80" y="66" width="251" height="22" stroke="none" stroke-width="0" fill="#3366cc"></rect>
                                            <rect x="80" y="102" width="91" height="23" stroke="none" stroke-width="0" fill="#3366cc"></rect>
                                            <rect x="80" y="139" width="41" height="23" stroke="none" stroke-width="0" fill="#3366cc"></rect>
                                            <rect x="80" y="176" width="7" height="23" stroke="none" stroke-width="0" fill="#3366cc"></rect>
                                            <rect x="80" y="213" width="16" height="22" stroke="none" stroke-width="0" fill="#3366cc"></rect>
                                        </g>
                                        <g>
                                            <rect x="79" y="58" width="1" height="185" stroke="none" stroke-width="0" fill="#333333"></rect>
                                        </g>
                                    </g>
                                    <g></g>
                                    <g>
                                        <g><text text-anchor="middle" x="79.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">0</text></g>
                                        <g><text text-anchor="middle" x="121.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">50</text></g>
                                        <g><text text-anchor="middle" x="163.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">100</text></g>
                                        <g><text text-anchor="middle" x="205.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">150</text></g>
                                        <g><text text-anchor="middle" x="247.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">200</text></g>
                                        <g><text text-anchor="middle" x="289.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">250</text></g>
                                        <g><text text-anchor="middle" x="331.5" y="259.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#444444">300</text></g>
                                        <g><text text-anchor="end" x="68" y="80.75" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Plastico</text></g>
                                        <g><text text-anchor="end" x="68" y="117.54999999999998" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Cobre</text></g>
                                        <g><text text-anchor="end" x="68" y="154.35" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Alumínio</text></g>
                                        <g><text text-anchor="end" x="68" y="191.14999999999998" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Papelão</text></g>
                                        <g><text text-anchor="end" x="68" y="227.95" font-family="Arial" font-size="11" stroke="none" stroke-width="0" fill="#222222">Organicos</text></g>
                                    </g>
                                </g>
                                <g></g>
                            </svg>
                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Topping</th>
                                            <th>Slices</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Plastico</td>
                                            <td>300</td>
                                        </tr>
                                        <tr>
                                            <td>Cobre</td>
                                            <td>110</td>
                                        </tr>
                                        <tr>
                                            <td>Alumínio</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td>Papelão</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Organicos</td>
                                            <td>20</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" style="display: none; position: absolute; top: 310px; left: 420px; white-space: nowrap; font-family: Arial; font-size: 11px; font-weight: bold;">Pontuação por Material</div>
                        <div></div>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
<!--/ TAB PANE PAINEL-->
<script type="text/javascript">
    // Load Charts and the corechart and barchart packages.
    google.charts.load('current', {
        'packages': ['corechart']
    });
    // Draw the pie chart and bar chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Plastico', 300],
            ['Cobre', 110],
            ['Alumínio', 50],
            ['Papelão', 10],
            ['Organicos', 20]
        ]);
        var piechart_options = {
            title: 'Quantidade de material entrege',
            width: 410,
            height: 300,
            legend: 'none',
            backgroundColor: 'transparent'
        };
        var piechart_options = {
            title: 'Quantidade de material entrege',
            width: 410,
            height: 300,
            backgroundColor: 'transparent'
        };
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);
        var barchart_options = {
            title: 'Pontuação por Material',
            width: 410,
            height: 300,
            legend: 'none',
            backgroundColor: 'transparent'
        };
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(data, barchart_options);
    }
</script>

<script type="text/javascript">
    $('#counter-block').ready(function() {
        $('.points').animationCounter({
            start: 600,
            step: 1,
            end: 1320,
            delay: 10
        });
        $('.globalpoints1').animationCounter({
            start: 3245677,
            end: 3545677,
            step: 10,
            delay: 20,
            txt: ' Kg'
        });
        $('.globalpoints2').animationCounter({
            start: 225677,
            end: 245677,
            step: 10,
            delay: 20,
            txt: ' Kg'
        });
        $('.globalpoints3').animationCounter({
            start: 140000,
            end: 145677,
            step: 10,
            delay: 20,
            txt: ' Kg'
        });
        $('.newpoints').animationCounter({
            start: 50,
            end: 570,
            step: 4,
            delay: 10
        });
        $('.atualpoints').animationCounter({
            start: 490,
            end: 1560,
            step: 20,
            delay: 900,
            txt: ' pst'
        });
    });
</script>