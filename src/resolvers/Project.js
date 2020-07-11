// While all SCALAR fields are automatically resolved (Project,id; Project,project_name)
// For non scalar types resolution is not automatic
// For media_items on Project.
// This field needs to be explicitly implemented because our GraphQL server can not infer where to get that data from.
// Index.js needs to be updated too!



// This is taken from prisma-schema projects(where: Expected 'ProjectWhereInput'

function project_media(parent, args, context){
    return context.prisma.projects({where: parent.id}).project_media();
}

module.exports= {
    project_media,
}