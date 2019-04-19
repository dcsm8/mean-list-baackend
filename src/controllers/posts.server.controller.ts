import { Request, Response } from 'express';
import { Post } from "../models/post.model";

export default class PostController {

    posts: Post[] = [];

    constructor() {
        this.posts = [
            {
                id: "asd675as6dsa",
                title: "Title 1",
                content: "Content 1",
            },
            {
                id: "asd789a6as8d",
                title: "Title 2",
                content: "Content 2"
            },
            {
                id: "asd657asd",
                title: "Title 3",
                content: "Content 3"
            },
            {
                id: "asd98a76sd",
                title: "Title 4",
                content: "Content 4"
            }
        ];
    }

    public index = (req: Request, res: Response, next: Function): void => {
        res.status(200).json({
            message: "Posts fetched succesfully!",
            posts: this.posts
        });
    }

    public post = (req: Request, res: Response, next: Function): void => {
        const post = req.body;
        this.posts.push(post);
        res.status(201).json({
            message: "Post added successfully!"
        });
    }
}

export const postController = new PostController();