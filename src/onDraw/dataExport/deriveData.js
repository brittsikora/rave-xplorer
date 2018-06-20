export default function deriveData() {
    this.export = {
        nests: this.config.id_cols.map((id_col, i) => `Nest ${i + 1}: ${id_col}`),
        filters: this.filters.map(
            filter =>
                this.controls.config.inputs.find(input => input.value_col === filter.col).label
        )
    };

    //Define headers.
    this.export.headers = d3.merge([
        this.export.nests,
        this.export.filters,
        this.config.headers.slice(1)
    ]);

    //Define columns.
    this.export.cols = d3.merge([
        this.export.nests,
        this.filters.map(filter => filter.col),
        this.config.cols.slice(1)
    ]);

    //Define data.
    this.export.data = this.data.filtered.slice();
    this.export.data.forEach((d, i) => {
        //Split ID variable into as many columns as nests currently in place.
        this.export.nests.forEach((id_col, j) => {
            const id_val = d.id.split('|')[j];
            d[id_col] = id_val || 'Total';
        });

        //Add filters to export.
        this.filters.forEach(filter => {
            d[filter.col] = filter.val;
        });
    });
}
