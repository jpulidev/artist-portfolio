import {MdStore as icon} from 'react-icons/md';

export default {
    // computer Name
    name:'storeSettings',
    // Visible title
    title:'Settings',
    type: 'document',
    icon,

    fields : [
        {
            name:'name',
            title:'Pagina de Inicio',
            type:'string',
            description: 'Historias',
        },
        {
            name: 'hotAbout',
            title:'Biografia e historias',
            type:'array',
            of: [{type:'reference', to:[{type:'person'}]}],

        },
        {
            name: 'hotProjects',
            title:'Projectos y Trabajos',
            type:'array',
            of: [{type:'reference', to:[{type:'works'}]}],

        },
],
};