import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise( (resolve) => setTimeout(resolve, 5000))
  // throw new Error('loading filtered recipes failed')
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  // Protect against sql injection hacks
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

