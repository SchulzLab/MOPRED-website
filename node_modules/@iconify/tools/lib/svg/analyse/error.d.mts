import { ExtendedTagElement } from './types.mjs';
import '../../misc/cheerio.mjs';
import 'cheerio';

/**
 * Get tag for error message
 */
declare function analyseTagError(element: ExtendedTagElement): string;

export { analyseTagError };
