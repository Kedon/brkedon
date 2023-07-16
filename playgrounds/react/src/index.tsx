import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Global.css';
import '@ds.e/scss/lib/Select.css';

const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
];

ReactDOM.render(
    <Select options={options} />,
    document.getElementById('root')
);