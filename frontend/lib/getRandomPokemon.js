export default async function getRandomPokemon() {
  const res = await fetch(`${process.env.API_URL}/team/create`, {
    method: 'GET'
  });

  if (!res.ok) throw new Error('Failed to fetch API');
  return res.json();
}