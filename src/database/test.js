const database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

database.then(async db => {

  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-8.0543953',
    lng: '-34.868379',
    name: 'Lar das meninos',
    about:
      'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '9829292929',
    images: [
      'https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1572058685927-5175f7320c90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1598137203989-3152bec01cf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    ].toString(),
    instruction:
      'Venha se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de visitas das 8h até 18h',
    open_on_weekends: '0'
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // //consultar somente 1 orfanato pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  // //deletar um dano
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
