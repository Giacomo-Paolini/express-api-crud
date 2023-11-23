const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function index(req, res) {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
            slug: {
                startsWith: 'tutorial'
            }
        },
    });

    return res.json(posts);
}

async function store(req, res) {
    const data = req.body;
    console.log(data);
    const newPost = await prisma.post.create({
        data: {
            title: data.title,
            slug: data.slug,
            image: data.image,
            content: data.content,
            published: data.published,
        }
    })

    return res.json(newPost);
}

async function show(req, res) {

}

async function update(req, res) {

}

async function destroy(req, res) {

}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
};