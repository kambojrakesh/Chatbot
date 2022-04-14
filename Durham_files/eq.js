function initEQ() {
    rows = $('.main-content .row[data-equalizer]');
    rows.each(function(index, row) {
        options = {
            equalizeOn: 'medium',
            equalizeOnStack: true
        };
        $(row).attr('data-equalizer', 'row');
        cells = $('.row .widget');
        cells.each(function(key, cell) {
            $(cell).attr('data-equalizer-watch', 'row');        
        });
        var eq = new Foundation.Equalizer($(row), options);    
        eq.getHeights(function(heights) {
            eq.applyHeight(heights);
        });
    });
}
$(document).ready(initEQ());