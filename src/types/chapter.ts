export interface Chapter {
    chapters: {
        /**
         * @isNumber Only accept number values
         * @minLength 1 Minimum length of 1
         */
        id: number
        /**
         * @isString Only accept string values
         * @minLength 1 Minimum length of 1
         */
        title: string
    }[]
    /**
     * @isNumber Only accept number values
     * @minLength 1 Minimum length of 1
     */
    page: number
    /**
     * @isNumber Only accept number values
     * @minLength 1 Minimum length of 1
     */
    maxPage: number
}
