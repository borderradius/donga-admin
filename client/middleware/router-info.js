export default ({ store, route, redirect }) => {
  const isLoggedIn = store.state.auth.loggedIn

  if (!isLoggedIn && route.path === '/') {
    alert('로그인이 필요합니다.')
    redirect('/user/auth')
  }
}
