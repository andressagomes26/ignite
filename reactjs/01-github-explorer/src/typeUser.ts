import typescript from 'typescript'
type User = {
	name: string
	email: string
	address: {
		city: string
		state?: string // ? informa que a prop. não é obrigatória
	}
}

function showWelcomeMessage(user: User){
	return `Welcome ${user.name}`
}

showWelcomeMessage({
	name: 'andressa',
	email: 'andressa@gmail',
	address: {
		city: 'Ipueiras',
		state: 'CE'
	}
})