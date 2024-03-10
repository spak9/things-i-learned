import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';


/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'),
            '../**/*.{html,js.svelte,ts}'
        )
    ],
  theme: {
    extend: {},
  },
    plugins: [
        skeleton
    ],
}

