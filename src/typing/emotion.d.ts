/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { AppTheme } from 'src/styles/theme';

declare module '@emotion/react' {
	export interface Theme extends AppTheme {}
}
