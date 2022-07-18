$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 20,
      values: [ 1, 20 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );


  $( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 2017,
      max: 2022,
      values: [ 2017, 2022 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount1" ).val( "" + $( "#slider-range1" ).slider( "values", 0 ) +
      " - " + $( "#slider-range1" ).slider( "values", 1 ) );
  } );