const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function index(req, res) {
    const posts = await prisma.post.findMany();

    return res.json(posts);
}

async function store(req, res) {

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