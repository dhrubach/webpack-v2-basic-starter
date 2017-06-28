interface IDeveloper {
	name: string;
	skill: string;
	exp: number;
}

class Team {
	private developers: IDeveloper[];

	constructor() {
		this.developers = [
			{
				exp: 20,
				name: 'batman',
				skill: 'front-end',
			},
			{
				exp: 30,
				name: 'jocker',
				skill: 'node',
			},
			{
				exp: 25,
				name: 'penguin',
				skill: 'db',
			},
		];
	}

	public getDevelopers(): IDeveloper[] {
		return this.developers;
	}
}

export { IDeveloper, Team };
