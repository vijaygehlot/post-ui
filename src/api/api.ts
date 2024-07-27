export const getPosts = (): Promise<{ id: number; name: string; body: string; img: string; emoji: string; time: string; comment: string; }[]> => {
    return new Promise((resolve, reject) => {
        try {
       
            const data = require('./post.json');
            resolve(data.posts);
        } catch (error) {
            reject(error);
        }
    });
};
