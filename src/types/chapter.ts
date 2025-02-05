export interface Chapter {
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
}
