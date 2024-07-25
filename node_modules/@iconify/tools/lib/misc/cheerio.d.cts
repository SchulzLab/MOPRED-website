import * as cheerio from 'cheerio';

/**
 * Shortcuts for Cheerio elements
 */
type CheerioElement = cheerio.Element;
type WrappedCheerioElement = cheerio.Cheerio<cheerio.Element>;

export type { CheerioElement, WrappedCheerioElement };
