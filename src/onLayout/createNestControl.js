import redraw from './customizeFilters/redraw';

export default function createNestControl() {
    const context = this;
    const config = this.config;

    var idList = context.initial_config.id_colls;
    idList.push({value_col: "none", label: "None"})

    var idControlWrap = context.controls.wrap.append('div').attr('class', 'control-group');
    idControlWrap
        .append('div')
        .attr('class', 'wc-control-label')
        .text('Show Status for:');
    var idNote = idControlWrap.append('div').attr('class', 'span-description');
    var idSelects = idControlWrap
        .selectAll('select')
        .data([0, 1, 2])
        .enter()
        .append('select');

    idSelects
        .selectAll('option')
        .data(
            d =>
                d === 0 // first dropdown shouldn't have "None" option
                    ? idList.filter(n => n.value_col !== 'none')
                    : idList
        )
        .enter()
        .append('option')
        .text(function(d) {
            return d.label;
        })
        .property('selected', function(d) {
            var levelNum = d3.select(this.parentNode).datum();
            return d == config.id_cols[levelNum];
        });

    idSelects.on('change', function() {
        var selectedLevels = [];
        idSelects.each(function(d, i) {
            selectedLevels.push(this.value);
        });

        var uniqueLevels = selectedLevels
            .filter(function(f) {
                return f != 'None';
            })
            .filter(function(item, pos) {
                return selectedLevels.indexOf(item) == pos;
            });

        config.id_cols = uniqueLevels;
        console.log(uniqueLevels);

        //Summarize filtered data and redraw table.
        redraw.call(context);
    });
}
