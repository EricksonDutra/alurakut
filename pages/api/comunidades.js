import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response){
  if(request.method === 'POST') {
  const TOKEN = '11618bd6c82ea9a38b870324155f72';
  const client = new SiteClient(TOKEN);
  
  const registroCriado = await client.items.create({
    itemType: "970508",
    ...request.body,
    // title: "My community",
    // imageUrl: "https://avatars.githubusercontent.com/u/63134236?v=4",
    // creatorSlug: "EricksonDutra"
  })

  console.log(registroCriado);
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}