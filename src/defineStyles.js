export const firstColumnWidth = 100;
export const otherColumnWidth = 150;
export const margin = 0;
export const padding = 1;
export const border = 1;

export default function defineStyles() {
    const styles = [
        '.row--hidden {' +
            '    display: none;' +
            '}',
        'th,' +
        'td {' +
            `    padding: ${padding}px !important;` +
            '}',
        'th:first-child,' +
        'td:first-child {' +
            `    width: ${firstColumnWidth}px !important;` +
            '}',
        'th:nth-child(n + 2),' +
        'td:nth-child(n + 2) {' +
            `    width: ${otherColumnWidth}px !important;` +
            '}',

        /* range sliders */

        '#custom-controls th {' +
            '    border: 1px solid lightgray !important;' +
            '}',

        '.range-slider-container {' +
            '    position: relative;' +
            '    width: 100%;' +
            '    height: 30px;' +
            '}',
        '.range-slider {' +
            '    width: 100%;' +
            '    position: absolute;' +
            '    height: 15px;' +
            '    top: 1px;' +
            '    overflow: hidden;' +
            '    outline: none;' +
            '}',
        '.range-annotation {' +
            '    width: 100%;' +
            '    position: absolute;' +
            '    font-size: 12px;' +
            '    top: 16px;' +
            '    overflow: hidden;' +
            '    font-weight: normal;' +
            '}',
        '.range-annotation--lower {' + '    text-align: left;' + '}',
        '.range-annotation--upper {' + '    text-align: right;' + '}',
        '.range-slider::-webkit-slider-thumb {' +
            '    pointer-events: all;' +
            '    position: relative;' +
            '    z-index: 1;' +
            '    outline: 0;' +
            '}',
        '.range-slider::-moz-range-thumb {' +
            '    pointer-events: all;' +
            '    position: relative;' +
            '    z-index: 10;' +
            '    -moz-appearance: none;' +
            '    width: 9px;' +
            '}',
        '.range-slider::-moz-range-track {' +
            '    position: relative;' +
            '    z-index: -1;' +
            '    background-color: rgba(0, 0, 0, 1);' +
            '    border: 0;' +
            '}',
        '.range-slider::-moz-range-track {' +
            '    -moz-appearance: none;' +
            '    background: none transparent;' +
            '    border: 0;' +
            '}',
        '.range-slider::-moz-focus-outer {' + '    border: 0;' + '}',

        /* ID cells */

        '.cell--id {' + '    background: white;' + '}',

        '.row--expandable .cell--id {' +
            '    color: blue;' +
            '    cursor: pointer;' +
            '    text-decoration: underline;' +
            '}',
        '.cell--id--level1 {' + '    padding-left: 0em !important;' + '}',
        '.cell--id--level2 {' + '    padding-left: 1em !important;' + '}',
        '.cell--id--level3 {' + '    padding-left: 2em !important;' + '}',

        /* heat cells */

        '.cell--heat {' +
            '    text-align: center;' +
            '    color: transparent;' +
            '}',
        '.cell--heat--level6:hover,' +
            '.cell--heat--level7:hover,' +
            '.cell--heat--level8:hover,' +
            '.cell--heat--level1:hover,' +
            '.cell--heat--level2:hover,' +
            '.cell--heat--level3:hover {' +
            '    color: black;' +
            '}',
        '.cell--heat--level9:hover,' +
            '.cell--heat--level10:hover,' +
            '.cell--heat--level11:hover,' +
            '.cell--heat--level4:hover,' +
            '.cell--heat--level5:hover {' +
            '    color: white;' +
            '}',
        '.cell--heat {' +
            '    text-align: center;' +
            '}',
        '.cell--heat--level6,' +
            '.cell--heat--level7,' +
            '.cell--heat--level8,' +
            '.cell--heat--level1,' +
            '.cell--heat--level2,' +
            '.cell--heat--level3 {' +
            '    color: black;' +
            '}',
        '.cell--heat--level9,' +
            '.cell--heat--level10,' +
            '.cell--heat--level11,' +
            '.cell--heat--level4,' +
            '.cell--heat--level5 {' +
            '    color: white;' +
            '}',
        '.cell--heat--level1 {' + '    background: #edf8e9;' + '}',
        '.cell--heat--level2 {' + '    background: #bae4b3;' + '}',
        '.cell--heat--level3 {' + '    background: #74c476' + '}',
        '.cell--heat--level4 {' + '    background: #31a354;' + '}',
        '.cell--heat--level5 {' + '    background: #006d2c;' + '}',
        '.cell--heat--level6 {' + '    background: #eff3ff;' + '}',
        '.cell--heat--level7 {' + '    background: #bdd7e7;' + '}',
        '.cell--heat--level8 {' + '    background: #6baed6' + '}',
        '.cell--heat--level9 {' + '    background: #3182bd;' + '}',
        '.cell--heat--level10 {' + '    background: #08519c;' + '}',
        '.cell--heat--level11 {' + '    background: #08519c;' + '    color: white;' + '}'
    ];

    //Attach styles to DOM.
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles.join('\n');
    document.getElementsByTagName('head')[0].appendChild(style);
}
