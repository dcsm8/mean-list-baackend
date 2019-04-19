import { Express } from 'express';
import { postController } from '../controllers/posts.server.controller';

export default class PostsRoute {
    constructor(app: Express) {
        app.route('/api/posts')
            .get(postController.index);
    }
}