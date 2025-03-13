import { Service } from '../service';
import { Client } from '../client';
export declare class Graphql extends Service {
    constructor(client: Client);
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    query(query: object): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    mutation(query: object): Promise<{}>;
}
