function users(root, args, context) {
    return context.prisma.users()
}

function projects(root, args, context) {
    return context.prisma.projects()
}


module.exports = {
    users,
    projects
}