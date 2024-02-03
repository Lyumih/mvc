namespace $ {

	export class $mvc_entity_app extends $mol_object {
		@$mol_mem
		data( next?: { auth: { id: string }[], users: { id: string }[], units: {}[] } ) {
			return next ?? {
				auth: [] as { id: string }[],
				users: [] as { id: string }[],
				units: [] as {}[],
			}
		}

		get_users() {
			return this.data().users
		}

		edit_user( id: string, next: { id: string } ) {
			return this.data(
				{
					...this.data(),
					users: [ ...this.data().users.filter( ( user: { id: string } ) => user.id !== id ), next ]
				} )
		}

		get_units() {
			return this.data().units
		}
		auth_user_list() {
			return this.data().users.filter( ( user: { id: string } ) => user.id === this.data().auth[ 0 ]?.id )

		}

		auth_user() {
			return this.auth_user_list()[ 0 ]
		}

	}
}
