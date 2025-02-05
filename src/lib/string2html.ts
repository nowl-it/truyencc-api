import { JSDOM } from 'jsdom'

export default async function string2html(html: string) {
    const parser = new JSDOM(html)
    return parser.window.document
}
