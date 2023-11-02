/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', () => 'Home').as('home')
router.post('/auth/store', () => 'Auth Store').as('auth.store')

router.get('/test', async () => {
  const makeUrlAuthStore = router.makeUrl('auth.store')
  const makeUrlHome = router.makeUrl('home')
  const makeSignedUrlAuthStore = router.makeSignedUrl('auth.store')
  const signSignedUrlHome = router.makeSignedUrl('home')

  return {
    makeUrlAuthStore, // returns /auth/store
    makeUrlHome,  // returns //
    makeSignedUrlAuthStore, // returns /auth/store?signature=eyJtZXNzY...
    signSignedUrlHome // returns //?signature=eyJtZXNzYWdl...
  }
})
