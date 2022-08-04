import { client } from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('loving_families').select(`
    id,
    name,
    fuzzy_bunnies (
      id,
      name,
      family_id
    )
  `);
  return response;
}

export async function removeFamily(id) {
  const response = await client
    .from('loving_families')
    .delete()
    .eq('id', id)
    .single();

  return response;
}

export async function addFamily(family) {
  const response = await client.from('loving_families').insert(family).single();

  return response;
}

export async function updateFamily(family) {
  const response = await client
    .from('loving_families')
    .update(family)
    .eq('id', family.id)
    .single();

  return response;
}

// export async function getFamilies() {
//   const response = await client.from('loving_families').select(`
// id,
// name,
// `);

//   return checkResponse(response);
// }

// export async function addFamily(name, imageUrl) {
//   const response = await client
//     .from('loving_families')
//     .insert({
//       name,
//       avatar: imageUrl,
//     })
//     .single();

//   return checkResponse(response);
// }

// export async function getBunnies() {
//   const response = await client
//     .from('fuzzy_bunnies')
//     .select(
//       `
// id,
// name,
// created:created_at,
// family:loving_families (
//     id,
//     name
// )
// `
//     )
//     .order('created_at', { ascending: false });

//   return checkResponse(response);
// }

// export async function addBunny(bunnyName, familyId) {
//   const response = await client
//     .from('fuzzy_bunnies')
//     .insert({
//       name: bunnyName,
//       family_id: familyId,
//     })
//     .single();

//   const data = checkResponse(response);

//   if (data) {
//     data.familyId = data.family_id;
//     data.created = data.created_at;
//   }

//   return data;
// }

// export async function removeBunny(bunnyId) {
//   const response = await client
//     .from('fuzzy_bunnies')
//     .delete()
//     .eq('id', bunnyId)
//     .single();

//   return checkResponse(response);
// }
