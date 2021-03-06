import resetFilters from './addResetButton/resetFilters';
import { select } from 'd3';

export default function addResetButton(th, d) {
    const context = this;

    const resetText = this.initial_config.sliders ? 'Sliders' : 'Ranges';

    const resetButton = {};
    resetButton.container = select(th)
        .append('div')
        .classed('reset-button-container', true);

    resetButton.button = resetButton.container
        .append('button')
        .classed('reset-button', true)
        .text('Reset ' + resetText)
        .on('click', () => {
            context.columnControls.filtered = false;
            resetFilters.call(this);
            this.draw(this.data.top);
            this.rows.classed('grayParent', false);
        });
    this.columnControls.resetButton = resetButton;
}
