import {FaPaintRoller as icon} from 'react-icons/fa';


export default {
    // computer Name
    name:'project',
    // Visible title
    title:'Técnicas',
    type: 'document',
    icon,

    fields : [
        {
            name:'name',
        title: 'Nombre de la Técnica',
        type:'string',
        description: 'Description of the Project',
        }, 
        {
         name:'shopify',
        title: 'Acrilico',
        type:'boolean',
        description: 'Descripcion de la Técnica Usada',
        options:{
            layout:'checkbox',
        }
        },
  
  ],
  preview: {
      select:{
          name:'name',
          shopify:'shopify',
      },
      prepare:({name, shopify}) => ({
          title: `${name} ${shopify ? '🛍' : '👷'}`
      }),
  },

};