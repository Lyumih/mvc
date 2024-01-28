namespace $.$$ {
	export class $mvc_app extends $.$mvc_app {

		body(): readonly any[] {
			return [ !this.user() ? this.Auth() : this.Login() ]
		}

	}
}
