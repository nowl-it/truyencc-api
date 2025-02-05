export default interface Novel {
    /**
     * @isString Only accept string values
     * @minLength 1 Minimum length of 1
     */
    novel_id: string
    /**
     * @isString Only accept string values
     * @minLength 1 Minimum length of 1
     */
    title: string
    /**
     * @isString Only accept string values
     * @minLength 1 Minimum length of 1
     */
    cover_img_url: string
    /**
     * @isNumber Only accept number values
     * @minLength 1 Minimum length of 1
     */
    newest_chapter: number
}
