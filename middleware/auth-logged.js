export default function ({ store, route, redirect }) {
	if(!store.$auth.$state.loggedIn) {
		return redirect('/dashboard');
	}
}